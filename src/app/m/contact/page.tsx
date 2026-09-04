import type { Metadata } from "next";
import { ContactForm } from "@/components/mobile/forms/ContactForm";
import { Clock3, Globe2, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — YConnect",
  description:
    "Get in touch with YConnect. We're here to help startups and students connect globally.",
};

const infoCards = [
  {
    icon: Mail,
    title: "Email",
    value: "dauren.oberhuber@yconnect.info",
    breakAll: true,
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "Usually within 24 hours",
  },
  {
    icon: Globe2,
    title: "Remote First",
    value: "Fully remote by design",
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero */}
      <section className="min-h-screen pt-28 pb-14 relative z-10 flex flex-col justify-center items-center bg-gradient-to-b from-vibrant-crimson/10 via-white to-white">
        <div className="container-superhi relative z-10 -mt-16">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-center max-w-xl mx-auto mb-5 leading-[1.15] tracking-tight">
              Ready to <span className="text-vibrant-crimson">Connect?</span>
            </h1>
            <p className="max-w-md mx-auto text-base sm:text-lg text-[#001738]/70 leading-relaxed mb-8 text-center">
              Whether you're a founder or a student, we're here to help. Reach out and let's see how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-14 sm:py-24 bg-white relative z-10">
        <div className="container-superhi">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-10 lg:gap-16">
            {/* Sidebar: Contact Info */}
            <div className="lg:pt-16 space-y-6 sm:space-y-8">
              <div className="text-center lg:text-left space-y-2 max-w-md mx-auto lg:max-w-none">
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#001738]">Reach Out</h2>
                <p className="text-base text-[#001738]/60 leading-relaxed w-full">
                  Have a question, idea, or a project? Reach out and let us connect today.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 max-w-md mx-auto lg:max-w-none">
                {infoCards.map((card) => (
                  <div
                    key={card.title}
                    className="p-5 sm:p-6 rounded-2xl bg-vibrant-crimson/5 border border-vibrant-crimson/10 flex items-center gap-4 hover:scale-[1.02] transition-transform"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                      <card.icon className="w-5 h-5 text-vibrant-crimson" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm text-[#001738] mb-0.5">{card.title}</h3>
                      <p className={`text-[#001738]/60 text-sm ${card.breakAll ? "break-all" : ""}`}>{card.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content: Form */}
            <div className="bg-white p-6 sm:p-10 md:p-14 rounded-3xl sm:rounded-[3rem] border border-gray-100 relative overflow-hidden">
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#001738] mb-3">
                Send us a message
              </h2>
              <p className="text-[#001738]/60 mb-8 text-[16px] leading-relaxed w-full">
                Our dedicated team typically responds within two to four business hours. Please let us know how we can help you.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
