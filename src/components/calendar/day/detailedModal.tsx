import { css } from '@emotion/react';
import { FaRegTrashAlt } from 'react-icons/fa';

import type { Schedule } from '@prisma/client';

import { dayStyle } from '@/components/calendar/day/dayStyle';
import ScheduleView from '@/components/calendar/day/schedule';
import FlexBox from '@/components/utils/flexBox';
import { iconNeuStyle } from '@/components/utils/iconNeuStyle';
import NeuButton from '@/components/utils/neuButton';
import NeuModal from '@/components/utils/neuModal';
import { useDeleteSchedule } from '@/hooks/useDeleteSchedule';

export type Props = {
  day: number;
  schedules: Schedule[];
  open: boolean;
  isToday?: boolean;
  onClose: () => void;
  reload: () => void;
};

const DetailedModal: React.FC<Props> = ({ day, schedules, isToday = false, onClose, open, reload }) => {
  const { handleDelete } = useDeleteSchedule();

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
            return (
              <FlexBox key={i} flexDirection="row" gap={1}>
                <ScheduleView {...{ schedule }} />
                <NeuButton
                  radius={5}
                  css={css({
                    padding: 0,
                    minWidth: '2rem',
                  })}
                  onClick={async () => {
                    await handleDelete(schedule.id);
                    reload();
                  }}
                >
                  <FaRegTrashAlt css={[css({ color: '#ff0000', fontSize: '1rem' }), iconNeuStyle]} />
                </NeuButton>
              </FlexBox>
            );
          })
        )}
      </FlexBox>
    </NeuModal>
  );
};

export default DetailedModal;
