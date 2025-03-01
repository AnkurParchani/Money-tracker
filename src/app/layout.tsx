import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Nav from "../components/Nav";
import { AppColorProvider } from "@/contexts/AppColorContext";
import MainBody from "@/components/MainBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Money Tracker | Track your money",
  description: "Made for people to track their offline spendings",
  icons: {
    icon: "/favicon.ico",
  },
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <AppColorProvider>
        <MainBody>
          <Nav />
          {children}
          <Toaster />
        </MainBody>
      </AppColorProvider>
    </html>
  );
}
