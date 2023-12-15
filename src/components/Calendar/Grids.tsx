import Day from "@/components/Calendar/Day";
import { BusyLevel } from "@/types/busyLevel";
import { Schedule } from "@/types/schedule";
import { css } from "@emotion/react";
import { getDate, isSameDay } from "date-fns";
import { FunctionComponent } from "react";

interface GridsProps {
  dates: Date[];
  schedules: Schedule[];
  busyLevels: BusyLevel[];
}

const Grids: FunctionComponent<GridsProps> = ({ dates, schedules, busyLevels }) => {
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
          schedules={schedules.filter((schedule) => isSameDay(date, schedule.date))}
          busyLevel={busyLevels.find((busyLevel) => isSameDay(date, busyLevel.date))?.level}
        ></Day>
      ))}
    </div>
  );
};

export default Grids;
