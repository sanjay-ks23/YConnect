import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { StartupForm } from "@/components/forms/StartupForm";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://yconnect.info/#organization",
            "name": "YConnect",
            "url": "https://yconnect.info",
            "logo": "https://yconnect.info/branding/yconnect-logo-transparent.png",
            "description": "YConnect connects early-stage European startups with vetted engineering students from top Indian universities.",
            "sameAs": ["https://www.linkedin.com/company/yconnect-info/"],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "dauren.oberhuber@yconnect.info",
              "contactType": "customer service",
            },
          },
          {
            "@type": "WebSite",
            "@id": "https://yconnect.info/#website",
            "url": "https://yconnect.info",
            "name": "YConnect",
            "publisher": {
              "@id": "https://yconnect.info/#organization"
            },
            "inLanguage": "en-US",
          }
        ]
      }} />
      <HeroSection />
      
      <div className="bg-[#FAF9F6]">
        <WaveDivider color="#FAF9F6" variant={2} flip />
        <HowItWorks />
        <WaveDivider color="#F6F4FB" variant={1} />
      </div>

      <div className="bg-[#F6F4FB]">
        <Testimonials />
        <WaveDivider color="#F0F8EC" variant={3} />
      </div>

      <div className="bg-[#F0F8EC]">
        <FAQ />
      </div>
    </>
  );
}
