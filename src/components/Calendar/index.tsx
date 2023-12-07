import Neu from "@/components/utils/Neu";
import { getCalendarDates } from "@/libs/getCalendarDates";
import { type Calendar } from "@/types/calendar";
import { FunctionComponent } from "react";
import Header from "@/components/Calendar/Header";
import Grids from "@/components/Calendar/Grids";
import { YearMonth } from "@/types/yearMonth";
import { css } from "@emotion/react";

interface CalendarProps {
  yearMonth: YearMonth;
  calendar: Calendar;
  onPre: () => void;
  onNext: () => void;
  [key: string]: unknown;
}

const Calendar: FunctionComponent<CalendarProps> = ({
  yearMonth: { year, month },
  calendar,
  onPre,
  onNext,
  ...props
}) => {
  return (
    <Neu
      css={css`
        padding: 1rem;
      `}
      {...props}
    >
      <Header month={month} onNext={onNext} onPre={onPre} />
      <Grids
        dates={getCalendarDates(year, month)}
        schedules={calendar.schedules}
      />
    </Neu>
  );
};

export default Calendar;
