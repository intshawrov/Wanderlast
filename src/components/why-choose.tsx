import { Headphones, Map, ShieldCheck, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-brand-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-heading text-4xl text-foreground sm:text-[40px]">
            Why Choose Wanderlast
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-border bg-white p-6 text-left"
            >
              <feature.icon className="size-8 text-brand" aria-hidden />
              <h3 className="mt-8 font-heading text-2xl text-foreground">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
