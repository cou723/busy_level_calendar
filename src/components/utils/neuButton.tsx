'use client';
import type { FunctionComponent } from 'react';

import { css } from '@emotion/react';
import { Button } from '@mui/material';

import { generateNeuStyle } from '@/libs/generateNeuStyle';

export type NeuButtonProps = {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  concave?: boolean;
  radius?: number;
  className?: string;
};

const NeuButton: FunctionComponent<NeuButtonProps> = ({
  label,
  onClick,
  disabled: _disabled = false,
  concave = false,
  children,
  radius = 2,
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
        ...generateNeuStyle({
          radius,
          intensity: 1,
          concave,
          size: 'medium',
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
