import React, { useState } from "react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Modal, ModalBody, ModalContent, ModalFooter } from "@/components/ui/animated-modal";
import { PROJECTS } from "@/data/portfolioData";
import { Github, ExternalLink, Sparkles, Code2, CheckCircle2, Layers } from "lucide-react";
import "./Projects.css";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects__section">
      <div className="projects__container">
        {/* Section Header */}
        <div className="projects__header">
          <div className="projects__badge">
            <Sparkles className="projects__badge-icon" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="projects__title">
            Featured Projects
          </h2>
          <p className="projects__subtitle">
            Hover over cards for custom pointer tracking. Click any project to open detailed architecture & challenges.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <FollowerPointerCard
              key={project.id}
              title={<PointerTitle title={project.title} />}
              className="projects__card-wrapper"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="projects__card"
              >
                {/* Thumbnail Image */}
                <div className="projects__card-image-box">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__card-image"
                  />
                  <div className="projects__card-image-overlay" />
                  <div className="projects__card-details-badge">
                    VIEW DETAILS
                  </div>
                </div>

                {/* Content */}
                <div className="projects__card-body">
                  <h3 className="projects__card-title">
                    {project.title}
                  </h3>
                  <p className="projects__card-description">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="projects__tech-list">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="projects__tech-pill"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="projects__card-footer">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="projects__link-code"
                    >
                      <Github className="projects__badge-icon" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="projects__link-demo"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="projects__badge-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        {selectedProject && (
          <ModalBody className="projects__modal-body">
            <ModalContent className="projects__modal-content">
              {/* Header Image */}
              <div className="projects__modal-image-box">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="projects__modal-image"
                />
                <div className="projects__modal-image-overlay" />
              </div>

              {/* Title & Description */}
              <div className="projects__modal-header">
                <div className="projects__modal-category">
                  <Layers className="projects__badge-icon" />
                  <span>PROJECT DEEP DIVE</span>
                </div>
                <h3 className="projects__modal-title">
                  {selectedProject.title}
                </h3>
                <p className="projects__modal-description">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="projects__modal-tech-section">
                <h4 className="projects__modal-section-title">
                  <Code2 className="projects__badge-icon" />
                  <span>Technologies Used:</span>
                </h4>
                <div className="projects__modal-tech-grid">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="projects__modal-tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features & Challenges */}
              <div className="projects__modal-grid-2col">
                <div className="projects__modal-card-box">
                  <h4 className="projects__modal-section-title">
                    <CheckCircle2 className="projects__badge-icon" />
                    <span>Key Features</span>
                  </h4>
                  <ul className="projects__modal-list">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="projects__modal-list-item">
                        <span className="projects__modal-list-bullet">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="projects__modal-card-box">
                  <h4 className="projects__modal-section-title">
                    <Sparkles className="projects__badge-icon" />
                    <span>Engineering Challenges Solved</span>
                  </h4>
                  <p className="projects__modal-challenges-text">
                    {selectedProject.challenges}
                  </p>
                </div>
              </div>
            </ModalContent>

            <ModalFooter>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="projects__modal-btn-github"
              >
                <Github className="projects__badge-icon" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="projects__modal-btn-demo"
              >
                <span>Live Demo Application</span>
                <ExternalLink className="projects__badge-icon" />
              </a>
            </ModalFooter>
          </ModalBody>
        )}
      </Modal>
    </section>
  );
}

function PointerTitle({ title }) {
  return (
    <div className="projects__pointer-title">
      <span className="projects__pointer-dot" />
      <span>{title}</span>
    </div>
  );
}
