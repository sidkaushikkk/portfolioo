import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCES } from "@/data/portfolioData";
import { TechBadge } from "@/components/ui/TechBadge";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import "./Experience.css";

export function Experience() {
  const [activeId, setActiveId] = useState(EXPERIENCES[0]?.id || 1);

  return (
    <section id="experience" className="experience__section">
      <div className="experience__container">
        {/* Section Header */}
        <div className="experience__header">
          <h2 className="experience__title">Experience</h2>
          <p className="experience__subtitle">
            Where I’ve worked, contributed and built real-world software.
          </p>
        </div>

        {/* Skiper52 Expand-on-Hover Internship Cards */}
        <div className="experience__grid">
          {EXPERIENCES.map((exp) => {
            const isExpanded = activeId === exp.id;

            return (
              <motion.div
                key={exp.id}
                layout
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 24,
                  mass: 0.8,
                }}
                onMouseEnter={() => setActiveId(exp.id)}
                onClick={() => setActiveId(exp.id)}
                onFocus={() => setActiveId(exp.id)}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveId(exp.id);
                  }
                }}
                className={cn(
                  "experience__card",
                  isExpanded ? "experience__card--expanded" : "experience__card--collapsed"
                )}
              >
                {/* Number Badge */}
                <div className="experience__card-badge">{exp.badge}</div>

                {/* Collapsed Compact State Content */}
                {!isExpanded && (
                  <div className="experience__collapsed-view">
                    <div className="experience__collapsed-header">
                      <span className="experience__collapsed-year">{exp.duration}</span>
                      <h3 className="experience__collapsed-company">{exp.company}</h3>
                      <p className="experience__collapsed-role">{exp.role}</p>
                    </div>
                    <div className="experience__collapsed-prompt">
                      <span>Hover to expand</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                )}

                {/* Expanded Full State Content */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="experience__expanded-view"
                  >
                    {/* Header Row */}
                    <div className="experience__header-row">
                      <div>
                        <div className="experience__meta-pills">
                          <span className="experience__type-pill">{exp.type}</span>
                          <span className="experience__meta-dot">•</span>
                          <span className="experience__location-pill">
                            <MapPin className="h-3 w-3 inline mr-1" />
                            {exp.location}
                          </span>
                        </div>
                        <h3 className="experience__role-title">{exp.role}</h3>
                        <h4 className="experience__company-name">{exp.company}</h4>
                      </div>

                      <div className="experience__period-badge">
                        <Calendar className="h-3.5 w-3.5 inline mr-1.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="experience__description">{exp.description}</p>

                    {/* Key Responsibilities */}
                    <div className="experience__section-block">
                      <h5 className="experience__block-title">
                        Key Contributions & Impact:
                      </h5>
                      <ul className="experience__responsibilities-list">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="experience__responsibility-item">
                            <CheckCircle2 className="experience__check-icon" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Used */}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
