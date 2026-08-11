import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { SKILLS_STICKY_CONTENT } from "@/data/portfolioData";
import { Cpu } from "lucide-react";
import "./Skills.css";

export function Skills() {
  return (
    <section id="skills" className="skills__section">
      <div className="skills__container">
        {/* Section Header */}
        <div className="skills__header">
          <div className="skills__badge">
            <Cpu className="skills__badge-icon" />
            <span>CATEGORIZED TECHNICAL MASTERY</span>
          </div>
          <h2 className="skills__title">
            Skills
          </h2>
          <p className="skills__subtitle">
            Scroll down to explore my core technical stack, backend architecture, databases, developer tools, and AI capabilities.
          </p>
        </div>

        {/* Aceternity Sticky Scroll Reveal Component */}
        <StickyScroll content={SKILLS_STICKY_CONTENT} />
      </div>
    </section>
  );
}
