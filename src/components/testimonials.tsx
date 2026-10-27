"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    image: "/testimonials/michael.jpg",
  },
  {
    quote:
      "Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend!",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/testimonials/sarah.jpg",
  },
  {
    quote:
      "Kyoto exceeded every expectation. The cherry blossoms, the ryokan stay, our guide's deep cultural knowledge — a once-in-a-lifetime journey from start to finish.",
    name: "David Kim",
    location: "Tokyo, Japan",
    image: "/testimonials/james.jpg",
  },
  {
    quote:
      "The Amalfi Coast tour was pure magic. Seamless transfers, incredible local food experiences, and a pace that let us actually relax and enjoy it all.",
    name: "Elena Rossi",
    location: "Rome, Italy",
    image: "/testimonials/priya.jpg",
  },
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-4xl text-foreground sm:text-[40px]">
              What Travelers Say
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Real experiences from our happy travelers
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Button
              variant="outline"
              onClick={scrollPrev}
              aria-label="Previous testimonials"
              className="size-11 rounded-full border-muted-foreground/40 bg-white hover:bg-background"
            >
              <ArrowLeft aria-hidden />
            </Button>
            <Button
              variant="outline"
              onClick={scrollNext}
              aria-label="Next testimonials"
              className="size-11 rounded-full border-muted-foreground/40 bg-white hover:bg-background"
            >
              <ArrowRight aria-hidden />
            </Button>
          </div>
        </div>

        <Carousel
          className="mt-12"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="md:basis-1/2">
                <figure className="flex h-full border border-border bg-white">
                  <div className="flex flex-1 flex-col p-5">
                    <blockquote className="font-heading text-lg leading-snug text-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-auto pt-8">
                      <div className="text-sm text-[#45a3d6]">
                        &mdash; {testimonial.name}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </figcaption>
                  </div>
                  <div className="relative m-4 w-40 shrink-0 sm:w-44">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="(min-width: 1024px) 176px, 160px"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
