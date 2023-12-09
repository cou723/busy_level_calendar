import { describe, expect, it } from "vitest";
import { peaceOfMindToColor } from "./peaceOfMindToColor";

describe("peaceOfMindToColor", () => {
  it("should return the correct color for a given peace of mind value", () => {
    // Test case 1: peaceOfMind = 0
    expect(peaceOfMindToColor(0)).toBe("hsl(180, 100%, 50%)");

    // Test case 2: peaceOfMind = 50
    expect(peaceOfMindToColor(0.5)).toBe("hsl(60, 100%, 50%)");

    // Test case 3: peaceOfMind = 100
    expect(peaceOfMindToColor(1)).toBe("hsl(300, 100%, 50%)");
  });
});
