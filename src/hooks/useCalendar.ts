import { useQuery } from '@tanstack/react-query';

import type { Calendar } from '@/types/calendar';

import { apiAdapter } from '@/global';

export function useCalendar() {
  return useQuery<Calendar, Error>({
    queryKey: ['calendar'],
    queryFn: async () => {
      {
        const result = await apiAdapter.get();

        if (result.err) throw result.val;
        return result.val;
      }
    },
    retry: 1,
  });
}
