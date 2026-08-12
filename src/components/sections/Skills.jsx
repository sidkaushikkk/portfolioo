import React, { useRef, useEffect } from "react";
import { Tabs } from "@/components/ui/tabs";
import { TechBadge } from "@/components/ui/TechBadge";
import { useTheme } from "@/context/ThemeContext";
import { Cpu } from "lucide-react";
import "./Skills.css";

export function Skills() {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const { effectiveTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");

    const drawStaticCanvas = () => {
      if (!wrapper || !canvas) return;
      const width = (canvas.width = wrapper.clientWidth);
      const height = (canvas.height = wrapper.clientHeight);

      ctx.clearRect(0, 0, width, height);

      // Draw static dot grid synced with current effective theme (light vs dark)
      const dotSpacing = 32;
      const dotRadius = 1.2;

      const isDark = effectiveTheme === "dark";
      const dotColor = isDark ? "rgba(200, 173, 141, 0.25)" : "rgba(160, 130, 95, 0.35)";

      for (let x = dotSpacing / 2; x < width; x += dotSpacing) {
        for (let y = dotSpacing / 2; y < height; y += dotSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
        }
      }
    };

    drawStaticCanvas();

    window.addEventListener("resize", drawStaticCanvas);
    return () => window.removeEventListener("resize", drawStaticCanvas);
  }, [effectiveTheme]);

  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="skills-tab-card skills-tab-card--frontend">
          <div className="skills-tab-card__header">
            <span className="skills-tab-card__badge">Category 01</span>
            <h3 className="skills-tab-card__title">Frontend Development</h3>
          </div>
          <p className="skills-tab-card__desc">
            Crafting responsive, high-performance user interfaces with modern React, semantic HTML5, utility-first CSS, and smooth animations.
          </p>
          <div className="skills-tech-grid">
            {["React", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"].map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="skills-tab-card skills-tab-card--backend">
          <div className="skills-tab-card__header">
            <span className="skills-tab-card__badge">Category 02</span>
            <h3 className="skills-tab-card__title">Backend Development</h3>
          </div>
          <p className="skills-tab-card__desc">
            Architecting secure scalable servers, asynchronous RESTful APIs, middleware pipelines, and robust JWT / OAuth authentication flows.
          </p>
          <div className="skills-tech-grid">
            {["Node.js", "Express.js", "REST APIs", "Authentication (JWT / OAuth)"].map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Languages",
      value: "languages",
      content: (
        <div className="skills-tab-card skills-tab-card--languages">
          <div className="skills-tab-card__header">
            <span className="skills-tab-card__badge">Category 03</span>
            <h3 className="skills-tab-card__title">Programming Languages</h3>
          </div>
          <p className="skills-tab-card__desc">
            Foundational problem solving, data structures, and object-oriented architecture built with high performance and type safety.
          </p>
          <div className="skills-tech-grid">
            {["C++", "Java", "JavaScript", "Python"].map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Databases",
      value: "databases",
      content: (
        <div className="skills-tab-card skills-tab-card--databases">
          <div className="skills-tab-card__header">
            <span className="skills-tab-card__badge">Category 04</span>
            <h3 className="skills-tab-card__title">Databases & Persistence</h3>
          </div>
          <p className="skills-tab-card__desc">
            Designing flexible document schemas, indexing pipelines, aggregation queries, and relational/NoSQL persistence with MongoDB, Mongoose & MySQL.
          </p>
          <div className="skills-tech-grid">
            {["MongoDB", "Mongoose", "MySQL"].map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Tools",
      value: "tools",
      content: (
        <div className="skills-tab-card skills-tab-card--tools">
          <div className="skills-tab-card__header">
            <span className="skills-tab-card__badge">Category 05</span>
            <h3 className="skills-tab-card__title">Tools & Containerization</h3>
          </div>
          <p className="skills-tab-card__desc">
            Streamlining engineering workflows with Docker containers, Kubernetes orchestration, Git version control, Postman API testing and cloud platforms.
          </p>
          <div className="skills-tech-grid">
            {["Git", "GitHub", "Docker", "Kubernetes", "Postman", "VS Code", "Vercel", "Render"].map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "AI / ML",
      value: "ai-ml",
      content: (
        <div className="skills-tab-card skills-tab-card--aiml">
          <div className="skills-tab-card__header">
            <span className="skills-tab-card__badge">Category 06</span>
            <h3 className="skills-tab-card__title">AI & Advanced Technologies</h3>
          </div>
          <p className="skills-tab-card__desc">
            Building intelligent web applications powered by OpenAI GPT APIs, custom prompt engineering, PDF resume parsing and ATS match optimization.
          </p>
          <div className="skills-tech-grid">
            {["OpenAI APIs", "Prompt Engineering", "Resume Parsing", "ATS Optimization"].map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Concepts",
      value: "concepts",
      content: (
        <div className="skills-tab-card skills-tab-card--concepts">
          <div className="skills-tab-card__header">
            <span className="skills-tab-card__badge">Category 07</span>
            <h3 className="skills-tab-card__title">Computer Science & Concepts</h3>
          </div>
          <p className="skills-tab-card__desc">
            Core computer science fundamentals, object-oriented design, end-to-end full stack architecture, data structures, algorithms, and scalable API design.
          </p>
          <div className="skills-tech-grid">
            {[
              "Full Stack Development",
              "OOP",
              "System Design",
              "API Architecture",
              "Data Structures & Algorithms"
            ].map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="skills" className="skills__section">
      <div className="skills__container">
        {/* Section Header */}
        <div className="skills__header">
          <h2 className="skills__title">Skills & Stack</h2>
          <p className="skills__subtitle">
            Explore my core domain expertise across frontend, backend, programming languages, databases, containerization tools, AI integrations, and computer science concepts.
          </p>
        </div>

        {/* Theme Synced Canvas Wrapper Container */}
        <div ref={wrapperRef} className="skills__canvas-wrapper">
          <canvas ref={canvasRef} className="skills__canvas" />
          <div className="skills__canvas-content">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>
    </section>
  );
}
