"use client";
import { css } from "@emotion/react";

import { backgroundColor } from "@/constants";

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
