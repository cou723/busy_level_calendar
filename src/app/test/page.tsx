import { options } from '@/app/options';
import { getServerSession } from 'next-auth';
import { google, calendar_v3 } from 'googleapis';
import Calendar = calendar_v3.Calendar;
import CalendarCheckBoxes from '@/app/test/calendarCheckBoxes';
import ClientPage from '@/app/test/clientPage';

export const TestPage = async () => {
  console.log('TEST options');

  // サーバ・コンポーネントでセッションを取得する。
  const session = await getServerSession(options);
  const user = session?.user;
  console.log('TEST session', session);

  // Google OAuthへの接続
  const oauth2Client = new google.auth.OAuth2({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // GCPコンソールで設定したredirect URI
    redirectUri: 'http://localhost:3000/google-calendar',
  });

  const accessToken = session?.accessToken; // Googleが払い出したアクセストークン
  if (!accessToken) {
    return <div>accessToken is null</div>;
  }

  // トークンを設定。refresh_tokenも渡せます。
  oauth2Client.setCredentials({ access_token: accessToken });

  // カレンダーオブジェクト作成
  const calendar: Calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  // カレンダー一覧を取得
  const calendarResponse = await calendar.calendarList.list();

  console.log(calendarResponse.data);
  return <ClientPage calendarResponse={calendarResponse.data} />;
};

export default TestPage;
