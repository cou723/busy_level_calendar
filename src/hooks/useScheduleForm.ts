import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import type { Schedule } from '@/types/schedule';
import type { ScheduleForm } from '@/types/scheduleForm';

import { apiAdapter } from '@/global';
import { toScheduleForm } from '@/types/schedule';
import { scheduleFormSchema } from '@/types/scheduleForm';

/**
 * スケジュールフォームを扱うためのカスタムフック
 * @param initSchedule 初期スケジュールオブジェクト（オプション）
 * @returns スケジュールフォームの登録、送信、フォームステートを含むオブジェクト
 */
export const useScheduleForm = (initSchedule?: Schedule) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { register, handleSubmit, formState, control, setValue, watch } = useForm<ScheduleForm>({
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
      toast.error('作成、編集に失敗しました\n' + result.val.message);
      return;
    }

    await queryClient.invalidateQueries({ queryKey: ['calendar'] });
    if (initSchedule) await queryClient.invalidateQueries({ queryKey: [initSchedule.id] });
    toast.success('作成、編集に成功しました');
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    formState,
    control,
    setValue,
    watch,
  };
};
