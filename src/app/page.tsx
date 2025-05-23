import HeroSection from "../components/HeroSection";
import ServicesPreview from "../components/ServicesPreview";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </>
  );
}
