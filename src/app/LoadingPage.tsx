'use client';
import { css } from '@emotion/react';
import React from 'react';
import { Circles } from 'react-loader-spinner';

const LoadingPage = () => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Circles color="#9b9b9b" height={50} width={50} />
      <p
        css={css({
          display: 'block',
        })}
      >
        now loading...
      </p>
    </div>
  );
};

export default LoadingPage;
