import Neu from "@/components/utils/Neu";
import { css } from "@emotion/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const NormalContainer = ({ children }: Props) => {
  return (
    <Neu
      css={css({
        width: "80%",

        margin: "auto",
        marginTop: "2rem",
      })}
    >
      {children}
    </Neu>
  );
};

export default NormalContainer;
