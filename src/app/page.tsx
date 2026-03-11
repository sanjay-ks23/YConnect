import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
    </>
  );
}
