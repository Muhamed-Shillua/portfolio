import { setActiveTab } from './sections.js';

// -----------------------------------------
// UI LOGIC: INTERSECTION OBSERVER
// Observe sections for scroll visibility and to sync active tabs.
// -----------------------------------------
export function initObserver() {
  if ("IntersectionObserver" in window) {
    const sectionRatios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          sectionRatios.set(entry.target.id, entry.intersectionRatio);
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }
        let bestId = null;
        let maxRatio = 0;
        for (const [id, ratio] of sectionRatios.entries()) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestId = id;
          }
        }
        if (bestId && maxRatio > 0.05) {
          setActiveTab(bestId);
        }
      },
      { threshold: [0.1, 0.25, 0.5, 0.75, 1.0] }
    );
    for (const section of document.querySelectorAll(".section")) observer.observe(section);
  } else {
    // Fallback if IntersectionObserver is not supported
    for (const section of document.querySelectorAll(".section")) section.classList.add("visible");
  }
}
