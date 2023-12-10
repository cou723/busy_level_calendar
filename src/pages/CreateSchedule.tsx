import ScheduleForm from "@/components/ScheduleForm";
import Neu from "@/components/utils/Neu";
import { css } from "@emotion/react";

export const CreateSchedule = () => {
  return (
    <Neu
      radius={4}
      css={css`
        padding: 1rem 10rem;
      `}
    >
      <h1>予定作成</h1>
      <ScheduleForm />
    </Neu>
  );
};
