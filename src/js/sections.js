import { highlight, createLineNumbers, codeWrapObserver } from './utils.js';
import { renderSkills } from '../components/skills.js';
import { renderProjects } from '../components/projects.js';
import { renderContactLinks } from '../components/contact.js';

export const sectionsData = [
  {
    id: "about",
    title: "profile.js",
    code: `const developer = {
  name: "Muhamed Shillua",
  role: "Backend Developer",
  location: "Cairo, Egypt",
  yearsExperience: "1+ years",
  quickSummary: [
    "Backend engineer focused on highly reliable Node.js APIs.",
    "Strong in unified auth security, data modeling, and query optimization.",
    "Comfortable shipping scalable, production-ready backend modules."
  ],
  focus: "Scalable APIs, Auth Security, and Database Performance.",
  topStrengths: [
    "API Architecture + Service Modularity",
    "Authentication (JWT/RBAC) + Query Performance"
  ],
  highlights: [
    "Built robust REST APIs with strict contracts, pagination, and filtering.",
    "Optimized data query performance through intelligent indexing and latency reduction."
  ],
  background: [
    "Reserve Officer (2 years), Egyptian Armed Forces.",
    "Brings strong leadership, discipline, and fast decision-making under operational pressure."
  ],
  careerGoal: "Build world-class Node.js backend and API systems.",
  preferredRole: "Backend Engineer (Node.js / API Platform)",
  lastUpdated: "2026-03"
};`,
  },
  {
    id: "education",
    title: "education.js",
    code: `const education = [
  {
    degree: "B.Sc. in Computers and Information (Information Technology)",
    university: "Mansoura University — Mansoura, Egypt",
    duration: "2018 – 2022",
    graduationProject: "Software Defined Network (SDN) simulation focusing on network programmability and dynamic resource allocation."
  }
];`
  },
  {
    id: "skills",
    title: "stack.js",
    code: `const skills = {
  coreSkills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "JWT", "Docker"],
  backend: [
    "Node.js: Production REST APIs + modular services.",
    "Express.js: Routing, middleware, and error handling.",
    "REST API Design: Versioned endpoints + pagination.",
    "Architecture: Clean service boundaries for maintainability."
  ],
  databases: [
    "MongoDB: Schemas, indexes, and aggregation pipelines.",
    "PostgreSQL: Relational modeling + SQL optimization.",
    "Query Optimization: Lower latency via index + payload tuning."
  ],
  devops: [
    "Docker: Containerized backend services for consistent delivery.",
    "AWS EC2: Deployed and operated Node.js services on cloud VMs.",
    "Nginx: Reverse proxy + routing for API traffic."
  ],
  security: [
    "JWT: Secure token workflows for protected APIs.",
    "RBAC: Role/permission checks for endpoint access.",
    "Input Validation: Schema-based validation + sanitization."
  ],
  testing: [
    "Jest: Unit/integration coverage for backend logic.",
    "Supertest: API contract + auth-flow testing.",
    "CI/CD: Automated tests to reduce release regressions."
  ],
  others: [
    "Git/GitHub: PR workflows and collaboration.",
    "API Documentation: Clear endpoint specs for integration."
  ]
};`,
  },
  {
    id: "projects",
    title: "work.js",
    code: `const projects = [
  {
    name: "Order Management API",
    description: "REST API for orders with role-aware operations.",
    featured: true,
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Docker"],
    keyHighlights: [
      "JWT + RBAC access control",
      "Order lifecycle rules + validation",
      "Pagination, filtering, and search"
    ],
    challengesSolved: "Prevented invalid transitions with strict service rules.",
    impact: "Improved reliability of order state transitions.",
    metrics: ["Role levels: 3", "Key endpoints: 18", "Pagination + search enabled"],
    status: "Production-style",
    role: "Solo backend engineer",
    repositoryUrl: "https://github.com/muhamed-shillua/order-management-api"
  },
  {
    name: "Task Tracker API",
    description: "Task tracker backend with ownership and status workflows.",
    featured: true,
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Jest", "Docker"],
    keyHighlights: [
      "Task CRUD and status tracking",
      "Role-aware permissions",
      "Query-optimized listings + tests"
    ],
    challengesSolved: "Improved SQL speed via join/index tuning.",
    impact: "Improved list-query performance and test confidence.",
    metrics: ["Key endpoints: 16", "Automated tests: enabled", "DB engine: PostgreSQL"],
    status: "Production-style",
    role: "Solo backend engineer",
    repositoryUrl: "https://github.com/Muhamed-Shillua/Task-Tracker-API"
  },
  {
    name: "Authentication Service",
    description: "Reusable auth module for secure login and authorization.",
    featured: false,
    techStack: ["Node.js", "Express.js", "PostgreSQL", "JWT", "Redis"],
    keyHighlights: [
      "Access/refresh token strategy",
      "RBAC middleware guards",
      "Password hashing + token invalidation"
    ],
    challengesSolved: "Simplified token lifecycle with dedicated auth modules.",
    impact: "Reduced duplicated auth logic across services.",
    metrics: ["Token flows: access + refresh", "Auth guards: role-based", "Cache: Redis"],
    status: "Active module",
    role: "Solo backend engineer",
    repositoryUrl: "https://github.com/muhamed-shillua/auth-service"
  }
];`
  },
  {
    id: "contact",
    title: "connect.js",
    code: `const contact = {
  email: "muhamed.shillua.dev@gmail.com",
  phone: "+20 114 176 2496",
  location: "Cairo, Egypt",
  github: "https://github.com/muhamed-shillua",
  linkedin: "https://linkedin.com/in/muhamed-shillua",
  availability: "Open to backend engineering opportunities",
  preferredContact: ["Email", "LinkedIn"],
  responseTime: "Usually within 24 hours",
  callToAction: "Hiring for backend/API ownership? Reach out by email or LinkedIn."
};`,
    links: [
      { label: "Email", href: "mailto:muhamed.shillua.dev@gmail.com" },
      { label: "Call", href: "tel:+201141762496" },
      { label: "GitHub", href: "https://github.com/muhamed-shillua" },
      { label: "LinkedIn", href: "https://linkedin.com/in/muhamed-shillua" },
      {
        label: "Resume",
        href: "./public/Muhamed-Shillua-Backend-Developer-CV.pdf",
        target: "_blank",
        rel: "noopener noreferrer"
      },
    ],
  },
];

