import { useQuery } from '@tanstack/react-query';

import type { Notification } from '@/types/notification';

import { apiAdapter } from '@/global';
import { resultToTryCatch } from '@/utils/resultToTryCatch';

export function useNotification() {
  return useQuery<Notification[], Error>({
    queryKey: ['notification'],
    queryFn: async () => {
      return resultToTryCatch(await apiAdapter.notification());
    },
    retry: 1,
  });
}
