import { ErrorResponse, makeErrorResponse } from '@/types/server/ErrorResponse';
import { NextRequest, NextResponse } from 'next/server';
import { ScheduleWithoutDefault } from '@/types/schedule';
import { parseBySchema } from '@/utils/parseBySchema';
import { scheduleFormSchema } from '@/types/scheduleForm';
import { Result, Err, Ok } from 'ts-results';
import { User } from 'next-auth';

export async function extractScheduleData(
  req: NextRequest,
  user: User
): Promise<Result<ScheduleWithoutDefault, NextResponse<ErrorResponse>>> {
  try {
    const requestBody = await req.body!.getReader().read();

    const decoder = new TextDecoder();
    const decodedBody = decoder.decode(requestBody.value);
    const JSONBody = JSON.parse(decodedBody);
    const parseResult = parseBySchema({ schema: scheduleFormSchema, target: JSONBody });

    if (parseResult.err) {
      return Err(makeErrorResponse(400, parseResult.val.message));
    }
    return Ok({ ...parseResult.val, userId: user.id });
  } catch (e) {
    if (e instanceof SyntaxError) return Err(makeErrorResponse(500, e.message));
    return Err(makeErrorResponse(500, 'Internal Server Error'));
  }
}
