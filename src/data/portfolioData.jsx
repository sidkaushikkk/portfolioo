import React from "react";

export const PERSONAL_INFO = {
  name: "Sidhant Kaushik",
  subtitle: "Turning coffee into code",
  mainRole: "Software developer",
  smallTagline: "heyy there ,  i am a software developer",
  description: "demo description.",
  title: "Software Developer",
  tagline: "heyy there ,  i am a software developer",
  headlineEncrypted: "Building scalable software, AI products & intuitive applications.",
  bio: "demo description.",
  email: "sidhantkaushik@example.com",
  github: "https://github.com/sidhantkaushik",
  linkedin: "https://linkedin.com/in/sidhantkaushik",
  instagram: "https://instagram.com/sidhant_kaushik",
  leetcode: "https://leetcode.com/sidhantkaushik",
  avatar: "/Image/author_transparent.png",
  services: [
    "SOFTWARE DEVELOPMENT",
    "FULL STACK ENGINEERING",
    "AI & MACHINE LEARNING",
    "FRONTEND ARCHITECTURE",
    "CLOUD & DATABASE SOLUTIONS",
  ],
};

export const PROJECTS = [
  {
    id: "ats-tracker",
    title: "ATS Tracker",
    shortDescription: "AI-powered resume optimization & applicant tracking system with match score analytics.",
    fullDescription: "ATS Tracker is an enterprise-grade AI resume optimizer that parses candidate resumes against job descriptions using LLMs, computes semantic match scores, highlights skill gaps, and recommends structural improvements for 95%+ ATS pass rates.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop",
    techStack: ["React", "Node.js", "Express", "OpenAI API", "Tailwind CSS", "MongoDB"],
    features: [
      "Real-time resume PDF parsing and text extraction",
      "Semantic keyword matching using OpenAI GPT-4 embeddings",
      "Actionable feedback reports & keyword gap analysis",
      "Export optimized resumes directly to PDF/Word",
    ],
    challenges: "Handling complex PDF formatting layout extractions and reducing LLM inference latency while keeping token costs optimized.",
    github: "https://github.com/sidkaushik/ats-tracker",
    liveDemo: "https://ats-tracker-demo.vercel.app",
  },
  {
    id: "children-of-capital",
    title: "Children of Capital",
    shortDescription: "Modern Fintech & Capital Analytics platform for startup investment portfolio tracking.",
    fullDescription: "Children of Capital is a sleek financial dashboard for startup founders and angel investors. It provides real-time portfolio metrics, valuation cap tables, runway projections, and automated investor updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "PostgreSQL", "Prisma"],
    features: [
      "Interactive financial chart visualizations with live stock/FX updates",
      "Cap table management with multi-round dilution calculator",
      "Automated monthly investor update generator with AI insights",
      "Role-based permission access for founders and LPs",
    ],
    challenges: "Building high-performance real-time chart calculations and ensuring strict financial math precision across dynamic currencies.",
    github: "https://github.com/sidkaushik/children-of-capital",
    liveDemo: "https://children-of-capital.vercel.app",
  },
  {
    id: "cypherx",
    title: "CypherX",
    shortDescription: "Next-gen AI cybersecurity suite and client-side encryption utility toolkit.",
    fullDescription: "CypherX combines web security primitives with AI vulnerability scanning. It empowers developers to encrypt payload data locally, inspect API endpoint vulnerabilities, and audit dependencies before deployment.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    techStack: ["React", "Web Crypto API", "Node.js", "Tailwind CSS", "Framer Motion", "Docker"],
    features: [
      "Client-side AES-GCM 256-bit payload encryption",
      "AI-driven automated OWASP Top 10 vulnerability scanner",
      "Zero-knowledge password vault & secure link generator",
      "REST & GraphQL API security headers auditing",
    ],
    challenges: "Implementing zero-knowledge client-side encryption without compromising UI responsiveness during large file encryptions.",
    github: "https://github.com/sidkaushik/cypherx",
    liveDemo: "https://cypherx-security.vercel.app",
  },
  {
    id: "crednova",
    title: "CredNova",
    shortDescription: "DeFi micro-lending & decentralized credit scoring platform on Ethereum.",
    fullDescription: "CredNova introduces on-chain credit scoring for decentralized finance. By analyzing wallet transaction histories and collateral ratios, CredNova awards dynamic credit scores to enable under-collateralized loans.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
    techStack: ["React", "Solidity", "Ethers.js", "Node.js", "Tailwind CSS", "Hardhat"],
    features: [
      "On-chain wallet transaction reputation algorithm",
      "Smart contract automated escrow & micro-loan disbursement",
      "Interactive collateral risk simulator for borrowers",
      "Metamask & WalletConnect seamless integration",
    ],
    challenges: "Optimizing smart contract gas fees for batch credit calculations and maintaining real-time oracle price feeds.",
    github: "https://github.com/sidkaushik/crednova",
    liveDemo: "https://crednova.vercel.app",
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    shortDescription: "Interactive 3D motion portfolio powered by React & Aceternity UI components.",
    fullDescription: "A high-performance personal portfolio built with modern Web APIs, Framer Motion, and Aceternity UI components. Features terminal startup simulation, floating dock, sticky scroll reveal timeline, and draggable cards.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Aceternity UI"],
    features: [
      "Aceternity UI integrated components (Terminal, Parallax, Sticky Scroll)",
      "Dark theme Linear/Vercel modern aesthetic",
      "60fps smooth animations with prefers-reduced-motion support",
      "Interactive Resume Modal and project detail modals",
    ],
    challenges: "Seamlessly combining multiple complex motion physics layouts without layout shifts or frame drops.",
    github: "https://github.com/sidkaushik/portfolioo",
    liveDemo: "https://sidkaushik.vercel.app",
  },
];

