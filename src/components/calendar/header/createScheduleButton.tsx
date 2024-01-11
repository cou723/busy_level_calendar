import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { MdAdd } from 'react-icons/md';

import NeuButton from '@/components/utils/neuButton';

export const CreateScheduleButton: FunctionComponent = () => {
  const router = useRouter();

  return (
    <NeuButton
      padding={0}
      handleClick={() => {
        router.push('/create');
      }}
    >
      <MdAdd
        css={css`
          font-size: 1.5rem;
          padding-top: 2px;
        `}
      />
    </NeuButton>
  );
};
