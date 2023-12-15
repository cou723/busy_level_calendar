import { LocalStorageAdapter } from "./localStorageAdapter";
import { Schedule, generate } from "@/types/schedule";
import { Calendar } from "@/types/calendar";
import { afterEach, describe, expect, test } from "vitest";
import { localStorageMock } from "@/types/localStorageMock";

(global as any).localStorage = new localStorageMock();
describe("localStorageDB", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("get init", async () => {
    const localStorageDB = new LocalStorageAdapter();
    expect((await localStorageDB.get()).val).toEqual({
      id: "origin",
      schedules: [],
    });
  });

  test("add and get", async () => {
    const localStorageDB = new LocalStorageAdapter();
    const schedule: Schedule = generate({
      title: "test",
      description: "test",
      date: new Date(),
    });
    const calendar: Calendar = {
      id: "origin",
      schedules: [schedule],
    };

    localStorageDB.schedule.add(schedule);
    expect(localStorage.getItem(LocalStorageAdapter.key)).toEqual(JSON.stringify(calendar));

    expect((await localStorageDB.get()).val).toEqual(calendar);
  });

  test("remove", async () => {
    const localStorageDB = new LocalStorageAdapter();
    const schedule: Schedule = generate({
      title: "test",
      description: "test",
      date: new Date(),
    });
    const calendar: Calendar = {
      id: "origin",
      schedules: [schedule],
    };

    localStorage.setItem(LocalStorageAdapter.key, JSON.stringify(calendar));

    localStorageDB.schedule.remove(schedule.id);
    expect(localStorage.getItem(LocalStorageAdapter.key)).toEqual(
      JSON.stringify({
        id: "origin",
        schedules: [],
      })
    );
  });

  test("edit", () => {
    const localStorageDB = new LocalStorageAdapter();
    const schedule: Schedule = generate({
      title: "test",
      description: "test",
      date: new Date(),
    });
    const updatedSchedule: Schedule = {
      ...schedule,
      title: "updated",
    };
    const calendar: Calendar = {
      id: "origin",
      schedules: [schedule],
    };
    const updatedCalendar: Calendar = {
      id: "origin",
      schedules: [updatedSchedule],
    };

    localStorage.setItem(LocalStorageAdapter.key, JSON.stringify(calendar));

    localStorageDB.schedule.edit(updatedSchedule);
    expect(localStorage.getItem(LocalStorageAdapter.key)).toEqual(JSON.stringify(updatedCalendar));
  });
});
