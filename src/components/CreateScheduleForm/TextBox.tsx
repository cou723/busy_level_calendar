import NeuInput from "@/components/CreateScheduleForm/Input/NeuInput";
import { FunctionComponent, InputHTMLAttributes } from "react";

export interface TextBoxProps {
  title: string;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
  value: InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: InputHTMLAttributes<HTMLInputElement>["onChange"];
}

const TextBox: FunctionComponent<TextBoxProps> = ({
  title,
  type,
  value,
  onChange,
}) => {
  return (
    <div css={{ display: "flex", flexDirection: "column" }}>
      <label>{title}</label>
      <NeuInput type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default TextBox;
