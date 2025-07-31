"use client";
import Link from "next/link";

const socialLinks = [
  { name: "early equity", href: "https://earlyequity.carrd.co" },
  { name: "linkedin", href: "https://www.linkedin.com/in/hanniganalderson" },
];

export function Socials() {
  return (
    <section className="flex flex-col text-left gap-2">
      <h2 className="text-sm font-medium text-muted-foreground">socials</h2>
      <div className="flex flex-col items-start gap-1">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
