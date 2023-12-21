import { schedule } from '@/app/api/service/schedule';
import { getUserData } from '@/libs/server/getUserData';
import { ErrorResponse, makeErrorResponse } from '@/types/server/ErrorResponse';
import { NextResponse } from 'next/server';
import { Schedule } from '@/types/schedule';
import { Request } from '@/types/server/Request';
import { parseBySchema } from '@/utils/parseBySchema';
import { scheduleFormSchema } from '@/types/scheduleForm';
import { tryCatchToResult } from '@/utils/resultToTryCatch';

export async function GET(req: Request): Promise<NextResponse<Schedule | ErrorResponse>> {
  const user = await getUserData();
  if (user.err) return user.val;

  console.log('called');

  const getResult = await schedule.getResult(user.val.id, req.query.id as string);
  if (getResult.err) return getResult.val;
  return NextResponse.json(getResult.val);
}

export async function PUT(req: Request): Promise<NextResponse<Schedule | ErrorResponse>> {
  const user = await getUserData();
  if (user.err) return user.val;

  // get body from request
  const requestBody = await tryCatchToResult(async () => await req.body.getReader().read());
  if (requestBody.err) return makeErrorResponse(500, requestBody.val.message);

  const decoder = new TextDecoder();
  const decodedBody = decoder.decode(requestBody.val.value);
  const JSONBody = JSON.parse(decodedBody);
  const parseResult = parseBySchema(scheduleFormSchema, JSONBody);
  console.log('request:', parseResult.val);

  if (parseResult.err) {
    return makeErrorResponse(400, parseResult.val.message);
  }
  // get body from request end

  const newSchedule = { ...parseResult.val, userId: user.val.id };

  console.log('user', user.val);

  if (req.query == undefined || req.query.id == undefined) {
    // create
    return schedule.create(user.val.id, newSchedule);
  } else {
    //edit
    return schedule.update(user.val.id, req.query.id as string, newSchedule);
  }
}

export async function DELETE(req: Request): Promise<NextResponse<void | ErrorResponse>> {
  const user = await getUserData();
  if (user.err) return user.val;
  if (req.query == undefined) return makeErrorResponse(400, 'idが指定されていません');

  return await schedule.delete(user.val.id, req.query.id as string);
}
