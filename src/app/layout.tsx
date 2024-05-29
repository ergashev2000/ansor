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
