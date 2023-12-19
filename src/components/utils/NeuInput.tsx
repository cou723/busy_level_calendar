"use client";
import Neu from "@/components/utils/Neu";
import { css } from "@emotion/react";
import { FunctionComponent, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface NeuInputProps {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
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
        disabled={disabled}
        type={type}
        {...register}
        id={id}
        placeholder={placeholder}
      />
    </Neu>
  );
};

export default NeuInput;
