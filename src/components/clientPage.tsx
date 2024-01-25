'use client';

import { css } from '@emotion/react';

import type Calendar from '@/components/calendar';
import type { ScheduleAlert } from '@/types';

import CalendarView from '@/components/calendar';
import ScheduleAlerts from '@/components/scheduleAlerts';
import FlexBox from '@/components/utils/flexBox';
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
  const { data, refetch } = useCalendar();

  return (
    <div
      css={css({
        padding: '1rem',
        width: '100%',
      })}
    >
      <FlexBox gap={2}>
        <CalendarView
          css={css({
            flex: 5,
          })}
          yearMonth={yearMonth}
          calendar={data ? data : calendar}
          onPre={previous}
          onNext={next}
          reload={refetch}
        />
        <ScheduleAlerts css={css({ flex: 1 })} alerts={alerts} />
      </FlexBox>
    </div>
  );
};

export default ClientPage;
