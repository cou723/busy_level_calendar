export function nullToUndefined<T>(x: T | null | undefined): T | undefined {
  return x === null ? undefined : x;
}
