import { options } from '@/app/options';
import { getUserData } from '@/libs/server/getUserData';
import { getServerSession } from 'next-auth';

// フロントエンドから呼び出してみる
export async function GET(): Promise<Response> {
  const user = await getUserData();
  if (user.err) return user.val;

  const session = await getServerSession(options);
  // console.log('USER', user);
  // console.log('SESSION', session);

  const result = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
    headers: {
      Authorization: `Bearer ${session?.user?.accessToken}`,
    },
  });
  console.log(result);

  return new Response('Hello, World!');
}
