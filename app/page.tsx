import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Journal } from "@/components/sections/Journal";
import { Packages } from "@/components/sections/Packages";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyLuxLayer } from "@/components/sections/WhyLuxLayer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <Packages />
      <WhyLuxLayer />
      <Philosophy />
      <Testimonials />
      <Journal />
      <Contact />
      <Footer />
    </>
  );
}
