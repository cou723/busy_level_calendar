"use client";
import Loading from "@/components/Loading";
import { css } from "@emotion/react";
import React from "react";

function LoadingPage() {
  return (
    <div
      css={css({
        alignItems: "center",
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
      })}
    >
      <Loading />
    </div>
  );
}

export default LoadingPage;
