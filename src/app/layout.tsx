import "./globals.css";
import { Mulish } from "next/font/google";
import { Metadata } from "next";
import Header from "./Header";
import Footer from "./Footer";

const mulish = Mulish({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "UTrack",
  description: "IP Detection Application",
  themeColor: "black",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 2,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        <Footer />
        {children}
      </body>
    </html>
  );
}
