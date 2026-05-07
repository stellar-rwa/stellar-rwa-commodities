import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CommoditiesSection } from "@/components/sections/CommoditiesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TechStackSection } from "@/components/sections/TechStackSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <HeroSection />
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <StatsSection />
      </div>
      <CommoditiesSection />
      <HowItWorksSection />
      <TechStackSection />
    </div>
  );
}
