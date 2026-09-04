"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/mobile/ui/accordion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How does the matching process work?",
    answer:
      "Startups submit their requirements, and we match them with qualified students from our talent pool based on technical skills and project fit. The startup then interviews and selects their preferred candidate.",
  },
  {
    question: "What is the typical engagement duration?",
    answer:
      "Most engagements are 3-month part-time contracts at 15 to 20 hours per week. Contracts can be extended or adjusted based on mutual agreement and project needs.",
  },
  {
    question: "How do you ensure quality of talent?",
    answer:
      "We source students from top engineering universities and assess them through rigorous technical tests, projects, and interviews. Only the top 5% qualify.",
  },
  {
    question: "Who handles contracts and payments?",
    answer:
      "Startups handle contracts and payments directly with the student. YConnect focuses on matching, finding qualified talent and guiding both sides throughout.",
  },
  {
    question: "What if the match doesn't work out?",
    answer:
      "We offer a satisfaction guarantee within the first two weeks. If the match isn't right, we'll find a replacement at no extra cost. Our matching success rate is over 95%.",
  },
  {
    question: "Is there a fee for students to join?",
    answer:
      "No, YConnect is completely free for students. We charge a service fee to startups only, so every student can focus on finding the right opportunity for them.",
  },
  {
    question: "Which countries do you operate in?",
    answer:
      "We work with startups across the EU, focusing on the Netherlands, France, Belgium, and Germany. We match them with top engineering talent across India remotely.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-transparent">
      <div className="container-superhi relative z-10">
        <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#001738] mb-3 md:mb-6 tracking-tight max-w-2xl px-2">
            FAQ
          </h2>
          <p className="text-center text-base sm:text-xl text-[#001738]/70 max-w-xs mx-auto leading-relaxed px-2 font-normal tracking-tight">
            Got a question? We can answer it.
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-vibrant-blue/20 data-[state=open]:shadow-md data-[state=open]:border-vibrant-blue/30"
              >
                <AccordionTrigger className="w-full flex items-center justify-between gap-3 px-5 py-4 sm:px-6 sm:py-5 text-left hover:no-underline transition-all [&[data-state=open]>div>svg]:rotate-[135deg] [&>svg]:hidden">
                  <span className="text-[15px] sm:text-base font-semibold text-[#001738] tracking-tight leading-snug flex-1 pr-2">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full border border-gray-200/80 group-hover:bg-vibrant-blue/10 transition-colors">
                    <Plus className="w-4 h-4 text-[#001738] transition-transform duration-300" />
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-5 pb-5 pt-2 text-[#001738]/70 border-t border-gray-50">
                  <p className="text-justify text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
