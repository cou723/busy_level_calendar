import React from 'react';

import { chunkArray } from '../../utils/chunkArray';
import { isIncludeDate } from '../../utils/isIncludeDate';

import type { BusyLevel } from '@/types/busyLevel';
import type { Schedule } from '@/types/schedule';

import Week from '@/components/calendar/week';
import FlexBox from '@/components/utils/flexBox';

interface GridsProps {
  dates: Date[];
  schedules: Schedule[];
  busyLevels: BusyLevel[];
  reload: () => void;
}
const Grids: React.FC<GridsProps> = ({ dates, schedules, busyLevels, reload }) => {
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
            reload={reload}
          />
        );
      })}
    </FlexBox>
  );
};

export default Grids;
