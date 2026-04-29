"use client";

import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";

interface GridItem {
  id: string;
  title: string;
  image?: string;
  bgImage?: string;
  count?: string;
}

interface StackedGridProps {
  title: string;
  subtitle: string | React.ReactNode;
  items: GridItem[];
  theme?: "blue" | "crimson";
  bgColor?: string;
}

export function StackedGrid({ title, subtitle, items, theme = "blue", bgColor = "bg-white" }: StackedGridProps) {
  const themeColor = theme === "blue" ? "text-vibrant-blue" : "text-vibrant-crimson";
  const themeBg = theme === "blue" ? "bg-vibrant-blue/10" : "bg-vibrant-crimson/10";
  const themeBorder = theme === "blue" ? "border-vibrant-blue/20" : "border-vibrant-crimson/20";
  const accentBg = theme === "blue" ? "bg-gradient-to-br from-white to-vibrant-blue/5" : "bg-gradient-to-br from-white to-vibrant-crimson/5";

  return (
    <section className={`py-24 relative overflow-hidden ${bgColor}`}>
      <div className="container-superhi relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-medium text-[#001738] mb-6 tracking-tight">
            {title}
          </h2>
          <div className="w-max max-w-full mx-auto text-justify [text-align-last:justify] text-[#001738]/50 text-lg md:text-xl leading-relaxed font-body">
            {subtitle}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`group relative aspect-[4/6] rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#001738]/10 ${accentBg}`}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white flex items-center justify-center overflow-hidden">
                  {item.bgImage && (
                    <Image
                      src={item.bgImage}
                      alt=""
                      fill
                      className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-[2px]"
                    />
                  )}
                  <div className={`w-24 h-24 rounded-full blur-[50px] opacity-20 ${theme === "blue" ? "bg-vibrant-blue" : "bg-vibrant-crimson"}`} />
                  {item.id === "more" && <MapPin className={`w-8 h-8 ${themeColor} opacity-40`} />}
                </div>
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001738]/70 via-[#001738]/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                 <h4 className="text-xl font-bold text-white tracking-tight leading-tight">{item.title}</h4>
              </div>

              {/* Top Count Badge - Optional if still needed */}
              {item.count && (
                <div className={`absolute top-4 left-4 ${themeBg} ${themeBorder} backdrop-blur-md border px-3 py-1 rounded-full`}>
                  <span className={`text-[10px] font-bold ${themeColor} uppercase tracking-wider`}>{item.count}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
