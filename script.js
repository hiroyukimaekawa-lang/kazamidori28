const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const menuToggle = document.getElementById('menu-toggle');
const globalNav = document.getElementById('global-nav');

for (const button of tabButtons) {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;

    for (const btn of tabButtons) {
      const active = btn === button;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    }

    for (const panel of tabPanels) {
      panel.classList.toggle('active', panel.id === targetId);
    }
  });
}

if (menuToggle && globalNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? '×' : '☰';
  });

  globalNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      globalNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

const tabOpenLinks = document.querySelectorAll('[data-open-tab]');
for (const link of tabOpenLinks) {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('data-open-tab');
    if (!targetId) return;

    const targetButton = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
    if (!targetButton) return;

    event.preventDefault();
    targetButton.click();

    const tabWrap = document.getElementById('menu-tabs');
    if (tabWrap) {
      tabWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
