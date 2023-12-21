export function toPromise(func: (...args: unknown[]) => unknown) {
  return function (...args: unknown[]) {
    return Promise.resolve(func(...args));
  };
}
