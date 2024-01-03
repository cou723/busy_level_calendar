'use client';
import NormalContainer from '@/components/NormalContainer';
import PageTitle from '@/components/PageTitle';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <NormalContainer>
      <PageTitle>404 Not Found</PageTitle>
      <p>お探しのページは見つかりませんでした。</p>
    </NormalContainer>
  );
};

export default NotFoundPage;
