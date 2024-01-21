'use client';
import React from 'react';

import { css } from '@emotion/react';

import NormalContainer from '@/components/normalContainer';
import PageTitle from '@/components/pageTitle';
import ScheduleFormView from '@/components/scheduleFormView';
import SmallContainer from '@/components/smallContainer';

export const CreatePage: React.FC = () => {
  return (
    <SmallContainer>
      <PageTitle>予定の作成</PageTitle>
      <ScheduleFormView />
    </SmallContainer>
  );
};

export default CreatePage;
