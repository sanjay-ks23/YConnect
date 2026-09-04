"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

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
    <section className={`py-14 sm:py-24 relative overflow-hidden ${bgColor}`}>
      <div className="container-superhi relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#001738] mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-center max-w-xs mx-auto text-[#001738]/70 text-sm leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 max-w-xl lg:max-w-none mx-auto">
          {items.map((item, index) => {
            const isLastOdd = index === items.length - 1 && items.length % 2 !== 0;
            return (
              <div 
                key={item.id} 
                className={`group relative aspect-[4/5] sm:aspect-[4/6] rounded-2xl sm:rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accentBg} ${
                  isLastOdd ? "col-span-2 max-w-[185px] sm:max-w-none w-full mx-auto" : ""
                }`}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index < 2}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white flex items-center justify-center overflow-hidden">
                    {item.bgImage && (
                      <Image
                        src={item.bgImage}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 50vw, 20vw"
                        className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-[2px]"
                      />
                    )}
                    <div className={`w-20 h-20 rounded-full blur-[40px] opacity-25 ${theme === "blue" ? "bg-vibrant-blue" : "bg-vibrant-crimson"}`} />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001738]/80 via-[#001738]/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-center sm:text-left">
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">{item.title}</h4>
                </div>

                {/* Top Count Badge */}
                {item.count && (
                  <div className={`absolute top-3 left-3 ${themeBg} ${themeBorder} backdrop-blur-md border px-2.5 py-0.5 rounded-full`}>
                    <span className={`text-[10px] font-bold ${themeColor} uppercase tracking-wider`}>{item.count}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
