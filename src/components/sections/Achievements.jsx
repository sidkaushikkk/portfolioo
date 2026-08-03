import React from "react";
import Carousel from "@/components/ui/carousel";
import { ACHIEVEMENTS } from "@/data/portfolioData";
import { Award } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="relative w-full py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121218] px-3.5 py-1 text-xs font-mono text-amber-600 dark:text-amber-400 shadow-sm">
            <Award className="h-3.5 w-3.5" />
            <span>HONORS & CREDENTIALS</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Achievements & Certifications
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
            Hackathon victories, professional certifications, and competitive programming milestones.
          </p>
        </div>

        {/* Aceternity Carousel */}
        <Carousel slides={ACHIEVEMENTS} />
      </div>
    </section>
  );
}
