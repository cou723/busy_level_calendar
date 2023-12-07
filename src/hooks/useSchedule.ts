import { calendarAdapter } from "@/global";
import { Schedule } from "@/types/schedule";
import { useQuery } from "@tanstack/react-query";

function fetchSchedule(id: Schedule["id"]) {
  const result = calendarAdapter.getSchedule(id);
  if (result.err) throw result.val;
  return result.val;
}

export function useSchedule(id: Schedule["id"]) {
  return useQuery({
    queryKey: ["schedule", id],
    queryFn: () => fetchSchedule(id),
  });
}
