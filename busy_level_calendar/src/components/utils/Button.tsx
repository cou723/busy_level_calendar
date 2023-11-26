import { FunctionComponent, ReactElement } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  isPrimary?: boolean;
  icon?: ReactElement;
}

const Button: FunctionComponent<ButtonProps> = ({
  label,
  onClick,
  className = "",
  isPrimary = false,
  icon = null,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`sul-btn ${className} ${isPrimary ? "btm-primary" : ""}`}
      {...rest}
    >
      {icon && ""}
      {label}
    </button>
  );
};

export default Button;
