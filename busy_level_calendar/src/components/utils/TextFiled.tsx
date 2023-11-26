import { FunctionComponent } from "react";

interface TextFiledProps {
  type: "text" | "password";
  value: string;
  onChange?: () => void;
  placeholder?: string;
  className?: string;
}

const TextFiled: FunctionComponent<TextFiledProps> = ({
  type,
  value,
  onChange = () => {},
  placeholder = "",
  className = "",
}) => {
  return (
    <input
      onChange={onChange}
      type={type}
      className={`sul-text-field ${className}`}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default TextFiled;
