import { useQuery } from '@tanstack/react-query';
import { google, calendar_v3 } from 'googleapis';
import { getServerSession } from 'next-auth';

import Calendar = calendar_v3.Calendar;

import { options } from '@/app/options';

async function fetchGoogleCalendarList(accessToken: string): Promise<calendar_v3.Schema$CalendarList> {
  // Google OAuthへの接続
  const oauth2Client = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // GCPコンソールで設定したredirect URI
    redirectUri: 'http://localhost:3000/google-calendar',
  });

  oauth2Client.setCredentials({ access_token: accessToken });
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
