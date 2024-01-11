import { z } from "zod";

import { MonthSchema, getNextMonth, getPreviousMonth } from "@/types/month";

export const YearMonthSchema = z.object({
  year: z.number(),
  month: MonthSchema,
});

export type YearMonth = z.infer<typeof YearMonthSchema>;

export function getNext(yearMonth: YearMonth): YearMonth {
  if (yearMonth.month == 12) {
    return {
      year: yearMonth.year + 1,
      month: 1,
    };
  } else {
    return {
      ...yearMonth,
      month: getNextMonth(yearMonth.month),
    };
  }
}

export function getPrevious(yearMonth: YearMonth): YearMonth {
  if (yearMonth.month == 1) {
    return {
      year: yearMonth.year - 1,
      month: 12,
    };
  } else {
    return {
      ...yearMonth,
      month: getPreviousMonth(yearMonth.month),
    };
  }
}
