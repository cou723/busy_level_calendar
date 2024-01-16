import { generateBackground } from './generateBackground';
import { generateBoxShadow, generateDropShadow } from './generateBoxShadow';

import type { NeuStyleOption } from '@/components/utils/neu/NeuStyleOption';

export const generateNeuStyle = (
  { radius, intensity, inset, concave, size }: NeuStyleOption,
  usingFilter?: boolean
) => {
  return {
    background: generateBackground(concave ?? false),
    borderRadius: radius * 5,
    filter: usingFilter ? generateDropShadow(intensity, size) : undefined,
    boxShadow: usingFilter ? undefined : generateBoxShadow(inset ?? false, intensity, size),
  };
};
