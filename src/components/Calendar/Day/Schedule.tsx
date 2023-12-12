import NeuButton from "@/components/utils/NeuButton";
import { Schedule } from "@/types/schedule";
import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface ScheduleProps {
  schedule: Schedule;
}

const ScheduleView: FunctionComponent<ScheduleProps> = ({ schedule }) => {
  const navigate = useNavigate();

  return (
    <NeuButton
      css={css`
        width: 100%;
        text-align: left;
      `}
      onClick={() => navigate("/edit/" + schedule.id)}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        {schedule.title}
        <div
          css={css`
            font-size: 0.75rem;
            background-color: #fff;
            padding: 0.2rem;
            padding-left: 0.3rem;
            border-radius: 0.5rem;
          `}
        >
          {schedule.requiredDays}日
        </div>
      </div>
    </NeuButton>
  );
};

export default ScheduleView;
