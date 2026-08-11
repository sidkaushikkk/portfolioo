import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Left Branding */}
        <div className="footer__brand">
          <span className="footer__brand-title">
            SID KAUSHIK
          </span>
          <p className="footer__brand-subtitle">
            Software Engineer &bull; AI &bull; MERN &bull; Problem Solver
          </p>
        </div>

        {/* Center Social Icons */}
        <div className="footer__social-list">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <Github className="footer__icon" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer__social-link footer__social-link--linkedin"
          >
            <Linkedin className="footer__icon" />
          </a>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noreferrer"
            className="footer__social-link footer__social-link--leetcode"
          >
            <Code className="footer__icon" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="footer__social-link footer__social-link--email"
          >
            <Mail className="footer__icon" />
          </a>
        </div>

        {/* Right Copyright */}
        <div className="footer__copyright">
          <span>&copy; {new Date().getFullYear()} Sid Kaushik. All rights reserved.</span>
          <span className="footer__copyright-tech">
            Built with React + Aceternity UI + Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
