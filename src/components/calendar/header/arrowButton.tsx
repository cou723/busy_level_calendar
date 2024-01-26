import type { FunctionComponent } from 'react';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import NeuIconButton from '@/components/utils/neuIconButton';

interface ArrowButtonProps {
  onClick: () => void;
  direction: 'left' | 'right';
}
export const ArrowButton: FunctionComponent<ArrowButtonProps> = ({ onClick, direction }) => {
  const Arrow = direction === 'left' ? IoIosArrowBack : IoIosArrowForward;

  return <NeuIconButton Icon={Arrow} onClick={onClick} />;
};
