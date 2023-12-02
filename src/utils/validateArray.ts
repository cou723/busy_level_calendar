export function validateTwoOrMoreElements<T>(array: T[]): [T, T, ...T[]] {
  if (array.length < 2) {
    throw new Error(
      `Array must have at least two elements, but has ${array.length}`
    );
  }
  return array as [T, T, ...T[]];
}
