import { FunctionComponent } from "react";
import Neu from "@/components/utils/Neu";
import { MdError } from "react-icons/md";
import { MdWarning } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { NotificationType } from "@/types/notificationType";

export interface NotificationProps {
  title: string;
  message: string;
  level: NotificationType;
}

const icons: { [key: string]: JSX.Element } = {
  info: <MdInfo />,
  warning: <MdWarning />,
  error: <MdError />,
};

const Notification: FunctionComponent<NotificationProps> = ({
  title,
  message,
  level,
}) => {
  return (
    <Neu inset>
      {icons[level]}
      <h5>{title}</h5>
      <p>{message}</p>
    </Neu>
  );
};

export default Notification;
