import type { NeuSize } from '.';

export const generateBoxShadow = (inset: boolean, shadow: string, highlight: string, size: NeuSize) => {
  const shadowSize = {
    small: { offset: 2, blur: 4 },
    medium: { offset: 6, blur: 10 },
    large: { offset: 12, blur: 16 },
  };
  const { offset, blur } = shadowSize[size];

  return `${inset ? 'inset' : ''} ${offset}px ${offset}px ${blur}px ${shadow}, ${
    inset ? 'inset' : ''
  } -${offset}px -${offset}px ${blur}px ${highlight}`;
};
