export function renderHero() {
  const content = document.getElementById("content");
  if (!content) return;

  const heroPanel = document.createElement("section");
  heroPanel.className = "hero__panel";
  heroPanel.setAttribute("aria-label", "Hero Information");
  heroPanel.innerHTML =
    `<h1 class="hero__name">Muhamed Shillua</h1>` +
    `<p class="hero__role">Backend Developer</p>` +
    `<p class="hero__tagline">Designing secure, scalable backend services and clean API architecture.</p>` +
    `<div class="hero__stack">` +
    `<span class="hero__chip">Node.js</span>` +
    `<span class="hero__chip">Express.js</span>` +
    `<span class="hero__chip">PostgreSQL</span>` +
    `<span class="hero__chip">MongoDB</span>` +
    `<span class="hero__chip">JWT/RBAC</span>` +
    `</div>`;
  content.appendChild(heroPanel);

  // -----------------------------------------
  // UI LOGIC: TYPING EFFECT
  // Subtle typing effect for hero heading
  // -----------------------------------------
  const typingEl = heroPanel.querySelector(".hero__name");
  if (typingEl) {
    const text = typingEl.textContent || "Muhamed Shillua"; // Fallback text
    typingEl.textContent = ""; // Clear initially
    typingEl.classList.add("typing"); // Ensure typing cursor is visible

    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      typingEl.textContent = text.slice(0, i);
      if (i >= text.length) {
        clearInterval(timer);
        setTimeout(() => typingEl.classList.remove("typing"), 2000); // Remove cursor after 2s
      }
    }, 70);
  }
}
