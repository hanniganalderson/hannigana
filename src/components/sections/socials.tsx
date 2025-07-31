"use client";
import Link from "next/link";

const socialLinks = [
  { name: "early equity", href: "https://earlyequity.carrd.co" },
  { name: "listen on spotify", href: "https://open.spotify.com/show/7GJN0UTtuNgPENsu2qWw3Y?si=c8574ca78a694411" },
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
            className="text-primary font-medium hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 group px-2 py-1 rounded-md hover:bg-primary/5 border border-transparent hover:border-primary/20"
          >
            {link.name}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
