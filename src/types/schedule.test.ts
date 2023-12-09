import { toNDaysAgo, Schedule, generate } from "@/types/schedule";
import { describe, it, expect } from "vitest";

describe("toNDaysAgo", () => {
  it("should return an array of objects with the date and n days ago", () => {
    const schedule: Schedule = generate({
      title: "Test Schedule",
      description: "This is a test schedule",
      date: new Date("2022-01-01"),
      requiredDays: 5,
    });

    const result = toNDaysAgo(schedule);

    expect(result).toEqual([
      { date: new Date("2022-01-01"), n: 0 },
      { date: new Date("2021-12-31"), n: 1 },
      { date: new Date("2021-12-30"), n: 2 },
      { date: new Date("2021-12-29"), n: 3 },
      { date: new Date("2021-12-28"), n: 4 },
      { date: new Date("2021-12-27"), n: 5 },
    ]);
  });

  it("should return an empty array if the requiredDays is not provided", () => {
    const schedule: Schedule = generate({
      title: "Test Schedule",
      description: "This is a test schedule",
      date: new Date("2022-01-01"),
    });

    const result = toNDaysAgo(schedule);

    expect(result).toEqual([]);
  });
});
