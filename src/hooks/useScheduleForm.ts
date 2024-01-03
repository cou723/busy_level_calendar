import { useForm } from 'react-hook-form';
import { scheduleFormSchema, ScheduleForm } from '@/types/scheduleForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiAdapter } from '@/global';
import { Schedule, toScheduleForm } from '@/types/schedule';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useScheduleForm = (initSchedule?: Schedule) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<ScheduleForm>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: initSchedule ? toScheduleForm(initSchedule) : undefined,
  });

  const onSubmit = async (data: ScheduleForm) => {
    const result = await apiAdapter.schedule.update(
      initSchedule
        ? {
            ...initSchedule,
            ...data,
          }
        : data
    );

    if (result.err) {
      console.log('error', result.val);
      return;
    }
    await queryClient.invalidateQueries({ queryKey: ['calendar'] });
    if (initSchedule) await queryClient.invalidateQueries({ queryKey: [initSchedule.id] });
    router.push('/');
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
};
