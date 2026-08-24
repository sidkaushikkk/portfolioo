import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCES } from "@/data/portfolioData";
import { TechBadge } from "@/components/ui/TechBadge";
import { Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import "./Experience.css";

export function Experience() {
  // No card open by default
  const [activeId, setActiveId] = useState(null);
  const [isHoverCapable, setIsHoverCapable] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsHoverCapable(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsHoverCapable(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleMediaChange);
      return () => mediaQuery.removeListener(handleMediaChange);
    }
  }, []);

  const handleCardMouseEnter = (id) => {
    if (isHoverCapable) {
      setActiveId(id);
    }
  };

  const handleGridMouseLeave = () => {
    if (isHoverCapable) {
      setActiveId(null);
    }
  };

  const handleCardClick = (id) => {
    if (isHoverCapable) {
      setActiveId(id);
    } else {
      setActiveId((prev) => (prev === id ? null : id));
    }
  };

  const handleCardKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId((prev) => (prev === id ? null : id));
    }
  };

  return (
    <section id="experience" className="experience__section">
      <div className="experience__container">
        {/* Section Header */}
        <div className="experience__header">
          <h2 className="experience__title">Experience</h2>
          <p className="experience__subtitle">
            {isHoverCapable ? "Hover over" : "Click on"} the cards to see where I’ve worked, contributed and built real-world software.
          </p>
        </div>

        {/* Skiper52 Expandable Internship Cards */}
        <div
          className="experience__grid"
          onMouseLeave={handleGridMouseLeave}
        >
          {EXPERIENCES.map((exp) => {
            const isExpanded = activeId === exp.id;

            return (
              <motion.div
                key={exp.id}
                layout
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => handleCardMouseEnter(exp.id)}
                onClick={() => handleCardClick(exp.id)}
                onFocus={() => {
                  if (isHoverCapable) {
                    setActiveId(exp.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                onKeyDown={(e) => handleCardKeyDown(e, exp.id)}
                className={cn(
                  "experience__card",
                  isExpanded ? "experience__card--expanded" : "experience__card--collapsed"
                )}
              >
                
                {/* Collapsed Compact State Content */}
                {!isExpanded && (
                  <div className="experience__collapsed-view">
                    <div className="experience__collapsed-header">
                      <span className="experience__collapsed-year">{exp.duration}</span>
                      <h3 className="experience__collapsed-company">{exp.company}</h3>
                      <p className="experience__collapsed-role">{exp.role}</p>
                    </div>
                    <div className="experience__collapsed-prompt">
                      <span>{isHoverCapable ? "Hover to expand" : "Click to expand"}</span>
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
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
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

                    {/* Technologies Used (Conditionally Rendered) */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="experience__section-block">
                        <h5 className="experience__block-title">Technologies & Stack:</h5>
                        <div className="experience__tech-grid">
                          {exp.technologies.map((tech) => (
                            <TechBadge key={tech} tech={tech} />
                          ))}
                        </div>
                      </div>
                    )}
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
