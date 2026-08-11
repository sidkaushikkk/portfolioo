import React from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";
import { Download, ExternalLink, FileText, Mail, Globe, Briefcase, GraduationCap, Code } from "lucide-react";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";
import "./ResumeModal.css";

export function ResumeModal({ children, open, onOpenChange }) {
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${PERSONAL_INFO.name} - Resume</title>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #111; line-height: 1.5; }
            h1 { font-size: 28px; margin: 0 0 5px 0; color: #000; }
            .subtitle { font-size: 16px; color: #444; margin-bottom: 15px; font-weight: bold; }
            .contact { font-size: 13px; color: #555; margin-bottom: 25px; border-bottom: 2px solid #222; padding-bottom: 15px; }
            .section-title { font-size: 18px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-top: 25px; margin-bottom: 12px; font-weight: bold; color: #111; }
            .item-title { font-weight: bold; font-size: 15px; display: flex; justify-content: space-between; }
            .item-sub { font-style: italic; color: #555; font-size: 13px; margin-bottom: 6px; }
            ul { margin: 6px 0 15px 20px; padding: 0; font-size: 13.5px; }
            li { margin-bottom: 4px; }
            .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 13px; }
            .resume-summary { font-size: 13.5px; }
            .resume-project { margin-bottom: 12px; }
          </style>
        </head>
        <body>
          <h1>${PERSONAL_INFO.name}</h1>
          <div class="subtitle">${PERSONAL_INFO.title} | ${PERSONAL_INFO.tagline}</div>
          <div class="contact">
            Email: ${PERSONAL_INFO.email} &bull; GitHub: ${PERSONAL_INFO.github} &bull; LinkedIn: ${PERSONAL_INFO.linkedin} &bull; LeetCode: ${PERSONAL_INFO.leetcode}
          </div>

          <div class="section-title">Professional Summary</div>
          <p class="resume-summary">${PERSONAL_INFO.bio}</p>

          <div class="section-title">Featured Projects</div>
          ${PROJECTS.map(
            (p) => `
            <div class="resume-project">
              <div class="item-title"><span>${p.title}</span></div>
              <div class="item-sub">${p.techStack.join(" • ")}</div>
              <ul>
                ${p.features.map((f) => `<li>${f}</li>`).join("")}
              </ul>
            </div>
          `
          ).join("")}

          <div class="section-title">Technical Skills</div>
          <div class="skills-grid">
            <div><strong>Languages:</strong> JavaScript, TypeScript, Python, C++, SQL, HTML/CSS</div>
            <div><strong>Frontend:</strong> React, Next.js, Tailwind CSS, Framer Motion, Redux</div>
            <div><strong>Backend:</strong> Node.js, Express, REST APIs, GraphQL</div>
            <div><strong>Databases:</strong> MongoDB, PostgreSQL, Redis, Firebase</div>
            <div><strong>AI & Tools:</strong> OpenAI APIs, LangChain, Git, Docker, Vercel</div>
          </div>

          <div class="section-title">Education & Achievements</div>
          <ul>
            <li><strong>Bachelor of Technology in Computer Science & Engineering</strong></li>
            <li><strong>1st Place Winner</strong> - National AI Hackathon 2024</li>
            <li><strong>200+ Solved</strong> - LeetCode Algorithms & Data Structures</li>
          </ul>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  const handleOpenNewTab = () => {
    handleDownload();
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      {children && <ModalTrigger>{children}</ModalTrigger>}
      <ModalBody className="resume-modal__body">
        <ModalContent className="resume-modal__content">
          {/* Header */}
          <div className="resume-modal__header">
            <div>
              <div className="resume-modal__tag">
                <FileText className="resume-modal__icon-purple" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>
              <h2 className="resume-modal__name">
                {PERSONAL_INFO.name}
              </h2>
              <p className="resume-modal__title">
                {PERSONAL_INFO.title} &bull; {PERSONAL_INFO.tagline}
              </p>
            </div>
            <div className="resume-modal__contact-list">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="resume-modal__contact-link">
                <Mail className="resume-modal__icon-purple" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="resume-modal__contact-dot">&bull;</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="resume-modal__contact-link">
                <Globe className="resume-modal__icon-blue" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Resume Content Body */}
          <div className="resume-modal__body-content">
            {/* Summary */}
            <section>
              <h3 className="resume-modal__section-heading">
                <FileText className="resume-modal__icon-purple" />
                <span>Professional Summary</span>
              </h3>
              <p className="resume-modal__bio">
                {PERSONAL_INFO.bio}
              </p>
            </section>

            {/* Key Projects */}
            <section>
              <h3 className="resume-modal__section-heading">
                <Briefcase className="resume-modal__icon-blue" />
                <span>Featured Engineering Projects</span>
              </h3>
              <div className="resume-modal__project-list">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="resume-modal__project-card">
                    <div className="resume-modal__project-header">
                      <h4 className="resume-modal__project-title">{project.title}</h4>
                      <div className="resume-modal__project-techs">
                        {project.techStack.slice(0, 3).map((t) => (
                          <span key={t} className="resume-modal__tech-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="resume-modal__project-desc">{project.fullDescription}</p>
                    <ul className="resume-modal__feature-list">
                      {project.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="resume-modal__section-heading">
                <Code className="resume-modal__icon-emerald" />
                <span>Technical Stack</span>
              </h3>
              <div className="resume-modal__skills-grid">
                <div className="resume-modal__skill-box">
                  <span className="resume-modal__skill-label--purple">Languages:</span> JavaScript, TypeScript, Python, C++, SQL, HTML/CSS
                </div>
                <div className="resume-modal__skill-box">
                  <span className="resume-modal__skill-label--blue">Frameworks:</span> React.js, Next.js, Node.js, Express, Tailwind CSS, Redux
                </div>
                <div className="resume-modal__skill-box">
                  <span className="resume-modal__skill-label--emerald">Databases & AI:</span> MongoDB, PostgreSQL, Redis, OpenAI APIs, LangChain
                </div>
                <div className="resume-modal__skill-box">
                  <span className="resume-modal__skill-label--amber">Tools:</span> Git, Docker, Postman, Vercel, Linux, VS Code
                </div>
              </div>
            </section>

            {/* Education & Achievements */}
            <section>
              <h3 className="resume-modal__section-heading">
                <GraduationCap className="resume-modal__icon-amber" />
                <span>Education & Achievements</span>
              </h3>
              <ul className="resume-modal__edu-list">
                <li><strong className="resume-modal__bold-text">Bachelor of Technology in Computer Science</strong> &bull; Focus on AI & Web Systems</li>
                <li><strong className="resume-modal__bold-text">1st Place Winner - National AI Hackathon 2024</strong> for CypherX Security platform</li>
                <li><strong className="resume-modal__bold-text">200+ Solved on LeetCode</strong> &bull; Strong Data Structures & Algorithmic Foundations</li>
              </ul>
            </section>
          </div>
        </ModalContent>

        <ModalFooter>
          <button
            onClick={handleDownload}
            className="resume-modal__btn-download"
          >
            <Download className="resume-modal__icon-purple" />
            <span>Download Resume</span>
          </button>
          <button
            onClick={handleOpenNewTab}
            className="resume-modal__btn-tab"
          >
            <ExternalLink className="resume-modal__icon-blue" />
            <span>Open in New Tab</span>
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
