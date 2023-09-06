import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import appConfig from "@/app.config";
import { Header } from "@/app/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${appConfig.name} - Welcome`,
  description: appConfig.meta.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  h-screen bg-light-blue text-white`}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
