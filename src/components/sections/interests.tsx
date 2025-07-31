import Link from "next/link";

export function Interests() {
  return (
    <section className="flex flex-col gap-4 text-left">
      <p>
        I'm broadly interested in entrepreneurship, investing in startups and
        real estate, and improving my decision making to shape long term
        outcomes.
      </p>
      <p>
        Reach out at{" "}
        <Link
          href="mailto:hi@hannigana.com"
          className="text-primary underline-offset-4 hover:underline transition-colors"
        >
          hi@hannigana.com
        </Link>
      </p>
    </section>
  );
}
