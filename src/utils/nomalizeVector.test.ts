import { describe, it, expect } from "vitest";

import { normalizeVector } from "./normalizeVector";

describe("normalizeVector", () => {
  it("should return a normalized vector", () => {
    // Test case 1: Vector with positive values
    expect(normalizeVector([1, 0])).toEqual([1, 0]);

    // Test case 3: Vector with zero values
    expect(normalizeVector([0, 0])).toEqual([0, 0]);

    expect(normalizeVector([5, 0])).toEqual([1, 0]);
  });

  it("should handle edge cases", () => {
    // Test case 5: Vector with single element
    expect(normalizeVector([10])).toEqual([0]);

    // Test case 6: Vector with all elements as zero
    expect(normalizeVector([0, 5, 10])).toEqual([0, 0.5, 1]);
  });
});
