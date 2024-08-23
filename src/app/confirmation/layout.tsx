import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Rooms({children,}: { children: React.ReactNode;}) {
  return (
    <html lang="en" className={inter.className}>
    <body>{children}</body>
    <Analytics />
    </html>
  );
}
