import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import type { ImportEventOptions } from '@/types/importEventOptions';

import { apiAdapter } from '@/global';
import { resultToTryCatch } from '@/utils/resultToTryCatch';

export const useImportCalendar = (options: ImportEventOptions) => {
  const navigate = useRouter();
  const { mutate: importCalendar, error } = useMutation<void, Error>({
    mutationFn: async () => {
      resultToTryCatch(await apiAdapter.importCalendar(options));
    },
    mutationKey: ['calendar', 'schedule'],
    onError: (error) => {
      toast.error('インポートに失敗しました\n' + error.message);
    },
    onSuccess: () => {
      toast.success('インポートに成功しました');
      navigate.push('/');
    },
  });

  return {
    importCalendar,
    error,
  };
};
