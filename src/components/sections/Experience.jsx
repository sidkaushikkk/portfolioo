import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { EXPERIENCE_TIMELINE } from "@/data/portfolioData";
import { Sparkles, Compass } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-800 bg-[#121218] px-3.5 py-1 text-xs font-mono text-purple-400">
            <Compass className="h-3.5 w-3.5" />
            <span>JOURNEY & STORYTELLING</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Engineering Experience
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-neutral-400 sm:text-base">
            Scroll down to trace my growth from writing first lines of code to building AI products & fintech systems.
          </p>
        </div>

        {/* Sticky Scroll Component */}
        <StickyScroll content={EXPERIENCE_TIMELINE} />
      </div>
    </section>
  );
}
