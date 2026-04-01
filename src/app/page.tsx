import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { StartupForm } from "@/components/forms/StartupForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <div className="bg-[#FAF9F6]">
        <WaveDivider color="#FAF9F6" variant={2} flip />
        <HowItWorks />
        <WaveDivider color="#F6F4FB" variant={1} />
      </div>

      <div className="bg-[#F6F4FB]">
        <WhyChooseUs />
        <WaveDivider color="#F0F8EC" variant={3} />
      </div>

      <div className="bg-[#F0F8EC]">
        <FAQ />
      </div>
    </>
  );
}
