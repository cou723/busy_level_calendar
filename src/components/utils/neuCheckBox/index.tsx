'use client';
import React from 'react';

import { css } from '@emotion/react';

import NeuCheckBoxInput from './neuCheckBoxInput';

import type { Props as InputProps } from './neuCheckBoxInput';

type Props = InputProps & {
  children?: React.ReactNode;
  error?: boolean;
};

const NeuCheckBox = ({ children, error, ...other }: Props) => {
  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      })}
    >
      <NeuCheckBoxInput error={error} {...other} />
      {children}
    </div>
  );
};

export default NeuCheckBox;
