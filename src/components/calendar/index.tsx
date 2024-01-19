'use client';
import { css } from '@emotion/react';

import Grids from './grids';
import Header from './header';

import type { YearMonth } from '@/types/yearMonth';

import FlexBox from '@/components/utils/flexBox';
import Neu from '@/components/utils/neu';
import { getCalendarDates } from '@/libs/getCalendarDates';
import { generateBusyLevels } from '@/types/busyLevel';
import { type Calendar } from '@/types/calendar';

const DayOfWeek: React.FC = () => {
  const style = css`
    flex: 1;
    text-align: center;
    font-weight: bold;
  `;
  return (
    <FlexBox flexDirection="row">
      <p css={[style, css({ color: '#ff5b5b' })]}>日</p>
      <p css={style}>月</p>
      <p css={style}>火</p>
      <p css={style}>水</p>
      <p css={style}>木</p>
      <p css={style}>金</p>
      <p css={[style, css({ color: '#2188ff' })]}>土</p>
    </FlexBox>
  );
};
interface CalendarProps {
  yearMonth: YearMonth;
  calendar: Calendar;
  onPre: () => void;
  onNext: () => void;
  [key: string]: unknown;
}

const Calendar: React.FC<CalendarProps> = ({ yearMonth, calendar, onPre, onNext, ...props }) => {
  return (
    <Neu
      css={css`
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      `}
      {...props}
    >
      <Header {...{ yearMonth, onNext, onPre }} />
      <DayOfWeek />
      <Grids
        dates={getCalendarDates(yearMonth)}
        schedules={calendar.schedules}
        busyLevels={generateBusyLevels(calendar)}
      />
    </Neu>
  );
};

export default Calendar;
