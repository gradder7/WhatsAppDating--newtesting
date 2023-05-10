import Feature from '@/components/Benifits1';
import Benifits from '@/components/Benifits2';
import Benifits2 from '@/components/Benifits3';
// import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductAbout';
import TestHeroSection from '@/components/TestHeroSection';
import Usage from '@/components/Usage';

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <TestHeroSection />
      <ProductSection />
      <Feature />
      <Benifits />
      <Benifits2 />
      <Usage />
    </>
  );
}
