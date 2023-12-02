import Neu from "@/components/Neu";
import { css } from "@emotion/react";
import { FunctionComponent, InputHTMLAttributes } from "react";

export interface NeuInputProps {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  value: InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
  placeholder?: string;
}

const NeuInput: FunctionComponent<NeuInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Neu inset>
      <input
        css={css`
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: none;
        `}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </Neu>
  );
};

export default NeuInput;
