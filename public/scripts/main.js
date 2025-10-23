function closeNav(elements) {
  const { nav, navToggle } = elements;
  if (nav) {
    nav.dataset.open = "false";
  }
  if (navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
  }
}

function toggleNav(elements) {
  const { nav, navToggle } = elements;
  if (!nav) return;
  const isOpen = nav.dataset.open === "true";
  nav.dataset.open = String(!isOpen);
  if (navToggle) {
    navToggle.setAttribute("aria-expanded", String(!isOpen));
  }
}

function setYear(yearEl) {
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}

function initNavigation(elements) {
  const { navToggle, header } = elements;

  const handleStickyHeader = () => {
    if (!header) return;
    const offset = window.scrollY || document.documentElement.scrollTop;
    header.classList.toggle("sticky", offset > 32);
  };

  const handleResize = () => {
    if (!elements.nav) return;
    if (window.innerWidth > 900 && elements.nav.dataset.open === "true") {
      closeNav(elements);
    }
  };

  if (navToggle) {
    navToggle.addEventListener("click", () => toggleNav(elements));
  }

  window.addEventListener("scroll", handleStickyHeader, { passive: true });
  window.addEventListener("resize", handleResize);
  window.addEventListener("pageshow", () => {
    handleStickyHeader();
    setYear(elements.yearEl);
  });

  handleStickyHeader();
}

function initNewsletterFeedback() {
  const forms = document.querySelectorAll("form[data-track='newsletter']");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const submittedMessage = document.createElement("p");
      submittedMessage.setAttribute("role", "status");
      submittedMessage.textContent = "Thanks! Check your inbox for a welcome email.";
      submittedMessage.style.marginTop = "0.75rem";
      submittedMessage.style.color = "var(--color-success)";
      const existing = form.parentElement?.querySelector("[data-feedback='newsletter']");
      if (existing) existing.remove();
      submittedMessage.dataset.feedback = "newsletter";
      form.parentElement?.appendChild(submittedMessage);
      form.reset();
    });
  });
}

function initCheckoutDemo() {
  const checkoutForm = document.querySelector("form[data-track='checkout-form']");
  if (!checkoutForm) return;
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = checkoutForm.querySelector("[data-track='checkout-submit']");
    if (button) {
      button.textContent = "Processing...";
      button.setAttribute("aria-busy", "true");
      setTimeout(() => {
        button.textContent = "Order confirmed";
        button.classList.add("btn-secondary");
        button.classList.remove("btn-primary");
        button.setAttribute("aria-busy", "false");
      }, 800);
    }
  });
}

function initSmoothAnchors(elements) {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        closeNav(elements);
      }
    });
  });
}

function init() {
  const elements = {
    header: document.getElementById("site-header"),
    nav: document.getElementById("site-nav"),
    navToggle: document.querySelector(".nav-toggle"),
    yearEl: document.getElementById("year"),
  };

  setYear(elements.yearEl);
  initNavigation(elements);
  initNewsletterFeedback();
  initCheckoutDemo();
  initSmoothAnchors(elements);
}

function onReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
  } else {
    callback();
  }
}

onReady(init);
