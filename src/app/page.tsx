'use client';

import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

import LoadingPage from '@/app/loadingPage';
import Calendar from '@/components/calendar';
import GoogleLogoutBtn from '@/components/googleLogout';
import ScheduleAlerts from '@/components/scheduleAlerts';
import FlexBox from '@/components/utils/flexBox';
import { useCalendar } from '@/hooks/useCalendar';
import { useSessionCheck } from '@/hooks/useSessionCheck';
import { defaultState, useYearMonth } from '@/hooks/useYearMonth';
import { extractFromCalendar } from '@/types';

const Home = () => {
  useSessionCheck();
  const router = useRouter();
  const { data, error, isLoading, isError } = useCalendar();
  const { state: yearMonth, next, previous } = useYearMonth(defaultState);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    if (error.message === 'unauthorized') return router.push('/login');
    return <div>error {JSON.stringify(error)}</div>;
  }

  return (
    <div
      css={css({
        padding: '1rem',
        width: '100%',
      })}
    >
      <GoogleLogoutBtn></GoogleLogoutBtn>
      <FlexBox gap={2}>
        <Calendar
          css={css({
            flex: 5,
          })}
          yearMonth={yearMonth}
          calendar={data!}
          onPre={previous}
          onNext={next}
        />
        <ScheduleAlerts
          css={css({
            flex: 1,
          })}
          alerts={!isError && data != undefined ? extractFromCalendar(data.schedules) : []}
        />
      </FlexBox>
    </div>
  );
};

export default Home;
