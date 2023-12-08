import NeuButton from "@/components/utils/NeuButton";
import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const CreateScheduleButton: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <NeuButton
      padding={0}
      onClick={() => {
        navigate("/create");
      }}
    >
      <MdAdd
        css={css`
          font-size: 1.5rem;
          padding-top: 2px;
        `}
      />
    </NeuButton>
  );
};
