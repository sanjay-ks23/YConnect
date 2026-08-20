import type { Metadata } from "next";
import { Building2, GraduationCap, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About — YConnect",
  description:
    "Our journey in bridging the gap between European innovation and Indian engineering excellence.",
};

const stats = [
  { icon: Building2, value: "Up to 90%", label: "Save on hiring cost" },
  { icon: GraduationCap, value: "Top 5%", label: "Engineers from India" },
  { icon: ShieldCheck, value: "100% Reliable", label: "Safe payment & contracts" },
  { icon: Users, value: "3 Month Average", label: "Typical project duration" },
];

const team = [
  {
    name: "Sanjay",
    role: "Founder and CTO",
    image: "/images/Sanjay.jpg",
    href: "https://www.linkedin.com/in/sanjayks2317/",
  },
  {
    name: "Dauren Oberhuber",
    role: "Co-Founder and CFO",
    image: "/images/Dauren.png",
    href: "https://www.linkedin.com/in/dauren-oberhuber-3602a4330/",
  },
  {
    name: "Pavithran",
    role: "Co-Founder",
    image: "/images/pavithran_HD.jpeg",
    href: "https://www.linkedin.com/in/pavithranks/",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero */}
      <section className="min-h-[70vh] pt-28 pb-14 relative z-10 flex items-center bg-gradient-to-b from-vibrant-blue/5 to-white">
        <div className="container-superhi relative z-10">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-center max-w-xl mx-auto mb-5 leading-[1.15] tracking-tight">
              Where Talent Meets <span className="text-vibrant-green font-display">Innovation</span>
            </h1>
            <p className="max-w-md mx-auto text-base sm:text-lg text-[#001738]/70 leading-relaxed mb-8 text-center [text-wrap:pretty]">
              We exist because world class engineering talent should be accessible to every ambitious startup, without any barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Connecting Section */}
      <section className="py-14 sm:py-24 bg-white relative overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(46,49,209,0.02),transparent_50%)]" />
        <div className="container-superhi relative z-10">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight leading-[1.15] mb-4">
              Connecting <span className="text-vibrant-blue">Early Stage Startups</span> with{" "}
              <span className="text-vibrant-orange font-display">Indian Engineers</span>
            </h2>
            <p className="max-w-md mx-auto text-base sm:text-lg text-[#001738]/70 leading-relaxed text-center [text-wrap:pretty]">
              We built YConnect because European startups need affordable, top tier engineering talent, while Indian students deserve direct global opportunities to gain exposure and experience. We handle the screening, contracts, and payments so you can focus on building.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-vibrant-blue/5 p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-vibrant-blue/10 flex flex-col items-center text-center gap-2 sm:gap-4"
              >
                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-vibrant-blue" />
                <h3 className="text-base sm:text-xl font-bold text-[#001738]">{stat.value}</h3>
                <p className="text-center text-xs sm:text-sm text-[#001738]/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-14 sm:py-24 bg-white relative z-10">
        <div className="container-superhi">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#001738] tracking-tight">
              Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-xl sm:max-w-none mx-auto">
            {team.map((member) => (
              <a
                key={member.name}
                href={member.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5F5F5] rounded-2xl overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-full aspect-[4/5] relative overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-[#001738] mb-0.5 leading-tight">{member.name}</h3>
                  <p className="text-xs sm:text-sm text-[#001738]/60 font-medium">{member.role}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
