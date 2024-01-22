import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';

import { RequiredDaysChip } from './requiredDaysChip';
import { Title } from './title';

import type { Schedule } from '@/types/schedule';

import NeuButton from '@/components/utils/neuButton';

interface ScheduleProps {
  schedule: Schedule;
}

const ScheduleView: FunctionComponent<ScheduleProps> = ({ schedule }) => {
  const router = useRouter();

  return (
    <NeuButton
      css={css`
        width: 100%;
        font-size: 12px;
        text-align: left;
        border: ${schedule.requiredDays ? 0 : 1}px dashed #ff4f4f;
        padding: 1px;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        height: 1.5rem;
        justify-content: left;
      `}
      onClick={() => router.push('/edit/' + schedule.id)}
      // convex
      radius={3}
      size={1.5}
      intensity={0.1}
    >
      <Title>{schedule.title}</Title>
      <RequiredDaysChip requiredDays={schedule.requiredDays} />
    </NeuButton>
  );
};

export default ScheduleView;
