'use client';
import React from 'react';

import { css } from '@emotion/react';

import { fontColor } from '@/global';

export const SubTitle = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 500,
        color: fontColor,
        marginBottom: '16px',
        gap: '1rem',
      })}
    >
      {icon}
      <h2>{children}</h2>
    </div>
  );
};
