import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import type { Schedule } from '@/types/schedule';

import { apiAdapter } from '@/global';

export function useDeleteSchedule() {
  const navigate = useRouter();
  const queryClient = useQueryClient();

  const handleDelete = async (targetId: Schedule['id']) => {
    // 削除する前にホームページに遷移
    navigate.push('/');

    // API アダプターを使用してスケジュールを削除
    const result = await apiAdapter.schedule.remove(targetId);
    await queryClient.invalidateQueries({ queryKey: [targetId] });
    if (result.err) toast.error('スケジュールを削除できませんでした');
    toast.success('スケジュールを削除しました');
  };

  return {
    handleDelete,
  };
}
