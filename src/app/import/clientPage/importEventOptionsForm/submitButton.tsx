'use client';
import React from 'react';

import { css } from '@emotion/react';

import { generateNeuStyle } from '@/libs/generateNeuStyle';

type Props = {
  disabled: boolean;
};

export const SubmitButton: React.FC<Props> = ({ disabled }) => {
  console.log(disabled);
  return (
    <input
      type="submit"
      value="インポート"
      disabled={disabled}
      css={[
        generateNeuStyle({
          radius: 5,
          intensity: 0.5,
          size: 2,
          isTouchable: !disabled,
        }),
        css({
          padding: '10px',
        }),
      ]}
    />
  );
};
