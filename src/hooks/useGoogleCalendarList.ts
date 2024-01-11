import { useQuery } from '@tanstack/react-query';
import { google, calendar_v3 } from 'googleapis';
import { getServerSession } from 'next-auth';

import Calendar = calendar_v3.Calendar;

import { options } from '@/app/options';
import { getOAuthClient } from '@/libs/server/service/getOAuthClient';

async function fetchGoogleCalendarList(accessToken: string): Promise<calendar_v3.Schema$CalendarList> {
  // Google OAuthへの接続
  const oauth2Client = getOAuthClient(accessToken);
  const calendar: Calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  const response = await calendar.calendarList.list();
  return response.data;
}

export async function useGoogleCalendarList() {
  // サーバ・コンポーネントでセッションを取得する。
  const session = await getServerSession(options);
  if (!session) throw new Error('セッションがありません');
  const user = session?.user;
  if (!user) throw new Error('ユーザーがありません');
  if (!user.accessToken) throw new Error('アクセストークンがありません');

  return useQuery({
    queryKey: ['googleCalendar'],
    queryFn: async () => fetchGoogleCalendarList(user?.accessToken as string),
    retry: 1,
  });
}
