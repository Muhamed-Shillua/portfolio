export function renderSkills(wrapper) {
  const divider = document.createElement("hr");
  divider.className = "section__divider";
  wrapper.appendChild(divider);

  const skillBadges = [
    ["Node.js", "cyan"],
    ["Express", "cyan"],
    ["MongoDB", "magenta"],
    ["PostgreSQL", "magenta"],
    ["Docker", "yellow"],
    ["AWS", "yellow"],
    ["JWT Authentication", "yellow"],
    ["RBAC", "yellow"],
    ["Jest", "cyan"],
    ["Redis", "magenta"]
  ];
  const skillsWrap = document.createElement("div");
  skillsWrap.className = "skills__badges";
  skillsWrap.setAttribute("aria-label", "Skill badges");
  for (const [label, tone] of skillBadges) {
    const badge = document.createElement("span");
    badge.className = `skills__badge ${tone}`;
    badge.textContent = label;
    badge.dataset.tech = label;
    skillsWrap.appendChild(badge);
  }
  wrapper.appendChild(skillsWrap);

  const groups = [
    ["Backend", "Node.js, Express.js, API Design"],
    ["Databases", "PostgreSQL, MongoDB, Query Optimization"],
    ["Security", "JWT, RBAC, Validation"],
    ["DevOps", "Docker, AWS EC2, Nginx"],
    ["Testing", "Jest, Supertest, CI/CD"]
  ];
  const groupsWrap = document.createElement("div");
  groupsWrap.className = "skills__wrapper";
  for (const [name, desc] of groups) {
    const item = document.createElement("article");
    item.className = "skills__group";
    item.innerHTML = `<h4>${name}</h4><p>${desc}</p>`;
    groupsWrap.appendChild(item);
  }
  wrapper.appendChild(groupsWrap);
}
