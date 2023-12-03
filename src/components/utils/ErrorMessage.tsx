import { css } from "@emotion/react";
import { FunctionComponent } from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({ message }) => {
  return (
    <p
      css={css({
        color: "red",
        margin: "0.5rem 0 0 0",
        fontSize: "0.8rem",
      })}
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
