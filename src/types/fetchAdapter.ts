import apiEndpoints from "@/libs/apiEndpoints";
import { Calendar, ApiAdapter, CalendarSchema } from "@/types/calendar";
import { Schedule, ScheduleSchema } from "@/types/schedule";
import { parseBySchema } from "@/utils/parseBySchema";
import { Err, Ok, Result } from "ts-results";
import { fetch } from "@/utils/fetch";

async function createError(errorResponse: Response): Promise<Error> {
  return new Error(await errorResponse.json());
}

export class FetchAdapter implements ApiAdapter {
  static key: string = "busyLevelCalendar";

  schedule = {
    getAll: async (): Promise<Result<Schedule[], Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.getAll}`, { credentials: "include" });

      console.log("fetch", res);

      if (res.err) return Err(res.val);
      if (res.val.status !== 200) return Err(new Error(JSON.stringify(res.val)));

      return parseBySchema(await res.val.json(), ScheduleSchema);
    },

    get: async (id?: Schedule["id"]): Promise<Result<Schedule, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.get}/${id}`, { credentials: "include" });

      console.log("fetch", res);

      if (res.err) return Err(res.val);
      if (res.val.status !== 200) return Err(new Error(JSON.stringify(res.val)));

      return parseBySchema(await res.val.json(), ScheduleSchema);
    },

    add: async (schedule: Schedule): Promise<Result<void, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.createOrUpdate}`, {
        method: "POST",
        body: JSON.stringify(schedule),
        ...{ credentials: "include" },
      });

      if (res.err) return Err(res.val);
      if (res.val.status !== 200) return Err(await createError(res.val));

      return Ok.EMPTY;
    },

    remove: async (id: string): Promise<Result<void, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.delete}/${id}`, {
        method: "DELETE",
        ...{ credentials: "include" },
      });

      if (res.err) return Err(res.val);
      if (res.val.status !== 200) return Err(await createError(res.val));

      return Ok.EMPTY;
    },

    edit: async (target: Schedule): Promise<Result<void, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.createOrUpdate}`, {
        method: "PUT",
        body: JSON.stringify(target),
        ...{ credentials: "include" },
      });

      if (res.err) return Err(res.val);
      if (res.val.status !== 200) return Err(await createError(res.val));

      return Ok.EMPTY;
    },
  };

  // 初期値の場合はcalendarの初期状態のオブジェクトを返す 機能は未実装
  get = async (): Promise<Result<Calendar, Error>> => {
    const res = await fetch(`${apiEndpoints.calendar.get}`, { credentials: "include" });

    if (res.err) return Err(res.val);
    if (res.val.status === 401) return Err(new Error("unauthorized"));
    if (res.val.status !== 200) return Err(await createError(res.val));

    return parseBySchema(CalendarSchema, await res.val.json());
  };

  clear = async (): Promise<Result<void, Error>> => {
    return Err(new Error("not implemented"));
  };
}
