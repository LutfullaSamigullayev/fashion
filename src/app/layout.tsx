import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Footer, Header, PromotionModal } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CEIN Fashion Shop",
  description: "CEIN Online Fashion Shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <div className="h-full flex flex-col justify-between">
          <Header />
          {/* <PromotionModal /> */}
          <div className=" basis-full">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
