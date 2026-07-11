/* ══════════════════════════════════════
   THEME — dark / light toggle
══════════════════════════════════════ */
function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark);
  const sunIcons  = [document.getElementById('icon-sun'),  document.getElementById('icon-sun-m')];
  const moonIcons = [document.getElementById('icon-moon'), document.getElementById('icon-moon-m')];
  sunIcons.forEach(i  => i && (i.style.display = dark ? 'block' : 'none'));
  moonIcons.forEach(i => i && (i.style.display = dark ? 'none'  : 'block'));
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  applyTheme(!isDark);
}

// Initialise from localStorage or system preference immediately
(function () {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved ? saved === 'dark' : prefersDark);
})();
