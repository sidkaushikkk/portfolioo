import React, { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import {
  Mail,
  Linkedin,
  Github,
  Code,
  Send,
  Sparkles,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="relative w-full py-20 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121218] px-3.5 py-1 text-xs font-mono text-purple-600 dark:text-purple-400 shadow-sm">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
            Whether you have an exciting opportunity, a project collaboration, or just want to talk code — my inbox is always open!
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column: Direct Links */}
          <div className="flex flex-col justify-between rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#111116]/90 p-8 shadow-xl backdrop-blur-xl">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Let's build something extraordinary.
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                I am actively seeking software engineering roles, AI product development opportunities, and high-impact technical collaborations.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] p-4 text-slate-900 dark:text-neutral-200 transition-all hover:border-purple-500/50 hover:bg-slate-100 dark:hover:bg-neutral-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">Direct Email</div>
                    <div className="text-sm font-semibold">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] p-4 text-slate-900 dark:text-neutral-200 transition-all hover:border-blue-500/50 hover:bg-slate-100 dark:hover:bg-neutral-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">LinkedIn Profile</div>
                    <div className="text-sm font-semibold">linkedin.com/in/sidkaushik</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] p-4 text-slate-900 dark:text-neutral-200 transition-all hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-slate-100 dark:hover:bg-neutral-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 shrink-0">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">GitHub Repositories</div>
                    <div className="text-sm font-semibold">github.com/sidkaushik</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] p-4 text-slate-900 dark:text-neutral-200 transition-all hover:border-amber-500/50 hover:bg-slate-100 dark:hover:bg-neutral-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 shrink-0">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">LeetCode Profile</div>
                    <div className="text-sm font-semibold">leetcode.com/sidkaushik</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800/80 text-xs text-neutral-500">
              ⚡ Typically responds within 24 hours.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#111116]/90 p-8 shadow-xl backdrop-blur-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send Me a Message</h3>
            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
              Fill out the details below and I will get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-300">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-neutral-300 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-300">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-neutral-300 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-700 dark:text-neutral-300">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hello Sid, I'd like to discuss a project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-neutral-300 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 transition-colors focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 text-sm font-semibold text-white shadow-xl shadow-purple-600/20 transition-all hover:scale-[1.02] active:scale-98"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
