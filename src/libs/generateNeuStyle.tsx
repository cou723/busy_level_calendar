import { generateBackground } from './generateBackground';
import { generateBoxShadow, generateDropShadow } from './generateBoxShadow';

import type { NeuSize, NeuStyleOption } from '../components/utils/neu';

export const generateNeuStyle = (
  { radius, intensity, inset, concave, size }: NeuStyleOption,
  usingFilter?: boolean
) => {
  return {
    background: generateBackground(concave),
    borderRadius: (radius - 1) * 5,
    filter: usingFilter ? generateDropShadow(intensity, size) : undefined,
    boxShadow: usingFilter ? undefined : generateBoxShadow(inset, intensity, size),
  };
};
