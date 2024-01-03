'use client';
import NormalContainer from '@/components/NormalContainer';
import PageTitle from '@/components/PageTitle';
import ScheduleForm from '@/components/ScheduleForm';

export const CreatePage = () => {
  return (
    <NormalContainer>
      <PageTitle>予定の作成</PageTitle>
      <ScheduleForm />
    </NormalContainer>
  );
};

export default CreatePage;
