import React from 'react';
import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import ScheduleView from './schedule';

import type { Count } from '@/types/count';
import type { Schedule } from '@/types/schedule';

import Neu from '@/components/utils/neu';
import { getMentalLevelColor } from '@/libs/peaceOfMindToColor';

interface DayProps {
  day: number;
  schedules: Schedule[];
  busyLevel?: Count;
}

const Day: FunctionComponent<DayProps> = React.memo(({ day, schedules, busyLevel = 0 }) => {
  return (
    <Neu
      inset
      css={css({
        backgroundColor: getMentalLevelColor(busyLevel),
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px',
        minHeight: '100px',
      })}
    >
      <p>
        {day}
        {/* {day}:{busyLevel.toFixed(3)} */}
      </p>
      {schedules.map((schedule: Schedule) => (
        <ScheduleView key={schedule.id} schedule={schedule} />
      ))}
    </Neu>
  );
});

Day.displayName = 'Day';

export default Day;
