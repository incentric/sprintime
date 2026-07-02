const tabRoot = document.querySelector("[data-tabs]");
const progressBar = document.querySelector(".scroll-progress span");

if (tabRoot) {
  const buttons = Array.from(tabRoot.querySelectorAll("[data-tab]"));
  const panels = Array.from(tabRoot.querySelectorAll("[data-panel]"));

  const activateTab = (tabName) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.tab === tabName;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === tabName;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });
}

const updateProgress = () => {
  if (!progressBar) return;

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.width = `${Math.min(progress * 100, 100)}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
