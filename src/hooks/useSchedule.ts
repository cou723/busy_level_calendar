import { apiAdapter } from "@/global";
import { Schedule } from "@/types/schedule";
import { resultToTryCatch } from "@/utils/resultToTryCatch";
import { useQuery } from "@tanstack/react-query";

async function fetchSchedule(id: Schedule["id"]) {
  return resultToTryCatch(await apiAdapter.schedule.get(id));
}

export function useSchedule(id: Schedule["id"]) {
  return useQuery({
    queryKey: ["schedule", id],
    queryFn: async () => await fetchSchedule(id),
  });
}
