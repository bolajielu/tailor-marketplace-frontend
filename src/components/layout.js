const navItems = [
  ['home', 'Home'],
  ['login', 'Login'],
  ['signup', 'Signup'],
  ['dashboard', 'Dashboard'],
  ['tailor-listing', 'Tailors'],
  ['bookings', 'Bookings'],
  ['reviews', 'Reviews'],
];

export function renderLayout(content, currentRoute) {
  const nav = navItems
    .map(
      ([route, label]) => `
        <a
          href="#${route}"
          data-route="${route}"
          class="nav-link ${currentRoute === route ? 'active' : ''}"
        >
          ${label}
        </a>
      `,
    )
    .join('');

  return `
    <div class="shell">
      <aside class="sidebar">
        <div>
          <p class="eyebrow">Beginner-friendly starter</p>
          <h1>Tailor Marketplace</h1>
          <p class="sidebar-copy">
            A simple frontend structure that can later connect to Xano with regular fetch calls.
          </p>
        </div>
        <nav class="nav">${nav}</nav>
      </aside>
      <main class="content">${content}</main>
    </div>
  `;
}
