import "./globals.css";
import { Mulish } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const mulish = Mulish({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "UTrack",
  description: "IP Detection Application",
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
