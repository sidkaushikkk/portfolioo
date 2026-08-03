import React, { useState } from "react";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Modal, ModalBody, ModalContent, ModalFooter } from "@/components/ui/animated-modal";
import { PROJECTS } from "@/data/portfolioData";
import { Github, ExternalLink, Sparkles, Code2, CheckCircle2, Layers } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative w-full py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121218] px-3.5 py-1 text-xs font-mono text-blue-600 dark:text-blue-400 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
            Hover over cards for custom pointer tracking. Click any project to open detailed architecture & challenges.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <FollowerPointerCard
              key={project.id}
              title={<PointerTitle title={project.title} />}
              className="h-full"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#121218]/90 shadow-xl transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#121218] via-transparent to-transparent opacity-60 dark:opacity-100" />
                  <div className="absolute top-3 right-3 rounded-full border border-purple-500/30 bg-purple-950/80 px-2.5 py-1 text-[10px] font-mono text-purple-300 backdrop-blur-md">
                    VIEW DETAILS
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-neutral-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900/80 px-2 py-0.5 text-[10px] font-mono text-neutral-700 dark:text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-6 flex items-center justify-between border-t border-neutral-200 dark:border-neutral-800/80 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="h-3.5 w-3.5" />
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
          <ModalBody className="max-w-4xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0d0d12] text-slate-900 dark:text-neutral-100">
            <ModalContent className="p-6 md:p-8">
              {/* Header Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0d0d12] via-transparent to-transparent opacity-40 dark:opacity-100" />
              </div>

              {/* Title & Description */}
              <div className="mt-6">
                <div className="flex items-center space-x-2 text-xs font-mono text-purple-600 dark:text-purple-400">
                  <Layers className="h-4 w-4" />
                  <span>PROJECT DEEP DIVE</span>
                </div>
                <h3 className="mt-1 text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-base">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-6">
                <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white font-mono">
                  <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>Technologies Used:</span>
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-purple-500/30 bg-purple-100 dark:bg-purple-950/40 px-3 py-1 text-xs font-mono font-medium text-purple-800 dark:text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features & Challenges */}
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#14141c] p-4">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Key Features</span>
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#14141c] p-4">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    <span>Engineering Challenges Solved</span>
                  </h4>
                  <p className="mt-3 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
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
                className="flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-slate-100 dark:bg-neutral-800 px-5 py-2.5 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition-transform hover:scale-105"
              >
                <span>Live Demo Application</span>
                <ExternalLink className="h-4 w-4" />
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
    <div className="flex items-center space-x-2">
      <span className="h-2 w-2 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse" />
      <span>{title}</span>
    </div>
  );
}
