'use client';
import React from 'react';

import NormalContainer from '@/components/normalContainer';
import PageTitle from '@/components/pageTitle';
import ScheduleForm from '@/components/scheduleForm';

export const CreatePage: React.FC = () => {
  return (
    <NormalContainer>
      <PageTitle>予定の作成</PageTitle>
      <ScheduleForm />
    </NormalContainer>
  );
};

export default CreatePage;
