import { css } from '@emotion/react';

export const Message = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      css={css`
        font-size: 12px;
      `}
    >
      {children}
    </p>
  );
};
