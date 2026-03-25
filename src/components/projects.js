export function renderProjects(wrapper) {
  const divider = document.createElement("hr");
  divider.className = "section__divider";
  wrapper.appendChild(divider);

  const cards = [
    {
      title: "Order Management API",
      stack: "Node.js • Express.js • MongoDB • JWT",
      description: "Role-aware order APIs with secure lifecycle and validation rules.",
      impact: "Improved reliability of order state transitions.",
      github: "https://github.com/muhamed-shillua/order-management-api",
    },
    {
      title: "Task Tracker API",
      stack: "Node.js • Express.js • PostgreSQL • Jest",
      description: "Task workflows with optimized relational queries and reliable testing.",
      impact: "Improved list-query performance and test confidence.",
      github: "https://github.com/muhamed-shillua/task-tracker-api",
    },
    {
      title: "Authentication Service",
      stack: "Node.js • Express.js • PostgreSQL • Redis",
      description: "Reusable authentication module with token lifecycle and RBAC guards.",
      impact: "Reduced duplicated auth logic across services.",
      github: "https://github.com/muhamed-shillua/auth-service",
    },
  ];
  const grid = document.createElement("div");
  grid.className = "projects__grid";
  for (const card of cards) {
    const outer = document.createElement("article");
    outer.className = "projects__card";
    outer.innerHTML =
      `<div class="projects__card-inner">` +
      `<h3 class="projects__title">${card.title}</h3>` +
      `<p class="projects__stack">${card.stack}</p>` +
      `<p class="projects__desc">${card.description}</p>` +
      `<p class="projects__impact">${card.impact}</p>` +
      `<a class="projects__link" href="${card.github}" target="_blank" ` +
      `rel="noopener noreferrer" aria-label="View ${card.title} on GitHub">View on GitHub</a>` +
      `</div>`;
    grid.appendChild(outer);
  }
  wrapper.appendChild(grid);
}
