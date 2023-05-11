import Benifits1 from '@/components/Benifits1';
import Benifits2 from '@/components/Benifits2';
import Benifits3 from '@/components/Benifits3';
import Features from '@/components/Features';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductAbout';
import Usage from '@/components/Usage';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <Benifits1 />
      <Benifits2 />
      <Benifits3 />
      <Usage />
      <Features />
    </>
  );
}
