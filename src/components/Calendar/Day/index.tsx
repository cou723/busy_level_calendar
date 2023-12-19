import { Count } from "@/types/count";
import ScheduleView from "./Schedule";
import Neu from "@/components/utils/Neu";
import { Schedule } from "@/types/schedule";
import { css } from "@emotion/react";
import React from "react";
import { FunctionComponent } from "react";
import { peaceOfMindToColor } from "@/libs/peaceOfMindToColor";

interface DayProps {
  day: number;
  schedules: Schedule[];
  busyLevel?: Count;
}

const Day: FunctionComponent<DayProps> = React.memo(({ day, schedules, busyLevel = 0 }) => {
  return (
    <Neu
      inset
      height="10rem"
      padding={16}
      css={css({
        backgroundColor: peaceOfMindToColor(busyLevel),
      })}
    >
      <p
        css={css`
          margin-bottom: 0.5rem;
        `}
      >
        {day}
        {/* {day}:{busyLevel.toFixed(3)} */}
      </p>
      {schedules.map((schedule: Schedule) => (
        <ScheduleView key={schedule.id} schedule={schedule} />
      ))}
    </Neu>
  );
});

export default Day;
