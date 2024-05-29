import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://www.site.uz/"),
    title: "ANSOR SAFETY",
    description:
      "Ansor Safety MCHJ - avtotransport va mashinasozlik mahsulotlarini sinovlari va sertifikatlashtirish ishlarini bajaradi.",
    keywords: [
      "Ansor Safety",
      "avtotransport va mashinasozlik mahsulotlarini sinovlari",
      "sertifikatlashtirish",
    ],
    alternates: {
      canonical: "./",
    },
    applicationName: "Ansor Safety MCHJ",
    type: "website",
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
    twitter: {
      card: "/og.png",
      title: "Ansor Safety MCHJ ",
      description: "Ansor Safety MCHJ",
      images: {
        url: "/og.png",
      },
    },
    openGraph: {
      title: "Ansor Safety MCHJ ",
      description:
        "Ansor Safety MCHJ - avtotransport va mashinasozlik mahsulotlarini sinovlari va sertifikatlashtirish ishlarini bajaradi.",
      url: "https://www.site.uz/",
      siteName: "Ansor Safety",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 800,
          height: 600,
          alt: "Ansor Safety",
        },
        {
          url: "/og.png",
          width: 1800,
          height: 1600,
          alt: "Ansor Safety",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
