import React from "react";

export const PERSONAL_INFO = {
  name: "Sidhant Kaushik",
  subtitle: "Turning coffee into code",
  mainRole: "Software developer",
  smallTagline: "Code that works \n Systems that scale \n Products that delight",
  title: "Software Developer",
  headlineEncrypted: "Building scalable software, AI products & intuitive applications.",
  bio: "demo description.",
  email: "ksiddhant705@gmail.com",
  github: "https://github.com/sidkaushikkk",
  linkedin: "https://linkedin.com/in/sidhantkaushik",
  instagram: "https://instagram.com/sid.kaushikk_",
  leetcode: "https://leetcode.com/sidkaushikkk",
  avatar: "/Image/author.png",
  services: [
    "SOFTWARE DEVELOPMENT",
    "FULL STACK ENGINEERING",
    "AI & MACHINE LEARNING",
    "FRONTEND ARCHITECTURE",
    "CLOUD & DATABASE SOLUTIONS",
  ],
};

export const EXPERIENCES = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "Hitachi Systems India Pvt. Ltd.",
    location: "DLF Cybercity , Gurugram, India",
    type: "Internship",
    duration: "2026",
    period: "July 2026 – Present",
    description: "Architecting end-to-end full stack web applications, optimizing RESTful APIs, and implementing accessible React interfaces for thousands of active learners.",
    responsibilities: [
      "Engineered high-performance React UI modules with Tailwind CSS, custom hooks, and Framer Motion animations.",
      "Developed secure RESTful API endpoints and middleware in Node.js & Express, reducing payload latency.",
      "Designed document schemas and index pipelines in MongoDB, optimizing database query response times by 35%.",
      "Collaborated in agile sprints, technical design docs, automated unit testing, and production Vercel deployments."
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"],
    badge: "01"
  },
  {
    id: 2,
    role: "Content and Social Media Marketing Intern",
    company: "PoolIt",
    location: "Remote",
    type: "Internship",
    duration: "2025",
    period: "Feb 2025 – May 2025",
    description: "Produced brand-aligned creatives in collaboration with design and strategy teams, contributing to weekly performance reporting and KPI",
    responsibilities: [
      "Achieved a 30% increase in follower engagement by designing and executing data-driven content calendars across Instagram and LinkedIn.",
      "Conducted competitor analysis and market research to identify high-performing content formats, directly improving campaign strategy and reach.",
      "Optimized social media campaigns using analytics tools, resulting in a 20% increase in click-through rates and lead generation.",
    ],
    technologies: [],
    badge: "02"
  }
];

export const PROJECTS = [
  {
    id: "ats-tracker",
    title: "ATS Tracker",
    shortDescription: "AI-powered resume optimization & applicant tracking system with match score and built-in ATS friendly resume generator.",
    fullDescription: "ATS Tracker is an enterprise-grade AI resume optimizer that parses candidate resumes using LLMs, computes semantic match scores, highlights skill gaps, and recommends structural improvements for 95% + ATS pass rates.Users can both generate optimized resumes and track their applications with real-time status updates.",
    image: "ProjectImages/atsTracker.png",
    techStack: ["React", "Node.js", "Express", "OpenAI API", "Tailwind CSS", "MongoDB"],
    features: [
      "Real-time resume PDF parsing and text extraction",
      "Semantic keyword matching using OpenAI GPT-4 embeddings",
      "Actionable feedback reports & keyword gap analysis",
      "Export optimized resumes directly to PDF/Word",
      "Dashboard with resume history, match scores and application tracking",
    ],
    challenges: "Handling complex PDF formatting layout extractions and reducing LLM inference latency while keeping token costs optimized.",
    github: "https://github.com/sidkaushikkk/ATS-Tracker",
    liveDemo: "https://ats-tracker-lite.vercel.app",
  },
  {
    id: "children-of-capital",
    title: "Children of Capital",
    shortDescription: "A modern digital newsletter platform focused on business, culture and ideas around capitalism.",
    fullDescription: "Children of Capital is a modern newsletter platform designed to publish and showcase thought-provoking articles on business, culture, economics, and society. It features a responsive reading experience, structured article pages, author information, category-based content, and a backend-powered content management system.",
    image: "ProjectImages/ChildrenOfCapital.png",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS", "Recharts", "MongoDB", "Prisma"],
    features: [
      "Modern responsive newsletter interface",
      "Dynamic article and content rendering",
      "Category-based article organization",
      "Author and article information",
      "REST API powered backend",
      "MongoDB database integration",
      "Production deployment with Vercel and Render"
    ],
    challenges: "Building a flexible content structure that could support different article elements while maintaining a consistent reading experience, and connecting the React frontend with a production Express/MongoDB backend",
    github: "https://github.com/sidkaushik/children-of-capital",
    liveDemo: "https://childrenofcapital.vercel.app",
  },
  {
    id: "cypherxhub",
    title: "CypherX",
    shortDescription: "AI-powered cybersecurity platform that detects phishing links, malicious QR codes, and suspicious files in real time.",
    fullDescription: "CypherX is an AI-powered cybersecurity platform designed to identify and analyze digital threats before they cause harm. It combines multi-layer risk analysis with threat intelligence to detect phishing URLs, malicious QR codes, and suspicious file payloads, while providing users with clear risk assessments and actionable security insights.",
    image: "ProjectImages/cypherX.png",
    techStack: ["HTML5", "CSS3","JavaScript","Node.js","Express.js","MongoDB","Chart.js","Google Safe Browsing API","Vercel"],
    features: [
    "Real-time URL threat analysis",
    "Malicious QR code detection",
    "Suspicious file and payload inspection",
    "Multi-layer risk scoring",
    "Google Safe Browsing threat intelligence",
    "Live threat monitoring dashboard",
    "Security activity and intelligence feed",
    "Responsive cybersecurity dashboard"
    ],
    challenges: "Built a real-time cybersecurity platform capable of combining multiple threat-detection layers while maintaining fast analysis, reliable API communication, and a responsive user experience.",
    github: "https://github.com/sidkaushik/cypherxhub-refactored",
    liveDemo: "https://cypherxhub.vercel.app",
  }
];

