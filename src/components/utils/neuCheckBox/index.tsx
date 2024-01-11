'use client';
import React from 'react';

import { css } from '@emotion/react';

import NeuCheckBoxInput from './neuCheckBoxInput';

import type { Props as InputProps } from './neuCheckBoxInput';


type Props = InputProps & {
  children?: React.ReactNode;
};

const NeuCheckBox = ({ children, ...other }: Props) => {
  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      })}
    >
      <NeuCheckBoxInput {...other} />
      {children}
    </div>
  );
};

export default NeuCheckBox;
