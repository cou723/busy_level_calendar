"use client";
import { globalStyle } from "@/components/globalStyle";
import { css } from "@emotion/react";
import { Global } from "@emotion/react";

type ClientLayoutProps = {
  children: React.ReactNode;
};

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div css={css({ padding: "2rem", color: "red" })}>
      <Global styles={globalStyle} />
      {children}
    </div>
  );
}
