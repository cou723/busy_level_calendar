import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';

import { ArrowButton } from './arrowButton';
import { CreateScheduleButton } from './createScheduleButton';
import { HeaderBox } from './headerBox';

import type { YearMonth } from '@/types/yearMonth';

import FlexBox from '@/components/utils/flexBox';
import { iconNeuStyle } from '@/components/utils/iconNeuStyle';

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
      css={[
        ...iconNeuStyle,
        css({
          width: '5rem',
          display: 'inline-block',
          textAlign: 'center',
          margin: '0 1rem',
          paddingTop: '0.5rem',
          fontFamily: 'Josefin Sans',
          fontSize: '2rem',
          color: '#747680',
        }),
      ]}
    >
      {month}
    </p>
  );
};

type YearProps = {
  year: number;
};

const Year = ({ year }: YearProps) => {
  return (
    <p
      css={[
        ...iconNeuStyle,
        css({
          fontFamily: 'Josefin Sans',
          fontSize: '1.5rem',
        }),
      ]}
    >
      {year}
    </p>
  );
};

const Header: FunctionComponent<HeaderProps> = ({ yearMonth: { year, month }, onNext, onPre }) => {
  return (
    <HeaderBox>
      <Year year={year} />

      <FlexBox alignItems="center" justifyContent="center">
        <ArrowButton onClick={onPre} direction="left" />
        <Month month={month} />
        <ArrowButton onClick={onNext} direction="right" />
      </FlexBox>

      <FlexBox gap={1}>
        <CreateScheduleButton />
      </FlexBox>
    </HeaderBox>
  );
};

export default Header;
