import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CommoditiesSection } from "@/components/sections/CommoditiesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ContributeSection } from "@/components/sections/ContributeSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <HeroSection />
      <StatsSection />
      <CommoditiesSection />
      <HowItWorksSection />
      <TechStackSection />
      <ContributeSection />
    </div>
  );
}
