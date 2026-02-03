import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food Truck Hub | Know Before You Roll",
  description: "The first comprehensive food truck permit database. Find permit requirements, costs, and deadlines for any major US city. Stop Googling. Start operating.",
  keywords: ["food truck permits", "food truck license", "mobile food vendor", "food truck requirements", "food truck business"],
  authors: [{ name: "Food Truck Hub" }],
  openGraph: {
    title: "Food Truck Hub | Know Before You Roll",
    description: "The first comprehensive food truck permit database. Find permit requirements, costs, and deadlines for any major US city.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Truck Hub | Know Before You Roll",
    description: "The first comprehensive food truck permit database. Find permit requirements, costs, and deadlines for any major US city.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
