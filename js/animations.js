/* ══════════════════════════════════════
   ANIMATIONS — scroll observers
══════════════════════════════════════ */

/* ── Fade-in on scroll ── */
const faders = document.querySelectorAll('.fade-in');
const fadeObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
      fadeObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
faders.forEach(f => fadeObs.observe(f));

/* ── Skill bars ── */
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach(b => { b.style.width = b.dataset.width + '%'; });
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.card').forEach(c => barObs.observe(c));

/* ── Active nav highlight ── */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.section === cur);
  });
}, { passive: true });
