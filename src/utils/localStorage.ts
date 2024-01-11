import { Err, Ok } from "ts-results";

import type { Result } from "ts-results";

export class LocalStorage {
  static get(key: string): Result<string, Error> {
    try {
      const res = localStorage.getItem(key) || "";
      return Ok(res);
    } catch (e: unknown) {
      if (e instanceof Error) {
        return Err(e);
      }
      return Err(Error("unknown error"));
    }
  }

  static set(key: string, value: string): Result<void, Error> {
    try {
      localStorage.setItem(key, value);
      return Ok.EMPTY;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return Err(e);
      }
      return Err(Error("unknown error"));
    }
  }

  static remove(key: string): Result<void, Error> {
    try {
      localStorage.removeItem(key);
      return Ok.EMPTY;
    } catch (e: unknown) {
      if (e instanceof Error) {
        return Err(e);
      }
      return Err(Error("unknown error"));
    }
  }
}
