import Link from "next/link";
import { Mail } from "lucide-react";

export function Interests() {
  return (
    <section className="flex flex-col gap-6 text-left">
      <p>
        Interested in entrepreneurship, investing in startups and
        real estate, and improving my decision making.
      </p>
      <div className="pt-2">
        <p className="text-sm text-muted-foreground mb-2">I'd love to connect at</p>
        <Link
          href="mailto:hi@hannigana.com"
          className="text-primary font-medium hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-2 group px-2 py-1 rounded-md hover:bg-primary/5 border border-transparent hover:border-primary/20"
        >
          <Mail className="w-4 h-4 opacity-70" />
          hi@hannigana.com
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
        </Link>
      </div>
    </section>
  );
}
