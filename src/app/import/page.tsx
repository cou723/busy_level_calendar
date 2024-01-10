import { options } from '@/app/options';
import { getServerSession } from 'next-auth';
import { google, calendar_v3 } from 'googleapis';
import Calendar = calendar_v3.Calendar;
import ClientPage from '@/app/import/clientPage';
import { tryCatchToResult } from '@/utils/resultToTryCatch';
import { redirect } from 'next/navigation';

export const ImportPage = async () => {
  // サーバ・コンポーネントでセッションを取得する。
  const session = await getServerSession(options);

  const accessToken = session?.accessToken; // Googleが払い出したアクセストークン
  if (!accessToken) {
    await redirect('/login');
    return <div>accessToken is null</div>;
  }

  // Google OAuthへの接続
  const oauth2Client = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: `http://localhost:3000/google-calendar`,
  });

  oauth2Client.setCredentials({ access_token: accessToken });
  const calendar: Calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  const calendarListResponse = await tryCatchToResult(async () => await calendar.calendarList.list());
  if (calendarListResponse.err) {
    await redirect('/login');
    return;
  }
  return <ClientPage calendars={calendarListResponse.val.data.items ?? []} />;
};

export default ImportPage;
