import { Err, Ok, Result } from 'ts-results';

export function resultToTryCatch<T, E extends Error>(result: Result<T, E>): T {
  if (result.err) {
    throw result.val;
  }
  return result.val;
}

export async function tryCatchToResult<T, E extends Error>(fn: () => Promise<T>): Promise<Result<T, E>> {
  try {
    return Ok(await fn());
  } catch (e) {
    return Err(e as E);
  }
}
