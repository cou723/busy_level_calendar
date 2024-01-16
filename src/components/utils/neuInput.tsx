'use client';
import type { FunctionComponent, InputHTMLAttributes } from 'react';

import { css } from '@emotion/react';

import type { UseFormRegisterReturn } from 'react-hook-form';

import Neu from '@/components/utils/neu';

export interface NeuInputProps {
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  id: string;
  register: UseFormRegisterReturn<string>;
  disabled?: boolean;
  placeholder?: string;
  [key: string]: unknown;
}

const NeuInput: FunctionComponent<NeuInputProps> = ({
  type,
  id,
  register,
  placeholder,
  disabled = false,
  ...props
}) => {
  // console.log("NeuInput:", type, value, onChange, placeholder, disabled, props);
  return (
    <Neu inset {...props}>
      <input
        css={css`
          border: none;
          outline: none;
          background: none;
          width: 100%;
          padding: 0.25rem 0.5rem;
          height: auto;
        `}
        {...register}
        {...{ disabled, type, id, placeholder }}
      />
    </Neu>
  );
};

export default NeuInput;
