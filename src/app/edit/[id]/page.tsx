'use client';
import { css } from '@emotion/react';
import { notFound, useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdEditSquare } from 'react-icons/md';

import LoadingPage from '@/components/loadingPage';
import NormalContainer from '@/components/normalContainer';
import PageTitle from '@/components/pageTitle';
import ScheduleFormView from '@/components/scheduleFormView';
import FlexBox from '@/components/utils/flexBox';
import NeuButton from '@/components/utils/neuButton';
import { apiAdapter } from '@/global';
import { useSchedule } from '@/hooks/useSchedule';

/**
 * スケジュールを編集するための EditPage コンポーネントです。
 * @returns JSX.Element
 */
export const EditPage: React.FC = () => {
  const navigate = useRouter();

  // URL から id パラメーターを取得
  const param = useParams<{ id: string }>();
  if (!param) notFound();

  // id を使用してスケジュールデータを取得
  const { data: schedule, isLoading, isError } = useSchedule(param.id);
  if (isLoading) return <LoadingPage />;
  if (isError) return notFound();

  /**
   * スケジュールの削除アクションを処理。
   * スケジュールを削除し、ホームページへ
   */
  const handleDelete = async () => {
    // 削除する前にホームページに遷移
    navigate.push('/');

    // API アダプターを使用してスケジュールを削除
    const result = await apiAdapter.schedule.remove(param.id);
    if (result.err) toast.error('スケジュールを削除できませんでした');
    toast.success('スケジュールを削除しました');
  };

  return (
    <NormalContainer>
      <FlexBox justifyContent="space-between" alignItems="center">
        <PageTitle>
          編集
          <MdEditSquare />
        </PageTitle>
        <NeuButton
          css={css({
            height: '2rem',
            gap: '0.5rem',
            backgroundColor: '#ff000047',
          })}
          onClick={handleDelete}
        >
          <FaRegTrashAlt css={[css({ color: '#ffffff' })]} />
          削除
        </NeuButton>
      </FlexBox>
      {isError ? <p>エラー</p> : <ScheduleFormView defaultValue={schedule} />}
    </NormalContainer>
  );
};

export default EditPage;
