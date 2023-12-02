import { Result, Ok, Err } from "ts-results";

export function jsonParse(str: string): Result<object, Error> {
  try {
    return Ok(JSON.parse(str));
  } catch (e: unknown) {
    if (e instanceof Error) {
      return Err(e);
    }
    return Err(Error("unknown error"));
  }
}
