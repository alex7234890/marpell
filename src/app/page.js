import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MarqueeStrip from "@/components/marquee-strip";
import About from "@/components/about";
import Stats from "@/components/stats";
import Services from "@/components/services";
import Products from "@/components/products";
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
      <Services />
      <Products />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}
