import ErrorMessage from "@/components/utils/ErrorMessage";
import NeuInput from "@/components/utils/NeuInput";
import { css } from "@emotion/react";
import { FunctionComponent, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface LabelProps {
  disabled: boolean;
  children: React.ReactNode;
  inputId: string;
}

const Label: FunctionComponent<LabelProps> = ({ children, disabled, inputId }) => {
  return (
    <label
      htmlFor={inputId}
      css={css({
        fontSize: "0.8rem",
        color: disabled ? "gray" : "black",
      })}
    >
      {children}
    </label>
  );
};

export interface TextBoxProps {
  register: UseFormRegisterReturn<string>;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  label: string;
  errorMessage?: string;
  id: string;
  disabled?: boolean;
  [key: string]: unknown;
}

const TextBox: FunctionComponent<TextBoxProps> = ({
  label,
  errorMessage = "",
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
        id={id}
        type={type}
        register={register}
        disabled={disabled}
        {...props}
      />
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export default TextBox;
