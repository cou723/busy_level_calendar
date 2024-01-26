import React from 'react';

import { css } from '@emotion/react';
import { format } from 'date-fns';

import type { Notification } from '@/types/notification';

import FlexBox from '@/components/utils/flexBox';

type Props = {
  notification: Notification;
};
const NotificationView: React.FC<Props> = ({ notification }) => {
  return (
    <FlexBox flexDirection="column">
      <p
        css={css({
          display: 'block',
          fontSize: '0.6rem',
        })}
      >
        {format(new Date(notification.publishedAt), 'yyyy/MM/dd HH:mm')}
      </p>
      <p
        css={css({
          display: 'block',
          fontWeight: 'bold',
          fontSize: '1.2rem',
        })}
      >
        {notification.title}
      </p>
      <p
        css={css({
          display: 'block',
        })}
      >
        {notification.content}
      </p>
    </FlexBox>
  );
};

export default NotificationView;
