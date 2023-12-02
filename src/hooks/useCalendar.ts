import { calendarAdapter } from "@/global";
import { useQuery } from "@tanstack/react-query";

function fetchCalendar() {
  const result = calendarAdapter.get();
  if (result.err) throw result.val;
  return result.val;
}

export function useCalendar() {
  return useQuery({
    queryKey: ["calendar"],
    queryFn: () => fetchCalendar(),
  });
}
