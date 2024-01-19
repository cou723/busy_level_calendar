'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import type { ImportEventOptions } from '@/types/importEventOptions';

import { apiAdapter } from '@/global';
import { ImportEventOptionsSchema } from '@/types/importEventOptions';
import { resultToTryCatch } from '@/utils/resultToTryCatch';

export const useImportOptionsForm = () => {
  const { register, handleSubmit, formState, control } = useForm<ImportEventOptions>({
    resolver: zodResolver(ImportEventOptionsSchema),
    defaultValues: {
      calendars: [],
      range: {
        start: new Date(),
        end: new Date(),
      },
      onlyAllDay: false,
    },
  });

  const onSubmit = async (data: ImportEventOptions) => {
    resultToTryCatch(await apiAdapter.importCalendar(data));
  };

  return {
    control,
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
};
