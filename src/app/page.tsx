import { redirect } from 'next/navigation';

import type { Calendar } from '@/types/calendar';
import type { Schedule } from '@/types/schedule';

import ClientPage from '@/components/clientPage';
import { getUserData } from '@/libs/server/getUserData';
import { schedule } from '@/libs/server/service/schedule';
import { extractFromCalendar } from '@/types';

const Home: React.FC = async () => {
  const user = await getUserData();
  if (user.err) redirect('/login');
  const userId = user.val.id;

  const schedules = (await schedule.getAll(userId)).unwrapOr([] as Schedule[]);
  const calendar: Calendar = { id: userId, schedules: schedules };
  const alerts = extractFromCalendar(calendar.schedules);

  return <ClientPage calendar={calendar} alerts={alerts} />;
};

export default Home;
