import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { Providers } from "@/providers";
import "the-new-css-reset/css/reset.css";
import { backgroundColor } from "@/constants";
import { ClientLayout } from "@/app/clientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony",
  description: "Visualize your mental leeway from deadlines",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="jp" style={{ backgroundColor }}>
      <body className={inter.className}>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
