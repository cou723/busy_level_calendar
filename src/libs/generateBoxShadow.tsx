import { transparentize } from 'color2k';

import type { NeuSize } from '@/components/utils/neu/NeuSize';

const black = 'rgb(90, 25, 25)';
const white = 'rgb(255, 255, 255)';

const shadowSize = {
  small: { offset: 2, blur: 4 },
  medium: { offset: 6, blur: 10 },
  large: { offset: 12, blur: 16 },
};

export const generateBoxShadow = (inset: boolean, intensity: number, size: NeuSize) => {
  const shadow = transparentize(black, 1.3 - (intensity + 2) / 5);
  const highlight = transparentize(white, 0.8 - (intensity + 2) / 2);

  const { offset, blur } = shadowSize[size];

  return `${inset ? 'inset' : ''} ${offset}px ${offset}px ${blur}px ${shadow}, ${inset ? 'inset' : ''} -${
    inset ? offset : offset / 2
  }px -${inset ? offset : offset / 2}px ${blur}px ${highlight}`;
};

export const generateDropShadow = (intensity: number, size: NeuSize | { offset: number; blur: number }) => {
  let offset = 0;
  let blur = 0;
  const shadow = transparentize(black, 1.0 - (intensity + 1) / 3);
  const highlight = transparentize(white, 0.6 - intensity / 2);
  if (typeof size === 'string') {
    offset = shadowSize[size].offset;
    blur = shadowSize[size].blur;
  } else {
    offset = size.offset;
    blur = size.blur;
  }

  return `drop-shadow(${offset}px ${offset}px ${blur}px ${shadow}) drop-shadow(-${offset}px -${offset}px ${blur}px ${highlight})`;
};
