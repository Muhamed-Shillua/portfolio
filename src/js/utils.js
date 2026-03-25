import Prism from 'prismjs';
import 'prismjs/components/prism-javascript.js';

// Tech tips mapped to specific keywords for hover tooltips
export const techTips = {
  "Node.js": "JavaScript runtime for backend services.",
  "Express": "Fast, minimal framework for Node.js APIs.",
  "Express.js": "Fast, minimal framework for Node.js APIs.",
  "MongoDB": "Document database for flexible data models.",
  "PostgreSQL": "Relational database with strong consistency.",
  "Docker": "Containerization for consistent deployments.",
  "AWS": "Cloud platform for hosting backend apps.",
  "Redis": "In-memory datastore used for caching and fast state access.",
  "JWT Authentication": "Token-based authentication for secure API access.",
  "RBAC": "Role-based permission control for protected resources.",
  "Jest": "Testing framework for unit and integration backend tests."
};

// Utility: Add syntax highlighting to code blocks using Prism.js
export function highlight(code) {
  if (Prism?.languages?.javascript) {
    try {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    } catch { }
  }
  return code;
}

// Utility: Generate line numbers for code blocks
export function createLineNumbers(code) {
  return code
    .split("\n")
    .map((_, i) => `<div>${i + 1}</div>`)
    .join("");
}

export function syncLineNumbers(codeWrap) {
  const linesContainer = codeWrap.querySelector(".code__lines");
  const pre = codeWrap.querySelector("pre");
  if (!linesContainer || !pre) return;

  const lineDivs = linesContainer.children;
  const rawLines = pre.textContent.split("\n");

  const clone = document.createElement("div");
  const preStyles = window.getComputedStyle(pre);
  
  clone.style.fontFamily = preStyles.fontFamily;
  clone.style.fontSize = preStyles.fontSize;
  clone.style.lineHeight = preStyles.lineHeight;
  clone.style.whiteSpace = "pre-wrap";
  clone.style.wordBreak = preStyles.wordBreak || "break-word";
  clone.style.width = preStyles.width;
  clone.style.padding = preStyles.padding;
  clone.style.boxSizing = "border-box";
  clone.style.position = "absolute";
  clone.style.visibility = "hidden";
  clone.style.pointerEvents = "none";

  document.body.appendChild(clone);

  for (let i = 0; i < rawLines.length; i++) {
    clone.textContent = rawLines[i] || " "; // preserve line height logic for empty strings
    if (lineDivs[i]) {
      lineDivs[i].style.height = `${clone.offsetHeight}px`;
    }
  }

  document.body.removeChild(clone);
}

// Utility: Sync line heights dynamically mapping visual wraparounds
export const codeWrapObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.target.classList.contains("code__wrap")) {
      syncLineNumbers(entry.target);
    }
  }
});

// UI LOGIC: TOOLTIP
export function initTooltip() {
  const content = document.getElementById("content");
  const tooltip = document.getElementById("tooltip");
  if (!content || !tooltip) return;

  let tooltipTicking = false;
  content.addEventListener("mousemove", (event) => {
    if (!tooltipTicking) {
      window.requestAnimationFrame(() => {
        const token = event.target.closest(".token");
        const badge = event.target.closest(".badge");
        const source = token || badge;

        if (!source || !tooltip) {
          if (tooltip && tooltip.classList.contains("visible")) {
            tooltip.classList.remove("visible");
            tooltip.setAttribute("aria-hidden", "true");
          }
          tooltipTicking = false;
          return;
        }

        const label = String(source.dataset.tech || source.textContent || "")
          .replace(/^["'`]|["'`]$/g, "")
          .trim();
        const tip = techTips[label];

        if (!tip) {
          if (tooltip.classList.contains("visible")) {
            tooltip.classList.remove("visible");
            tooltip.setAttribute("aria-hidden", "true");
          }
          tooltipTicking = false;
          return;
        }

        if (tooltip.textContent !== tip) {
          tooltip.textContent = tip;
        }

        const winW = window.innerWidth;
        const winH = window.innerHeight;

        tooltip.classList.add("visible");
        tooltip.setAttribute("aria-hidden", "false");

        const tooltipW = tooltip.offsetWidth;
        const tooltipH = tooltip.offsetHeight;

        let left = event.clientX + 12;
        let top = event.clientY + 12;

        if (left + tooltipW > winW) left = event.clientX - tooltipW - 12;
        if (top + tooltipH > winH) top = event.clientY - tooltipH - 12;

        tooltip.style.left = `${Math.max(8, left)}px`;
        tooltip.style.top = `${Math.max(8, top)}px`;

        tooltipTicking = false;
      });
      tooltipTicking = true;
    }
  });

  content.addEventListener("mouseleave", () => {
    if (!tooltip) return;
    tooltip.classList.remove("visible");
    tooltip.setAttribute("aria-hidden", "true");
  });
}
