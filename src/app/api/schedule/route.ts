import { extractBody } from './extractScheduleData';

import type { Schedule } from '@/types/schedule';
import type { ErrorResponse } from '@/types/server/ErrorResponse';
import type { NextRequest, NextResponse } from 'next/server';

import { getUserData } from '@/libs/server/getUserData';
import { schedule } from '@/libs/server/service/schedule';
import { scheduleFormSchema } from '@/types/scheduleForm';


export async function PUT(req: NextRequest): Promise<NextResponse<Schedule | ErrorResponse>> {
  const user = await getUserData();
  if (user.err) return user.val;

  const postedSchedule = await extractBody(req, user.val, scheduleFormSchema);
  if (postedSchedule.err) return postedSchedule.val;

  return schedule.create(user.val.id, postedSchedule.val);
}
