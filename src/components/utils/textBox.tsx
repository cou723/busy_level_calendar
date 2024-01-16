import type { FunctionComponent, InputHTMLAttributes } from 'react';

import { css } from '@emotion/react';

import type { UseFormRegisterReturn } from 'react-hook-form';

import ErrorMessage from '@/components/utils/errorMessage';
import NeuInput from '@/components/utils/neuInput';

interface LabelProps {
  disabled: boolean;
  children: React.ReactNode;
  inputId: string;
}

const Label: FunctionComponent<LabelProps> = ({ children, disabled, inputId }) => {
  return (
    <label
      htmlFor={inputId}
      css={css({
        fontSize: '0.8rem',
        color: disabled ? 'gray' : 'black',
      })}
    >
      {children}
    </label>
  );
};

interface TextBoxProps {
  register: UseFormRegisterReturn<string>;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  label: string;
  errorMessage?: string;
  id: string;
  disabled?: boolean;
  [key: string]: unknown;
}

const TextBox: FunctionComponent<TextBoxProps> = ({
  label,
  errorMessage = '',
  disabled = false,
  id,
  type,
  register,
  ...props
}) => {
  return (
    <div>
      <Label inputId={id} disabled={disabled}>
        {label}
      </Label>
      <NeuInput
        css={css`
          padding: 0.5rem;
        `}
        {...{ id, type, register, disabled }}
        {...props}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default TextBox;
