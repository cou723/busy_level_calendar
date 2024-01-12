'use client';
import React from 'react';

import { css } from '@emotion/react';

import FlexBox from '@/components/utils/flexBox';

const ClientHeader = () => {
  return (
    <div
      css={css({
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
      })}
    ></div>
  );
};

export default ClientHeader;
