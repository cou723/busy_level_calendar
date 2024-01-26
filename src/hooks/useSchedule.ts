import { useQuery } from '@tanstack/react-query';

import type { Schedule } from '@prisma/client';

import { apiAdapter } from '@/global';
import { resultToTryCatch } from '@/utils/resultToTryCatch';

export function useSchedule(id: Schedule['id']) {
  return useQuery({
    queryKey: ['calendar', id],
    queryFn: async () => resultToTryCatch(await apiAdapter.schedule.get(id)),
    retry: 1,
  });
}
