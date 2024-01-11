import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import { ArrowButton } from './arrowButton';
import { CreateScheduleButton } from './createScheduleButton';
import { HeaderBox } from './headerBox';

import type { YearMonth } from '@/types/yearMonth';

import FlexBox from '@/components/utils/flexBox';

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
