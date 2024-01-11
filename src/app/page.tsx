import { redirect } from 'next/navigation';

import type { Calendar } from '@/types/calendar';
import type { Schedule } from '@/types/schedule';

import ClientPage from '@/app/clientPage';
import { getUserData } from '@/libs/server/getUserData';
import { schedule } from '@/libs/server/service/schedule';
import { extractFromCalendar, extractFromSchedule } from '@/types';

const Home: React.FC = async () => {
  const user = await getUserData();
  if (user.err) redirect('/login');
  const userId = user.val.id;

  const schedules = (await schedule.getAll(userId)).unwrapOr([] as Schedule[]);
  const calendar: Calendar = { id: userId, schedules: schedules };
  const alerts = extractFromCalendar(calendar.schedules);

  console.log(
    'schedules',
    schedules.map((schedule) => schedule.title),
    'alerts',
    alerts.map((alert) => alert.title)
  );

  return <ClientPage calendar={calendar} alerts={alerts} />;
};

export default Home;
9;
