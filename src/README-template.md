# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

- SCSS for organized, modular styling

- JavaScript for interactivity

- ARIA attributes for accessibility (aria-expanded, aria-controls)

- Mobile-first workflow

- Custom responsive navigation menu

- BEM naming convention for classes paired with scss

### What I learned

Learned how to do sass/scss organize code better and be modular when it comes to styling

To see how you can add code snippets, see below:

```html
<header class="header">
  <div class="header__inner container flex">
    <!-- logo -->
    <a href="#" class="header__logo" aria-label="Loopstudios home">
      <img
        src="images/logo.svg"
        alt="Loopstudios logo"
        class="header__logo-img"
      />
    </a>

    <!-- mobile‑first menu toggle -->
    <button
      class="header__menu-btn btn"
      type="button"
      aria-controls="primary-navigation"
      aria-expanded="false"
    >
      <span class="visually-hidden" aria-live="polite" aria-atomic="true"
        >Menu</span
      >
      <!-- simple hamburger icon -->
      <img src="images/icon-hamburger.svg" alt="" class="hamburger" />
    </button>

    <!-- primary navigation -->
    <nav
      id="primary-navigation"
      class="nav hidden nav--primary"
      aria-label="Primary"
    >
      <ul class="nav__list">
        <li class="nav__item">
          <a class="nav__link" href="#about">About</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#careers">Careers</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#events">Events</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#products">Products</a>
        </li>
        <li class="nav__item">
          <a class="nav__link" href="#support">Support</a>
        </li>
      </ul>
    </nav>
  </div>

  <!-- full‑screen mobile overlay (aria‑modal dialog) -->
  <div
    class="menu-overlay hidden"
    role="dialog"
    aria-modal="true"
    aria-label="Menu Overlay"
  >
    <ul class="menu-overlay__list flex">
      <li class="menu-overlay__item">
        <a class="menu-overlay__link" href="#about">About</a>
      </li>
      <li class="menu-overlay__item">
        <a class="menu-overlay__link" href="#careers">Careers</a>
      </li>
      <li class="menu-overlay__item">
        <a class="menu-overlay__link" href="#events">Events</a>
      </li>
      <li class="menu-overlay__item">
        <a class="menu-overlay__link" href="#products">Products</a>
      </li>
      <li class="menu-overlay__item">
        <a class="menu-overlay__link" href="#support">Support</a>
      </li>
    </ul>
  </div>
</header>
```

```scss
@use "functions" as f;
@use "sass:map";

$breakpoints-up: (
  "tablets": f.em(768),
  "desktops": f.em(1440),
);

@mixin breakpoint($size) {
  @media (min-width: map.get($breakpoints-up, $size)) {
    @content;
  }
}
```

```js
if (isMenuOpen) {
  hamburger.src = "images/icon-hamburger.svg";
  hiddenTxt.textContent = "Menu";
  menuBtn.setAttribute("aria-expanded", "false");
} else {
  hamburger.src = "images/icon-close.svg";
  hiddenTxt.textContent = "Close Menu";
  menuBtn.setAttribute("aria-expanded", "true");
}
```

### Continued development

-Adding keyboard navigation and focus trapping for modals or overlays

-Using JavaScript more effectively to enhance accessibility

-Improving animation/transition effects on menus and image cards

-Exploring utility-first frameworks like Tailwind for faster prototyping

### Useful resources

- [Kevin Powell on YouTube](https://www.example.com) - Definitely one of the best content creators under this field!

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/PastaSus)
