document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".header__menu-btn");
  const menuOverlay = document.querySelector(".menu-overlay");
  const overlay = document.querySelector(".overlay");

  menuBtn.addEventListener("click", openCloseMenu);

  function openCloseMenu() {
    const hamburger = menuBtn.querySelector(".hamburger");
    const hiddenTxt = menuBtn.querySelector(".visually-hidden");

    const isMenuOpen = hamburger.src.includes("icon-close");
    const body = document.querySelector("body");

    if (isMenuOpen) {
      hamburger.src = "images/icon-hamburger.svg";
      hiddenTxt.textContent = "Menu";
      menuBtn.setAttribute("aria-expanded", "false");
    } else {
      hamburger.src = "images/icon-close.svg";
      hiddenTxt.textContent = "Close Menu";
      menuBtn.setAttribute("aria-expanded", "true");
    }

    overlay.classList.toggle("hidden");
    menuOverlay.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
  }
});
