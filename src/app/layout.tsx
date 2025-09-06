import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Hannigan Alderson",
  keywords: ["Hannigan Alderson", "Computer Science", "Podcast Host", "Investor", "Entrepreneur", "SquidTalk", "Outliers"],
  authors: [{ name: "Hannigan Alderson" }],
  creator: "Hannigan Alderson",
  publisher: "Hannigan Alderson",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hannigana.com",
    siteName: "Hannigan Alderson",
    title: "Hannigan Alderson",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Hannigan Alderson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hannigana",
    creator: "@hannigana",
    title: "Hannigan Alderson",
    images: ["/profile.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          lora.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
