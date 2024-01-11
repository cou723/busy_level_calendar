import { useMutation } from '@tanstack/react-query';

import type { ImportEventOptions } from '@/types/importEventOptions';

import { apiAdapter } from '@/global';
import { resultToTryCatch } from '@/utils/resultToTryCatch';

export const useImportCalendar = (
  options: ImportEventOptions,
  onSuccess: () => void,
  onError: (error: Error) => void
) => {
  const { mutate: importCalendar, error } = useMutation<void, Error>({
    mutationFn: async () => {
      resultToTryCatch(await apiAdapter.importCalendar(options));
      console.log('Success');
    },
    mutationKey: ['calendar', 'schedule'],
    onError,
    onSuccess,
  });

  return {
    importCalendar,
    error,
  };
};
