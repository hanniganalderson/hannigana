import { Hero } from "@/components/sections/hero";
import { Interests } from "@/components/sections/interests";
import { Socials } from "@/components/sections/socials";
import { Thoughts } from "@/components/sections/thoughts";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 md:py-20">
      <div className="flex flex-col gap-10">
        <Hero />
        <Interests />
        <Socials />
        <Thoughts />
        <Newsletter />
      </div>
    </div>
  );
}
