import React from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";
import { Download, ExternalLink, FileText, Mail, Globe, Briefcase, GraduationCap, Code } from "lucide-react";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";

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
      <ModalBody className="max-w-4xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0d0d12] text-slate-900 dark:text-neutral-100">
        <ModalContent className="p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-col border-b border-neutral-200 dark:border-neutral-800 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-purple-600 dark:text-purple-400">
                <FileText className="h-4 w-4" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>
              <h2 className="mt-1 text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl">
                {PERSONAL_INFO.name}
              </h2>
              <p className="mt-1 text-base font-semibold text-blue-600 dark:text-blue-400">
                {PERSONAL_INFO.title} &bull; {PERSONAL_INFO.tagline}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-600 dark:text-neutral-400 md:mt-0 font-mono">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-black dark:hover:text-white">
                <Mail className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-neutral-400 dark:text-neutral-700">&bull;</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-black dark:hover:text-white">
                <Globe className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Resume Content Body */}
          <div className="mt-8 space-y-8 text-neutral-700 dark:text-neutral-300">
            {/* Summary */}
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <FileText className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                <span>Professional Summary</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {PERSONAL_INFO.bio}
              </p>
            </section>

            {/* Key Projects */}
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <Briefcase className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>Featured Engineering Projects</span>
              </h3>
              <div className="mt-4 space-y-5">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="rounded-xl border border-neutral-200 dark:border-neutral-800/80 bg-slate-50 dark:bg-[#14141c] p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{project.title}</h4>
                      <div className="flex gap-2">
                        {project.techStack.slice(0, 3).map((t) => (
                          <span key={t} className="rounded border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-0.5 text-[10px] text-purple-700 dark:text-purple-300 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">{project.fullDescription}</p>
                    <ul className="mt-3 list-disc pl-5 text-xs text-neutral-700 dark:text-neutral-300 space-y-1">
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
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <Code className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Technical Stack</span>
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#121218] p-3">
                  <span className="font-bold text-purple-600 dark:text-purple-400">Languages:</span> JavaScript, TypeScript, Python, C++, SQL, HTML/CSS
                </div>
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#121218] p-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400">Frameworks:</span> React.js, Next.js, Node.js, Express, Tailwind CSS, Redux
                </div>
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#121218] p-3">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">Databases & AI:</span> MongoDB, PostgreSQL, Redis, OpenAI APIs, LangChain
                </div>
                <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#121218] p-3">
                  <span className="font-bold text-amber-600 dark:text-amber-400">Tools:</span> Git, Docker, Postman, Vercel, Linux, VS Code
                </div>
              </div>
            </section>

            {/* Education & Achievements */}
            <section>
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 pb-2">
                <GraduationCap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>Education & Achievements</span>
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-neutral-700 dark:text-neutral-300 pl-4 list-disc">
                <li><strong className="text-slate-900 dark:text-white">Bachelor of Technology in Computer Science</strong> &bull; Focus on AI & Web Systems</li>
                <li><strong className="text-slate-900 dark:text-white">1st Place Winner - National AI Hackathon 2024</strong> for CypherX Security platform</li>
                <li><strong className="text-slate-900 dark:text-white">200+ Solved on LeetCode</strong> &bull; Strong Data Structures & Algorithmic Foundations</li>
              </ul>
            </section>
          </div>
        </ModalContent>

        <ModalFooter>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/30"
          >
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </button>
          <button
            onClick={handleOpenNewTab}
            className="flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-slate-100 dark:bg-neutral-800 px-5 py-2.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Open in New Tab</span>
          </button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
}
