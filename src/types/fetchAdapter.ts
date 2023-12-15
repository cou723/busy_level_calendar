import apiEndpoints from "@/libs/apiEndpoints";
import { Calendar, ApiAdapter } from "@/types/calendar";
import { Schedule, ScheduleSchema } from "@/types/schedule";
import { parseBySchema } from "@/utils/parseBySchema";
import { Err, Ok, Result } from "ts-results";

async function createError(errorResponse: Response): Promise<Error> {
  return new Error(await errorResponse.json());
}

export class FetchAdapter implements ApiAdapter {
  static key: string = "busyLevelCalendar";

  schedule = {
    getAll: async (): Promise<Result<Schedule[], Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.getAll}`);
      if (res.status !== 200) return Err(await createError(res));

      return parseBySchema(await res.json(), ScheduleSchema);
    },

    get: async (id?: Schedule["id"]): Promise<Result<Schedule, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.get}/${id}`);
      if (res.status !== 200) return Err(await createError(res));

      return parseBySchema(await res.json(), ScheduleSchema);
    },

    add: async (schedule: Schedule): Promise<Result<void, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.createOrUpdate}`, {
        method: "POST",
        body: JSON.stringify(schedule),
      });
      if (res.status !== 200) return Err(await createError(res));
      return Ok.EMPTY;
    },

    remove: async (id: string): Promise<Result<void, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.delete}/${id}`, {
        method: "DELETE",
      });
      if (res.status !== 200) return Err(await createError(res));
      return Ok.EMPTY;
    },

    edit: async (target: Schedule): Promise<Result<void, Error>> => {
      const res = await fetch(`${apiEndpoints.schedule.createOrUpdate}`, {
        method: "PUT",
        body: JSON.stringify(target),
      });
      if (res.status !== 200) return Err(await createError(res));
      return Ok.EMPTY;
    },
  };

  // 初期値の場合はcalendarの初期状態のオブジェクトを返す 機能は未実装
  get = async (): Promise<Result<Calendar, Error>> => {
    return Err(new Error("not implemented"));
  };

  clear = async (): Promise<Result<void, Error>> => {
    return Err(new Error("not implemented"));
  };
}
