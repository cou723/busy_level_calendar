import type { NeuSize } from './neuSize';

export type NeuSurface = 'concave' | 'convex' | 'flat';

export type NeuStyleOption = {
  radius: number;
  intensity: number;
  inset?: boolean;
  surface?: NeuSurface;
  size: NeuSize;
  isTouchable?: boolean;
};
