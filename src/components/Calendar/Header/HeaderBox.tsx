import { css } from "@emotion/react";
import { FunctionComponent } from "react";

interface HeaderStyleProps {
  children: React.ReactNode;
}
export const HeaderBox: FunctionComponent<HeaderStyleProps> = ({ children }) => {
  return (
    <div
      css={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      {children}
    </div>
  );
};
