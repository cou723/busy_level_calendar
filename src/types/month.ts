import { AtLeastTwoElementsArray } from "@/types/atLeastTwoElementsArray";
import { z } from "zod";

export const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
export const MonthSchema = z.union(
  monthList.map((x) => z.literal(x)) as AtLeastTwoElementsArray<
    z.ZodLiteral<Month>
  >
);

export function getMonth(date: Date): Month {
  return (date.getMonth() + 1) as Month;
}

export function getNextMonth(month: Month): Month {
  return ((month % 12) + 1) as Month;
}

export function getPreviousMonth(month: Month): Month {
  if (month >= 2) return (month - 1) as Month;
  else return 12 as Month;
}

export type Month = (typeof monthList)[number];
