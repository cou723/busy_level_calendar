import { z } from 'zod';

import type { AtLeastTwoElementsArray } from './atLeastTwoElementsArray';

const scheduleAlertTypes = ['info', 'warning', 'error'] as const;
export type ScheduleAlertTypes = (typeof scheduleAlertTypes)[number];
export const ScheduleAlertTypesSchema = z.union(
  scheduleAlertTypes.map((x) => z.literal(x)) as AtLeastTwoElementsArray<z.ZodLiteral<ScheduleAlertTypes>>
);
