// tidy behaviors: set year, animate stagger, click pop, keyboard accessibility
document.addEventListener('DOMContentLoaded', () => {
  // set copyright year
  document.getElementById('year').textContent = new Date().getFullYear();

  const cards = Array.from(document.querySelectorAll('.job-card'));
  // staggered entrance: set animationDelay based on index
  cards.forEach((c, i) => {
    const delay = i * 70; // ms
    c.style.animationDelay = `${delay}ms`;
    // make keyboard accessible: Enter or Space follow link
    c.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        // simulate click which will open the href
        e.preventDefault();
        c.click();
      }
    });

    // pop animation on pointerdown for tactile feedback
    c.addEventListener('pointerdown', (ev) => {
      c.classList.add('pop');
      // remove after animation completes
      setTimeout(() => c.classList.remove('pop'), 420);
    });

    // add a subtle hover micro-interaction: pulse shadow on pointerenter
    c.addEventListener('pointerenter', () => {
      // small hardware-friendly hint only, handled by CSS - kept for extensibility
    });
  });

  // progressive enhancement: set role & tabindex for each card so they are focusable
  cards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');
  });

  // If you'd like to add analytics or track clicks, add handlers here.
});
