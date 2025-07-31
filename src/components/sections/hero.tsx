import Image from "next/image";
import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center gap-6">
      <Image
        src="/profile.png"
        alt="Hannigan Alderson"
        width={100}
        height={100}
        className="rounded-full"
        data-ai-hint="profile picture"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-serif font-bold tracking-tight">
          Hannigan Alderson
        </h1>
        <p className="max-w-md text-muted-foreground">
          I'm a Computer Science student and podcast host. Early Equity is a collection of ideas from founders and
          investors on early decision making. This is an archive of what I want to remember & implement.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Bend, OR</span>
        </div>
      </div>
    </section>
  );
}
