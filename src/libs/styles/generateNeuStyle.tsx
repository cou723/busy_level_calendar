import { generateBackground } from './generateBackground';
import { generateBoxShadow, generateDropShadow } from './generateBoxShadow';

import type { NeuStyleOption } from '@/types/neuStyleOption';

export const generateNeuStyle = (
  { radius, intensity = 2, inset = false, surface = 'flat', size = 2, isTouchable = false }: Partial<NeuStyleOption>,
  usingFilter: boolean = false
) => {
  const shadow = generateShadow(usingFilter, inset, intensity, size);

  return {
    transition: 'all 0.3s ease',
    background: generateBackground(surface),
    borderRadius: radius ? radius * 5 : undefined,
    '&:hover': isTouchable ? generateShadow(usingFilter, inset, intensity - 0.5, size - 0.5) : undefined,
    '&:active': isTouchable ? generateShadow(usingFilter, true, intensity - 0.5, size - 0.5) : undefined,
    ...shadow,
  };
};

function generateShadow(
  usingFilter: boolean,
  inset: NeuStyleOption['inset'],
  intensity: NeuStyleOption['intensity'],
  size: NeuStyleOption['size']
) {
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
