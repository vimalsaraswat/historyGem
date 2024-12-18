import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const plexMono = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HistoryGem",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexMono.className} antialiased`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
