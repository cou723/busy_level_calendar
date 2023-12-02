import { FunctionComponent } from "react";
import Neu from "../Neu";
import { type Notification } from "@/types";
import NotificationView from "./Notification";

interface NotificationsProps {
  notifications: Notification[];
  [key: string]: unknown;
}

const Notifications: FunctionComponent<NotificationsProps> = ({
  notifications,
  ...props
}) => {
  return (
    <Neu {...props}>
      {notifications.map((notification: Notification) => (
        <NotificationView
          key={notification.id}
          title={notification.title}
          message={notification.message}
          level={notification.level}
        />
      ))}
    </Neu>
  );
};

export default Notifications;
