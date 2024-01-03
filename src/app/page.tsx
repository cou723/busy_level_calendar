'use client';

import Calendar from '@/components/Calendar';
import Notifications from '@/components/Notifications';
import { useCalendar } from '@/hooks/useCalendar';
import { defaultState, useYearMonth } from '@/hooks/useYearMonth';
import { fromCalendar } from '@/types';
import { css } from '@emotion/react';
import { useSessionCheck } from '@/hooks/useSessionCheck';
import { useRouter } from 'next/navigation';
import LoadingPage from '@/app/LoadingPage';
import FlexBox from '@/components/utils/FlexBox';

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
        <Notifications
          css={css({
            flex: 1,
          })}
          notifications={!isError && data != undefined ? fromCalendar(data.schedules) : []}
        />
      </FlexBox>
    </div>
  );
};

export default Home;
