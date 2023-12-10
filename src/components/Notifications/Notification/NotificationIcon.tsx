import { MdError, MdWarning, MdInfo } from "react-icons/md";
import { NotificationType } from "@/types/notificationType";
import { css } from "@emotion/react";

export const NotificationIcon = ({ level }: { level: NotificationType }) => {
  const iconCss = {
    fontSize: "5rem",
    marginRight: "1rem",
  };

  const icons: { [key: string]: JSX.Element } = {
    info: <MdInfo css={css({ ...iconCss, color: "#006fd6" })} />,
    warning: <MdWarning css={css({ ...iconCss, color: "#dfc800" })} />,
    error: <MdError css={css({ ...iconCss, color: "#ff6363" })} />,
  };

  return icons[level];
};
