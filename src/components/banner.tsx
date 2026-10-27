import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchField {
  label: string;
  placeholder: string;
}

const searchFields: SearchField[] = [
  { label: "Location", placeholder: "Address, City Or Zip" },
  { label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { label: "Budget", placeholder: "$0-$3000" },
  { label: "People", placeholder: "5-10" },
];

function SearchBar() {
  return (
    <div className="absolute inset-x-0 bottom-0 bg-black/45 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row">
        {searchFields.map((field, index) => (
          <button
            key={field.label}
            type="button"
            className={cn(
              "flex-1 px-6 py-4 text-left hover:bg-white/10 md:py-5",
              index > 0 && "border-t border-white/20 md:border-t-0 md:border-l"
            )}
          >
            <span className="block font-heading text-lg text-white">
              {field.label}
            </span>
            <span className="mt-0.5 block text-sm text-white/75">
              {field.placeholder}
            </span>
          </button>
        ))}
        <button
          type="button"
          className="mt-0.5 w-full bg-brand py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-brand-dark md:mt-0 md:w-44 md:py-5"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export function Banner() {
  return (
    <section className="relative min-h-screen flex-1 overflow-hidden">
      <Image
        src="/hero-coast.jpg"
        alt="Aerial view of a turquoise coastline"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex min-h-[inherit] flex-col items-center justify-center px-4 pb-44 text-center">
        <h1 className="max-w-4xl font-sans text-5xl leading-[1.05] text-white sm:text-6xl lg:text-[88px]">
          Discover Your<br></br> Next Adventure
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/destinations"
            className="flex items-center justify-center gap-2.5 bg-brand px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Explore Now
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <a
            href="/destinations"
            className="flex items-center justify-center bg-white/30 px-7 py-4 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:bg-white/40"
          >
            View Destination
          </a>
        </div>
      </div>

      <SearchBar />
    </section>
  );
}
