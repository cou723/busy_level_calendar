import { calendarAdapter } from "@/global";
import { Schedule } from "@/types/schedule";
import { resultToTryCatch } from "@/utils/resultToTryCatch";
import { useQuery } from "@tanstack/react-query";

function fetchSchedule(id: Schedule["id"]) {
  return resultToTryCatch(calendarAdapter.schedule.get(id));
}

export function useSchedule(id: Schedule["id"]) {
  return useQuery({
    queryKey: ["schedule", id],
    queryFn: () => fetchSchedule(id),
  });
}
