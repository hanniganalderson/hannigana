import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts | Hannigan Alderson",
  description: "Personal thoughts, ideas, and insights on entrepreneurship, technology, and strategic thinking.",
  keywords: ["Thoughts", "Ideas", "Entrepreneurship", "Strategic Thinking", "Hannigan Alderson", "Insights"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hannigana.com/thoughts",
    siteName: "Hannigan Alderson",
    title: "Thoughts | Hannigan Alderson",
    description: "Personal thoughts, ideas, and insights on entrepreneurship, technology, and strategic thinking.",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Thoughts and insights by Hannigan Alderson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@hannigana",
    creator: "@hannigana",
    title: "Thoughts | Hannigan Alderson",
    description: "Personal thoughts, ideas, and insights on entrepreneurship, technology, and strategic thinking.",
    images: ["/profile.png"],
  },
};

export default function ThoughtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 