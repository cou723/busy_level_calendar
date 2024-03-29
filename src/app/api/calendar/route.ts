import { NextResponse } from 'next/server';

import type { Calendar } from '@/types/calendar';
import type { ErrorResponse } from '@/types/server/ErrorResponse';

import { getUserData } from '@/libs/server/getUserData';
import { schedule } from '@/libs/server/service/schedule';
import { tryCatchToResult } from '@/utils/resultToTryCatch';
import { db } from '@/utils/server/db';

export async function GET(): Promise<NextResponse<Calendar | ErrorResponse>> {
  const user = await getUserData();
  if (user.err) return user.val;

  const getSchedulesResult = await schedule.getAll(user.val.id);

  if (getSchedulesResult.err) return getSchedulesResult.val;

  return NextResponse.json({
    id: user.val.email!,
    schedules: getSchedulesResult.val,
  });
}

export async function DELETE(): Promise<Response> {
  const user = await getUserData();
  if (user.err) return user.val;

  const result = await tryCatchToResult(
    async () =>
      await db.schedule.deleteMany({
        where: {
          userId: user.val.id,
        },
      })
  );

  // エラーだった場合status500を返す
  if (result.err) {
    return NextResponse.error();
  }
  return NextResponse.json(result.val, { status: 200 });
}
