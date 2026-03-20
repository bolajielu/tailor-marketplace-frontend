const pageContent = {
  home: {
    heroEyebrow: 'Welcome',
    heroTitle: 'A shared storefront experience for every part of your tailoring business.',
    heroText:
      'Browse tailors, manage bookings, and collect customer feedback with a consistent layout that keeps every page aligned.',
    primaryAction: { label: 'Explore Tailors', href: 'pages/tailors.html' },
    secondaryAction: { label: 'Create Account', href: 'pages/signup.html' },
    highlights: [
      { title: 'Unified navigation', text: 'Move across the marketplace with one responsive header on every page.' },
      { title: 'Professional presentation', text: 'Clean typography and balanced spacing keep the experience polished.' },
      { title: 'Easy to extend', text: 'Shared layout and page data make future edits fast and predictable.' },
    ],
  },
  login: {
    heroEyebrow: 'Welcome Back',
    heroTitle: 'Sign in to manage bookings, messages, and your tailoring schedule.',
    heroText:
      'Use this clean login form to continue into the Tailor Marketplace experience while keeping the shared header, navigation, and footer in place.',
    formTitle: 'Login to your account',
    formText: 'Enter your details below to continue. This is a UI-only form for now and can be connected to Xano later.',
    forgotPasswordText: 'Forgot password?',
    forgotPasswordHref: '#',
    validationDefault: 'Use the form to enter your email and password.',
    primaryAction: { label: 'Create an Account', href: 'signup.html' },
    secondaryAction: { label: 'Browse Tailors', href: 'tailors.html' },
    highlights: [
      { title: 'Simple sign-in flow', text: 'Email and password inputs keep the page focused on the essentials.' },
      { title: 'Helpful feedback area', text: 'A built-in validation message space makes future form logic easier to follow.' },
      { title: 'Ready for backend setup', text: 'The submit handler is clearly commented so Xano integration can be added later.' },
    ],
  },
  signup: {
    heroEyebrow: 'Get Started',
    heroTitle: 'Create an account to book services or manage your tailoring business.',
    heroText:
      'The layout stays consistent while leaving plenty of room for onboarding forms, verification steps, and role selection.',
    primaryAction: { label: 'Browse Tailors', href: 'tailors.html' },
    secondaryAction: { label: 'Already registered?', href: 'login.html' },
    highlights: [
      { title: 'Clear entry points', text: 'Separate actions help both customers and tailor partners get started.' },
      { title: 'Responsive structure', text: 'Cards and actions stack neatly on smaller screens.' },
      { title: 'Scalable foundation', text: 'Shared styles make future signup flows easier to add.' },
    ],
  },
  dashboard: {
    heroEyebrow: 'Dashboard',
    heroTitle: 'Track tailoring operations from a focused control center.',
    heroText:
      'Use this page for business metrics, appointment summaries, and customer updates while preserving the global site structure.',
    primaryAction: { label: 'View My Bookings', href: 'bookings.html' },
    secondaryAction: { label: 'Read Reviews', href: 'reviews.html' },
    highlights: [
      { title: 'At-a-glance overview', text: 'Surface the status of appointments, orders, and client messages.' },
      { title: 'Fast navigation', text: 'Move from management tools to public content without losing context.' },
      { title: 'Professional UI', text: 'A restrained visual system keeps the dashboard feeling trustworthy.' },
    ],
  },
  tailors: {
    heroEyebrow: 'Tailor Directory',
    heroTitle: 'Discover local experts and specialty tailoring services.',
    heroText:
      'This shared layout supports searchable listings, featured profiles, and service details in a clean presentation.',
    primaryAction: { label: 'Book a Consultation', href: 'bookings.html' },
    secondaryAction: { label: 'See Reviews', href: 'reviews.html' },
    highlights: [
      { title: 'Flexible listings', text: 'Add filters, service categories, and tailor cards without changing the shell.' },
      { title: 'Trust-building design', text: 'Simple spacing and contrast keep profiles easy to compare.' },
      { title: 'Responsive catalog', text: 'Directory content can expand into multiple columns on large screens.' },
    ],
  },
  bookings: {
    heroEyebrow: 'My Bookings',
    heroTitle: 'Review upcoming fittings, alterations, and delivery milestones.',
    heroText:
      'The shared page template gives bookings a dependable structure for timelines, statuses, and appointment details.',
    primaryAction: { label: 'Open Dashboard', href: 'dashboard.html' },
    secondaryAction: { label: 'Find Tailors', href: 'tailors.html' },
    highlights: [
      { title: 'Clear scheduling', text: 'Organize current and past bookings in a layout customers can scan quickly.' },
      { title: 'Room for updates', text: 'Status chips, reminders, and notes can be added into the existing card pattern.' },
      { title: 'Consistent brand', text: 'Bookings feel connected to the rest of the marketplace experience.' },
    ],
  },
  reviews: {
    heroEyebrow: 'Customer Reviews',
    heroTitle: 'Showcase feedback and build confidence in every tailor profile.',
    heroText:
      'This page can support star ratings, testimonials, and moderation tools while keeping navigation stable and familiar.',
    primaryAction: { label: 'Explore Tailors', href: 'tailors.html' },
    secondaryAction: { label: 'Back to Home', href: '../index.html' },
    highlights: [
      { title: 'Social proof', text: 'Feature customer testimonials in a simple, professional format.' },
      { title: 'Reusable modules', text: 'Review cards can be duplicated or loaded dynamically later.' },
      { title: 'Shared trust signals', text: 'The same header and footer reinforce continuity across user journeys.' },
    ],
  },
};

