import { apiAdapter } from "@/global";
import { Calendar } from "@/types/calendar";
import { useQuery } from "@tanstack/react-query";

async function fetchCalendar(): Promise<Calendar> {
  const result = await apiAdapter.get();
  console.log("result:", result);

  if (result.err) throw result.val;

  return result.val;
}

export function useCalendar() {
  return useQuery<Calendar, Error>({
    queryKey: ["calendar"],
    queryFn: async () => await fetchCalendar(),
  });
}
