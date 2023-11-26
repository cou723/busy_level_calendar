import { FunctionComponent } from "react";
import "soft-ui-library/dist/css/neumorphism-ui.css";

interface BoxProps {
  type?: "raised-1" | "raised-2" | "raised-3" | "inset";
  className?: string;
}

const Box: FunctionComponent<BoxProps> = ({
  type = "raised-1",
  className = "",
  ...rest
}) => {
  return (
    <div className={`sul-box-${type} with-hover ${className}`} {...rest} />
  );
};

export default Box;
