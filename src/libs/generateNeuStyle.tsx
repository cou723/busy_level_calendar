import { generateBackground } from './generateBackground';
import { generateBoxShadow, generateDropShadow } from './generateBoxShadow';

import type { NeuStyleOption } from '@/components/utils/neu/NeuStyleOption';

export const generateNeuStyle = (
  { radius, intensity, inset, concave, size, isTouchable }: NeuStyleOption,
  usingFilter: boolean = false
) => {
  inset = inset ?? false;
  concave = concave ?? false;
  isTouchable = isTouchable ?? false;

  const shadow = generateShadow(usingFilter, inset, intensity, size);

  return {
    transition: 'all 0.3s ease',
    background: generateBackground(concave),
    borderRadius: radius * 5,
    '&:hover': isTouchable ? generateShadow(usingFilter, inset, intensity - 1, 1) : undefined,
    ...shadow,
  };
};

function generateShadow(usingFilter: boolean, inset: boolean, intensity: number, size: NeuStyleOption['size']) {
  if (usingFilter) {
    return {
      filter: generateDropShadow(intensity, size),
    };
  } else {
    return {
      boxShadow: generateBoxShadow(inset ?? false, intensity, size),
    };
  }
}