export function renderSections() {
  const content = document.getElementById("content");
  if (!content) return;

  for (const section of sectionsData) {
    const wrapper = document.createElement("section");
    wrapper.className = "section";
    wrapper.id = section.id;
    wrapper.setAttribute("role", "region");
    wrapper.setAttribute("aria-labelledby", `header-${section.id}`);

    const head = document.createElement("div");
    head.className = "section__header";
    head.innerHTML =
      `<span class="section__editor-dots" aria-hidden="true"><i></i><i></i><i></i></span>` +
      `<span id="header-${section.id}" class="section__header-name">${section.title}</span>`;

    const codeWrap = document.createElement("div");
    codeWrap.className = "code__wrap";
    codeWrap.setAttribute("aria-hidden", "true");

    // Clean code to ensure numbering matches content reliably
    const cleanCode = section.code.trim();

    const lines = document.createElement("div");
    lines.className = "code__lines";
    lines.innerHTML = createLineNumbers(cleanCode);

    const pre = document.createElement("pre");
    pre.className = "code__block language-javascript";
    pre.innerHTML = `<code class="language-javascript">${highlight(cleanCode)}</code>`;

    codeWrap.appendChild(lines);
    codeWrap.appendChild(pre);
    wrapper.appendChild(head);
    wrapper.appendChild(codeWrap);

    // Track for responsive line boundaries tracking
    codeWrapObserver.observe(codeWrap);

    renderContactLinks(wrapper, section);

    if (section.id === "skills") {
      renderSkills(wrapper);
    }

    if (section.id === "projects") {
      renderProjects(wrapper);
    }

    content.appendChild(wrapper);
  }
}

export function setActiveTab(id) {
  const tabs = Array.from(document.querySelectorAll(".tabs__btn"));
  for (const tab of tabs) {
    if (tab.dataset.target === id) {
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
    } else {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    }
  }
}

export function initTabs() {
  const tabs = Array.from(document.querySelectorAll(".tabs__btn"));
  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      const target = document.getElementById(tab.dataset.target);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(tab.dataset.target);
    });
  }
}
