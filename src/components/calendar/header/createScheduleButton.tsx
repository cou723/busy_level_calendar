import type { FunctionComponent } from 'react';

import { useRouter } from 'next/navigation';
import { FaPlus } from 'react-icons/fa';

import NeuIconButton from '@/components/utils/neuIconButton';

export const CreateScheduleButton: FunctionComponent = () => {
  const router = useRouter();

  return (
    <NeuIconButton
      onClick={() => {
        router.push('/create');
      }}
      Icon={FaPlus}
    />
  );
};
