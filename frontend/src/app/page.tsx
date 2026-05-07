import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CommoditiesSection } from "@/components/sections/CommoditiesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { WhyStellarSection } from "@/components/sections/WhyStellarSection";
import { PartnersStrip } from "@/components/sections/PartnersStrip";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PartnersStrip />
      <div className="divider-gold" />
      <CommoditiesSection />
      <HowItWorksSection />
      <StatsSection />
      <WhyStellarSection />
      <TechStackSection />
    </div>
  );
}
