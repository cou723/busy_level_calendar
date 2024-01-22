import React from 'react';
import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import { lighten } from 'color2k';

import ScheduleView from './schedule';

import type { Count } from '@/types/count';
import type { Schedule } from '@/types/schedule';

import FlexBox from '@/components/utils/flexBox';
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
          padding: '1rem',
          height: '15vh',
          overflow: 'hidden',
          width: '10px', // widthを小さくした後に
          flex: 1, // flexで横に伸ばす
        })}
        convex
        intensity={0.5}
        radius={5}
        size={1.5}
      >
        <p
          css={css({
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: generateDayFontColor(isToday, currentMonth),
            backgroundColor: isToday ? fontColor : 'transparent',
            padding: '0.2rem 0.3rem 0.1rem 0.3rem',
            borderRadius: '10rem',
            marginBottom: '0.2rem',
            width: 'fit-content',
          })}
          className={josefinSans.className}
        >
          {day}
        </p>
        <FlexBox flexDirection="column" gap={0.5}>
          {schedules.map((schedule: Schedule) => (
            <ScheduleView key={schedule.id} schedule={schedule} />
          ))}
        </FlexBox>
      </Neu>
    );
  }
);

Day.displayName = 'Day';

export default Day;
