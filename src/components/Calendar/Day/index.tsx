import ScheduleView from "./Schedule";
import Neu from "@/components/utils/Neu";
import { Schedule } from "@/types/schedule";
import React from "react";
import { FunctionComponent } from "react";

interface DayProps {
  day: number;
  schedules: Schedule[];
}

const Day: FunctionComponent<DayProps> = React.memo(({ day, schedules }) => {
  return (
    <Neu inset height="10rem" padding={16}>
      {day}
      {schedules.map((schedule: Schedule) => (
        <ScheduleView key={schedule.id} schedule={schedule} />
      ))}
    </Neu>
  );
});

export default Day;
