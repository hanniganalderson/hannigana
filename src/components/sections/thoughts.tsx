import Link from "next/link";

const thoughtLinks = [
  { name: "collective ideas and content i enjoy", href: "/thoughts/collective-ideas" },
  { name: "my own ideas", href: "/thoughts/my-ideas" },
  { name: "what i'm planning / working on", href: "/thoughts/planning" },
];

export function Thoughts() {
  return (
    <section className="flex flex-col text-left gap-2 md:gap-2">
      <h2 className="text-sm md:text-sm font-medium text-muted-foreground">
        Jumbled thoughts on
      </h2>
      <div className="flex flex-col items-start gap-1 md:gap-1">
        {thoughtLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-primary font-medium hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 group px-3 py-2 md:px-2 md:py-1 rounded-md hover:bg-primary/5 border border-transparent hover:border-primary/20 text-base md:text-base min-h-[44px] md:min-h-0 flex items-center"
          >
            {link.name}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
