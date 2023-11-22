import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Money Tracker | Track your money",
  description: "Made for people to track their offline spendings",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-100`}>
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-400 to-blue-300 opacity-70 -z-50 filter blur-3xl" />
        <Nav />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
