import type { FunctionComponent } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Month } from './Month';
import { Year } from './Year';
import { CreateScheduleButton } from './createScheduleButton';
import { HeaderBox } from './headerBox';

import type { YearMonth } from '@/types/yearMonth';

import FlexBox from '@/components/utils/flexBox';
import NeuIconButton from '@/components/utils/neuIconButton';

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
        <NeuIconButton Icon={IoIosArrowBack} onClick={onPre} />
        <Month {...{ month }} />
        <NeuIconButton Icon={IoIosArrowForward} onClick={onNext} />
      </FlexBox>

      <FlexBox gap={1}>
        <CreateScheduleButton />
      </FlexBox>
    </HeaderBox>
  );
};

export default Header;
