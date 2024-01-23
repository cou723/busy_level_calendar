'use client';
import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import Button from '@mui/material/Button';

import type { NeuStyleOption } from '@/types/neuStyleOption';

import { generateNeuStyle } from '@/libs/styles/generateNeuStyle';

export type NeuButtonProps = Partial<Omit<Omit<NeuStyleOption, 'isTouchable'>, 'inset'>> & {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const NeuButton: FunctionComponent<NeuButtonProps> = ({
  label,
  onClick,
  disabled = false,
  children,
  radius = 2,
  intensity = 1,
  surface = 'flat',
  size = 2,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
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
          surface,
          size,
          isTouchable: !disabled,
        }),
      })}
      className={className}
    >
      {label ? <p>{label}</p> : undefined}
      {children}
    </Button>
  );
};

export default NeuButton;
