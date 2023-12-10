import NeuButton from "@/components/utils/NeuButton";
import { calendarAdapter } from "@/global";
import { YearMonth } from "@/types/yearMonth";
import { css } from "@emotion/react";
import { FunctionComponent } from "react";
import { ArrowButton } from "./ArrowButton";
import { CreateScheduleButton } from "./CreateScheduleButton";
import { HeaderBox } from "./HeaderBox";

interface HeaderProps {
  yearMonth: YearMonth;
  onNext: () => void;
  onPre: () => void;
}

export const Header: FunctionComponent<HeaderProps> = ({
  yearMonth: { year, month },
  onNext,
  onPre,
}) => {
  return (
    <HeaderBox>
      <div>{year}</div>
      <div
        css={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <ArrowButton onClick={onPre} direction="left" />
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
        <ArrowButton onClick={onNext} direction="right" />
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
