import React from "react";
import "./TechBadge.css";

const TECH_BADGES = {
  "React": {
    bg: "#20232a",
    textColor: "#ffffff",
    label: "REACT",
    icon: (
      <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#61dafb" />
      </svg>
    ),
  },
  "HTML5": {
    bg: "#e34f26",
    textColor: "#ffffff",
    label: "HTML5",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.625h10.457l.236-2.625H5.857l.695 7.875h8.219l-.317 3.547-2.483.672-2.488-.672-.16-1.781H6.7l.317 3.594 4.953 1.375 4.957-1.375.691-7.688H8.531z"/>
      </svg>
    ),
  },
  "CSS3": {
    bg: "#1572b6",
    textColor: "#ffffff",
    label: "CSS3",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm17.09 4.413H5.41l.213 2.622h10.125l-.255 2.716h-6.64l.213 2.622h6.176l-.417 4.542-2.61.713-2.61-.713-.173-1.954H6.845l.341 4.161 4.874 1.352 4.874-1.352 1.01-11.375z"/>
      </svg>
    ),
  },
  "Tailwind CSS": {
    bg: "#0f172a",
    textColor: "#38bdf8",
    label: "TAILWIND CSS",
    icon: (
      <svg className="tech-icon fill-current text-[#38bdf8]" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
      </svg>
    ),
  },
  "Responsive Design": {
    bg: "#4f46e5",
    textColor: "#ffffff",
    label: "RESPONSIVE DESIGN",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  "Node.js": {
    bg: "#539e43",
    textColor: "#ffffff",
    label: "NODE.JS",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M12 2l9 5.196v10.392L12 22l-9-5.196V7.196L12 2z" />
        <path d="M12 6v6l4.5 2.5" />
      </svg>
    ),
  },
  "Express.js": {
    bg: "#303846",
    textColor: "#ffffff",
    label: "EXPRESS.JS",
    icon: (
      <span className="tech-ex-icon">
        ex
      </span>
    ),
  },
  "REST APIs": {
    bg: "#0284c7",
    textColor: "#ffffff",
    label: "REST APIS",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="12" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="8.5" y1="7.5" x2="15.5" y2="10.5" />
        <line x1="8.5" y1="16.5" x2="15.5" y2="13.5" />
      </svg>
    ),
  },
  "Authentication (JWT / OAuth)": {
    bg: "#d97706",
    textColor: "#ffffff",
    label: "AUTHENTICATION",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  "C++": {
    bg: "#00599c",
    textColor: "#ffffff",
    label: "C++",
    icon: (
      <span className="tech-text-icon">
        C++
      </span>
    ),
  },
  "Java": {
    bg: "#d97706",
    textColor: "#ffffff",
    label: "JAVA",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M6 14s1 3 6 3 6-3 6-3" />
        <path d="M6 10s1 3 6 3 6-3 6-3" />
        <path d="M6 6s1 3 6 3 6-3 6-3" />
      </svg>
    ),
  },
  "JavaScript": {
    bg: "#f7df1e",
    textColor: "#000000",
    label: "JAVASCRIPT",
    icon: (
      <span className="tech-js-icon">
        JS
      </span>
    ),
  },
  "Python": {
    bg: "#3776ab",
    textColor: "#ffffff",
    label: "PYTHON",
    icon: (
      <svg className="tech-icon fill-current text-[#ffd43b]" viewBox="0 0 24 24">
        <path d="M11.91 0c-5.18 0-4.83 2.25-4.83 2.25v2.33h4.91v.7H5.16S1.5 5.1 1.5 10.3c0 5.2 3.19 5.01 3.19 5.01h1.91v-2.69s-.1-3.19 3.14-3.19h5.18s2.99.05 2.99-2.9v-4.3S18.39 0 11.91 0zm-2.58 1.48a.93.93 0 1 1 0 1.86.93.93 0 0 1 0-1.86zm2.76 21.04c5.18 0 4.83-2.25 4.83-2.25v-2.33h-4.91v-.7h6.83s3.66.18 3.66-5.02c0-5.2-3.19-5.01-3.19-5.01h-1.91v2.69s.1 3.19-3.14 3.19h-5.18s-2.99-.05-2.99 2.9v4.3s-.28 2.23 6.2 2.23zm2.58-1.48a.93.93 0 1 1 0-1.86.93.93 0 0 1 0 1.86z"/>
      </svg>
    ),
  },
  "MongoDB": {
    bg: "#47a248",
    textColor: "#ffffff",
    label: "MONGODB",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M12 0s-5.64 6.78-5.64 12.35C6.36 17.92 8.89 24 12 24s5.64-6.08 5.64-11.65C17.64 6.78 12 0 12 0zm.04 22.02c-2.02 0-3.66-4.52-3.66-8.91 0-4.39 3.66-9.97 3.66-9.97s3.66 5.58 3.66 9.97c0 4.39-1.64 8.91-3.66 8.91z"/>
      </svg>
    ),
  },
  "Mongoose": {
    bg: "#880000",
    textColor: "#ffffff",
    label: "MONGOOSE",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="9" ry="5" />
        <path d="M12 7v10" />
      </svg>
    ),
  },
  "MySQL": {
    bg: "#00758f",
    textColor: "#ffffff",
    label: "MYSQL",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3z" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
      </svg>
    ),
  },
  "Git": {
    bg: "#f05032",
    textColor: "#ffffff",
    label: "GIT",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.226-.605-.405-.537-.539-.676-1.333-.408-1.99L7.544 3.79.454 10.879c-.605.605-.605 1.58 0 2.187l10.48 10.479c.604.605 1.582.605 2.186 0l10.426-10.424c.606-.603.606-1.58 0-2.191"/>
      </svg>
    ),
  },
  "GitHub": {
    bg: "#24292e",
    textColor: "#ffffff",
    label: "GITHUB",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  "Docker": {
    bg: "#2496ed",
    textColor: "#ffffff",
    label: "DOCKER",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 5.43h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185zm-2.954 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H8.075a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H8.075a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm-2.955 2.715h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.12a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zm-2.954 2.715h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186H2.166a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm0-2.715h2.118a.185.185 0 00.186-.186V6.29a.185.185 0 00-.186-.185H2.166a.185.185 0 00-.185.185v1.887c0 .103.083.186.185.186zM.075 12.35a.186.186 0 00-.075.148c.026 2.593 1.348 4.773 3.655 6.015 2.056 1.107 4.54 1.487 7.026 1.487 5.568 0 10.366-2.222 13.067-6.242.062-.09.043-.21-.044-.275a.188.188 0 00-.175-.024c-1.393.597-2.906.945-4.475 1.042a.186.186 0 01-.177-.116c-.453-1.127-1.332-1.996-2.457-2.41a.186.186 0 00-.236.115c-.244.665-.778 1.173-1.463 1.39a.186.186 0 01-.225-.098 8.163 8.163 0 00-1.89-2.023.186.186 0 00-.261.026 4.965 4.965 0 01-2.128 1.472.186.186 0 01-.226-.097 8.01 8.01 0 00-1.928-2.015.186.186 0 00-.256.032 5.06 5.06 0 01-2.12 1.462.186.186 0 01-.226-.097c-.417-.745-.989-1.383-1.688-1.879a.186.186 0 00-.26.032c-.52.568-1.144 1.024-1.84 1.337a.186.186 0 01-.237-.087c-.206-.402-.345-.845-.407-1.306a.186.186 0 00-.166-.16zm23.636 1.583c-.004-.002-.008-.004-.012-.006l.012.006z"/>
      </svg>
    ),
  },
  "Kubernetes": {
    bg: "#326ce5",
    textColor: "#ffffff",
    label: "KUBERNETES",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M7 12h10" />
      </svg>
    ),
  },
  "Postman": {
    bg: "#ff6c37",
    textColor: "#ffffff",
    label: "POSTMAN",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M13.5 0A10.5 10.5 0 1024 10.5 10.5 10.5 0 0013.5 0zm0 18a7.5 7.5 0 117.5-7.5 7.5 7.5 0 01-7.5 7.5z"/>
      </svg>
    ),
  },
  "VS Code": {
    bg: "#007acc",
    textColor: "#ffffff",
    label: "VS CODE",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  "Vercel": {
    bg: "#000000",
    textColor: "#ffffff",
    label: "VERCEL",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M12 1L24 22H0L12 1z"/>
      </svg>
    ),
  },
  "Render": {
    bg: "#121212",
    textColor: "#46e3b7",
    label: "RENDER",
    icon: (
      <svg className="tech-icon stroke-current text-[#46e3b7]" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  "OpenAI APIs": {
    bg: "#10a37f",
    textColor: "#ffffff",
    label: "OPENAI APIS",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  "Prompt Engineering": {
    bg: "#7c3aed",
    textColor: "#ffffff",
    label: "PROMPT ENGINEERING",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  "Resume Parsing": {
    bg: "#0284c7",
    textColor: "#ffffff",
    label: "RESUME PARSING",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  "ATS Optimization": {
    bg: "#059669",
    textColor: "#ffffff",
    label: "ATS OPTIMIZATION",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  "Full Stack Development": {
    bg: "#6366f1",
    textColor: "#ffffff",
    label: "FULL STACK DEVELOPMENT",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  "OOP": {
    bg: "#059669",
    textColor: "#ffffff",
    label: "OOP",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  "System Design": {
    bg: "#8b5cf6",
    textColor: "#ffffff",
    label: "SYSTEM DESIGN",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <rect x="2" y="2" width="8" height="8" rx="2" />
        <rect x="14" y="2" width="8" height="8" rx="2" />
        <rect x="8" y="14" width="8" height="8" rx="2" />
        <line x1="6" y1="10" x2="6" y2="18" />
        <line x1="6" y1="18" x2="8" y2="18" />
        <line x1="18" y1="10" x2="18" y2="18" />
        <line x1="18" y1="18" x2="16" y2="18" />
      </svg>
    ),
  },
  "API Architecture": {
    bg: "#0284c7",
    textColor: "#ffffff",
    label: "API ARCHITECTURE",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  "Data Structures & Algorithms": {
    bg: "#d97706",
    textColor: "#ffffff",
    label: "Data Structure and Algorithms",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
      </svg>
    ),
  },
  "Bootstrap": {
    bg: "#7952b3",
    textColor: "#ffffff",
    label: "BOOTSTRAP",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.987 13.904c0 1.93-1.42 2.92-3.67 2.92H7.95V7.176h4.15c2.09 0 3.39.99 3.39 2.65 0 1.25-.79 2.08-1.92 2.37v.06c1.36.25 2.417 1.188 2.417 2.648zm-5.747-4.718h1.72c1.07 0 1.69-.47 1.69-1.32 0-.89-.66-1.34-1.74-1.34h-1.67v2.66zm0 5.38h1.99c1.19 0 1.89-.52 1.89-1.47 0-.98-.74-1.49-1.98-1.49h-1.9v2.96z"/>
      </svg>
    ),
  },
  "SEO": {
    bg: "#059669",
    textColor: "#ffffff",
    label: "SEO",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  "Next.js": {
    bg: "#000000",
    textColor: "#ffffff",
    label: "NEXT.JS",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.63 18.25l-5.69-7.44v7.44H10.1V7.75h1.96l5.52 7.22V7.75h1.84v10.5h-1.79z"/>
      </svg>
    ),
  },
  "Next js": {
    bg: "#000000",
    textColor: "#ffffff",
    label: "NEXT.JS",
    icon: (
      <svg className="tech-icon fill-current text-white" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.63 18.25l-5.69-7.44v7.44H10.1V7.75h1.96l5.52 7.22V7.75h1.84v10.5h-1.79z"/>
      </svg>
    ),
  },
  "API Reliability": {
    bg: "#0284c7",
    textColor: "#ffffff",
    label: "API RELIABILITY",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  "Production and DevOps": {
    bg: "#ea580c",
    textColor: "#ffffff",
    label: "PRODUCTION & DEVOPS",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
        <circle cx="6" cy="18" r="1" fill="currentColor" />
        <path d="M14 6h4M14 18h4" />
      </svg>
    ),
  },
  "LLM Integration": {
    bg: "#8b5cf6",
    textColor: "#ffffff",
    label: "LLM INTEGRATION",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  "RAG systems": {
    bg: "#0284c7",
    textColor: "#ffffff",
    label: "RAG SYSTEMS",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  "AI workflows": {
    bg: "#ec4899",
    textColor: "#ffffff",
    label: "AI WORKFLOWS",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <rect x="3" y="3" width="6" height="6" rx="1" />
        <rect x="15" y="3" width="6" height="6" rx="1" />
        <rect x="9" y="15" width="6" height="6" rx="1" />
        <path d="M6 9v3a3 3 0 0 0 3 3h3m6-6v3a3 3 0 0 1-3 3" />
      </svg>
    ),
  },
  "Agile/Scrum methodologies": {
    bg: "#0284c7",
    textColor: "#ffffff",
    label: "AGILE / SCRUM",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </svg>
    ),
  },
  "Debugging": {
    bg: "#e11d48",
    textColor: "#ffffff",
    label: "DEBUGGING",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <rect width="8" height="14" x="8" y="6" rx="4" />
        <path d="m19 7-3 2M5 7l3 2M19 19l-3-2M5 19l3-2M20 13h-4M4 13h4M10 4l1-2M14 4l-1-2" />
      </svg>
    ),
  },
  "Code Review/Testing": {
    bg: "#10b981",
    textColor: "#ffffff",
    label: "CODE REVIEW & TESTING",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  "Technical Documentation": {
    bg: "#8b5cf6",
    textColor: "#ffffff",
    label: "TECHNICAL DOCUMENTATION",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  "Team Collaboration": {
    bg: "#f59e0b",
    textColor: "#ffffff",
    label: "TEAM COLLABORATION",
    icon: (
      <svg className="tech-icon stroke-current text-white" viewBox="0 0 24 24" fill="none" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  }
};

export function TechBadge({ tech }) {
  const config = TECH_BADGES[tech] || {
    bg: "#374151",
    textColor: "#ffffff",
    label: tech.toUpperCase(),
    icon: null,
  };

  return (
    <div
      className="tech-brand-badge"
      style={{ backgroundColor: config.bg, color: config.textColor }}
    >
      {config.icon && <span className="tech-brand-badge__icon">{config.icon}</span>}
      <span className="tech-brand-badge__label">{config.label}</span>
    </div>
  );
}
