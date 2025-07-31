import Link from "next/link";

const thoughtLinks = [
  { name: "collective ideas and content i enjoy", href: "/thoughts/collective-ideas" },
  { name: "my own ideas", href: "/thoughts/my-ideas" },
  { name: "what i'm planning / working on", href: "/thoughts/planning" },
];

export function Thoughts() {
  return (
    <section className="flex flex-col text-left gap-2">
      <h2 className="text-sm font-medium text-muted-foreground">
        Jumbled thoughts on
      </h2>
      <div className="flex flex-col items-start gap-1">
        {thoughtLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
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
