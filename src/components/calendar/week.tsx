import React from 'react';

import { css } from '@emotion/react';
import { getDate, isSameDay } from 'date-fns';

import type { BusyLevel } from '@/types/busyLevel';
import type { Schedule } from '@/types/schedule';

import Day from '@/components/calendar/day';
import FlexBox from '@/components/utils/flexBox';
import { today } from '@/global';
type Props = {
  dates: Date[];
  schedules: Schedule[];
  busyLevels: BusyLevel[];
  reload: () => void;
};
const Week: React.FC<Props> = ({ dates, schedules, busyLevels, reload }) => {
  if (dates.length !== 7) throw new Error('dates.length must be 7');

  return (
    <FlexBox gap={0.6} flexDirection="row">
      {dates.map((date) => (
        <Day
          day={getDate(date)}
          key={date.toISOString()}
          css={css({
            flexGrow: 1,
          })}
          schedules={schedules.filter((schedule) => isSameDay(date, schedule.date))}
          busyLevel={busyLevels.find((busyLevel) => isSameDay(date, busyLevel.date))?.level}
          isToday={isSameDay(date, today)}
          currentMonth={date.getMonth() === today.getMonth()}
          reload={reload}
        />
      ))}
    </FlexBox>
  );
};

export default Week;
