'use client';
import LoadingPage from '@/app/LoadingPage';
import NormalContainer from '@/components/NormalContainer';
import PageTitle from '@/components/PageTitle';
import ScheduleForm from '@/components/ScheduleForm';
import FlexBox from '@/components/utils/FlexBox';
import NeuButton from '@/components/utils/NeuButton';
import { apiAdapter } from '@/global';
import { useSchedule } from '@/hooks/useSchedule';
import { css } from '@emotion/react';
import { notFound, useParams, useRouter } from 'next/navigation';

export const EditPage = () => {
  const param = useParams<{ id: string }>();
  const navigate = useRouter();

  if (!param) notFound();
  const { data: schedule, isLoading, isError } = useSchedule(param.id);
  if (isLoading) return <LoadingPage />;
  if (isError) return notFound();

  const handleDelete = async () => {
    const result = await apiAdapter.schedule.remove(param.id);
    if (result.err) console.log('error', result.val);
    return navigate;
  };

  return (
    <NormalContainer>
      <FlexBox justifyContent="space-between" alignItems="row">
        <PageTitle>編集</PageTitle>
        <NeuButton onClick={handleDelete}>削除</NeuButton>
      </FlexBox>
      {isError ? <p>error</p> : <ScheduleForm defaultValue={schedule} />}
    </NormalContainer>
  );
};

export default EditPage;
