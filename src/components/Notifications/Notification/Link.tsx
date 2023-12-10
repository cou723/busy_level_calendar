import { css } from "@emotion/react";
import { Link as RrdLink } from "react-router-dom";

export const Link = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <RrdLink
      to={to}
      css={css`
        font-size: 0.95rem;
        color: #006fd6;
        text-decoration: underline;
      `}
    >
      {children}
    </RrdLink>
  );
};
