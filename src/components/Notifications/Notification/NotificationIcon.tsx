import { MdError, MdWarning, MdInfo } from 'react-icons/md';
import { NotificationType } from '@/types/notificationType';
import { css } from '@emotion/react';

export const NotificationIcon = ({ level }: { level: NotificationType }) => {
  const iconCss = {};

  const icons: { [key: string]: JSX.Element } = {
    info: <MdInfo size={30} css={css({ ...iconCss, color: '#006fd6' })} />,
    warning: <MdWarning size={30} css={css({ ...iconCss, color: '#dfc800' })} />,
    error: <MdError size={30} css={css({ ...iconCss, color: '#ff6363' })} />,
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
