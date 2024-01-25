import { scaling } from '@/utils/scaling';

export function getMentalLevelColor(zeroToOne: number): string {
  return `hsla(${50 - scaling(zeroToOne, 0, 50)}, ${scaling(zeroToOne, 80, 90)}%, 70%, ${zeroToOne})`;
}
