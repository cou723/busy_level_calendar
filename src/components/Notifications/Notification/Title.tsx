import { css } from "@emotion/react";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h5
      css={css`
        font-size: 1.1rem;
        margin: 0.5rem 0;
      `}
    >
      {children}
    </h5>
  );
};