export const HERO_PARALLAX_PRODUCTS = PROJECTS.map((proj) => ({
  title: proj.title,
  subtitle: proj.shortDescription,
  link: `#projects`,
  thumbnail: proj.image,
}));

while (HERO_PARALLAX_PRODUCTS.length < 15) {
  const base = PROJECTS[HERO_PARALLAX_PRODUCTS.length % PROJECTS.length];
  HERO_PARALLAX_PRODUCTS.push({
    title: `${base.title} v${Math.floor(HERO_PARALLAX_PRODUCTS.length / 5) + 1}`,
    subtitle: base.shortDescription,
    link: `#projects`,
    thumbnail: base.image,
  });
}

export const DRAGGABLE_ABOUT_ITEMS = [
  {
    id: "hackathon",
    title: "🏆 Hackathon Winner",
    subtitle: "1st Place National AI Challenge",
    className: "absolute top-6 left-[10%] rotate-[-4deg]",
    color: "from-amber-500/20 to-orange-500/20 border-amber-500/40",
  },
  {
    id: "mern",
    title: "💻 MERN Developer",
    subtitle: "React, Node, Express, MongoDB",
    className: "absolute top-36 left-[22%] rotate-[6deg]",
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/40",
  },
  {
    id: "ai",
    title: "🤖 AI Enthusiast",
    subtitle: "LLMs, LangChain, OpenAI APIs",
    className: "absolute top-10 left-[42%] rotate-[-8deg]",
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/40",
  },
  {
    id: "problem-solver",
    title: "🧠 Problem Solver",
    subtitle: "DSA, System Design, Clean Code",
    className: "absolute top-44 left-[58%] rotate-[5deg]",
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/40",
  },
  {
    id: "leetcode",
    title: "🎯 200+ LeetCode Solved",
    subtitle: "Top Performer in Algorithms",
    className: "absolute top-14 right-[12%] rotate-[-3deg]",
    color: "from-red-500/20 to-rose-500/20 border-red-500/40",
  },
  {
    id: "coffee",
    title: "☕ Coffee Powered",
    subtitle: "Turning Espresso into Code",
    className: "absolute top-48 right-[28%] rotate-[7deg]",
    color: "from-yellow-500/20 to-amber-500/20 border-yellow-500/40",
  },
];

