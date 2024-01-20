import { NeuSize } from '@/types/neuSize';
import { transparentize } from 'color2k';
const black = 'rgb(90, 25, 25)';
const white = 'rgb(255, 255, 255)';

// const shadowSize = {
//   small: { offset: 2, blur: 4 },
//   medium: { offset: 6, blur: 10 },
//   large: { offset: 12, blur: 16 },
// };

function calculateOffset(size: NeuSize): number {
  return size * (size + 1);
}

function calculateBlur(size: NeuSize): number {
  return (size - 1) * 6;
}

export const generateBoxShadow = (inset: boolean, intensity: number, size: NeuSize) => {
  const shadow = transparentize(black, 1.3 - (intensity + 2) / 5);
  const highlight = transparentize(white, 1.0 - (intensity + 2) / 5);

  // const { offset, blur } = shadowSize[size];
  const offset = calculateOffset(size);
  const blur = calculateBlur(size);

  return `${inset ? 'inset' : ''} ${offset}px ${offset}px ${blur}px ${shadow}, ${inset ? 'inset' : ''} -${
    inset ? offset : offset / 2
  }px -${inset ? offset : offset / 2}px ${blur}px ${highlight}`;
};

export const generateDropShadow = (intensity: number, size: NeuSize | { offset: number; blur: number }) => {
  const shadow = transparentize(black, 1.3 - (intensity + 2) / 5);
  const highlight = transparentize(white, 1.0 - (intensity + 2) / 2);

  let offset = 0;
  let blur = 0;
  if (typeof size === 'number') {
    offset = calculateOffset(size);
    blur = calculateBlur(size);
  } else {
    offset = size.offset;
    blur = size.blur;
  }

  return `drop-shadow(${offset}px ${offset}px ${blur}px ${shadow}) drop-shadow(-${offset}px -${offset}px ${blur}px ${highlight})`;
};
