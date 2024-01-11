import { describe, expect, test } from "vitest";

import { jsonParse } from "./jsonParse";

describe("jsonParse", () => {
  test("should parse valid JSON string", () => {
    const jsonString = '{"name": "John", "age": 30}';
    const result = jsonParse(jsonString);

    expect(result.ok).toBe(true);
    expect(result.unwrap()).toEqual({ name: "John", age: 30 });
  });

  test("should return an error for invalid JSON string", () => {
    const jsonString = '{"name": "John", "age": 30'; // missing closing brace
    const result = jsonParse(jsonString);

    expect(result.err).toBe(true);
  });
});
