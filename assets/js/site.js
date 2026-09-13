window.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const button = nav?.querySelector('.navbar-toggler');
  const menu = document.getElementById('navbarResponsive');
  let previousScroll = 0;

  button?.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('show');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('show');
      button?.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
      nav.classList.remove('is-fixed', 'is-visible');
    } else if (currentScroll < previousScroll) {
      nav.classList.add('is-fixed', 'is-visible');
    } else if (currentScroll > nav.clientHeight) {
      nav.classList.add('is-fixed');
      nav.classList.remove('is-visible');
    }
    previousScroll = currentScroll;
  }, { passive: true });
});
