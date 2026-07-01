import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <Philosophy />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
