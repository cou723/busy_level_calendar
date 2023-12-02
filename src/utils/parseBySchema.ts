import { Result, Ok, Err } from "ts-results";
import { ZodSchema } from "zod";

export function parseBySchema<T>(
  schema: ZodSchema<T>,
  target: object
): Result<T, Error> {
  try {
    const parsed = schema.parse(target);
    return Ok(parsed);
  } catch (e) {
    if (e instanceof Error) return Err(e);
    return Err(new Error("unknown Error"));
  }
}