export const SKILLS_STICKY_CONTENT = [
  {
    badge: "Category 01",
    title: "Programming Languages",
    description: "Foundational problem solving, data structures, and object-oriented architecture built with high performance and type safety.",
    tech: ["C++", "Java", "JavaScript", "Python"],
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-6 text-white font-mono">
        <div className="w-full rounded-xl border border-blue-500/30 bg-[#090d16] p-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-blue-500/20 pb-2 text-[11px] text-blue-400">
            <span className="font-bold">Languages & Core Math</span>
            <span className="text-emerald-400">O(1) Memory</span>
          </div>
          <div className="mt-3 space-y-1.5 text-xs text-blue-200">
            <div><span className="text-purple-400">#include</span> &lt;vector&gt;</div>
            <div><span className="text-pink-400">class</span> <span className="text-amber-300">Solution</span> &#123;</div>
            <div className="pl-3"><span className="text-blue-400">public:</span> int solve(vector&lt;int&gt;&amp; nums) &#123;</div>
            <div className="pl-6 text-emerald-300">// C++, Java, JS, Python mastery</div>
            <div className="pl-6"><span className="text-pink-400">return</span> std::max_element(nums);</div>
            <div className="pl-3">&#125;</div>
            <div>&#125;;</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    badge: "Category 02",
    title: "Frontend Development",
    description: "Crafting responsive, high-performance user interfaces with modern React, semantic HTML5, utility-first CSS, and smooth animations.",
    tech: ["React", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-cyan-950 via-slate-900 to-blue-950 p-6 text-white font-mono">
        <div className="w-full rounded-xl border border-cyan-500/30 bg-[#09121a] p-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 text-[11px] text-cyan-400">
            <span className="font-bold">&lt;React.Component /&gt;</span>
            <span className="text-cyan-300 font-sans text-[10px] rounded bg-cyan-950 px-2 py-0.5 border border-cyan-500/40">60 FPS Smooth</span>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            <div className="flex items-center justify-between rounded-lg bg-neutral-900/80 p-2 border border-cyan-500/20">
              <span className="text-cyan-300 font-bold">State & Hooks:</span>
              <span className="text-emerald-400 font-sans text-[11px]">Active</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-900/80 p-2 border border-cyan-500/20">
              <span className="text-purple-300 font-bold">Tailwind CSS:</span>
              <span className="text-cyan-300 font-sans text-[11px]">Utility-First</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-900/80 p-2 border border-cyan-500/20">
              <span className="text-pink-300 font-bold">Responsive Layout:</span>
              <span className="text-amber-300 font-sans text-[11px]">Mobile to 4K</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    badge: "Category 03",
    title: "Backend Development",
    description: "Architecting secure scalable servers, asynchronous RESTful APIs, middleware pipelines, and robust JWT / OAuth authentication flows.",
    tech: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT / OAuth)"],
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-6 text-white font-mono">
        <div className="w-full rounded-xl border border-emerald-500/30 bg-[#07140e] p-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 text-[11px] text-emerald-400">
            <span className="font-bold">Express.js API Router</span>
            <span className="text-emerald-300">HTTP 200 OK</span>
          </div>
          <div className="mt-3 space-y-1.5 text-xs text-emerald-200">
            <div><span className="text-purple-400">app</span>.<span className="text-blue-400">post</span>(<span className="text-amber-300">"/api/v1/auth/login"</span>, async (req, res) =&gt; &#123;</div>
            <div className="pl-3"><span className="text-pink-400">const</span> token = <span className="text-blue-400">jwt</span>.<span className="text-emerald-300">sign</span>(&#123; userId &#125;);</div>
            <div className="pl-3">res.<span className="text-blue-400">json</span>(&#123; <span className="text-cyan-300">status: "Authenticated"</span>, token &#125;);</div>
            <div>&#125;);</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    badge: "Category 04",
    title: "Databases & Persistence",
    description: "Designing flexible document schemas, indexing pipelines, aggregation queries, and ORM/ODM integration with MongoDB & Mongoose.",
    tech: ["MongoDB", "Mongoose"],
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-green-950 via-slate-900 to-emerald-950 p-6 text-white font-mono">
        <div className="w-full rounded-xl border border-green-500/30 bg-[#06120b] p-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-green-500/20 pb-2 text-[11px] text-green-400">
            <span className="font-bold">MongoDB Cluster</span>
            <span className="text-emerald-300">Primary Node</span>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            <div className="rounded-lg bg-neutral-950 p-2.5 border border-green-500/20 text-[11px] text-green-200">
              <span className="text-purple-400">const</span> UserSchema = <span className="text-amber-300">new Schema</span>(&#123; <br />
              &nbsp;&nbsp;<span className="text-cyan-300">email</span>: String, <br />
              &nbsp;&nbsp;<span className="text-cyan-300">role</span>: String <br />
              &#125;);
            </div>
            <div className="flex items-center justify-between text-[10px] text-green-400">
              <span>Collection: users</span>
              <span>Index: 100% Active</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    badge: "Category 05",
    title: "Tools & Deployment Platforms",
    description: "Streamlining engineering workflows with Git version control, GitHub collaboration, Postman API testing suite, and instant cloud deployments.",
    tech: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 p-6 text-white font-mono">
        <div className="w-full rounded-xl border border-purple-500/30 bg-[#120b18] p-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 text-[11px] text-purple-400">
            <span className="font-bold">DevOps & Cloud Pipeline</span>
            <span className="text-emerald-400">Vercel Deployed</span>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            <div className="flex items-center justify-between rounded-lg bg-neutral-900/80 p-2 border border-purple-500/20">
              <span className="text-purple-300">Git / GitHub:</span>
              <span className="text-emerald-400 text-[11px]">main branch</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-900/80 p-2 border border-purple-500/20">
              <span className="text-amber-300">Postman Suite:</span>
              <span className="text-cyan-300 text-[11px]">100% Tests Passed</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-neutral-900/80 p-2 border border-purple-500/20">
              <span className="text-pink-300">Render / Vercel:</span>
              <span className="text-emerald-400 text-[11px]">Production Live</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    badge: "Category 06",
    title: "AI & Advanced Technologies",
    description: "Building intelligent web applications powered by OpenAI GPT APIs, custom prompt engineering, PDF resume parsing, and ATS match optimization.",
    tech: ["OpenAI APIs", "Prompt Engineering", "Resume Parsing", "ATS Optimization"],
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-rose-950 via-slate-900 to-purple-950 p-6 text-white font-mono">
        <div className="w-full rounded-xl border border-rose-500/30 bg-[#170912] p-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-2 text-[11px] text-rose-400">
            <span className="font-bold">OpenAI GPT Engine</span>
            <span className="text-rose-300">ATS Match: 98%</span>
          </div>
          <div className="mt-3 space-y-2 text-xs">
            <div className="rounded-lg bg-neutral-900/90 p-2.5 border border-rose-500/20 text-[11px] text-rose-200">
              <div className="text-purple-300 font-bold">Prompt Pipeline:</div>
              <div className="mt-1 text-[10px] text-neutral-300">"Analyze candidate resume against target job description..."</div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-rose-300">
              <span>Resume PDF Extractions</span>
              <span className="text-emerald-400 font-bold">Optimized</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const ACHIEVEMENTS = [
  {
    title: "1st Place - National AI Hackathon",
    issuer: "AI Innovation Summit 2024",
    description: "Awarded Grand Winner among 150+ teams for engineering CypherX, an AI-powered security scanner and payload encryptor.",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
    button: "View Trophy",
    link: "https://github.com/sidkaushik/cypherx",
  },
  {
    title: "Full Stack Web Development Certification",
    issuer: "Meta / Coursera",
    description: "Comprehensive certification covering React, Node.js, RESTful API design, database modeling, and cloud deployment.",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    button: "Verify Certificate",
    link: "#",
  },
  {
    title: "Generative AI Specialist Certification",
    issuer: "DeepLearning.AI",
    description: "Mastery in fine-tuning LLMs, retrieval-augmented generation (RAG) pipelines, vector databases, and prompt optimization.",
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    button: "Verify Credential",
    link: "#",
  },
  {
    title: "Top Performer - 200+ LeetCode Solved",
    issuer: "LeetCode Platform",
    description: "Achieved top rating in algorithms & data structures competitive contests. Solved 200+ dynamic programming and graph problems.",
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    button: "LeetCode Profile",
    link: "https://leetcode.com/sidkaushik",
  },
  {
    title: "Best Fintech Innovation Award",
    issuer: "FinTech Builders Summit",
    description: "Recognized for Children of Capital, pioneering AI-driven cap table forecasting and investor update automation.",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    button: "View Project",
    link: "https://github.com/sidkaushik/children-of-capital",
  },
];
