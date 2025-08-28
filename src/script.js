document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".header__menu-btn");
  const menuOverlay = document.querySelector(".menu-overlay");
  const overlay = document.querySelector(".overlay");
  const nav = document.querySelector(".header__inner");

  let removeTrapFocus; //cleanup variable for trap

  menuBtn.addEventListener("click", openCloseMenu);

  function openCloseMenu() {
    const hamburger = menuBtn.querySelector(".hamburger");
    const hiddenTxt = menuBtn.querySelector(".visually-hidden");

    const isMenuOpen = hamburger.src.includes("icon-close");
    const body = document.querySelector("body");

    if (isMenuOpen) {
      hamburger.src = "images/icon-hamburger.svg";
      hiddenTxt.textContent = "Open Menu";
      menuBtn.setAttribute("aria-expanded", "false");

      removeTrapFocus = trapFocus(nav);
    } else {
      hamburger.src = "images/icon-close.svg";
      hiddenTxt.textContent = "Close Menu";
      menuBtn.setAttribute("aria-expanded", "true");

      if (removeTrapFocus) {
        removeTrapFocus();
        removeTrapFocus = null;
      }
    }

    overlay.classList.toggle("hidden");
    menuOverlay.classList.toggle("hidden");
    body.classList.toggle("no-scroll");
  }

  //trap focus for nav accessibility
  function trapFocus(container) {
    const navFocusables = container.querySelectorAll(
      ".header__logo, .header__menu-btn, .menu-overlay__link"
    );

    const firstEl = navFocusables[0];
    const lastEl = navFocusables[navFocusables.length - 1];

    function handleNavTrap(e) {
      const isMobile = window.innerWidth <= 768;

      if (e.key !== "Tab") return;

      // check width at the moment of keydown
      if (!isMobile) return;

      // e.shiftKey - shift + tab condition
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    container.addEventListener("keydown", handleNavTrap);

    return () => container.removeEventListener("keydown", handleNavTrap);
  }
});
