import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';

import { RequiredDaysChip } from './requiredDaysChip';
import { Title } from './title';

import type { Schedule } from '@/types/schedule';

import FlexBox from '@/components/utils/flexBox';
import NeuButton from '@/components/utils/neuButton';

interface ScheduleProps {
  schedule: Schedule;
}

const ScheduleView: FunctionComponent<ScheduleProps> = ({ schedule }) => {
  const maxTitle = 8;
  const router = useRouter();

  if (schedule.title.length >= maxTitle) schedule.title = schedule.title.slice(0, maxTitle) + '...';

  return (
    <NeuButton
      css={css`
        width: 100%;
        text-align: left;
        border: ${schedule.requiredDays ? 0 : 2}px dashed #ff4f4f;
        padding: 1px;
      `}
      handleClick={() => router.push('/edit/' + schedule.id)}
    >
      <FlexBox justifyContent="space-between">
        <Title>{schedule.title}</Title>
        <RequiredDaysChip requiredDays={schedule.requiredDays} />
      </FlexBox>
    </NeuButton>
  );
};

export default ScheduleView;
