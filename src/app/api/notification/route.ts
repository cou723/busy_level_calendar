import { NextResponse } from 'next/server';

import { NotificationSchema } from '@/types/notification';
import { client } from '@/utils/microCmsClient';
import { tryCatchToResult } from '@/utils/resultToTryCatch';

export async function GET(_res: Response): Promise<Response> {
  const res = await tryCatchToResult(async () => await client.getList({ endpoint: 'notifications' as never }));
  console.log('res', res);

  if (res.err) return NextResponse.json(res.val, { status: 500 });
  const notifications = NotificationSchema.array().safeParse(res.val.contents);
  console.log('contents', res.val.contents);

  if (!notifications.success) return NextResponse.json(notifications.error, { status: 500 });
  return NextResponse.json(notifications.data);
}
