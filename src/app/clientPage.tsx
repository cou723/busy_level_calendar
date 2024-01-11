'use client';

import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

import type Calendar from '@/components/calendar';
import type { ScheduleAlert } from '@/types';

import CalendarView from '@/components/calendar';
import ScheduleAlerts from '@/components/scheduleAlerts';
import FlexBox from '@/components/utils/flexBox';
import NeuButton from '@/components/utils/neuButton';
import { useCalendar } from '@/hooks/useCalendar';
import { useSessionCheck } from '@/hooks/useSessionCheck';
import { defaultState, useYearMonth } from '@/hooks/useYearMonth';

type Props = {
  calendar: Calendar;
  alerts: ScheduleAlert[];
};

const ClientPage: React.FC<Props> = ({ calendar, alerts }) => {
  useSessionCheck();
  const { state: yearMonth, next, previous } = useYearMonth(defaultState);
  const { data } = useCalendar();

  return (
    <div
      css={css({
        padding: '1rem',
        width: '100%',
      })}
    >
      <NeuButton handleClick={signOut}>ログアウト</NeuButton>
      <FlexBox gap={2}>
        <CalendarView
          css={css({
            flex: 5,
          })}
          yearMonth={yearMonth}
          calendar={data ? data : calendar}
          onPre={previous}
          onNext={next}
        />
        <ScheduleAlerts
          css={css({
            flex: 1,
          })}
          alerts={alerts}
        />
      </FlexBox>
    </div>
  );
};

export default ClientPage;
