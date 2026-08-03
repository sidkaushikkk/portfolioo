import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { SKILLS_STICKY_CONTENT } from "@/data/portfolioData";
import { Cpu } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121218] px-3.5 py-1 text-xs font-mono text-purple-600 dark:text-purple-400 shadow-sm">
            <Cpu className="h-3.5 w-3.5" />
            <span>CATEGORIZED TECHNICAL MASTERY</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Skills
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
            Scroll down to explore my core technical stack, backend architecture, databases, developer tools, and AI capabilities.
          </p>
        </div>

        {/* Aceternity Sticky Scroll Reveal Component */}
        <StickyScroll content={SKILLS_STICKY_CONTENT} />
      </div>
    </section>
  );
}