export const DRAGGABLE_ABOUT_ITEMS = [
  {
    id: "hackathon",
    title: "1X Hackathon Winner",
    subtitle: "HackDUCS Delhi University",
    image: "Image/hackDUCSwin.jpeg",
    className: "absolute top-6 left-[10%] rotate-[-4deg]",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/40",
  },
  {
    id: "mern",
    title: "MERN Developer",
    subtitle: "React, Node, Express, MongoDB",
    image: "Image/mern.jpg",
    className: "absolute top-36 left-[22%] rotate-[6deg]",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/40",
  },
  {
    id: "ai",
    title: "AI Enthusiast",
    subtitle: "LLMs, LangChain, OpenAI APIs",
    image: "Image/Ai.jpeg",
    className: "absolute top-10 left-[42%] rotate-[-8deg]",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/40",
  },
  {
    id: "problem-solver",
    title: "Problem Solver",
    subtitle: "DSA, System Design, Clean Code",
    image: "Image/problemSolver.jpeg",
    className: "absolute top-44 left-[58%] rotate-[5deg]",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40",
  },
  {
    id: "leetcode",
    title: "100+ LeetCode problems Solved",
    subtitle: "Top Performer in Algorithms",
    image: "Image/Leetcode.jpg",
    className: "absolute top-14 right-[12%] rotate-[-3deg]",
    color: "from-red-500/20 to-rose-500/20 border-red-500/40",
  },
  {
    id: "coffee",
    title: "Coffee Powered",
    subtitle: "Turning Espresso into Code",
    image: "Image/coffee_powered.jpeg",
    className: "absolute top-48 right-[28%] rotate-[7deg]",
    color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/40",
  }
];

export const ACHIEVEMENTS = [
  {
    title: "AI/ML Course (Prime Batch)",
    issuer: "Apna College",
    description: "Completed comprehensive training in Artificial Intelligence and Machine Learning through Apna College, a well-known Indian online learning platform.",
    src: "achievementsImage/CertificateApnCollege.png",
  },
  {
    title: "HackDUCS Delhi University",
    issuer: "Dept. Of Computer Science, Delhi University",
    description: "Secured a win at HackDUCS, a hackathon organized by the Department of Computer Science, University of Delhi.",
    src: "achievementsImage/hackWin.png"
    },
  {
    title: "Orbix - IIIT Delhi",
    issuer: "IIIT Delhi",
    description: "Achieved top 7 position at Orbix, a programming contest hosted by IIIT Delhi.",
    src: "achievementsImage/Orbix.png"
    },
  {
    title: "Matrix3.0 - IITM Hackathon",
    issuer: "IITM",
    description: "Went till the final round of Matrix3.0, a hackathon organized by IITM.",
    src: "achievementsImage/Matrix.png"
    }
];
