import NeuButton from "@/components/utils/NeuButton";
import { calendarAdapter } from "@/global";
import { Month } from "@/types/month";
import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import { MdArrowRight, MdArrowLeft, MdPlusOne } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  month: Month;
  onNext: () => void;
  onPre: () => void;
}

interface HeaderStyleProps {
  children: React.ReactNode;
}

const HeaderBox: FunctionComponent<HeaderStyleProps> = ({ children }) => {
  return (
    <div
      css={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      {children}
    </div>
  );
};

interface ToPreviewMonthButtonProps {
  onPre: () => void;
}

const ToPreviewMonthButton: FunctionComponent<ToPreviewMonthButtonProps> = ({
  onPre,
}) => {
  return (
    <NeuButton onClick={onPre} padding={0}>
      <MdArrowLeft
        css={css`
          font-size: 1.5rem;
        `}
      />
    </NeuButton>
  );
};

interface ToNextMonthButtonProps {
  onNext: () => void;
}

const ToNextMonthButton: FunctionComponent<ToNextMonthButtonProps> = ({
  onNext,
}) => {
  return (
    <NeuButton onClick={onNext} padding={0}>
      <MdArrowRight
        css={css`
          font-size: 1.5rem;
        `}
      />
    </NeuButton>
  );
};

const CreateScheduleButton: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <NeuButton
      padding={0}
      onClick={() => {
        navigate("/create");
      }}
    >
      <MdPlusOne
        css={css`
          font-size: 1.5rem;
        `}
      />
    </NeuButton>
  );
};

export const Header: FunctionComponent<HeaderProps> = ({
  month,
  onNext,
  onPre,
}) => {
  return (
    <HeaderBox>
      <div></div>
      <div
        css={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <ToPreviewMonthButton onPre={onPre} />
        <p
          css={css({
            width: "5rem",
            display: "inline-block",
            textAlign: "center",
            margin: "0 1rem",
          })}
        >
          {month}月
        </p>
        <ToNextMonthButton onNext={onNext} />
      </div>
      <div id="button_group">
        <NeuButton
          onClick={() => {
            calendarAdapter.clear();
          }}
          padding={0}
        >
          reset
        </NeuButton>
        <CreateScheduleButton />
      </div>
    </HeaderBox>
  );
};

export default Header;
