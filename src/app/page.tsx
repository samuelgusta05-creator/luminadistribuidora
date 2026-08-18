import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Brands } from '@/components/Brands';
import { CinematicShowcase } from '@/components/CinematicShowcase';
import { Features } from '@/components/Features';
import { ProductGrid } from '@/components/ProductGrid';
import { Testimonials } from '@/components/Testimonials';
import { LocationSection } from '@/components/LocationSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#1d1d1f] selection:bg-[#1d1d1f] selection:text-[#ffffff]">
      <Header />
      <Hero />
      <Brands />
      <CinematicShowcase />
      <Features />
      <ProductGrid />
      <Testimonials />
      <LocationSection />
      <Footer />
    </main>
  );
}
