document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo; normally, this would send an email.');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});


const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();
 
// ── NAVBAR SCROLL ────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});
 
// ── MOBILE MENU ──────────────────────────────
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
});
document.getElementById('mobileClose').addEventListener('click', closeMobile);
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }
 
// ── TYPEWRITER ───────────────────────────────
const roles = ['Computer Engineering Student', 'Aspiring Data Scientist', 'Tech Innovator', 'IoT Researcher', 'Full-Stack Developer'];
let ri = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter-text');
function typeLoop() {
  const word = roles[ri];
  if (!deleting) {
    tw.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(typeLoop, 1800); return; }
  } else {
    tw.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(typeLoop, deleting ? 50 : 85);
}
setTimeout(typeLoop, 800);
 
// ── REVEAL ON SCROLL ─────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
reveals.forEach(r => revealObs.observe(r));
 
// ── SKILL BARS ───────────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const pct = e.target.dataset.pct;
      setTimeout(() => { e.target.style.width = pct + '%'; }, 200);
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
skillFills.forEach(f => skillObs.observe(f));
 
// ── KNOWLEDGE GRAPH ──────────────────────────
function buildKG() {
  const canvas = document.getElementById('kgCanvas');
  const svg = document.getElementById('kgLines');
  const W = canvas.offsetWidth, H = canvas.offsetHeight;
 
  const nodes = [
    { id: 'core', label: 'CORE', x: 0.5, y: 0.5, r: 32, color: '#00d4ff', textColor: '#070b14', fontSize: '0.62rem' },
    { id: 'python', label: 'Python', x: 0.2, y: 0.22, r: 24, color: 'rgba(0,212,255,0.15)', textColor: '#00d4ff', fontSize: '0.58rem', border: '#00d4ff' },
    { id: 'sql', label: 'SQL', x: 0.78, y: 0.18, r: 22, color: 'rgba(245,200,66,0.15)', textColor: '#f5c842', fontSize: '0.58rem', border: '#f5c842' },
    { id: 'js', label: 'JS', x: 0.82, y: 0.55, r: 22, color: 'rgba(0,212,255,0.15)', textColor: '#00d4ff', fontSize: '0.58rem', border: '#00d4ff' },
    { id: 'c', label: 'C', x: 0.65, y: 0.82, r: 20, color: 'rgba(245,200,66,0.15)', textColor: '#f5c842', fontSize: '0.58rem', border: '#f5c842' },
    { id: 'iot', label: 'IoT', x: 0.2, y: 0.75, r: 22, color: 'rgba(61,255,176,0.1)', textColor: '#3dffb0', fontSize: '0.58rem', border: '#3dffb0' },
    { id: 'data', label: 'Data', x: 0.35, y: 0.12, r: 20, color: 'rgba(0,212,255,0.1)', textColor: '#00d4ff', fontSize: '0.58rem', border: '#00d4ff' },
    { id: 'web', label: 'Web', x: 0.12, y: 0.48, r: 20, color: 'rgba(245,200,66,0.1)', textColor: '#f5c842', fontSize: '0.58rem', border: '#f5c842' },
  ];
 
  const edges = [
    ['core','python'],['core','sql'],['core','js'],['core','c'],
    ['core','iot'],['core','data'],['core','web'],
    ['python','data'],['c','iot'],['js','web'],['sql','data'],
    ['iot','c'],['python','iot'],
  ];
}