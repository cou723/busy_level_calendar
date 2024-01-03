import { css } from '@emotion/react';

export const Message = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      css={css`
        margin-bottom: 0.5rem;
        font-size: 12px;
      `}
    >
      {children}
    </p>
  );
};
