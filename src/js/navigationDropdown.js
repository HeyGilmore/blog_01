document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("settingsToggle");
  const menuLi = btn.parentElement;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const isOpen = menuLi.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (e) => {
    if (menuLi.classList.contains("open") && !menuLi.contains(e.target)) {
      menuLi.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
});
