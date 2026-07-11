import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { PropertySearch } from "@/components/sections/PropertySearch";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { PropertyDetail } from "@/components/sections/PropertyDetail";
import { Philosophy } from "@/components/sections/Philosophy";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Agents } from "@/components/sections/Agents";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <PropertySearch />
        <FeaturedProperties />
        <PropertyDetail />
        <Philosophy />
        <Services />
        <Process />
        <Agents />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
