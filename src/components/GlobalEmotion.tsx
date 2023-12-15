"use client";
import { backgroundColor } from "@/constants";
import { Global, css } from "@emotion/react";

export const GlobalEmotion = () => {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
        background-color: #999;
      `}
    />
  );
};
