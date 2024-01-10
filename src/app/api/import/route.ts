import { extractBody } from '@/app/api/schedule/extractScheduleData';
import { options } from '@/app/options';
import { getUserData } from '@/libs/server/getUserData';
import { schedule } from '@/libs/server/service/schedule';
import { ImportEventOptionsSchema } from '@/types/importEventOptions';
import { scheduleFormSchema } from '@/types/scheduleForm';
import { ErrorResponse, makeErrorResponse } from '@/types/server/ErrorResponse';
import { Schedule } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse<null | ErrorResponse>> {
  const user = await getUserData();
  if (user.err) return user.val;

  const session = await getServerSession(options);
  if (!session?.accessToken) return makeErrorResponse(500, 'Internal Server Error');

  const option = await extractBody(req, user.val, ImportEventOptionsSchema);
  if (option.err) return option.val;

  const result = await schedule.import({
    from: 'google',
    userId: user.val.id,
    accessToken: session?.accessToken,
    options: option.val,
  });
  if (result.err) return makeErrorResponse(500, result.val);

  return NextResponse.json(null, { status: 200 });
}
