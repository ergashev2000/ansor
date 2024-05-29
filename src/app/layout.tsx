import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://www.ansorsafety.uz/"),
    title: "Ansor safety",
    description:
      "Ansor Safety MCHJ - avtotransport va mashinasozlik mahsulotlarini sinovlari va sertifikatlashtirish ishlarini bajaradi.",
    keywords: [
      "Ansor Safety",
      "Avtotransport va mashinasozlik mahsulotlarini sinovlari",
      "Sertifikatlashtirish",
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
