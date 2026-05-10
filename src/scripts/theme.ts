// Theme management script
// Initialize theme on page load and provide toggle functionality

const THEME_KEY = 'neurosync-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Detect system preference
function getSystemPreference(): string {
  if (typeof window === 'undefined') return DARK_THEME;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME;
}

// Initialize theme on page load
export function initTheme() {
  const html = document.documentElement;

  // Get saved theme or system preference
  const savedTheme = localStorage.getItem(THEME_KEY);
  const theme = savedTheme || getSystemPreference();

  // Apply theme
  applyTheme(theme);
}

// Apply theme to document
function applyTheme(theme: string) {
  const html = document.documentElement;

  if (theme === LIGHT_THEME) {
    html.setAttribute('data-theme', LIGHT_THEME);
  } else {
    html.removeAttribute('data-theme');
  }

  localStorage.setItem(THEME_KEY, theme);
}

// Toggle between light and dark themes
export function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || DARK_THEME;
  const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

  applyTheme(newTheme);

  // Dispatch event for any listeners
  window.dispatchEvent(
    new CustomEvent('themechange', { detail: { theme: newTheme } })
  );

  return newTheme;
}

// Get current theme
export function getCurrentTheme(): string {
  const html = document.documentElement;
  return html.getAttribute('data-theme') || DARK_THEME;
}

// Initialize on script load
if (typeof document !== 'undefined') {
  initTheme();
}
