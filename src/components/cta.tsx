import { ArrowRight } from "lucide-react";

export function Cta() {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-[#0a2327]">
      {/*
        Background image slot: add your image here, e.g.
        <Image src="/cta-bg.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        and keep the dark overlay below for text contrast.
      */}

      <div className="relative z-10 flex min-h-[inherit] flex-col items-center justify-center px-4 py-28 text-center">
        <h2 className="max-w-3xl font-heading text-4xl text-white sm:text-[44px]">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-sm text-white/85 sm:text-base">
          Join thousands of travelers who have discovered the world with us
        </p>
        <a
          href="/destinations"
          className="mt-10 flex items-center justify-center gap-2.5 bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-white/85"
        >
          Book Your Trip Today
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
