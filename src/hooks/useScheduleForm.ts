import { useForm } from 'react-hook-form';
import { scheduleFormSchema, ScheduleForm } from '@/types/scheduleForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiAdapter } from '@/global';
import { Schedule, toScheduleForm } from '@/types/schedule';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

/**
 * スケジュールフォームを扱うためのカスタムフック
 * @param initSchedule 初期スケジュールオブジェクト（オプション）
 * @returns スケジュールフォームの登録、送信、フォームステートを含むオブジェクト
 */
export const useScheduleForm = (initSchedule?: Schedule) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<ScheduleForm>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: initSchedule ? toScheduleForm(initSchedule) : undefined,
  });

  /**
   * フォームの送信時に実行されるコールバック関数です。
   * フォームデータを更新し、APIを使用してスケジュールを更新します。
   * また、キャッシュを無効化してカレンダーと特定のスケジュールのデータを再取得します。
   * @param data スケジュールフォームのデータ
   */
  const onSubmit = async (data: ScheduleForm) => {
    router.push('/');
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
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
  };
};
