import { z } from 'zod';
import { AtLeastTwoElementsArray } from './atLeastTwoElementsArray';

const notificationTypes = ['info', 'warning', 'error'] as const;
export type NotificationType = (typeof notificationTypes)[number];
export const NotificationTypesSchema = z.union(
  notificationTypes.map((x) => z.literal(x)) as AtLeastTwoElementsArray<z.ZodLiteral<NotificationType>>
);
