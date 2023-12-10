import Neu from "@/components/utils/Neu";
import { getCalendarDates } from "@/libs/getCalendarDates";
import { type Calendar } from "@/types/calendar";
import { FunctionComponent } from "react";
import Grids from "@/components/Calendar/Grids";
import { YearMonth } from "@/types/yearMonth";
import { css } from "@emotion/react";
import Header from "@/components/Calendar/Header";
import { generateBusyLevels } from "@/types/busyLevel";

interface CalendarProps {
  yearMonth: YearMonth;
  calendar: Calendar;
  onPre: () => void;
  onNext: () => void;
  [key: string]: unknown;
}

const Calendar: FunctionComponent<CalendarProps> = ({
  yearMonth,
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
      <Header yearMonth={yearMonth} onNext={onNext} onPre={onPre} />
      <Grids
        dates={getCalendarDates(yearMonth)}
        schedules={calendar.schedules}
        busyLevels={generateBusyLevels(calendar)}
      />
    </Neu>
  );
};

export default Calendar;
