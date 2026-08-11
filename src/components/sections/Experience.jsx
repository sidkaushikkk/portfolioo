import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { EXPERIENCE_TIMELINE } from "@/data/portfolioData";
import { Sparkles, Compass } from "lucide-react";
import "./Experience.css";

export function Experience() {
  return (
    <section id="experience" className="experience__section">
      <div className="experience__container">
        {/* Section Header */}
        <div className="experience__header">
          <div className="experience__badge">
            <Compass className="experience__badge-icon" />
            <span>JOURNEY & STORYTELLING</span>
          </div>
          <h2 className="experience__title">
            Engineering Experience
          </h2>
          <p className="experience__subtitle">
            Scroll down to trace my growth from writing first lines of code to building AI products & fintech systems.
          </p>
        </div>

        {/* Sticky Scroll Component */}
        <StickyScroll content={EXPERIENCE_TIMELINE} />
      </div>
    </section>
  );
}
