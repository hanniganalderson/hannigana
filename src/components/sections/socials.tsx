"use client";
import Link from "next/link";

const socialLinks = [
  { name: "early equity", href: "https://earlyequity.carrd.co" },
  { name: "my linkedin", href: "https://www.linkedin.com/in/hanniganalderson" },
];

export function Socials() {
  return (
    <section className="flex flex-col text-left gap-2">
      <h2 className="text-sm font-medium text-muted-foreground">Socials</h2>
      <div className="flex flex-col items-start gap-1">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 group"
          >
            {link.name}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
