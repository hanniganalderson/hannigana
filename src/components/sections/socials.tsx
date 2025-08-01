"use client";
import Link from "next/link";
import { Globe, Music, Linkedin } from "lucide-react";

const socialLinks = [
  { name: "early equity", href: "/earlyequity", internal: true, icon: Globe, iconAfter: false },
  { name: "listen on spotify", href: "https://open.spotify.com/show/7GJN0UTtuNgPENsu2qWw3Y?si=c8574ca78a694411", internal: false, icon: Music, iconAfter: false },
  { name: "my linked", href: "https://www.linkedin.com/in/hanniganalderson", internal: false, icon: Linkedin, iconAfter: true },
];

export function Socials() {
  return (
    <section className="flex flex-col text-left gap-2">
      <h2 className="text-sm font-medium text-muted-foreground">Socials</h2>
      <div className="flex flex-col items-start gap-1">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              target={link.internal ? undefined : "_blank"}
              rel={link.internal ? undefined : "noopener noreferrer"}
              className="text-primary font-medium hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-2 group px-2 py-1 rounded-md hover:bg-primary/5 border border-transparent hover:border-primary/20"
            >
              {!link.iconAfter && <Icon className="w-4 h-4 opacity-70" />}
              {link.name}
              {link.iconAfter && <Icon className="w-4 h-4 opacity-70" />}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
