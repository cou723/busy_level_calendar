import { getAllDatesUntilSchedule, Schedule, generate } from "@/types/schedule";
import { describe, it, expect } from "vitest";

describe("getAllDatesUntilSchedule", () => {
  it("should return an array of objects with the date and n days ago", () => {
    const schedule: Schedule = generate({
      title: "Test Schedule",
      description: "This is a test schedule",
      date: new Date("2022-01-01"),
      requiredDays: 5,
    });

    const result = getAllDatesUntilSchedule(schedule);

    expect(result).toEqual([
      new Date("2022-01-01"),
      new Date("2021-12-31"),
      new Date("2021-12-30"),
      new Date("2021-12-29"),
      new Date("2021-12-28"),
    ]);
  });

  it("should return an empty array if the requiredDays is not provided", () => {
    const schedule: Schedule = generate({
      title: "Test Schedule",
      description: "This is a test schedule",
      date: new Date("2022-01-01"),
    });

    const result = getAllDatesUntilSchedule(schedule);

    expect(result).toEqual([]);
  });
});
