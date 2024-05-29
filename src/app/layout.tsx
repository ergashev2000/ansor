import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = "https://www.ansorsafety.uz/";

  return {
    metadataBase: new URL(siteUrl),
    title: "Ansor Safety",
    description:
      "Ansor Safety MCHJ - avtotransport va mashinasozlik mahsulotlarini sinovlari va sertifikatlashtirish ishlarini bajaradi.",
    keywords: [
      "Ansor Safety",
      "Avtotransport va mashinasozlik mahsulotlarini sinovlari",
      "Sertifikatlashtirish",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      title: "Ansor Safety",
      description:
        "Ansor Safety MCHJ - avtotransport va mashinasozlik mahsulotlarini sinovlari va sertifikatlashtirish ishlarini bajaradi.",
      siteName: "Ansor Safety",
      images: [
        {
          url: `${siteUrl}images/logo.png`,
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
      images: [`${siteUrl}images/logo.png`],
    },
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    alternates: {
      canonical: siteUrl,
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
