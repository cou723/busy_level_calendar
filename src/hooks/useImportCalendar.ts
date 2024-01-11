import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

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
    },
    mutationKey: ['calendar', 'schedule'],
    onError: (error) => {
      toast.error('インポートに失敗しました\n' + error.message);
      onError(error);
    },
    onSuccess: () => {
      toast.success('インポートに成功しました');
      onSuccess();
    },
  });

  return {
    importCalendar,
    error,
  };
};
