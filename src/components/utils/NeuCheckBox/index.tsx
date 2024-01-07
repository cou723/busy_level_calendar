'use client';
import React from 'react';
import NeuCheckBoxInput, { Props as InputProps } from './NeuCheckBoxInput';
import { css } from '@emotion/react';

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
