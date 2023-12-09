export function normalizeVector(array: number[]): number[] {
  const min = Math.min(...array);
  const maxMinusMin = Math.max(...array) - min;

  return array.map((e) => e - min / maxMinusMin);
}
