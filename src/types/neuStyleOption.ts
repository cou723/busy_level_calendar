import type { NeuSize } from './neuSize';

export type NeuStyleOption = {
  radius: number;
  intensity: number;
  inset?: boolean;
  concave?: boolean;
  size: NeuSize;
  isTouchable?: boolean;
};
