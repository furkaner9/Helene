import FaqSection from "@/components/sections/Faqsection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/Howitworks";
import StatsSection from "@/components/sections/Statssection";
import TreatmentsPreview from "@/components/sections/Treatmentspreview";


export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TreatmentsPreview />
      <HowItWorks />
      <StatsSection />
      <FaqSection />
    </main>
  );
}