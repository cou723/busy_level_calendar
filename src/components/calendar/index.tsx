import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import Grids from './grids';
import Header from './header';

import type { YearMonth } from '@/types/yearMonth';

import Neu from '@/components/utils/neu';
import { getCalendarDates } from '@/libs/getCalendarDates';
import { generateBusyLevels } from '@/types/busyLevel';
import { type Calendar } from '@/types/calendar';

interface CalendarProps {
  yearMonth: YearMonth;
  calendar: Calendar;
  onPre: () => void;
  onNext: () => void;
  [key: string]: unknown;
}

const Calendar: FunctionComponent<CalendarProps> = ({ yearMonth, calendar, onPre, onNext, ...props }) => {
  return (
    <Neu
      css={css`
        padding: 1rem;
      `}
      {...props}
    >
      <Header {...{ yearMonth, onNext, onPre }} />
      <Grids
        dates={getCalendarDates(yearMonth)}
        schedules={calendar.schedules}
        busyLevels={generateBusyLevels(calendar)}
      />
    </Neu>
  );
};

export default Calendar;
