const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
const menuToggle = document.getElementById('menu-toggle');
const globalNav = document.getElementById('global-nav');
const menuHeroEyebrow = document.getElementById('menu-hero-eyebrow');
const menuHeroTitle = document.getElementById('menu-hero-title');
const menuHeroDescription = document.getElementById('menu-hero-description');

function updateMenuHero(menuType) {
  if (!menuHeroEyebrow || !menuHeroTitle || !menuHeroDescription) return;

  if (menuType === 'drink') {
    menuHeroEyebrow.textContent = 'DRINK MENU';
    menuHeroTitle.textContent = 'お飲み物メニュー';
    menuHeroDescription.textContent = 'ビール・サワー・ハイボールから、ワイン・カクテルまで幅広くご用意しています。';
    return;
  }

  menuHeroEyebrow.textContent = 'MENU LIST';
  menuHeroTitle.textContent = 'お食事メニュー';
  menuHeroDescription.textContent = 'オリジナルメニュー・定番メニュー・おすすめメニューをご紹介します。';
}

function updateTabParam(menuType) {
  if (!menuType) return;
  const url = new URL(window.location.href);
  url.searchParams.set('tab', menuType);
  window.history.replaceState({}, '', url);
}

for (const button of tabButtons) {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const menuType = button.dataset.menuType;

    for (const btn of tabButtons) {
      const active = btn === button;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-selected', String(active));
    }

    for (const panel of tabPanels) {
      panel.classList.toggle('active', panel.id === targetId);
    }

    if (menuType) {
      updateMenuHero(menuType);
      updateTabParam(menuType);
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

const tabFromQuery = new URLSearchParams(window.location.search).get('tab');
if (tabFromQuery === 'drink') {
  const drinkTabButton = document.getElementById('drink-tab-page');
  if (drinkTabButton) {
    drinkTabButton.click();
  }
} else if (tabFromQuery === 'food') {
  const foodTabButton = document.getElementById('food-tab-page');
  if (foodTabButton) {
    foodTabButton.click();
  }
}
