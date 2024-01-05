import Neu from "@/components/utils/Neu";
import { css } from "@emotion/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const SmallContainer = ({ children }: Props) => {
  return (
    <Neu
      css={css({
        maxWidth: "50%",
        margin: "0 auto",
        marginTop: "10rem",
        padding: "2rem",
      })}
    >
      <div>{children}</div>
    </Neu>
  );
};

export default SmallContainer;
