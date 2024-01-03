import { FunctionComponent } from 'react';
import Neu from '@/components/utils/Neu';
import { NotificationType } from '@/types/notificationType';
import { Title } from './Title';
import { Message } from './Message';
import { Link } from './Link';
import { NotificationIcon } from './NotificationIcon';
import FlexBox from '@/components/utils/FlexBox';
import { css } from '@emotion/react';

export interface NotificationProps {
  title: string;
  message: string;
  priorityLevel: NotificationType;
  toUrl: string;
}

const Notification: FunctionComponent<NotificationProps> = ({ title, message, priorityLevel, toUrl: to }) => {
  return (
    <Neu
      inset
      css={css({
        padding: '8px',
      })}
    >
      <FlexBox flexDirection="row" gap="6px">
        <NotificationIcon
          level={priorityLevel}
          css={css({
            width: '90px',
          })}
        />
        <div
          css={css({
            flexGrow: 1,
          })}
        >
          <Title> {title} </Title>
          <Message> {message} </Message>
          <Link to={to}> 詳細を見る </Link>
        </div>
      </FlexBox>
    </Neu>
  );
};

export default Notification;
