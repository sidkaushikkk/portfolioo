import React from "react";
import Carousel from "@/components/ui/carousel";
import { ACHIEVEMENTS } from "@/data/portfolioData";
import { Award } from "lucide-react";
import "./Achievements.css";

export function Achievements() {
  return (
    <section id="achievements" className="achievements__section">
      <div className="achievements__container">
        {/* Section Header */}
        <div className="achievements__header">
          <h2 className="achievements__title">
            Achievements & Certifications
          </h2>
          <p className="achievements__subtitle">
            Hackathons, professional certifications and competitive programming milestones.
          </p>
        </div>

        {/* Aceternity Carousel */}
        <Carousel slides={ACHIEVEMENTS} />
      </div>
    </section>
  );
}
