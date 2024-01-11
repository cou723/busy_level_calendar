'use client';
import React from 'react';

import NormalContainer from '@/components/normalContainer';
import PageTitle from '@/components/pageTitle';

const NotFoundPage: React.FC = () => {
  return (
    <NormalContainer>
      <PageTitle>404 Not Found</PageTitle>
      <p>お探しのページは見つかりませんでした。</p>
    </NormalContainer>
  );
};

export default NotFoundPage;
