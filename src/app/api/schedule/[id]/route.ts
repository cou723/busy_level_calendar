import { schedule } from '@/app/api/service/schedule';
import { getUserData } from '@/libs/server/getUserData';
import { ErrorResponse, makeErrorResponse } from '@/types/server/ErrorResponse';
import { NextRequest, NextResponse } from 'next/server';
import { Schedule } from '@/types/schedule';
import { parseBySchema } from '@/utils/parseBySchema';
import { scheduleFormSchema } from '@/types/scheduleForm';
import { tryCatchToResult } from '@/utils/resultToTryCatch';

export async function GET(
  _res: Response,
  { params }: { params: { id: string } }
): Promise<NextResponse<Schedule | ErrorResponse>> {
  const user = await getUserData();
  if (user.err) return user.val;

  const targetId = params.id;
  if (targetId === undefined) return makeErrorResponse(400, 'idが指定されていません');

  const getResult = await schedule.getResult(user.val.id, targetId);

  if (getResult.err) return getResult.val;
  return NextResponse.json(getResult.val);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse<Schedule | ErrorResponse>> {
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

  console.log(params.id);

  if (!params.id) {
    // create
    console.log('create');
    return schedule.create(user.val.id, newSchedule);
  } else {
    //edit
    console.log('edit');
    return schedule.update(user.val.id, params.id, newSchedule);
  }
}

export async function DELETE(_res: Response, { params }: { params: { id: string } }): Promise<Response> {
  const user = await getUserData();
  if (user.err) return user.val;
  if (params == undefined || params.id === undefined) return makeErrorResponse(400, 'idが指定されていません');

  return await schedule.delete(user.val.id, params.id);
}
