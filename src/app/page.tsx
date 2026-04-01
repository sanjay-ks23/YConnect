import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { WaveDivider } from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />

      <WaveDivider color="#F6F4FB" />
      <div className="bg-[#F6F4FB]">
        <WhyChooseUs />
      </div>

      <WaveDivider color="#F0F8EC" />
      <div className="bg-[#F0F8EC]">
        <FAQ />
      </div>

      <WaveDivider color="#FFFFFF" />
      <CTASection />
    </>
  );
}
