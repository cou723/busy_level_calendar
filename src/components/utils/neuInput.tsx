'use client';
import type { FunctionComponent, InputHTMLAttributes } from 'react';

import { css } from '@emotion/react';
import TextField from '@mui/material/TextField';

import type { UseFormRegisterReturn } from 'react-hook-form';

export interface NeuInputProps {
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  id: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
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
}) => {
  return (
    <TextField
      variant="outlined"
      css={[
        css`
          outline: none;
          background: none;
          width: 100%;
          height: auto;
        `,
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
