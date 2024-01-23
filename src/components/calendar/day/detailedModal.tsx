import { css } from '@emotion/react';

import type { Schedule } from '@/types/schedule';

import { dayStyle } from '@/components/calendar/day/dayStyle';
import ScheduleView from '@/components/calendar/day/schedule';
import FlexBox from '@/components/utils/flexBox';
import NeuModal from '@/components/utils/neuModal';

export type Props = {
  day: number;
  schedules: Schedule[];
  open: boolean;
  isToday?: boolean;
  onClose: () => void;
};

const DetailedModal: React.FC<Props> = ({ day, schedules, isToday = false, onClose, open }) => {
  return (
    <NeuModal onClose={onClose} open={open}>
      <FlexBox justifyContent="center" alignItems="center">
        <h1 css={css(dayStyle(isToday))}>{day}</h1>
      </FlexBox>
      <FlexBox flexDirection="column" gap={1}>
        {schedules.length === 0 ? (
          <p>no schedules</p>
        ) : (
          schedules.map((schedule, i) => {
            return <ScheduleView key={i} {...{ schedule }} />;
          })
        )}
      </FlexBox>
    </NeuModal>
  );
};

export default DetailedModal;
