import { schedule } from '@/app/api/service/schedule';
import { getUserData } from '@/libs/server/getUserData';
import { ErrorResponse, makeErrorResponse } from '@/types/server/ErrorResponse';
import { NextRequest, NextResponse } from 'next/server';
import { Schedule } from '@/types/schedule';
import { parseBySchema } from '@/utils/parseBySchema';
import { scheduleFormSchema } from '@/types/scheduleForm';
import { tryCatchToResult } from '@/utils/resultToTryCatch';

export async function PUT(req: NextRequest): Promise<NextResponse<Schedule | ErrorResponse>> {
  const user = await getUserData();
  if (user.err) return user.val;

  // get body from request
  const requestBody = await tryCatchToResult(async () => await req.body!.getReader().read());
  if (requestBody.err) return makeErrorResponse(500, requestBody.val.message);

  const decoder = new TextDecoder();
  const decodedBody = decoder.decode(requestBody.val.value);
  const JSONBody = JSON.parse(decodedBody);
  const parseResult = parseBySchema({ schema: scheduleFormSchema, target: JSONBody });

  if (parseResult.err) {
    return makeErrorResponse(400, parseResult.val.message);
  }
  // get body from request end

  const newSchedule = { ...parseResult.val, userId: user.val.id };

  return schedule.create(user.val.id, newSchedule);
}
