const mobileToggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.menu');

if (mobileToggle && menu) {
  mobileToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', open);
  });

  menu.querySelectorAll('a').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      menu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});