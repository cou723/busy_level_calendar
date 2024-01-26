import type { FunctionComponent } from 'react';
import React from 'react';

import { useRouter } from 'next/navigation';

import { RequiredDaysChip } from './requiredDaysChip';
import { Title } from './title';

import type { Schedule } from '@prisma/client';

import { ScheduleStyleButton } from '@/components/calendar/day/schedule/scheduleStyleButton';

interface ScheduleProps {
  schedule: Schedule;
}

const ScheduleView: FunctionComponent<ScheduleProps> = ({ schedule }) => {
  const router = useRouter();

  return (
    <ScheduleStyleButton onClick={() => router.push('/edit/' + schedule.id)} error={!!schedule.requiredDays}>
      <Title>{schedule.title}</Title>
      <RequiredDaysChip requiredDays={schedule.requiredDays} />
    </ScheduleStyleButton>
  );
};

export default ScheduleView;
