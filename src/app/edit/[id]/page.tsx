'use client';
import { notFound, useParams, useRouter } from 'next/navigation';

import LoadingPage from '@/app/LoadingPage';
import NormalContainer from '@/components/normalContainer';
import PageTitle from '@/components/pageTitle';
import ScheduleForm from '@/components/scheduleForm';
import FlexBox from '@/components/utils/flexBox';
import NeuButton from '@/components/utils/neuButton';
import { apiAdapter } from '@/global';
import { useSchedule } from '@/hooks/useSchedule';

/**
 * スケジュールを編集するための EditPage コンポーネントです。
 * @returns JSX.Element
 */
export const EditPage = () => {
  const navigate = useRouter();

  // URL から id パラメーターを取得します
  const param = useParams<{ id: string }>();
  if (!param) notFound();

  // id を使用してスケジュールデータを取得します
  const { data: schedule, isLoading, isError } = useSchedule(param.id);
  if (isLoading) return <LoadingPage />;
  if (isError) return notFound();

  /**
   * スケジュールの削除アクションを処理します。
   * スケジュールを削除し、ホームページに戻ります。
   */
  const handleDelete = async () => {
    // 削除する前にホームページに遷移します
    navigate.push('/');

    // API アダプターを使用してスケジュールを削除します
    const result = await apiAdapter.schedule.remove(param.id);
    if (result.err) console.log('error', result.val);
  };

  return (
    <NormalContainer>
      <FlexBox justifyContent="space-between" alignItems="row">
        <PageTitle>編集</PageTitle>
        <NeuButton handleClick={handleDelete}>削除</NeuButton>
      </FlexBox>
      {isError ? <p>エラー</p> : <ScheduleForm defaultValue={schedule} />}
    </NormalContainer>
  );
};

export default EditPage;
