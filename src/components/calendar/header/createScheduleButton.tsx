import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import { FaPlus } from 'react-icons/fa';

import { iconNeuStyle } from '@/components/utils/iconNeuStyle';
import NeuButton from '@/components/utils/neuButton';

export const CreateScheduleButton: FunctionComponent = () => {
  const router = useRouter();

  return (
    <NeuButton
      radius={10}
      onClick={() => {
        router.push('/create');
      }}
      css={css({
        width: '36px',
        height: '36px',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <FaPlus css={iconNeuStyle} />
    </NeuButton>
  );
};
