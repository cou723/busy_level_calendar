import { Month } from "@/types/month";
import { YearMonth } from "@/types/yearMonth";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";

export function getCalendarDates({ year, month }: YearMonth) {
  // 月の最初の日と最後の日を取得
  const start = startOfMonth(new Date(year, month - 1));
  const end = endOfMonth(new Date(year, month - 1));

  // 月の最初の日の週の最初の日と、月の最後の日の週の最後の日を取得
  const calendarStart = startOfWeek(start, { weekStartsOn: 0 });
  const calendarEnd = endOfWeek(end, { weekStartsOn: 0 });

  // カレンダーの日付範囲を取得
  const dateRange = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  return dateRange;
}
