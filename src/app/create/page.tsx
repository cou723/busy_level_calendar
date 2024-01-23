import React from 'react';

import NormalContainer from '@/components/normalContainer';
import PageTitle from '@/components/pageTitle';
import ScheduleFormView from '@/components/scheduleFormView';

export const CreatePage: React.FC = () => {
  return (
    <NormalContainer>
      <PageTitle>予定の作成</PageTitle>
      <ScheduleFormView />
    </NormalContainer>
  );
};

export default CreatePage;
