import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyMacaronSection from "@/components/WhyMacaronSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechnicalSection from "@/components/TechnicalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full relative bg-[#F9F7F1] min-h-screen overflow-x-hidden">
      {/* SVG Filter for noise effect */}
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        <filter id="noiseFilter" x="0" y="0" width="100" height="100" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>

      <Navigation />
      
      <div className="flex w-full min-h-full flex-col items-center pt-[44px] md:pt-[64px]">
        <HeroSection />
        <WhyMacaronSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <TechnicalSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;