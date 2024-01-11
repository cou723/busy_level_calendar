import { google, calendar_v3 } from 'googleapis';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import Calendar = calendar_v3.Calendar;

import ClientPage from '@/app/import/clientPage';
import { options } from '@/app/options';
import { getOAuthClient } from '@/libs/server/service/getOAuthClient';
import { tryCatchToResult } from '@/utils/resultToTryCatch';

export const ImportPage: React.FC = async () => {
  // サーバ・コンポーネントでセッションを取得する。
  const session = await getServerSession(options);

  const accessToken = session?.accessToken; // Googleが払い出したアクセストークン
  if (!accessToken) {
    await redirect('/login');
    return <div>accessToken is null</div>;
  }

  // Google OAuthへの接続
  const oauth2Client = getOAuthClient(accessToken);
  const calendar: Calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  const calendarListResponse = await tryCatchToResult(async () => await calendar.calendarList.list());
  if (calendarListResponse.err) {
    await redirect('/login');
    return;
  }
  return <ClientPage calendars={calendarListResponse.val.data.items ?? []} />;
};

export default ImportPage;
