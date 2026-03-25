export function renderContactLinks(wrapper, section) {
  if (Array.isArray(section.links)) {
    const links = document.createElement("div");
    links.className = section.id === "contact" ? "contact__actions" : "projects__links";
    links.setAttribute("aria-label", "Contact links");
    for (const item of section.links) {
      const a = document.createElement("a");
      a.className = section.id === "contact" ? "contact__btn" : "projects__link";
      a.href = item.href;
      a.textContent = item.label;
      a.setAttribute("aria-label", item.label);
      if (item.href.startsWith("http") || item.target === "_blank") {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        if (item.href.includes("github.com") || item.href.includes("linkedin.com")) {
          a.rel = "noopener noreferrer me";
        }
      }
      if (item.download) {
        a.download = item.download;
      }
      links.appendChild(a);
    }
    wrapper.appendChild(links);
  }
}
