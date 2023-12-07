import {
  Calendar,
  CalendarAdapter,
  CalendarSchema,
  calendarInit,
} from "@/types/calendar";
import { Schedule } from "@/types/schedule";
import { jsonParse } from "@/utils/jsonParse";
import { LocalStorage } from "@/utils/localStorage";
import { parseBySchema } from "@/utils/parseBySchema";
import { Err, Ok, Result } from "ts-results";

export class LocalStorageDB implements CalendarAdapter {
  static key: string = "busyLevelCalendar";

  // 初期値の場合はcalendarの初期状態のオブジェクトを返す
  get(): Result<Calendar, Error> {
    const res = LocalStorage.get(LocalStorageDB.key);
    if (res.err) return Err(res.val);

    let calendar;
    if (res.val === "") calendar = Ok(calendarInit());
    else calendar = jsonParse(res.val);
    if (calendar.err) return Err(calendar.val);

    return parseBySchema(CalendarSchema, calendar.val);
  }

  getSchedule(id: Schedule["id"]): Result<Schedule, Error> {
    const calendar = this.get();
    if (calendar.err) return Err(calendar.val);

    const schedule = calendar.val.schedules.find((e) => e.id === id);
    if (schedule === undefined) return Err(new Error("not found"));
    return Ok(schedule);
  }

  add(schedule: Schedule): Result<void, Error> {
    const calendar = this.get();
    if (calendar.err) return Err(calendar.val);

    calendar.val.schedules.push(schedule);
    LocalStorage.set(LocalStorageDB.key, JSON.stringify(calendar.val));
    return Ok.EMPTY;
  }

  remove(id: string): Result<void, Error> {
    const calendar = this.get();
    if (calendar.err) return Err(calendar.val);

    calendar.val.schedules = calendar.val.schedules.filter((e) => e.id !== id);
    LocalStorage.set(LocalStorageDB.key, JSON.stringify(calendar.val));
    return Ok.EMPTY;
  }

  edit(target: Schedule): Result<void, Error> {
    const calendar = this.get();
    if (calendar.err) return Err(calendar.val);

    calendar.val.schedules = calendar.val.schedules.map((dist) =>
      dist.id === target.id ? target : dist
    );
    LocalStorage.set(LocalStorageDB.key, JSON.stringify(calendar.val));
    return Ok.EMPTY;
  }

  clear(): Result<void, Error> {
    LocalStorage.set(LocalStorageDB.key, "");
    return Ok.EMPTY;
  }
}
