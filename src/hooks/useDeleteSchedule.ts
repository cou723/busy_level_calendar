import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import type { Schedule } from '@prisma/client';

import { apiAdapter } from '@/global';

export function useDeleteSchedule() {
  const navigate = useRouter();
  const queryClient = useQueryClient();

  const handleDelete = async (targetId: Schedule['id']) => {
    navigate.push('/');

    const result = await apiAdapter.schedule.remove(targetId);
    await queryClient.invalidateQueries({ queryKey: [targetId] });
    if (result.err) toast.error('スケジュールを削除できませんでした');
    toast.success('スケジュールを削除しました');
  };

  return {
    handleDelete,
  };
}
