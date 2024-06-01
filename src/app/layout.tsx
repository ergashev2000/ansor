import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ansorsafety.uz/"),
  title: "Ansor Safety",
  description:
    "Ansor Safety MCHJ - avtotransport va mashinasozlik mahsulotlarini sinovlari va sertifikatlashtirish ishlarini bajaradi.",
  alternates: {
    canonical: "./",
  },
  referrer: "origin-when-cross-origin",
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/ico",
    },
    shortcut: {
      url: "/favicon.ico",
      type: "image/ico",
    },
    apple: {
      url: "/favicon.ico",
      type: "image/ico",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.ansorsafety.uz",
    title: "Ansor Safety",
    description:
      "Ansor Safety MCHJ - avtotransport va mashinasozlik mahsulotlarini sinovlari va sertifikatlashtirish ishlarini bajaradi.",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Ansor Safety Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AnsorSafety",
    title: "Ansor Safety",
    description:
      "Ansor Safety MCHJ - avtotransport va mashinasozlik mahsulotlarini sinovlari va sertifikatlashtirish ishlarini bajaradi.",
    images: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
