import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early Equity | Hannigan Alderson",
  description: "Early Equity - A minimalist showcase of strategic investments and entrepreneurial ventures.",
  keywords: ["Early Equity", "Investments", "Entrepreneurship", "Hannigan Alderson", "Strategic Ventures"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hannigana.com/earlyequity",
    siteName: "Hannigan Alderson",
    title: "Early Equity | Hannigan Alderson",
    description: "Early Equity - A minimalist showcase of strategic investments and entrepreneurial ventures.",
    images: [
      {
        url: "/finalequity.png",
        width: 1200,
        height: 630,
        alt: "Early Equity - Strategic investments and entrepreneurial ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hannigana",
    creator: "@hannigana",
    title: "Early Equity | Hannigan Alderson",
    description: "Early Equity - A minimalist showcase of strategic investments and entrepreneurial ventures.",
    images: ["/finalequity.png"],
  },
};

export default function EarlyEquityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 