import { useState } from 'react';
import React from 'react';

import { css } from '@emotion/react';
import { lighten } from 'color2k';

import { dayStyle } from './dayStyle';
import ScheduleView from './schedule';

import type { Count } from '@/types/count';
import type { Schedule } from '@/types/schedule';

import DetailedModal from '@/components/calendar/day/detailedModal';
import FlexBox from '@/components/utils/flexBox';
import Neu from '@/components/utils/neu';
import { fontColor } from '@/global';
import { getMentalLevelColor } from '@/libs/peaceOfMindToColor';
import { josefinSans } from '@/styles/font';

export function generateDayFontColor(isToday: boolean, currentMonth: boolean): string {
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

const Day: React.FC<DayProps> = React.memo(({ day, schedules, busyLevel = 0, isToday = false }) => {
  const [modalOpen, setModalOpen] = useState(false);

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
        justifyContent: 'center',
        alignItems: 'center',
      })}
      surface="concave"
      intensity={0.2}
      radius={5}
      size={2}
    >
      <button
        css={[
          ...dayStyle(isToday),
          css({
            cursor: 'pointer', // 追加
            '&:hover': {
              backgroundColor: '#91919170',
              filter: 'none',
            },
          }),
        ]}
        className={josefinSans.className}
        onClick={() => setModalOpen(true)}
      >
        {day}
      </button>
      <FlexBox flexDirection="column" gap={0.5}>
        {schedules.map((schedule: Schedule) => (
          <ScheduleView key={schedule.id} schedule={schedule} />
        ))}
      </FlexBox>
      <DetailedModal
        open={modalOpen}
        day={day}
        onClose={() => {
          setModalOpen(false);
          console.log('close');
        }}
        schedules={schedules}
      />
    </Neu>
  );
});

Day.displayName = 'Day';

export default Day;
