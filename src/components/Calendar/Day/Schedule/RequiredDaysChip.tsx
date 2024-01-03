import { Schedule } from '@/types/schedule';
import { css } from '@emotion/react';

export const RequiredDaysChip = ({ requiredDays }: { requiredDays: Schedule['requiredDays'] }) => {
  if (!requiredDays) return <></>;
  return (
    <div
      css={css`
        white-space: nowrap;
        font-size: 8px;
        background-color: #fff;
        padding: 2px;
        padding-bottom: 0.2rem;
        border-radius: 2px;
        margin: 2px;
        margin-left: 8px;
      `}
    >
      {requiredDays}日
    </div>
  );
};
