import FAQSection from '@/components/FAQSection';
import FeatureSection from '@/components/FeatureSection';
import HeroSection from '@/components/HeroSection';
import WorkSection from '@/components/WorkSection';

export default function Home() {
  return (
    <>
      <div className="px-8 md:px-32">
        <HeroSection />
        <FeatureSection />
        <WorkSection />
        <FAQSection />
      </div>
    </>
  );
}
