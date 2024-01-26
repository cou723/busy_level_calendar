import { NextResponse } from 'next/server';

import type { ErrorResponse } from '@/types/server/ErrorResponse';
import type { Schedule } from '@prisma/client';
import type { NextRequest } from 'next/server';

import { extractBody } from '@/app/api/schedule/extractScheduleData';
import { getUserData } from '@/libs/server/getUserData';
import { schedule } from '@/libs/server/service/schedule';
import { scheduleFormSchema } from '@/types/scheduleForm';
import { makeErrorResponse } from '@/types/server/ErrorResponse';

export async function GET(
  _res: Response,
  { params }: { params: { id: string } }
): Promise<NextResponse<Schedule | ErrorResponse>> {
  const user = await getUserData();
  if (user.err) return user.val;

  const targetId = params?.id;
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

  const postedSchedule = await extractBody(req, user.val, scheduleFormSchema);
  if (postedSchedule.err) return postedSchedule.val;

  const newSchedule = { ...postedSchedule.val, userId: user.val.id };

  if (!params.id) return schedule.create(user.val.id, newSchedule);
  else return schedule.update(user.val.id, params.id, newSchedule);
}

export async function DELETE(_res: Response, { params }: { params: { id: string } }): Promise<Response> {
  const user = await getUserData();
  if (user.err) return user.val;

  if (params == undefined || params.id === undefined) return makeErrorResponse(400, 'idが指定されていません');

  return await schedule.delete(user.val.id, params.id);
}
