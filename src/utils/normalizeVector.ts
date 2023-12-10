export function normalizeVector(array: number[]): number[] {
  const min = Math.min(...array);
  const maxMinusMin = Math.max(...array) - min;
  if (maxMinusMin === 0) return array.map(() => 0);

  return array.map((e) => normalize(e, min, Math.max(...array)));
}

export function normalize(value: number, min: number, max: number): number {
  return (value - min) / (max - min);
}
