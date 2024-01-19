'use client';
import type { FunctionComponent, InputHTMLAttributes } from 'react';

import { css } from '@emotion/react';
import { Input, TextField } from '@mui/material';

import type { UseFormRegisterReturn } from 'react-hook-form';

import { generateNeuStyle } from '@/libs/generateNeuStyle';

export interface NeuInputProps {
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  id: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  radius?: number;
  intensity?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NeuInput: FunctionComponent<NeuInputProps> = ({
  type,
  id,
  register,
  placeholder,
  disabled = false,
  label,
  error,
  radius = 2,
  intensity = 1,
}) => {
  return (
    <TextField
      variant="standard"
      InputProps={{ disableUnderline: true }}
      css={[
        css`
          border: none;
          outline: none;
          background: none;
          width: 100%;
          padding: 0.5rem 1rem;
          height: auto;
        `,
        generateNeuStyle({
          radius,
          intensity,
          inset: true,
          size: disabled ? 'small' : 'medium',
          isTouchable: !disabled,
        }),
        css({ backgroundColor: disabled ? '#0000002d' : error ? '#ff1b1b44' : 'none' }),
      ]}
      {...register}
      {...{ disabled, type, id, placeholder }}
      error={!!error}
      helperText={error}
      label={label}
    />
  );
};

export default NeuInput;
