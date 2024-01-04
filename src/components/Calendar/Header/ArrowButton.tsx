import NeuButton from '@/components/utils/NeuButton';
import { css } from '@emotion/react';
import { FunctionComponent } from 'react';
import { MdArrowRight, MdArrowLeft } from 'react-icons/md';

interface ArrowButtonProps {
  onClick: () => void;
  direction: 'left' | 'right';
}
export const ArrowButton: FunctionComponent<ArrowButtonProps> = ({ onClick, direction }) => {
  const Arrow = direction === 'left' ? MdArrowLeft : MdArrowRight;

  return (
    <NeuButton handleClick={onClick} padding={0}>
      <Arrow
        css={css`
          font-size: 1.5rem;
        `}
      />
    </NeuButton>
  );
};
