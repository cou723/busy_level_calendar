import { FunctionComponent } from 'react';
import Neu from '../utils/Neu';
import { type Notification } from '@/types';
import NotificationView from './Notification';
import { css } from '@emotion/react';

interface NotificationsProps {
  notifications: Notification[];
  [key: string]: unknown;
}

const Notifications: FunctionComponent<NotificationsProps> = ({ notifications, ...props }) => {
  return (
    <Neu
      {...props}
      css={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '12px',
      })}
    >
      {notifications.map((notification: Notification) => (
        <NotificationView
          key={notification.id}
          title={notification.title}
          message={notification.message}
          priorityLevel={notification.level}
          toUrl={'/edit/' + notification.target}
        />
      ))}
    </Neu>
  );
};

export default Notifications;
