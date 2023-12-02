import { describe, it, expect } from "vitest";
import { getCalendarDates } from "./getCalendarDates";
import { format } from "date-fns";

describe("getCalendarDates", () => {
  it("should return all dates for the calendar of December 2023", () => {
    const dates = getCalendarDates(2023, 12);
    expect(dates.length).toBe(42); // 6 weeks
    expect(format(dates[0], "yyyy-MM-dd")).toBe("2023-11-26"); // Monday of the last week of November
    expect(format(dates[dates.length - 1], "yyyy-MM-dd")).toBe("2024-01-06"); // Sunday of the first week of January
  });

  it("should return all dates for the calendar of February 2024 (leap year)", () => {
    const dates = getCalendarDates(2024, 2);
    expect(dates.length).toBe(35); // 5 weeks
    expect(format(dates[0], "yyyy-MM-dd")).toBe("2024-01-28"); // Monday of the last week of January
    expect(format(dates[dates.length - 1], "yyyy-MM-dd")).toBe("2024-03-02"); // Sunday of the first week of March
  });

  // 他のテストケース...
});
