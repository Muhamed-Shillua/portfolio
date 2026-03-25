import { initTheme } from './theme.js';
import { renderHero } from '../components/hero.js';
import { renderSections, initTabs } from './sections.js';
import { initObserver } from './observer.js';
import { initTooltip } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderHero();
  renderSections();
  initTabs();
  initObserver();
  initTooltip();
});
