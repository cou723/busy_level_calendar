import { FunctionComponent } from "react";
import Neu from "@/components/utils/Neu";
import { NotificationType } from "@/types/notificationType";
import { css } from "@emotion/react";
import { flexRow } from "@/components/utils/styles";
import { Title } from "./Title";
import { Message } from "./Message";
import { Link } from "./Link";
import { NotificationIcon } from "./NotificationIcon";

export interface NotificationProps {
  title: string;
  message: string;
  level: NotificationType;
  to: string;
}

const Notification: FunctionComponent<NotificationProps> = ({ title, message, level, to }) => {
  return (
    <Neu inset padding={16}>
      <div css={css(flexRow)}>
        <NotificationIcon level={level} />
        <div>
          <Title> {title} </Title>
          <Message> {message} </Message>
          <Link to={to}> 詳細を見る </Link>
        </div>
      </div>
    </Neu>
  );
};

export default Notification;
