export function scaling(input: number, min: number, max: number): number {
  if (input < 0 || input > 1) throw new Error('input must be between 0 and 1');
  if (min > max) throw new Error('min must be less than max');
  return min + input * (max - min);
}
