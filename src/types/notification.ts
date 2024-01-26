import { z } from 'zod';

export const NotificationSchema = z.object({
  // createdAt: z.string(),
  // updatedAt: z.string(),
  publishedAt: z.string(),
  // revisedAt: z.string(),
  title: z.string(),
  content: z.string(),
});

export type Notification = z.infer<typeof NotificationSchema>;
