import Image from "next/image";

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
          investors on early decision making.
        </p>
      </div>
    </section>
  );
}
