'use client';
import React from 'react';

import { css } from '@emotion/react';

import NormalContainer from '@/components/normalContainer';
import PageTitle from '@/components/pageTitle';
import ScheduleForm from '@/components/scheduleForm';
import SmallContainer from '@/components/smallContainer';

export const CreatePage: React.FC = () => {
  return (
    <SmallContainer>
      <PageTitle>予定の作成</PageTitle>
      <ScheduleForm />
    </SmallContainer>
  );
};

export default CreatePage;
