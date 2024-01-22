import { type NeuSurface } from '@/types/neuStyleOption';

function linearGradient(deg: number) {
  return `linear-gradient(${deg}deg,rgba(83, 3, 3, 0.22),rgba(255, 255, 255, 0.25))`;
}

export const generateBackground = (surface: NeuSurface) => {
  if (surface === 'flat') return undefined;
  if (surface === 'convex') return linearGradient(-45);
  return linearGradient(135);
};
