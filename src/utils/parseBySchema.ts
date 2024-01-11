import { Ok, Err } from 'ts-results';

import type { Result} from 'ts-results';
import type { ZodSchema } from 'zod';

export function parseBySchema<T>({ schema, target }: { schema: ZodSchema<T>; target: object }): Result<T, Error> {
  try {
    const parsed = schema.parse(target);
    return Ok(parsed);
  } catch (e) {
    if (e instanceof Error) return Err(e);
    return Err(new Error('unknown Error'));
  }
}
