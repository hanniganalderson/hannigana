import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SquidTalk ↔ Outliers | Strategic Network Intelligence",
  description: "Interactive network visualization connecting SquidTalk podcast guests with the Outliers community. Strategic pipeline analysis and curated introductions.",
  keywords: ["SquidTalk", "Outliers", "Network Intelligence", "Podcast", "Community", "Strategic Introductions", "Hannigan Alderson"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hannigana.com/squid",
    siteName: "Hannigan Alderson",
    title: "SquidTalk ↔ Outliers | Strategic Network Intelligence",
    description: "Interactive network visualization connecting SquidTalk podcast guests with the Outliers community. Strategic pipeline analysis and curated introductions.",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "SquidTalk ↔ Outliers Network Intelligence - Interactive visualization of podcast guests and community members",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hannigana",
    creator: "@hannigana",
    title: "SquidTalk ↔ Outliers | Strategic Network Intelligence",
    description: "Interactive network visualization connecting SquidTalk podcast guests with the Outliers community.",
    images: ["/profile.png"],
  },
};

export default function SquidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 