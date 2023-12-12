"use client";
// app/404.tsx
import Neu from "@/components/utils/Neu";
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <Neu>
      <h1>404 Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
    </Neu>
  );
};

export default NotFoundPage;
