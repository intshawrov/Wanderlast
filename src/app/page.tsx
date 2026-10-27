import { Navbar } from "@/components/navbar";
import { Banner } from "@/components/banner";
import { WhyChoose } from "@/components/why-choose";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <Banner />
      <WhyChoose />
      <Testimonials />
    </div>
  );
}
