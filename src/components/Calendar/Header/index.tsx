import { YearMonth } from '@/types/yearMonth';
import { css } from '@emotion/react';
import { FunctionComponent } from 'react';
import { ArrowButton } from './ArrowButton';
import { CreateScheduleButton } from './CreateScheduleButton';
import { HeaderBox } from './HeaderBox';
import FlexBox from '@/components/utils/FlexBox';

interface HeaderProps {
  yearMonth: YearMonth;
  onNext: () => void;
  onPre: () => void;
}

type MonthProps = {
  month: number;
};
const Month = ({ month }: MonthProps) => {
  return (
    <p
      css={css({
        width: '5rem',
        display: 'inline-block',
        textAlign: 'center',
        margin: '0 1rem',
      })}
    >
      {month}月
    </p>
  );
};

const Header: FunctionComponent<HeaderProps> = ({ yearMonth: { year, month }, onNext, onPre }) => {
  return (
    <HeaderBox>
      <div>{year}</div>

      <FlexBox alignItems="center" justifyContent="center">
        <ArrowButton onClick={onPre} direction="left" />
        <Month month={month} />
        <ArrowButton onClick={onNext} direction="right" />
      </FlexBox>

      <FlexBox gap={1}>
        {/* <NeuButton onClick={async () => await apiAdapter.clear()} padding={0}>
          reset
        </NeuButton> */}
        <CreateScheduleButton />
      </FlexBox>
    </HeaderBox>
  );
};

export default Header;
