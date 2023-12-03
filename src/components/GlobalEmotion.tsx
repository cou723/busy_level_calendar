import { backgroundColor } from "@/constants";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const GlobalEmotion = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
        /* background-color: ${backgroundColor}; */
      `}
    />
  );
};
