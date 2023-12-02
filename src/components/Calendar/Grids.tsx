import Day from "@/components/Calendar/Day";
import { Schedule } from "@/types/schedule";
import { css } from "@emotion/react";
import { getDate } from "date-fns";
import { FunctionComponent } from "react";

interface GridsProps {
  dates: Date[];
  schedules: Schedule[];
}

export const Grids: FunctionComponent<GridsProps> = ({ dates, schedules }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 1em;
        padding: 1em;
      `}
    >
      {dates.map((date) => (
        <Day
          day={getDate(date)}
          key={date.toISOString()}
          schedules={schedules.filter((schedule) => date == schedule.date)}
        ></Day>
      ))}
    </div>
  );
};

export default Grids;
