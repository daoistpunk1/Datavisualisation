const VARIANT_KEY = "msp-cta-variant";
const VARIANTS = ["a", "b"];

function chooseVariant() {
  const stored = window.localStorage.getItem(VARIANT_KEY);
  if (stored && VARIANTS.includes(stored)) {
    return stored;
  }
  const variant = VARIANTS[Math.floor(Math.random() * VARIANTS.length)];
  window.localStorage.setItem(VARIANT_KEY, variant);
  return variant;
}

function applyVariant(variant) {
  document.body.dataset.ctaVariant = variant;
  document.documentElement.style.setProperty("--cta-variant", variant);

  const heroHeadline = document.querySelector("[data-variant-copy]");
  if (heroHeadline) {
    heroHeadline.textContent =
      variant === "b"
        ? "Unlock elite progress with a proven hierarchy"
        : "Transform your training with evidence-based coaching";
  }

  const primaryButtons = document.querySelectorAll("[data-track='cta-primary']");
  primaryButtons.forEach((button) => {
    if (!button.dataset.originalLabel) {
      button.dataset.originalLabel = (button.textContent || "").trim();
    }
    button.textContent = variant === "b" ? "Start your transformation" : button.dataset.originalLabel;
  });
}

function init() {
  const variant = chooseVariant();
  applyVariant(variant);
  document.body.dataset.experiment = "cta-color";
  document.body.dataset.variant = variant;
}

function onReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
  } else {
    callback();
  }
}

onReady(init);
