import { Result } from "ts-results";

export function resultToTryCatch<T, E extends Error>(result: Result<T, E>): T {
  if (result.err) {
    throw result.val;
  }
  return result.val;
}
