/*
  This shared JavaScript file adds small interactive touches across the site.
  It is intentionally simple so beginners can understand and extend it.
*/

// Wait until the page is ready before trying to work with page elements.
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const footerYear = document.querySelector('#current-year');
  const currentPath = window.location.pathname;

  // Add the current year to the footer automatically.
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // Highlight the navigation link that matches the page the visitor is viewing.
  document.querySelectorAll('.site-nav a').forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname;

    if (linkPath === currentPath || (currentPath.endsWith('/') && linkPath.endsWith('/index.html'))) {
      link.classList.add('active');
    }

    if (currentPath === '/' && link.getAttribute('data-page') === 'home') {
      link.classList.add('active');
    }
  });

  // Open and close the menu on smaller screens.
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
});
