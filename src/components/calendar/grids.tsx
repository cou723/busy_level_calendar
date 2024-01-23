import React from 'react';

import { isSameDay } from 'date-fns';

import type { BusyLevel } from '@/types/busyLevel';
import type { Schedule } from '@/types/schedule';

import Week from '@/components/calendar/week';
import FlexBox from '@/components/utils/flexBox';

interface GridsProps {
  dates: Date[];
  schedules: Schedule[];
  busyLevels: BusyLevel[];
}
function chunkArray(array: Date[], chunkSize: number): Date[][] {
  let index = 0;
  const arrayLength = array.length;
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    const chunk = array.slice(index, index + chunkSize);
    tempArray.push(chunk);
  }

  return tempArray;
}

function isIncludeDate(dates: Date[], date: Date): boolean {
  return dates.some((d) => isSameDay(d, date));
}

const Grids: React.FC<GridsProps> = ({ dates, schedules, busyLevels }) => {
  const weeks = chunkArray(dates, 7);
  return (
    <FlexBox gap={0.6} flexDirection="column">
      {weeks.map((week, i) => {
        return (
          //todo 計算量がかなり多そう。インデックス化などを検討。
          <Week
            key={i}
            dates={week}
            schedules={schedules.filter((schedule) => isIncludeDate(week, schedule.date))}
            busyLevels={busyLevels.filter((busyLevel) => isIncludeDate(week, busyLevel.date))}
          />
        );
      })}
    </FlexBox>
  );
};

export default Grids;
