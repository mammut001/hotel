import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import { HOTEL_INFO } from "@/data/room-data";
import ClientInitializer from "@/components/ClientInitializer";

export const metadata: Metadata = {
  title: `${HOTEL_INFO.name} | ${HOTEL_INFO.description}`,
  description: HOTEL_INFO.description,
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className={inter.className}>
      <ClientInitializer/>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
