import { z } from "zod";
import { AtLeastTwoElementsArray } from "./atLeastTwoElementsArray";

export const notificationTypes = ["info", "warning", "error"] as const;
export type NotificationType = (typeof notificationTypes)[number];
export const NotificationTypesSchema = z.union(
  notificationTypes.map((x) => z.literal(x)) as AtLeastTwoElementsArray<
    z.ZodLiteral<NotificationType>
  >
);
