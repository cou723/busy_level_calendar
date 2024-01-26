import { css } from '@emotion/react';

import type { Schedule } from '@/types/schedule';

import NeuButton from '@/components/utils/neuButton';

export const ScheduleStyleButton: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
  error: boolean;
}> = ({ error, onClick, children }) => {
  return (
    <NeuButton
      css={css`
        width: 100%;
        font-size: 12px;
        text-align: left;
        border: ${!error ? 0 : 1}px dashed #ff4f4f;
        padding: 1px;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        height: 1.5rem;
        justify-content: left;
      `}
      onClick={onClick}
      radius={3}
      size={1.5}
      intensity={0.1}
    >
      {children}
    </NeuButton>
  );
};
