export function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeToggle.textContent = theme === "dark" ? "Light" : "Dark";
    try { localStorage.setItem("portfolioTheme", theme); } catch { }
  }

  const savedTheme = (() => {
    try { return localStorage.getItem("portfolioTheme"); } catch { return null; }
  })();
  
  applyTheme(savedTheme || "dark");

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    applyTheme(current === "light" ? "dark" : "light");
  });
}
