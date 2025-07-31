import Link from "next/link";

const thoughtLinks = [
  { name: "collective ideas", href: "#" },
  { name: "my own ideas", href: "#" },
  { name: "what i'm planning / working on", href: "#" },
];

export function Thoughts() {
  return (
    <section className="flex flex-col text-left gap-2">
      <h2 className="text-sm font-medium text-muted-foreground">
        jumbled thoughts on
      </h2>
      <div className="flex flex-col items-start gap-1">
        {thoughtLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-primary underline-offset-4 hover:underline transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
