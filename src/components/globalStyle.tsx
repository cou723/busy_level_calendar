"use client";
import { backgroundColor } from "@/constants";
import { css } from "@emotion/react";

export const globalStyle = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  background-color: ${backgroundColor};
`;
