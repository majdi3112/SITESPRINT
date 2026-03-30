function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Smooth scroll to #id.
 * The exact offset for fixed headers is handled purely by CSS `scroll-margin-top`
 * which is dynamically updated via the `--dynamic-header-height` variable.
 * 
 * @param {string} id - Element id (without #)
 * @param {{ behavior?: ScrollBehavior }} [options]
 */
export function scrollToSection(id, options = {}) {
  if (!id) return;

  const behavior = options.behavior ?? (prefersReducedMotion() ? "auto" : "smooth");

  if (id === "top") {
    window.scrollTo({ top: 0, left: 0, behavior });
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  // Let CSS scroll-margin-top handle the exact header offset
  el.scrollIntoView({ behavior, block: "start" });
}
