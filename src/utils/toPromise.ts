export function toPromise(func: (...args: any[]) => any) {
  return function (...args: any[]) {
    return Promise.resolve(func(...args));
  };
}
