import { apiAdapter } from '@/global';
import { Schedule } from '@/types/schedule';
import { resultToTryCatch } from '@/utils/resultToTryCatch';
import { useQuery } from '@tanstack/react-query';

export function useSchedule(id: Schedule['id']) {
  return useQuery({
    queryKey: ['calendar', id],
    queryFn: async () => resultToTryCatch(await apiAdapter.schedule.get(id)),
    retry: 1,
  });
}
