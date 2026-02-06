import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MarqueeStrip from "@/components/marquee-strip";
import About from "@/components/about";
import Stats from "@/components/stats";
import Concept from "@/components/concept";
import Gallery from "@/components/gallery";
import CtaBanner from "@/components/cta-banner";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <About />
      <Stats />
      <Concept />
      <Gallery />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}
