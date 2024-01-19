import React from 'react';
import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import { darken, lighten } from 'color2k';

import ScheduleView from './schedule';

import type { Count } from '@/types/count';
import type { Schedule } from '@/types/schedule';

import Neu from '@/components/utils/neu';
import { fontColor } from '@/global';
import { getMentalLevelColor } from '@/libs/peaceOfMindToColor';
import { josefinSans } from '@/styles/font';

function generateDayFontColor(isToday: boolean, currentMonth: boolean): string {
  if (isToday) return 'white';
  if (!currentMonth) return lighten(fontColor, 0.5);
  return fontColor;
}

export interface DayProps {
  day: number;
  schedules: Schedule[];
  busyLevel?: Count;
  isToday?: boolean;
  currentMonth?: boolean;
}

const Day: FunctionComponent<DayProps> = React.memo(
  ({ day, schedules, busyLevel = 0, isToday = false, currentMonth = true }) => {
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
        concave
        radius={5}
      >
        <p
          css={css({
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: generateDayFontColor(isToday, currentMonth),
            backgroundColor: isToday ? fontColor : 'transparent',
            padding: '0.2rem 0.3rem 0.1rem 0.3rem',
            borderRadius: '10rem',
            width: 'fit-content',
          })}
          className={josefinSans.className}
        >
          {day}
        </p>
        {schedules.map((schedule: Schedule) => (
          <ScheduleView key={schedule.id} schedule={schedule} />
        ))}
      </Neu>
    );
  }
);

Day.displayName = 'Day';

export default Day;
