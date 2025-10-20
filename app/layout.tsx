import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "approU - Mortgage Solutions Canada",
    template: "%s | approU",
  },
  description: "Expert mortgage guidance, calculators, and solutions for Canadian homebuyers. Get pre-approved today with approU.",
  keywords: ["mortgage", "home loan", "mortgage broker", "mortgage rates", "home buying", "refinance", "canada"],
  authors: [{ name: "approU" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://approu.com",
    siteName: "approU",
    title: "approU - Mortgage Solutions Canada",
    description: "Expert mortgage guidance, calculators, and solutions for Canadian homebuyers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "approU - Mortgage Solutions Canada",
    description: "Expert mortgage guidance, calculators, and solutions for Canadian homebuyers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
