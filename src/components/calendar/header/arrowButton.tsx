import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { MdArrowRight, MdArrowLeft } from 'react-icons/md';

import { iconNeuStyle } from '@/components/utils/iconNeuStyle';
import NeuButton from '@/components/utils/neuButton';

interface ArrowButtonProps {
  onClick: () => void;
  direction: 'left' | 'right';
}
export const ArrowButton: FunctionComponent<ArrowButtonProps> = ({ onClick, direction }) => {
  const Arrow = direction === 'left' ? IoIosArrowBack : IoIosArrowForward;

  return (
    <NeuButton onClick={onClick} concave>
      <Arrow
        css={[
          css`
            font-size: 1rem;
          `,
          ...iconNeuStyle,
        ]}
      />
    </NeuButton>
  );
};
