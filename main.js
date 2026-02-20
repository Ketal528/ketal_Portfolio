document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     AOS Animation
  ========================= */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      once: true
    });
  }


 /* =========================
   Typed Text (From HTML)
========================= */
const typedEl = document.querySelector(".typed");

if (typedEl && typeof Typed !== "undefined") {

  const items = typedEl.getAttribute("data-typed-items");

  if (items) {

    const strings = items.split(",").map(item => item.trim());

    new Typed(".typed", {
      strings: strings,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });

  }

}

  /* =========================
     Mobile Menu Toggle
  ========================= */
  const toggle = document.querySelector(".header-toggle");
  const header = document.querySelector(".header");

  if (toggle && header) {
    toggle.addEventListener("click", () => {
      header.classList.toggle("header-show");
    });
  }


  /* =========================
     Lightbox
  ========================= */
  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: ".glightbox"
    });
  }


  /* =========================
     Active Navbar on Scroll
  ========================= */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navmenu a");

  function setActiveNav() {
    let scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {

        navLinks.forEach(link => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });

      }
    });
  }

  window.addEventListener("scroll", setActiveNav);
  setActiveNav(); // Run on load


  /* =========================
     Scroll To Top Button
  ========================= */
  const scrollBtn = document.querySelector(".scroll-top");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {

      if (window.scrollY > 400) {
        scrollBtn.classList.add("active");
      } else {
        scrollBtn.classList.remove("active");
      }

    });
  }


  /* =========================
     Section Fade Animation
  ========================= */
  const animatedSections = document.querySelectorAll(".section");

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
      }

    });
  }, { threshold: 0.2 });

  animatedSections.forEach(sec => {
    sec.classList.add("hidden-section");
    sectionObserver.observe(sec);
  });


  /* =========================
     Skills Progress Animation
  ========================= */
  const progressBars = document.querySelectorAll(".progress-bar");

  const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        const bar = entry.target;
        const value = bar.getAttribute("aria-valuenow");

        if (value) {
          bar.style.width = value + "%";
        }
      }

    });

  }, { threshold: 0.5 });

  progressBars.forEach(bar => {
    skillObserver.observe(bar);
  });

});
