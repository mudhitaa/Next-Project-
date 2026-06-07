import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "StrokeWorks | Art & Exhibition",
  description: "Welcome to a vibrant community of painters, collectors, and art lovers.",
  openGraph: {
    title: "StrokeWorks | Art & Exhibition",
    description: "Welcome to a vibrant community of painters, collectors, and art lovers.",
    url: "",
    type: "website",
  },
  twitter: {
    title: "StrokeWorks | Art & Exhibition",
    description: "Welcome to a vibrant community of painters, collectors, and art lovers.",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0f0d0b]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}