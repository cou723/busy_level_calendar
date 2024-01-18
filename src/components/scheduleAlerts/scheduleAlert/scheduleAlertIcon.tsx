import { css } from '@emotion/react';
import { MdError, MdWarning, MdInfo } from 'react-icons/md';

import type { ScheduleAlertTypes } from '@/types/scheduleAlertType';

export const ScheduleAlertIcon = ({ level }: { level: ScheduleAlertTypes }) => {
  const iconCss = {};

  const icons: { [key: string]: JSX.Element } = {
    info: <MdInfo size={30} css={css({ ...iconCss, color: '#006fd6' })} />,
    warning: <MdWarning size={30} css={css({ ...iconCss, color: '#ebd300' })} />,
    error: <MdError size={30} css={css({ ...iconCss, color: '#e62f2f' })} />,
  };

  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
      })}
    >
      {icons[level]}
    </div>
  );
};
