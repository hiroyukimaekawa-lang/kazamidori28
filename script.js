const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

for (const button of tabButtons) {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;

    for (const btn of tabButtons) {
      const isActive = btn === button;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    }

    for (const panel of tabPanels) {
      panel.classList.toggle('active', panel.id === targetId);
    }
  });
}

const revealTargets = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }
  },
  { threshold: 0.2 }
);

for (const target of revealTargets) {
  observer.observe(target);
}
