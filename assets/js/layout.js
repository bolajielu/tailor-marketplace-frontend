const navItems = [
  { id: 'home', label: 'Home', href: 'index.html' },
  { id: 'login', label: 'Login', href: 'pages/login.html' },
  { id: 'signup', label: 'Signup', href: 'pages/signup.html' },
  { id: 'dashboard', label: 'Dashboard', href: 'pages/dashboard.html' },
  { id: 'tailors', label: 'Tailors', href: 'pages/tailors.html' },
  { id: 'bookings', label: 'My Bookings', href: 'pages/bookings.html' },
  { id: 'reviews', label: 'Reviews', href: 'pages/reviews.html' },
];

const basePath = document.body.dataset.basePath || '.';
const currentPage = document.body.dataset.page || 'home';
const authTokenKey = 'tailorMarketplaceToken';

const resolvePath = (href) => {
  if (basePath === '.') {
    return href;
  }

  return href.startsWith('pages/') ? href.replace('pages/', '') : `../${href}`;
};

// Keep the shared login destination in one small helper so both the logout
// button and future navigation updates can send the user to the same page.
const getLoginPagePath = () => resolvePath('pages/login.html');

const layoutRoot = document.querySelector('#app-shell');

layoutRoot.innerHTML = `
  <div class="site-shell">
    <header class="site-header">
      <div class="brand-block">
        <a class="brand-mark" href="${resolvePath('index.html')}">Tailor Marketplace</a>
        <p class="brand-copy">Professional tailoring services, bookings, and trusted reviews in one place.</p>
      </div>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-navigation">
        <span></span>
        <span></span>
        <span></span>
        <span class="sr-only">Toggle navigation</span>
      </button>
      <nav id="site-navigation" class="site-nav" aria-label="Primary">
        ${navItems
          .map((item) => {
            const activeClass = item.id === currentPage ? 'is-active' : '';
            return `<a class="nav-link ${activeClass}" href="${resolvePath(item.href)}">${item.label}</a>`;
          })
          .join('')}
        <button class="nav-link nav-logout-button" id="logout-button" type="button">Logout</button>
      </nav>
    </header>
    <main id="page-content" class="page-content"></main>
    <footer class="site-footer">
      <div>
        <strong>Tailor Marketplace</strong>
        <p>Built for modern tailoring businesses with a flexible layout that is easy to maintain.</p>
      </div>
      <p class="footer-meta">© 2026 Tailor Marketplace. Crafted for clarity, speed, and trust.</p>
    </footer>
  </div>
`;

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const logoutButton = document.querySelector('#logout-button');

navToggle.addEventListener('click', () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isExpanded));
  siteNav.classList.toggle('is-open');
});

// Keep logout behavior small and easy to follow:
// 1. Remove the saved token.
// 2. Send the user back to the shared login page.
logoutButton.addEventListener('click', () => {
  localStorage.removeItem(authTokenKey);
  window.location.href = getLoginPagePath();
});
