import type { FunctionComponent } from 'react';

import { Month } from './Month';
import { Year } from './Year';
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

const Header: FunctionComponent<HeaderProps> = ({ yearMonth: { year, month }, onNext, onPre }) => {
  return (
    <HeaderBox>
      <Year {...{ year }} />

      <FlexBox alignItems="center" justifyContent="center">
        <ArrowButton onClick={onPre} direction="left" />
        <Month {...{ month }} />
        <ArrowButton onClick={onNext} direction="right" />
      </FlexBox>

      <FlexBox gap={1}>
        <CreateScheduleButton />
      </FlexBox>
    </HeaderBox>
  );
};

export default Header;
