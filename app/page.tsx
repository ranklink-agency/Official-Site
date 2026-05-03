import Hero from '@/components/Hero';
import LogoStrip from '@/components/LogoStrip';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import ServiceDetail from '@/components/ServiceDetail';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <About />
      <Pricing />
      <Stats />
      <Services />
      <ServiceDetail />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </>
  );
}
