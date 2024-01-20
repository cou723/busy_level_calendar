'use client';
import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import { Button } from '@mui/material';

import type { NeuStyleOption } from '@/types/neuStyleOption';
import type { Undefinable } from '@/types/undefinable';

import { generateNeuStyle } from '@/libs/generateNeuStyle';

export type NeuButtonProps = Undefinable<Omit<Omit<NeuStyleOption, 'isTouchable'>, 'inset'>> & {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const NeuButton: FunctionComponent<NeuButtonProps> = ({
  label,
  onClick,
  disabled: _disabled = false,
  children,
  radius = 2,
  intensity = 1,
  concave = false,
  size = 2,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      css={css({
        fontSize: '14px',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        display: 'flex',
        justifyContent: 'center',
        textTransform: 'none',
        ...generateNeuStyle({
          radius,
          intensity,
          inset: false,
          concave,
          size,
          isTouchable: true,
        }),
      })}
      className={className}
    >
      <p>{label}</p>
      {children}
    </Button>
  );
};

export default NeuButton;
