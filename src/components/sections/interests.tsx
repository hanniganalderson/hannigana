import Link from "next/link";

export function Interests() {
  return (
    <section className="flex flex-col gap-6 text-left">
      <p>
        I'm interested across entrepreneurship, investing in startups and
        real estate, and improving my decision making.
      </p>
      <div className="pt-2">
        <p className="text-sm text-muted-foreground mb-2">Reach me at</p>
        <Link
          href="mailto:hi@hannigana.com"
          className="text-primary font-medium hover:text-primary/80 transition-colors duration-200 inline-flex items-center gap-1 group px-2 py-1 rounded-md hover:bg-primary/5 border border-transparent hover:border-primary/20"
        >
          hi@hannigana.com
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">→</span>
        </Link>
      </div>
    </section>
  );
}
