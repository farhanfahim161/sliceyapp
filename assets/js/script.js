/* Add the official store listing URLs here once Slicey is published. */
const STORE_LINKS = {
  googlePlay: "",
  appStore: ""
};

const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3400);
}

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("primary-nav");
if (menuToggle && nav) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });
}

// Store badges. They become direct links as soon as the official URLs are added above.
document.querySelectorAll("[data-store]").forEach(button => {
  const platform = button.dataset.store;
  const url = STORE_LINKS[platform];
  if (url) {
    button.href = url;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.removeAttribute("aria-label");
    const note = button.querySelector(".coming-soon");
    if (note) note.remove();
  } else {
    button.addEventListener("click", event => {
      event.preventDefault();
      const name = platform === "googlePlay" ? "Google Play" : "App Store";
      showToast(`${name} download link will appear here when the official listing is ready.`);
    });
  }
});

// Audience tabs for the two sets of supplied app screenshots.
const screenshotTabs = Array.from(document.querySelectorAll(".screenshot-tab"));
function activatePanel(tab) {
  const panelId = tab.dataset.panel;
  screenshotTabs.forEach(item => {
    const active = item === tab;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
    const panel = document.getElementById(item.dataset.panel);
    if (panel) {
      panel.hidden = !active;
      panel.classList.toggle("is-visible", active);
    }
  });
  const activePanel = document.getElementById(panelId);
  const track = activePanel && activePanel.querySelector(".screenshot-track");
  if (track) track.scrollLeft = 0;
}
screenshotTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activatePanel(tab));
  tab.addEventListener("keydown", event => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = screenshotTabs[(index + direction + screenshotTabs.length) % screenshotTabs.length];
    next.focus();
    activatePanel(next);
  });
});

// Horizontal screenshot controls scroll the currently selected group.
document.querySelectorAll("[data-scroll]").forEach(button => {
  button.addEventListener("click", () => {
    const activePanel = document.querySelector(".screenshot-panel:not([hidden])");
    const track = activePanel && activePanel.querySelector(".screenshot-track");
    if (!track) return;
    const card = track.querySelector(".screen-card");
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 16;
    const amount = card ? card.getBoundingClientRect().width + gap : track.clientWidth * .8;
    track.scrollBy({ left: Number(button.dataset.scroll) * amount, behavior: "smooth" });
  });
});

// Keep the footer year current without requiring a server.
const year = document.getElementById("current-year");
if (year) year.textContent = new Date().getFullYear();