const contentRoot = document.querySelector('#page-content');
const pageKey = document.body.dataset.page || 'home';
const page = pageContent[pageKey];
const base = document.body.dataset.basePath || '.';

const localPath = (href) => {
  if (base === '.') return href;
  return href.startsWith('../') ? href : href;
};

const renderStandardPage = () => `
  <section class="hero-card">
    <div class="hero-copy">
      <span class="eyebrow">${page.heroEyebrow}</span>
      <h1>${page.heroTitle}</h1>
      <p>${page.heroText}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${localPath(page.primaryAction.href)}">${page.primaryAction.label}</a>
        <a class="button button-secondary" href="${localPath(page.secondaryAction.href)}">${page.secondaryAction.label}</a>
      </div>
    </div>
    <aside class="hero-panel">
      <p class="panel-label">Why this layout works</p>
      <ul>
        <li>Shared header and footer across all pages</li>
        <li>Centralized page data for easy future edits</li>
        <li>Responsive grid that adapts from mobile to desktop</li>
      </ul>
    </aside>
  </section>
  <section class="feature-grid" aria-label="Page highlights">
    ${page.highlights
      .map(
        (item) => `
          <article class="feature-card">
            <h2>${item.title}</h2>
            <p>${item.text}</p>
          </article>
        `,
      )
      .join('')}
  </section>
`;

const renderLoginPage = () => `
  <section class="login-layout">
    <article class="login-intro hero-copy">
      <span class="eyebrow">${page.heroEyebrow}</span>
      <h1>${page.heroTitle}</h1>
      <p>${page.heroText}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${localPath(page.primaryAction.href)}">${page.primaryAction.label}</a>
        <a class="button button-secondary" href="${localPath(page.secondaryAction.href)}">${page.secondaryAction.label}</a>
      </div>
    </article>

    <section class="login-card" aria-labelledby="login-form-title">
      <div class="login-card-header">
        <span class="panel-label">Secure Access</span>
        <h2 id="login-form-title">${page.formTitle}</h2>
        <p>${page.formText}</p>
      </div>

      <form class="login-form" id="login-form" novalidate>
        <div class="form-field">
          <label for="email">Email address</label>
          <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required />
        </div>

        <div class="form-field">
          <div class="form-label-row">
            <label for="password">Password</label>
            <a class="text-link" href="${page.forgotPasswordHref}">${page.forgotPasswordText}</a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            placeholder="Enter your password"
            required
          />
        </div>

        <p class="validation-message" id="login-message" aria-live="polite">${page.validationDefault}</p>

        <button class="button button-primary login-submit" type="submit">Sign In</button>
      </form>
    </section>
  </section>

  <section class="feature-grid" aria-label="Login page highlights">
    ${page.highlights
      .map(
        (item) => `
          <article class="feature-card">
            <h2>${item.title}</h2>
            <p>${item.text}</p>
          </article>
        `,
      )
      .join('')}
  </section>
`;

contentRoot.innerHTML = pageKey === 'login' ? renderLoginPage() : renderStandardPage();

if (pageKey === 'login') {
  const loginForm = document.querySelector('#login-form');
  const loginMessage = document.querySelector('#login-message');

  // This simple form handler provides beginner-friendly front-end validation.
  // It can later be replaced or extended with a fetch() call to a Xano login endpoint.
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
      loginMessage.textContent = 'Please enter both your email address and password.';
      loginMessage.className = 'validation-message is-error';
      return;
    }

    if (!emailInput.checkValidity()) {
      loginMessage.textContent = 'Please enter a valid email address before continuing.';
      loginMessage.className = 'validation-message is-error';
      return;
    }

    loginMessage.textContent = 'Login form submitted successfully. Connect this action to your Xano API when ready.';
    loginMessage.className = 'validation-message is-success';
  });
}
