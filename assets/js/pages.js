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
    formText: 'Enter your email and password below to sign in through the live Xano backend and continue to your dashboard.',
    forgotPasswordText: 'Forgot password?',
    forgotPasswordHref: '#',
    validationDefault: 'Use the form to enter your email and password.',
    primaryAction: { label: 'Create an Account', href: 'signup.html' },
    secondaryAction: { label: 'Browse Tailors', href: 'tailors.html' },
    highlights: [
      { title: 'Simple sign-in flow', text: 'Email and password inputs keep the page focused on the essentials.' },
      { title: 'Helpful feedback area', text: 'A built-in validation message space makes future form logic easier to follow.' },
      { title: 'Connected to Xano', text: 'The login form now uses the shared API helper to send your email and password to the live backend.' },
    ],
  },
  signup: {
    heroEyebrow: 'Join the Marketplace',
    heroTitle: 'Create your Tailor Marketplace account in a clean, welcoming signup flow.',
    heroText:
      'Use this polished signup page to register as a customer or tailor partner while keeping the shared header, navigation, and footer in place.',
    formTitle: 'Create your account',
    formText:
      'Fill out the form below to get started. This is a UI-only form for now and can be connected to a Xano signup endpoint later.',
    validationDefault: 'Complete the form to create your account.',
    loginPrompt: 'Already have an account?',
    loginHref: 'login.html',
    primaryAction: { label: 'Browse Tailors', href: 'tailors.html' },
    secondaryAction: { label: 'Go to Login', href: 'login.html' },
    highlights: [
      { title: 'Friendly onboarding', text: 'A guided form helps new users understand exactly what information to enter.' },
      { title: 'Consistent experience', text: 'The signup page matches the login page so account access feels connected across the site.' },
      { title: 'Ready for API wiring', text: 'Simple validation and clear comments make future Xano integration easier to follow.' },
    ],
  },
  dashboard: {
    heroEyebrow: 'Dashboard',
    heroTitle: 'Your account overview is loaded from the live Xano session.',
    heroText:
      'This protected page checks for a saved auth token, requests the current user from the shared API helper, and shows a beginner-friendly loading, success, or error state.',
    primaryAction: { label: 'View My Bookings', href: 'bookings.html' },
    secondaryAction: { label: 'Read Reviews', href: 'reviews.html' },
    highlights: [
      { title: 'Protected route behavior', text: 'Visitors without a saved token are redirected to the login page before dashboard data loads.' },
      { title: 'Live user data', text: 'The current user request uses the centralized API helper instead of hardcoding URLs inside the page script.' },
      { title: 'Clear status messaging', text: 'Loading, error, and success states make the dashboard easy to understand and extend.' },
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
  // Keep this key exactly aligned with data-page="tailor-detail" in
  // pages/tailor-detail.html so this page can render and run its API request.
  'tailor-detail': {
    heroEyebrow: 'Tailor Profile',
    heroTitle: 'View a tailor profile loaded from live Xano data.',
    heroText:
      'This detail page reads the tailor ID from the URL, requests one record with getTailorById(), and shows beginner-friendly loading, empty, and error states.',
    primaryAction: { label: 'Back to Tailors', href: 'tailors.html' },
    secondaryAction: { label: 'Book a Consultation', href: 'bookings.html' },
    highlights: [
      { title: 'Live record lookup', text: 'The page loads one tailor profile from the App API group using the shared helper.' },
      { title: 'URL-driven routing', text: 'You can open this page with a query string or path segment tailor ID.' },
      { title: 'Clear fallback states', text: 'Missing IDs, empty records, and request errors each show helpful messages.' },
    ],
  },
  'booking-detail': {
    heroEyebrow: 'Booking Detail',
    heroTitle: 'View one booking record with enriched customer and tailor details.',
    heroText:
      'This page reads bookingId from the URL query string, checks the signed-in role, then calls the centralized customer or tailor booking detail helper with clear loading, empty, success, and error states.',
    primaryAction: { label: 'Back to My Bookings', href: 'bookings.html' },
    secondaryAction: { label: 'Open Dashboard', href: 'dashboard.html' },
    highlights: [
      { title: 'URL-driven detail page', text: 'Open this page with booking-detail.html?bookingId=12 to load one specific booking.' },
      { title: 'Centralized API helper', text: 'All endpoint and query-string logic stays in api.js so page files stay simple.' },
      { title: 'Friendly fallback states', text: 'Missing IDs, empty responses, and errors each show a clear status message.' },
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

// Convert any value into safe text before placing it into the page.
// This keeps beginner-friendly template strings safe when they show live API data.
const escapeHtml = (value) => {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('\"', '&quot;')
    .replaceAll("'", '&#39;');
};

// Shared helper used by multiple page sections to read the first non-empty
// value from possible field names without repeating the same logic.
const getFirstFilledValue = (record, fieldNames) => {
  for (const fieldName of fieldNames) {
    const value = record && record[fieldName];

    if (value === 0) {
      return '0';
    }

    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
  }

  return '';
};

// Return a safe image URL string or an empty string when the value cannot be
// used in an <img> element. Xano image fields may return either:
// - a string URL
// - an object that includes url, image, src, or path
// Keeping this helper shared lets listing and detail pages follow the same
// beginner-friendly image handling logic.
const getSafeImageUrl = (value) => {
  let possibleUrl = '';

  // Handle direct string URLs such as "https://...".
  if (typeof value === 'string') {
    possibleUrl = value.trim();
  }

  // Handle common Xano image object shapes such as:
  // { url: "..." }, { image: "..." }, { src: "..." }, or { path: "..." }.
  if (!possibleUrl && value && typeof value === 'object') {
    const objectUrlValue = value.url || value.image || value.src || value.path || '';

    if (typeof objectUrlValue === 'string') {
      possibleUrl = objectUrlValue.trim();
    }
  }

  if (!possibleUrl) {
    return '';
  }

  try {
    const parsedUrl = new URL(possibleUrl, window.location.origin);

    if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
      return parsedUrl.href;
    }
  } catch (error) {
    return '';
  }

  return '';
};

// Read the most helpful display name that exists in the current user object.
// Xano responses can vary, so this helper checks a few common field names.
const getUserDisplayName = (userData) => {
  if (!userData || typeof userData !== 'object') {
    return 'there';
  }

  return userData.name || userData.full_name || userData.fullName || userData.first_name || userData.firstName || userData.email || 'there';
};

// Read the current user's role from a few common field names so the dashboard
// can work with small backend naming differences.
const getUserRole = (userData) => {
  if (!userData || typeof userData !== 'object') {
    return '';
  }

  const possibleRoleValue = userData.role || userData.user_role || userData.userRole || userData.account_type || userData.accountType || '';

  return String(possibleRoleValue).trim().toLowerCase();
};

// Convert many possible date inputs into a Date object safely.
// This helper supports:
// - normal timestamp strings
// - epoch millisecond numbers like 1753934235976
// - numeric strings that contain epoch milliseconds
// - empty/invalid values (returns null)
const parsePossibleDate = (dateValue) => {
  if (dateValue === undefined || dateValue === null || dateValue === '') {
    return null;
  }

  if (dateValue instanceof Date) {
    return Number.isNaN(dateValue.getTime()) ? null : dateValue;
  }

  // Support raw epoch milliseconds values from API responses.
  if (typeof dateValue === 'number' && Number.isFinite(dateValue)) {
    const numericDate = new Date(dateValue);
    return Number.isNaN(numericDate.getTime()) ? null : numericDate;
  }

  if (typeof dateValue === 'string') {
    const trimmedValue = dateValue.trim();

    if (!trimmedValue) {
      return null;
    }

    // Handle numeric strings like "1753934235976" as epoch milliseconds.
    if (/^\d+$/.test(trimmedValue)) {
      const numericDate = new Date(Number(trimmedValue));
      return Number.isNaN(numericDate.getTime()) ? null : numericDate;
    }

    const stringDate = new Date(trimmedValue);
    return Number.isNaN(stringDate.getTime()) ? null : stringDate;
  }

  return null;
};

// Format date values for date-only labels like "Due date".
const formatDisplayDate = (dateValue, fallbackText = 'Not available') => {
  const parsedDate = parsePossibleDate(dateValue);

  if (!parsedDate) {
    return fallbackText;
  }

  return parsedDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Format date values for date+time labels like "Booking submitted".
const formatDisplayDateTime = (dateValue, fallbackText = 'Not available') => {
  const parsedDate = parsePossibleDate(dateValue);

  if (!parsedDate) {
    return fallbackText;
  }

  return parsedDate.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
};

// Format due_date values that are stored as plain YYYY-MM-DD text.
// This avoids timezone shifting because we do not parse it as an ISO timestamp.
const formatDueDateForDisplay = (dueDateValue, fallbackText = 'Not available') => {
  if (typeof dueDateValue !== 'string') {
    return fallbackText;
  }

  const trimmedDueDate = dueDateValue.trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmedDueDate)) {
    return fallbackText;
  }

  const [yearText, monthText, dayText] = trimmedDueDate.split('-');
  const year = Number(yearText);
  const monthIndex = Number(monthText) - 1;
  const day = Number(dayText);
  const safeDate = new Date(year, monthIndex, day);

  if (
    Number.isNaN(safeDate.getTime())
    || safeDate.getFullYear() !== year
    || safeDate.getMonth() !== monthIndex
    || safeDate.getDate() !== day
  ) {
    return fallbackText;
  }

  return safeDate.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
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

const renderSignupPage = () => `
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

    <section class="login-card" aria-labelledby="signup-form-title">
      <div class="login-card-header">
        <span class="panel-label">Create Profile</span>
        <h2 id="signup-form-title">${page.formTitle}</h2>
        <p>${page.formText}</p>
      </div>

      <form class="login-form" id="signup-form" novalidate>
        <div class="form-field">
          <label for="signup-name">Full name</label>
          <input
            id="signup-name"
            name="fullName"
            type="text"
            autocomplete="name"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div class="form-field">
          <label for="signup-email">Email address</label>
          <input
            id="signup-email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div class="signup-password-grid">
          <div class="form-field">
            <label for="signup-password">Password</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              autocomplete="new-password"
              placeholder="Create a password"
              required
            />
          </div>

          <div class="form-field">
            <label for="signup-confirm-password">Confirm password</label>
            <input
              id="signup-confirm-password"
              name="confirmPassword"
              type="password"
              autocomplete="new-password"
              placeholder="Re-enter your password"
              required
            />
          </div>
        </div>

        <p class="validation-message" id="signup-message" aria-live="polite">${page.validationDefault}</p>

        <button class="button button-primary login-submit" type="submit">Create Account</button>

        <p class="form-support-copy">
          ${page.loginPrompt}
          <a class="text-link" href="${localPath(page.loginHref)}">Log in here</a>
        </p>
      </form>
    </section>
  </section>

  <section class="feature-grid" aria-label="Signup page highlights">
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

// The dashboard starts with a loading state and then updates after the protected
// /auth/me request finishes.
const renderDashboardShell = () => `
  <section class="hero-card">
    <article class="hero-copy">
      <span class="eyebrow">${page.heroEyebrow}</span>
      <h1>${page.heroTitle}</h1>
      <p>${page.heroText}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${localPath(page.primaryAction.href)}">${page.primaryAction.label}</a>
        <a class="button button-secondary" href="${localPath(page.secondaryAction.href)}">${page.secondaryAction.label}</a>
      </div>
    </article>

    <aside class="hero-panel dashboard-status-panel" id="dashboard-status-panel" aria-live="polite">
      <p class="panel-label">Dashboard Status</p>
      <h2>Checking your session...</h2>
      <p>We are reading your saved token and loading your current user profile from Xano.</p>
    </aside>
  </section>

  <section class="dashboard-grid" aria-label="Dashboard overview">
    <article class="feature-card dashboard-welcome-card" id="dashboard-welcome-card">
      <span class="panel-label">Welcome</span>
      <h2>Loading your account</h2>
      <p>Please wait while we request the current logged-in user from the protected endpoint.</p>
    </article>

    <article class="feature-card dashboard-user-card" id="dashboard-user-card">
      <span class="panel-label">Current User</span>
      <dl class="dashboard-user-list">
        <div>
          <dt>Status</dt>
          <dd>Loading...</dd>
        </div>
        <div>
          <dt>Token</dt>
          <dd>Found in localStorage</dd>
        </div>
      </dl>
    </article>
  </section>

  <section class="dashboard-role-section" aria-labelledby="dashboard-role-title">
    <div class="dashboard-role-header">
      <div>
        <span class="panel-label">Role-Based View</span>
        <h2 id="dashboard-role-title">Loading dashboard sections</h2>
      </div>
      <p class="dashboard-role-copy">This area updates after <code>getCurrentUser()</code> returns the current logged-in user and role.</p>
    </div>

    <div class="dashboard-role-grid" id="dashboard-role-grid" aria-live="polite">
      <article class="feature-card dashboard-role-card is-loading">
        <span class="panel-label">Preparing View</span>
        <h3>Checking your role</h3>
        <p>We will show customer or tailor dashboard content as soon as the protected user request finishes.</p>
      </article>
    </div>
  </section>

  <section class="feature-grid" aria-label="Dashboard highlights">
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

// Keep the Tailors page shell in one function so the page can render quickly
// and then replace the listing area after the Xano request finishes.
const renderTailorsShell = () => `
  <section class="hero-card">
    <article class="hero-copy">
      <span class="eyebrow">${page.heroEyebrow}</span>
      <h1>${page.heroTitle}</h1>
      <p>${page.heroText}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${localPath(page.primaryAction.href)}">${page.primaryAction.label}</a>
        <a class="button button-secondary" href="${localPath(page.secondaryAction.href)}">${page.secondaryAction.label}</a>
      </div>
    </article>

    <aside class="hero-panel tailors-status-panel is-loading" id="tailors-status-panel" aria-live="polite">
      <p class="panel-label">Directory Status</p>
      <h2>Loading tailor listings...</h2>
      <p>We are requesting live tailor data from Xano through the shared getTailors() helper.</p>
    </aside>
  </section>

  <section class="tailors-section" aria-labelledby="tailors-list-title">
    <div class="tailors-section-header">
      <div>
        <span class="panel-label">Live Listings</span>
        <h2 id="tailors-list-title">Available tailors</h2>
      </div>
      <p class="tailors-section-copy">Each card below is filled with data returned from the real <code>GET /tailor</code> endpoint.</p>
    </div>

    <div class="tailors-listing-state feature-card is-loading" id="tailors-listing-state">
      <h3>Loading tailor cards</h3>
      <p>Please wait while the page fetches the latest tailor directory from Xano.</p>
    </div>

    <div class="tailors-grid" id="tailors-grid" aria-live="polite" aria-busy="true"></div>
  </section>

  <section class="feature-grid" aria-label="Tailor directory highlights">
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

// Keep the Tailor detail page shell lightweight so it can immediately show
// loading status before the record request finishes.
const renderTailorDetailShell = () => `
  <section class="hero-card">
    <article class="hero-copy">
      <span class="eyebrow">${page.heroEyebrow}</span>
      <h1>${page.heroTitle}</h1>
      <p>${page.heroText}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${localPath(page.primaryAction.href)}">${page.primaryAction.label}</a>
        <a class="button button-secondary" href="${localPath(page.secondaryAction.href)}">${page.secondaryAction.label}</a>
      </div>
    </article>

    <aside class="hero-panel tailor-detail-status-panel is-loading" id="tailor-detail-status-panel" aria-live="polite">
      <p class="panel-label">Profile Status</p>
      <h2>Loading tailor profile...</h2>
      <p>We are reading the tailor ID from the URL and requesting live data from Xano.</p>
    </aside>
  </section>

  <section class="tailor-detail-section" aria-labelledby="tailor-detail-title">
    <article class="feature-card tailor-detail-card" id="tailor-detail-card">
      <span class="panel-label">Tailor Record</span>
      <h2 id="tailor-detail-title">Preparing profile details</h2>
      <p>Please wait while the page loads this tailor from the App API group.</p>
    </article>
  </section>

  <section class="feature-grid" aria-label="Tailor detail highlights">
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

// Keep the Booking detail page shell simple and consistent with the shared
// layout so only dynamic detail content needs to update after loading.
const renderBookingDetailShell = () => `
  <section class="hero-card">
    <article class="hero-copy">
      <span class="eyebrow">${page.heroEyebrow}</span>
      <h1>${page.heroTitle}</h1>
      <p>${page.heroText}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${localPath(page.primaryAction.href)}">${page.primaryAction.label}</a>
        <a class="button button-secondary" href="${localPath(page.secondaryAction.href)}">${page.secondaryAction.label}</a>
      </div>
    </article>

    <aside class="hero-panel booking-detail-status-panel is-loading" id="booking-detail-status-panel" aria-live="polite">
      <p class="panel-label">Detail Status</p>
      <h2>Loading booking detail...</h2>
      <p>We are reading bookingId from the URL and requesting the enriched detail endpoint.</p>
    </aside>
  </section>

  <section class="booking-detail-section" aria-labelledby="booking-detail-title">
    <article class="feature-card booking-detail-card" id="booking-detail-card">
      <span class="panel-label">Booking Record</span>
      <h2 id="booking-detail-title">Preparing booking details</h2>
      <p>Please wait while the page loads this booking from the authenticated endpoint.</p>
    </article>
  </section>

  <section class="feature-grid" aria-label="Booking detail highlights">
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

// Keep the Bookings page shell consistent with other pages while creating
// a dedicated area where selected-tailor booking context can load.
const renderBookingsShell = () => `
  <section class="hero-card">
    <article class="hero-copy">
      <span class="eyebrow">${page.heroEyebrow}</span>
      <h1>${page.heroTitle}</h1>
      <p>${page.heroText}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="${localPath(page.primaryAction.href)}">${page.primaryAction.label}</a>
        <a class="button button-secondary" href="${localPath(page.secondaryAction.href)}">${page.secondaryAction.label}</a>
      </div>
    </article>

    <aside class="hero-panel bookings-status-panel" id="bookings-status-panel" aria-live="polite">
      <p class="panel-label">Booking Status</p>
      <h2>Ready to start booking</h2>
      <p>Select a tailor profile to prefill this page with context, or continue with a general booking view.</p>
    </aside>
  </section>

  <section class="bookings-context-section" aria-labelledby="bookings-context-title">
    <article class="feature-card bookings-context-card" id="bookings-context-card">
      <span class="panel-label">Selected Tailor</span>
      <h2 id="bookings-context-title">No tailor selected yet</h2>
      <p>Open this page from a tailor profile using a URL like <code>bookings.html?tailorId=1</code> to load a specific booking context.</p>
    </article>
  </section>

  <section class="bookings-main-grid" aria-label="Create booking and view your booking history">
    <article class="feature-card bookings-form-card bookings-form-section" aria-labelledby="bookings-form-title">
      <span class="panel-label">Create Booking</span>
      <h2 id="bookings-form-title">Send a booking request</h2>
      <p class="bookings-form-intro">
        Fill out the form below to send your request to the live authenticated Xano booking endpoint.
      </p>

      <form class="login-form bookings-form" id="bookings-form" novalidate>
        <div class="form-field">
          <label for="booking-service-requested">Service requested</label>
          <input
            id="booking-service-requested"
            name="serviceRequested"
            type="text"
            placeholder="Example: Wedding suit fitting and alterations"
            required
          />
        </div>

        <div class="form-field">
          <label for="booking-measurements">Measurements</label>
          <textarea
            id="booking-measurements"
            name="measurements"
            placeholder="Share your size details, notes, or fitting preferences."
            required
          ></textarea>
        </div>

        <div class="form-field">
          <label for="booking-inspiration-image">Inspiration image upload</label>
          <input
            id="booking-inspiration-image"
            name="inspirationImageUpload"
            type="file"
            accept="image/*"
          />
        </div>

        <p class="validation-message" id="bookings-form-message" aria-live="polite">
          Please select a tailor from the directory, then submit your booking request.
        </p>

        <button class="button button-primary login-submit" id="bookings-submit-button" type="submit">
          Submit booking request
        </button>
      </form>
    </article>

    <article class="feature-card bookings-list-card bookings-list-section" aria-labelledby="bookings-list-title">
      <span class="panel-label">My Booking History</span>
      <h2 id="bookings-list-title">Your booking records</h2>
      <p class="bookings-list-intro">This list loads real booking records for the currently signed-in user.</p>

      <p class="validation-message" id="bookings-list-message" aria-live="polite">Preparing your bookings list...</p>

      <div id="bookings-list-container">
        <p class="bookings-list-placeholder">Please wait while bookings are loaded.</p>
      </div>
    </article>
  </section>

  <section class="feature-grid" aria-label="Bookings page highlights">
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

contentRoot.innerHTML =
  pageKey === 'login'
    ? renderLoginPage()
    : pageKey === 'signup'
      ? renderSignupPage()
      : pageKey === 'dashboard'
      ? renderDashboardShell()
      : pageKey === 'tailors'
        ? renderTailorsShell()
        : pageKey === 'booking-detail'
          ? renderBookingDetailShell()
        : pageKey === 'bookings'
          ? renderBookingsShell()
        : pageKey === 'tailor-detail'
            ? renderTailorDetailShell()
          : renderStandardPage();

if (pageKey === 'login') {
  const loginForm = document.querySelector('#login-form');
  const loginMessage = document.querySelector('#login-message');
  const loginSubmitButton = loginForm.querySelector('button[type="submit"]');

  // This helper keeps the message updates simple and easy to reuse.
  const updateLoginMessage = (message, stateClass) => {
    loginMessage.textContent = message;
    loginMessage.className = `validation-message ${stateClass}`.trim();
  };

  // This submit handler uses the shared API helper so the login page does not
  // need to know the Xano endpoint URL. The api.js file stays responsible for
  // endpoint paths and fetch() setup.
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
      updateLoginMessage('Please enter both your email address and password.', 'is-error');
      return;
    }

    if (!emailInput.checkValidity()) {
      updateLoginMessage('Please enter a valid email address before continuing.', 'is-error');
      return;
    }

    updateLoginMessage('Signing you in... Please wait.', '');
    loginSubmitButton.disabled = true;

    try {
      const result = await window.TailorMarketplaceApi.loginUser({
        email: emailValue,
        password: passwordValue,
      });

      if (!result.ok) {
        updateLoginMessage(result.errorMessage || 'Login failed. Please try again.', 'is-error');
        return;
      }

      // The shared API helper already parsed the Xano JSON response for us.
      // We expect the auth token to live at result.data.auth_token after a successful login.
      const authToken = result.data && result.data.auth_token;

      if (!authToken) {
        updateLoginMessage('Login succeeded, but no auth token was returned by Xano.', 'is-error');
        return;
      }

      // Store the auth token in localStorage so future authenticated requests
      // can read it and send it back to Xano in an Authorization header.
      localStorage.setItem(window.TailorMarketplaceApi.AUTH_TOKEN_KEY, authToken);

      updateLoginMessage('Login successful! Redirecting you to the dashboard...', 'is-success');

      // Redirect to the shared dashboard page after the token is saved.
      window.location.href = `${base}/pages/dashboard.html`;
    } catch (error) {
      updateLoginMessage('We could not reach the login service. Please try again in a moment.', 'is-error');
    } finally {
      loginSubmitButton.disabled = false;
    }
  });
}

if (pageKey === 'signup') {
  const signupForm = document.querySelector('#signup-form');
  const signupMessage = document.querySelector('#signup-message');
  const signupSubmitButton = signupForm.querySelector('button[type="submit"]');

  // Keep signup message updates in one place so loading, success, and error
  // states all use the same validation message area.
  const updateSignupMessage = (message, stateClass) => {
    signupMessage.textContent = message;
    signupMessage.className = `validation-message ${stateClass}`.trim();
  };

  // This signup handler uses the shared API helper so the page does not need
  // to know any endpoint URLs. The API details stay centralized in api.js.
  signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#signup-name');
    const emailInput = document.querySelector('#signup-email');
    const passwordInput = document.querySelector('#signup-password');
    const confirmPasswordInput = document.querySelector('#signup-confirm-password');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();

    if (!nameValue || !emailValue || !passwordValue || !confirmPasswordValue) {
      updateSignupMessage('Please complete every field before creating your account.', 'is-error');
      return;
    }

    if (!emailInput.checkValidity()) {
      updateSignupMessage('Please enter a valid email address before submitting the form.', 'is-error');
      return;
    }

    if (passwordValue.length < 8) {
      updateSignupMessage('Please choose a password that is at least 8 characters long.', 'is-error');
      return;
    }

    if (passwordValue !== confirmPasswordValue) {
      updateSignupMessage('Your password and confirm password fields must match.', 'is-error');
      return;
    }

    updateSignupMessage('Creating your account... Please wait.', '');
    signupSubmitButton.disabled = true;

    try {
      const result = await window.TailorMarketplaceApi.signupUser({
        fullName: nameValue,
        email: emailValue,
        password: passwordValue,
      });

      if (!result.ok) {
        updateSignupMessage(result.errorMessage || 'Signup failed. Please try again.', 'is-error');
        return;
      }

      // The safer API helper already tried to read JSON for us.
      // If the backend returned an empty body or invalid JSON, result.data will be null.
      const responseData = result.data;

      // Store the real Xano auth token here after a successful signup.
      // Example: localStorage.setItem('tailorMarketplaceToken', responseData.authToken);
      // Replace `responseData.authToken` with the real token field returned by your Xano API.

      // Store real user profile data here if you want to reuse it across pages.
      // Example: localStorage.setItem('tailorMarketplaceUser', JSON.stringify(responseData.user));
      // Replace `responseData.user` with the real user data shape returned by your Xano API.

      updateSignupMessage('Signup successful. Your account response was handled safely.', 'is-success');

      // Do not redirect yet. Wait until your real signup response is successful
      // and you know which page the user should visit next.
    } catch (error) {
      updateSignupMessage('We could not reach the signup service. Please try again in a moment.', 'is-error');
    } finally {
      signupSubmitButton.disabled = false;
    }
  });
}

if (pageKey === 'dashboard') {
  const dashboardStatusPanel = document.querySelector('#dashboard-status-panel');
  const dashboardWelcomeCard = document.querySelector('#dashboard-welcome-card');
  const dashboardUserCard = document.querySelector('#dashboard-user-card');
  const dashboardRoleTitle = document.querySelector('#dashboard-role-title');
  const dashboardRoleGrid = document.querySelector('#dashboard-role-grid');
  const dashboardRoleCopy = document.querySelector('.dashboard-role-copy');
  const apiHelpers = window.TailorMarketplaceApi;
  const authToken = apiHelpers.getAuthToken();
  const currentBasePath = document.body.dataset.basePath || '..';

  // When the dashboard sees an expired or unauthorized session, use one shared
  // helper to clear the token and send the visitor back to login.
  const clearSessionAndGoToLogin = () => {
    apiHelpers.clearAuthToken();
    apiHelpers.redirectToLoginPage(currentBasePath);
  };

  const renderUserFields = (userData) => {
    const userEntries = Object.entries(userData || {}).slice(0, 6);

    if (!userEntries.length) {
      return `
        <div>
          <dt>Profile</dt>
          <dd>No user fields were returned by the current user endpoint.</dd>
        </div>
      `;
    }

    return userEntries
      .map(
        ([key, value]) => `
          <div>
            <dt>${escapeHtml(key)}</dt>
            <dd>${escapeHtml(value)}</dd>
          </div>
        `,
      )
      .join('');
  };

  // Turn different API response shapes into one simple array.
  // This keeps the customer dashboard flexible if Xano returns either:
  // - a plain array
  // - an object with an items/data/results array inside it
  const getCollectionItems = (apiData) => {
    if (Array.isArray(apiData)) {
      return apiData;
    }

    if (!apiData || typeof apiData !== 'object') {
      return [];
    }

    const possibleArrays = [apiData.items, apiData.data, apiData.results, apiData.bookings, apiData.reviews];
    const matchingArray = possibleArrays.find((value) => Array.isArray(value));

    return matchingArray || [];
  };

  // Read a useful label for status-like values without assuming one exact field
  // name from the API response.
  const getFirstMatchingValue = (record, fieldNames) => {
    if (!record || typeof record !== 'object') {
      return '';
    }

    const matchingField = fieldNames.find((fieldName) => {
      const value = record[fieldName];
      return value !== undefined && value !== null && String(value).trim() !== '';
    });

    return matchingField ? String(record[matchingField]) : '';
  };

  const formatDashboardCount = (items, singularLabel, pluralLabel) => {
    const count = items.length;
    return `${count} ${count === 1 ? singularLabel : pluralLabel}`;
  };

  // Normalize text values before comparing them so small formatting
  // differences from the API do not prevent a useful dashboard match.
  const normalizeMatchValue = (value) => {
    if (value === undefined || value === null) {
      return '';
    }

    return String(value).trim().toLowerCase();
  };

  // Read the first available identifier-like value from a record.
  const getRecordIdentifier = (record, fieldNames) => {
    const rawValue = getFirstMatchingValue(record, fieldNames);
    return normalizeMatchValue(rawValue);
  };

  // Build a helpful tailor profile match from the live /tailor directory.
  // Safe matching strategy:
  // - First match the real schema relationship: tailor.user_id === currentUser.id.
  // - Allow a fallback id match only when tailor.user_id is missing/empty.
  // - Then try email and name fields.
  // - If no direct "my tailor profile" endpoint exists yet, this lets the
  //   dashboard still show real tailor data without hardcoding API URLs here.
  const findMatchingTailorProfile = (currentUser, tailorRecords) => {
    const userId = getRecordIdentifier(currentUser, ['id']);
    const userEmail = getRecordIdentifier(currentUser, ['email', 'contact_email', 'contactEmail']);
    const userName = getRecordIdentifier(currentUser, ['business_name', 'shop_name', 'name', 'full_name', 'fullName']);

    return tailorRecords.find((tailor) => {
      const tailorUserId = getRecordIdentifier(tailor, ['user_id', 'userId']);
      const tailorId = getRecordIdentifier(tailor, ['id', 'tailor_id', 'tailorId']);
      const tailorEmail = getRecordIdentifier(tailor, ['email', 'contact_email', 'contactEmail']);
      const tailorName = getRecordIdentifier(tailor, ['business_name', 'shop_name', 'name', 'full_name', 'fullName']);

      return Boolean(
        (userId && tailorUserId && userId === tailorUserId)
        || (userId && !tailorUserId && tailorId && userId === tailorId)
        || (userEmail && tailorEmail && userEmail === tailorEmail)
        || (userName && tailorName && userName === tailorName),
      );
    }) || null;
  };

  // Keep tailor-related record filtering flexible because booking and review
  // endpoints can use different field names for the linked tailor.
  const filterRecordsForTailor = (records, currentUser, tailorProfile) => {
    const tailorIds = [
      getRecordIdentifier(currentUser, ['tailor_id', 'tailorId', 'id', 'user_id', 'userId']),
      getRecordIdentifier(tailorProfile, ['id', 'tailor_id', 'tailorId', 'user_id', 'userId', 'owner_id', 'ownerId']),
    ].filter(Boolean);

    const tailorNames = [
      getRecordIdentifier(currentUser, ['business_name', 'shop_name', 'name', 'full_name', 'fullName']),
      getRecordIdentifier(tailorProfile, ['business_name', 'shop_name', 'name', 'full_name', 'fullName']),
    ].filter(Boolean);

    const tailorEmails = [
      getRecordIdentifier(currentUser, ['email', 'contact_email', 'contactEmail']),
      getRecordIdentifier(tailorProfile, ['email', 'contact_email', 'contactEmail']),
    ].filter(Boolean);

    return records.filter((record) => {
      const linkedId = getRecordIdentifier(record, ['tailor_id', 'tailorId', 'user_id', 'userId', 'owner_id', 'ownerId']);
      const linkedName = getRecordIdentifier(record, ['tailor_name', 'tailor', 'shop_name', 'business_name', 'name']);
      const linkedEmail = getRecordIdentifier(record, ['tailor_email', 'email', 'contact_email', 'contactEmail']);

      return Boolean(
        (linkedId && tailorIds.includes(linkedId))
        || (linkedName && tailorNames.includes(linkedName))
        || (linkedEmail && tailorEmails.includes(linkedEmail)),
      );
    });
  };

  const renderCustomerSummaryList = (summaryItems) => {
    return `
      <dl class="dashboard-summary-list">
        ${summaryItems
          .map(
            (item) => `
              <div>
                <dt>${escapeHtml(item.label)}</dt>
                <dd>${escapeHtml(item.value)}</dd>
              </div>
            `,
          )
          .join('')}
      </dl>
    `;
  };

  const renderCustomerRecordList = (items, options = {}) => {
    const emptyText = options.emptyText || 'No records are available yet.';
    const itemTitle = options.itemTitle || ((item, index) => `Item ${index + 1}`);
    const detailRows = options.detailRows || (() => []);

    if (!items.length) {
      return `<p class="dashboard-section-empty">${escapeHtml(emptyText)}</p>`;
    }

    return `
      <div class="dashboard-record-list">
        ${items
          .map((item, index) => {
            const rows = detailRows(item, index)
              .filter((row) => row && row.value)
              .slice(0, 3);

            return `
              <article class="dashboard-record-item">
                <h4>${escapeHtml(itemTitle(item, index))}</h4>
                <dl>
                  ${rows
                    .map(
                      (row) => `
                        <div>
                          <dt>${escapeHtml(row.label)}</dt>
                          <dd>${escapeHtml(row.value)}</dd>
                        </div>
                      `,
                    )
                    .join('')}
                </dl>
              </article>
            `;
          })
          .join('')}
      </div>
    `;
  };

  const renderCustomerDataCard = (config) => {
    const actionsMarkup = (config.links || [])
      .map(
        (link) => `
          <a class="button button-secondary dashboard-role-link" href="${localPath(link.href)}">${escapeHtml(link.label)}</a>
        `,
      )
      .join('');

    return `
      <article class="feature-card dashboard-role-card ${escapeHtml(config.stateClass || '')}">
        <span class="panel-label">${escapeHtml(config.label)}</span>
        <h3>${escapeHtml(config.title)}</h3>
        <p>${escapeHtml(config.text)}</p>
        ${config.body || ''}
        <div class="dashboard-role-actions">${actionsMarkup}</div>
      </article>
    `;
  };

  const createCustomerLoadingCards = () => {
    return [
      {
        label: 'Bookings',
        title: 'Loading your bookings',
        text: 'We are requesting customer-specific booking data from the Users API group now.',
        stateClass: 'is-loading',
        body: '<p class="dashboard-section-note">Please wait while your booking summary is prepared.</p>',
        links: [{ label: 'View bookings page', href: 'bookings.html' }],
      },
      {
        label: 'Reviews',
        title: 'Loading your reviews',
        text: 'We are requesting your saved review history from the Users API group now.',
        stateClass: 'is-loading',
        body: '<p class="dashboard-section-note">Please wait while your review summary is prepared.</p>',
        links: [{ label: 'Read reviews page', href: 'reviews.html' }],
      },
    ];
  };

  const createCustomerCardsFromData = (bookingsResult, reviewsResult) => {
    const bookingItems = getCollectionItems(bookingsResult.data);
    const reviewItems = getCollectionItems(reviewsResult.data);
    const bookingError = !bookingsResult.ok ? bookingsResult.errorMessage || 'We could not load your bookings right now.' : '';
    const reviewError = !reviewsResult.ok ? reviewsResult.errorMessage || 'We could not load your reviews right now.' : '';

    return [
      {
        label: 'Bookings',
        title: bookingsResult.ok
          ? bookingItems.length
            ? `You have ${formatDashboardCount(bookingItems, 'booking', 'bookings')}`
            : 'No bookings yet'
          : 'Bookings could not be loaded',
        text: bookingsResult.ok
          ? bookingItems.length
            ? 'Here is a quick summary of the booking records returned for your customer account.'
            : 'The request worked, but there are no booking records for this customer account yet.'
          : bookingError,
        stateClass: bookingsResult.ok ? (bookingItems.length ? 'is-success' : '') : 'is-error',
        body: bookingsResult.ok
          ? `
            ${renderCustomerSummaryList([
              { label: 'Total bookings', value: formatDashboardCount(bookingItems, 'booking', 'bookings') },
              {
                label: 'Latest status',
                value: getFirstMatchingValue(bookingItems[0], ['status', 'booking_status', 'state']) || 'Not available yet',
              },
            ])}
            ${renderCustomerRecordList(bookingItems.slice(0, 3), {
              emptyText: 'When you create a booking, it will appear here.',
              itemTitle: (item, index) =>
                getFirstMatchingValue(item, ['service_name', 'service', 'title', 'tailor_name', 'tailor']) || `Booking ${index + 1}`,
              detailRows: (item) => [
                { label: 'Status', value: getFirstMatchingValue(item, ['status', 'booking_status', 'state']) || 'Pending update' },
                {
                  label: 'Booking submitted',
                  value: formatDisplayDateTime(getFirstMatchingValue(item, ['created_at', 'createdAt'])),
                },
                { label: 'Tailor', value: getFirstMatchingValue(item, ['tailor_name', 'tailor', 'shop_name']) || 'Tailor not listed' },
              ],
            })}
          `
          : '<p class="dashboard-section-note">Try refreshing the page or signing in again if your session has expired.</p>',
        links: [
          { label: 'View bookings', href: 'bookings.html' },
          { label: 'Browse tailors', href: 'tailors.html' },
        ],
      },
      {
        label: 'Reviews',
        title: reviewsResult.ok
          ? reviewItems.length
            ? `You have ${formatDashboardCount(reviewItems, 'review', 'reviews')}`
            : 'No reviews yet'
          : 'Reviews could not be loaded',
        text: reviewsResult.ok
          ? reviewItems.length
            ? 'Here is a quick summary of the review records returned for your customer account.'
            : 'The request worked, but there are no review records for this customer account yet.'
          : reviewError,
        stateClass: reviewsResult.ok ? (reviewItems.length ? 'is-success' : '') : 'is-error',
        body: reviewsResult.ok
          ? `
            ${renderCustomerSummaryList([
              { label: 'Total reviews', value: formatDashboardCount(reviewItems, 'review', 'reviews') },
              {
                label: 'Latest rating',
                value: getFirstMatchingValue(reviewItems[0], ['rating', 'stars', 'score']) || 'Not available yet',
              },
            ])}
            ${renderCustomerRecordList(reviewItems.slice(0, 3), {
              emptyText: 'When you submit a review, it will appear here.',
              itemTitle: (item, index) =>
                getFirstMatchingValue(item, ['title', 'tailor_name', 'tailor', 'service_name']) || `Review ${index + 1}`,
              detailRows: (item) => [
                { label: 'Rating', value: getFirstMatchingValue(item, ['rating', 'stars', 'score']) || 'No rating listed' },
                { label: 'Tailor', value: getFirstMatchingValue(item, ['tailor_name', 'tailor', 'shop_name']) || 'Tailor not listed' },
                { label: 'Comment', value: getFirstMatchingValue(item, ['comment', 'review', 'content']) || 'No comment included' },
              ],
            })}
          `
          : '<p class="dashboard-section-note">Try refreshing the page or opening the reviews page again later.</p>',
        links: [{ label: 'Read reviews', href: 'reviews.html' }],
      },
    ];
  };

  const createTailorLoadingCards = () => {
    return [
      {
        label: 'Tailor Profile',
        title: 'Loading your tailor profile',
        text: 'We are checking the live tailor directory for a profile that matches your signed-in account.',
        stateClass: 'is-loading',
        body: '<p class="dashboard-section-note">Please wait while the dashboard matches your account to a tailor record.</p>',
        links: [{ label: 'Browse directory', href: 'tailors.html' }],
      },
      {
        label: 'Tailor Activity',
        title: 'Loading your booking and review summary',
        text: 'We are requesting tailor bookings from the tailor-specific endpoint and reviews from the App API group now.',
        stateClass: 'is-loading',
        body: '<p class="dashboard-section-note">Please wait while your activity summary is prepared.</p>',
        links: [
          { label: 'Open bookings', href: 'bookings.html' },
          { label: 'View reviews', href: 'reviews.html' },
        ],
      },
      {
        label: 'Tailor Bookings',
        title: 'Loading your assigned bookings',
        text: 'We are preparing your real tailor bookings list from the tailor-specific backend endpoint.',
        stateClass: 'is-loading',
        body: '<p class="dashboard-section-note">Please wait while your booking records are requested from the tailor bookings endpoint.</p>',
        links: [{ label: 'Open bookings page', href: 'bookings.html' }],
      },
    ];
  };

  const createTailorCardsFromData = (currentUser, tailorResult, tailorBookingsResult, reviewsResult) => {
    const tailorRecords = getCollectionItems(tailorResult.data);
    const tailorBookingItems = getCollectionItems(tailorBookingsResult.data);
    const reviewItems = getCollectionItems(reviewsResult.data);
    const tailorProfile = findMatchingTailorProfile(currentUser, tailorRecords);
    const matchingReviews = filterRecordsForTailor(reviewItems, currentUser, tailorProfile);
    const profileName =
      getFirstMatchingValue(tailorProfile, ['business_name', 'shop_name', 'name', 'full_name', 'fullName'])
      || getUserDisplayName(currentUser);

    const profileSummaryItems = [
      { label: 'Display name', value: profileName },
      {
        label: 'Specialty',
        value: getFirstMatchingValue(tailorProfile, ['specialty', 'speciality', 'service_type', 'category', 'focus']) || 'Not listed yet',
      },
      {
        label: 'Location',
        value: getFirstMatchingValue(tailorProfile, ['location', 'city', 'address', 'region']) || 'Not listed yet',
      },
      {
        label: 'Phone',
        value: getFirstMatchingValue(tailorProfile, ['phone', 'phone_number', 'phoneNumber']) || 'Not listed yet',
      },
    ];

    const profileBody = tailorProfile
      ? `
        ${renderCustomerSummaryList(profileSummaryItems)}
        <p class="dashboard-section-note">${escapeHtml(
          getFirstMatchingValue(tailorProfile, ['bio', 'about', 'description'])
            || 'This summary comes from the live tailor directory and can grow as more profile fields are added in Xano.',
        )}</p>
      `
      : `
        <p class="dashboard-section-empty">We loaded the live tailor directory, but we could not find a direct tailor profile match for this signed-in account yet.</p>
        <p class="dashboard-section-note">Fallback strategy: the dashboard compares common ID, email, and name fields from <code>/auth/me</code> and <code>GET /tailor</code> until a dedicated &quot;my tailor profile&quot; endpoint is available.</p>
      `;

    const activityStateClass = tailorBookingsResult.ok && reviewsResult.ok
      ? (tailorBookingItems.length || matchingReviews.length ? 'is-success' : 'is-empty')
      : 'is-error';

    // Build a dedicated bookings card for tailor users.
    // This section keeps clear loading/empty/success/error behavior and is
    // ready for a future GET /get_booking?booking_id=<id> detail flow.
    const tailorBookingsStateClass = !tailorBookingsResult.ok
      ? 'is-error'
      : tailorBookingItems.length
        ? 'is-success'
        : 'is-empty';

    const tailorBookingsText = !tailorBookingsResult.ok
      ? tailorBookingsResult.errorMessage || 'We could not load tailor bookings right now.'
      : tailorBookingItems.length
        ? 'These bookings were loaded from the tailor-specific GET /get_tailor_bookings endpoint.'
        : 'The tailor bookings request worked, but no booking records were returned yet.';

    const tailorBookingsBody = !tailorBookingsResult.ok
      ? '<p class="dashboard-section-note">Try refreshing this page or signing in again if your session expired.</p>'
      : tailorBookingItems.length
        ? `
          <div class="dashboard-bookings-list">
            ${tailorBookingItems
              .slice(0, 6)
              .map((bookingItem) => {
                const bookingId = getFirstMatchingValue(bookingItem, ['booking_id', 'id', 'bookingId']) || 'N/A';
                const serviceRequested = getFirstMatchingValue(bookingItem, ['service_requested', 'service_name', 'service', 'title']) || 'Service not provided';
                const bookingStatus = getFirstMatchingValue(bookingItem, ['status', 'booking_status', 'state']) || 'Pending update';
                const customerName = getFirstMatchingValue(bookingItem, ['customer_name', 'customer', 'name']) || 'Customer not listed';
                const submittedRaw = getFirstMatchingValue(bookingItem, ['created_at', 'createdAt']);
                const appointmentRaw = getFirstMatchingValue(bookingItem, ['appointment_datetime', 'appointment_at', 'appointment_date', 'appointmentDate']);
                const dueDateRaw = getFirstMatchingValue(bookingItem, ['due_date', 'dueDate']);
                const bookingDetailHref = bookingId && bookingId !== 'N/A'
                  ? `booking-detail.html?bookingId=${encodeURIComponent(bookingId)}`
                  : '';

                return `
                  <article
                    class="dashboard-record-item dashboard-booking-item"
                    data-booking-id="${escapeHtml(bookingId)}"
                    data-booking-detail-endpoint="/get_tailor_booking"
                  >
                    <h4>Booking #${escapeHtml(bookingId)}</h4>
                    <dl>
                      <div>
                        <dt>Service</dt>
                        <dd>${escapeHtml(serviceRequested)}</dd>
                      </div>
                      <div>
                        <dt>Status</dt>
                        <dd>${escapeHtml(bookingStatus)}</dd>
                      </div>
                      <div>
                        <dt>Customer</dt>
                        <dd>${escapeHtml(customerName)}</dd>
                      </div>
                      <div>
                        <dt>Booking submitted</dt>
                        <dd>${escapeHtml(formatDisplayDateTime(submittedRaw))}</dd>
                      </div>
                      ${
                        appointmentRaw
                          ? `
                            <div>
                              <dt>Appointment</dt>
                              <dd>${escapeHtml(formatDisplayDateTime(appointmentRaw))}</dd>
                            </div>
                          `
                          : ''
                      }
                      ${
                        dueDateRaw
                          ? `
                            <div>
                              <dt>Due date</dt>
                              <dd>${escapeHtml(formatDisplayDate(dueDateRaw))}</dd>
                            </div>
                          `
                          : ''
                      }
                    </dl>
                    <div class="dashboard-role-actions">
                      ${
                        bookingDetailHref
                          ? `<a class="button button-primary dashboard-role-link dashboard-booking-detail-button" href="${bookingDetailHref}">View booking details</a>`
                          : '<p class="dashboard-section-note">Booking ID missing, so detail link is unavailable.</p>'
                      }
                    </div>
                  </article>
                `;
              })
              .join('')}
          </div>
        `
        : '<p class="dashboard-section-empty">When a booking is assigned to this tailor, it will appear here.</p>';

    return [
      {
        label: 'Tailor Profile',
        title: tailorProfile ? 'Live tailor profile found' : 'Profile match still needed',
        text: tailorProfile
          ? 'Your dashboard matched this signed-in account to a real tailor record from the App API group.'
          : tailorResult.ok
            ? 'The tailor directory loaded, but this account could not be matched to one profile record yet.'
            : tailorResult.errorMessage || 'The tailor directory could not be loaded right now.',
        stateClass: tailorProfile ? 'is-success' : (tailorResult.ok ? 'is-empty' : 'is-error'),
        body: profileBody,
        links: [{ label: 'Browse directory', href: 'tailors.html' }],
      },
      {
        label: 'Tailor Activity',
        title: activityStateClass === 'is-error'
          ? 'Activity summary could not be fully loaded'
          : tailorBookingItems.length || matchingReviews.length
            ? 'Your live tailor activity summary'
            : 'No tailor activity is available yet',
        text: activityStateClass === 'is-error'
          ? `${tailorBookingsResult.ok ? '' : tailorBookingsResult.errorMessage || 'Bookings could not be loaded.'} ${reviewsResult.ok ? '' : reviewsResult.errorMessage || 'Reviews could not be loaded.'}`.trim()
          : tailorBookingItems.length || matchingReviews.length
            ? 'These counts are based on tailor bookings from GET /get_tailor_bookings and reviews from the App API group.'
            : 'The requests worked, but no tailor bookings or linked reviews were returned yet.',
        stateClass: activityStateClass,
        body: activityStateClass === 'is-error'
          ? '<p class="dashboard-section-note">If these requests need different backend permissions, the profile summary above still gives the tailor a useful live snapshot.</p>'
          : `
            ${renderCustomerSummaryList([
              { label: 'Tailor bookings returned', value: formatDashboardCount(tailorBookingItems, 'booking', 'bookings') },
              { label: 'Reviews linked to this tailor', value: formatDashboardCount(matchingReviews, 'review', 'reviews') },
              {
                label: 'Latest booking status',
                value: getFirstMatchingValue(tailorBookingItems[0], ['status', 'booking_status', 'state']) || 'Not available yet',
              },
              {
                label: 'Latest review rating',
                value: getFirstMatchingValue(matchingReviews[0], ['rating', 'stars', 'score']) || 'Not available yet',
              },
            ])}
            ${renderCustomerRecordList(matchingReviews.slice(0, 2), {
              emptyText: 'When a review is linked to this tailor, it will appear here.',
              itemTitle: (item, index) =>
                getFirstMatchingValue(item, ['title', 'service_name', 'customer_name']) || `Review ${index + 1}`,
              detailRows: (item) => [
                { label: 'Rating', value: getFirstMatchingValue(item, ['rating', 'stars', 'score']) || 'No rating listed' },
                { label: 'Customer', value: getFirstMatchingValue(item, ['customer_name', 'customer', 'name']) || 'Customer not listed' },
                { label: 'Comment', value: getFirstMatchingValue(item, ['comment', 'review', 'content']) || 'No comment included' },
              ],
            })}
          `,
        links: [
          { label: 'Open bookings', href: 'bookings.html' },
          { label: 'View reviews', href: 'reviews.html' },
        ],
      },
      {
        label: 'Tailor Bookings',
        title: !tailorBookingsResult.ok
          ? 'Bookings could not be loaded'
          : tailorBookingItems.length
            ? `You have ${formatDashboardCount(tailorBookingItems, 'assigned booking', 'assigned bookings')}`
            : 'No assigned bookings yet',
        text: tailorBookingsText,
        stateClass: tailorBookingsStateClass,
        body: tailorBookingsBody,
        links: [{ label: 'Open bookings page', href: 'bookings.html' }],
      },
    ];
  };

  // Keep the role-based dashboard content in plain data so it is easy for a
  // beginner to adjust the section titles and text later.
  const getDashboardSectionsForRole = (role) => {
    if (role === 'customer') {
      return {
        title: 'Customer dashboard sections',
        cards: [
          {
            label: 'Bookings',
            title: 'Track upcoming fittings',
            text: 'Review booking progress, confirm appointment times, and keep an eye on recent tailoring updates.',
            links: [
              { label: 'View bookings', href: 'bookings.html' },
              { label: 'Browse tailors', href: 'tailors.html' },
            ],
          },
          {
            label: 'Reviews',
            title: 'Share feedback after each order',
            text: 'Leave reviews for completed work, revisit past ratings, and build a simple history of trusted tailors.',
            links: [{ label: 'Read reviews', href: 'reviews.html' }],
          },
          {
            label: 'Profile Actions',
            title: 'Keep your account details up to date',
            text: 'Use this space for profile updates, saved preferences, and future customer account actions as the app grows.',
            links: [{ label: 'Return home', href: '../index.html' }],
          },
        ],
      };
    }

    if (role === 'tailor') {
      return {
        title: 'Tailor dashboard sections',
        cards: [
          {
            label: 'Tailor Profile',
            title: 'Present your services clearly',
            text: 'Review how your business information appears and prepare this area for future profile editing from the shared API layer.',
            links: [{ label: 'Browse directory', href: 'tailors.html' }],
          },
          {
            label: 'Bookings & Orders',
            title: 'Manage active work in one place',
            text: 'Check incoming bookings, monitor order status, and stay ready for fittings, pickups, or delivery milestones.',
            links: [{ label: 'Open bookings', href: 'bookings.html' }],
          },
          {
            label: 'Reviews Received',
            title: 'Follow customer feedback',
            text: 'Use this area to watch new reviews, celebrate positive feedback, and spot service improvements quickly.',
            links: [{ label: 'View reviews', href: 'reviews.html' }],
          },
          {
            label: 'Management Actions',
            title: 'Keep your shop organized',
            text: 'This section is ready for future actions like updating availability, managing services, or preparing order notes.',
            links: [{ label: 'Go to dashboard top', href: 'dashboard.html' }],
          },
        ],
      };
    }

    return {
      title: 'Dashboard sections are limited right now',
      cards: [
        {
          label: 'Role Needed',
          title: 'We could not confirm your account role',
          text: 'Your session is active, but the current user response did not include a supported role like customer or tailor.',
          links: [{ label: 'Back to home', href: '../index.html' }],
        },
        {
          label: 'Safe Fallback',
          title: 'Basic account access is still available',
          text: 'The protected dashboard stayed in place and showed a safe fallback view so the page remains stable for unknown role values.',
          links: [{ label: 'Read reviews', href: 'reviews.html' }],
        },
      ],
    };
  };

  const renderRoleCards = (role) => {
    const roleContent = getDashboardSectionsForRole(role);

    dashboardRoleTitle.textContent = roleContent.title;
    dashboardRoleGrid.innerHTML = roleContent.cards
      .map((card) => {
        const linksMarkup = (card.links || [])
          .map(
            (link) => `
              <a class="button button-secondary dashboard-role-link" href="${localPath(link.href)}">${escapeHtml(link.label)}</a>
            `,
          )
          .join('');

        return `
          <article class="feature-card dashboard-role-card">
            <span class="panel-label">${escapeHtml(card.label)}</span>
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.text)}</p>
            <div class="dashboard-role-actions">${linksMarkup}</div>
          </article>
        `;
      })
      .join('');
  };

  const renderDashboardCards = (title, copy, cards) => {
    dashboardRoleTitle.textContent = title;
    dashboardRoleCopy.textContent = copy;
    dashboardRoleGrid.innerHTML = cards
      .map((card) => {
        if (card.body !== undefined || card.stateClass !== undefined) {
          return renderCustomerDataCard(card);
        }

        const linksMarkup = (card.links || [])
          .map(
            (link) => `
              <a class="button button-secondary dashboard-role-link" href="${localPath(link.href)}">${escapeHtml(link.label)}</a>
            `,
          )
          .join('');

        return `
          <article class="feature-card dashboard-role-card">
            <span class="panel-label">${escapeHtml(card.label)}</span>
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.text)}</p>
            <div class="dashboard-role-actions">${linksMarkup}</div>
          </article>
        `;
      })
      .join('');
  };

  const updateDashboardState = ({ title, description, welcomeTitle, welcomeText, userFields, stateClass }) => {
    dashboardStatusPanel.className = `hero-panel dashboard-status-panel ${stateClass}`.trim();
    dashboardStatusPanel.innerHTML = `
      <p class="panel-label">Dashboard Status</p>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(description)}</p>
    `;

    dashboardWelcomeCard.className = `feature-card dashboard-welcome-card ${stateClass}`.trim();
    dashboardWelcomeCard.innerHTML = `
      <span class="panel-label">Welcome</span>
      <h2>${escapeHtml(welcomeTitle)}</h2>
      <p>${escapeHtml(welcomeText)}</p>
    `;

    dashboardUserCard.className = `feature-card dashboard-user-card ${stateClass}`.trim();
    dashboardUserCard.innerHTML = `
      <span class="panel-label">Current User</span>
      <dl class="dashboard-user-list">
        ${userFields}
      </dl>
    `;
  };

  // Protect the dashboard before making the authenticated request.
  // If there is no saved token, the visitor is sent back to the login page.
  if (!authToken) {
    clearSessionAndGoToLogin();
  } else {
    (async () => {
      updateDashboardState({
        title: 'Loading your dashboard...',
        description: 'Your token was found, so we are now calling the protected current user endpoint.',
        welcomeTitle: 'Welcome back',
        welcomeText: 'Please wait while your account details load from Xano.',
        userFields: `
          <div>
            <dt>Status</dt>
            <dd>Loading current user data...</dd>
          </div>
          <div>
            <dt>Request</dt>
            <dd>GET /auth/me with Bearer token</dd>
          </div>
        `,
        stateClass: 'is-loading',
      });
      renderRoleCards('');

      try {
        const result = await apiHelpers.getCurrentUser();

        if (!result.ok) {
          if (apiHelpers.isUnauthorizedResponse(result)) {
            updateDashboardState({
              title: 'Your session has expired.',
              description: 'The current user request came back as unauthorized, so we are clearing your saved token now.',
              welcomeTitle: 'Please log in again',
              welcomeText: 'Redirecting you to the login page so you can start a fresh session.',
              userFields: `
                <div>
                  <dt>Status</dt>
                  <dd>Unauthorized session</dd>
                </div>
                <div>
                  <dt>Next step</dt>
                  <dd>Clearing token and redirecting to login...</dd>
                </div>
              `,
              stateClass: 'is-error',
            });

            dashboardRoleTitle.textContent = 'Session expired';
            dashboardRoleGrid.innerHTML = `
              <article class="feature-card dashboard-role-card">
                <span class="panel-label">Login Required</span>
                <h3>Please sign in again</h3>
                <p>Your saved token is being cleared before the dashboard redirects to the shared login page.</p>
              </article>
            `;

            window.setTimeout(() => {
              clearSessionAndGoToLogin();
            }, 800);
            return;
          }

          updateDashboardState({
            title: 'We could not load your dashboard.',
            description: result.errorMessage || 'The protected current user request was not successful.',
            welcomeTitle: 'Your session needs attention',
            welcomeText: 'Please try logging in again if your token has expired or is no longer valid.',
            userFields: `
              <div>
                <dt>Status</dt>
                <dd>Error loading current user</dd>
              </div>
              <div>
                <dt>Next step</dt>
                <dd>Return to the login page and sign in again.</dd>
              </div>
            `,
            stateClass: 'is-error',
          });
          renderRoleCards('');
          return;
        }

        const currentUser = result.data;
        const displayName = getUserDisplayName(currentUser);
        const userRole = getUserRole(currentUser);
        const roleLabel = userRole ? userRole.charAt(0).toUpperCase() + userRole.slice(1) : 'Unknown';

        updateDashboardState({
          title: 'Your session is active.',
          description: `The protected current user request succeeded and the dashboard detected a ${roleLabel.toLowerCase()} role.`,
          welcomeTitle: `Welcome back, ${displayName}!`,
          welcomeText: 'This dashboard is now showing role-based sections using the current logged-in user response from /auth/me.',
          userFields: `${renderUserFields(currentUser)}
            <div>
              <dt>Detected role</dt>
              <dd>${escapeHtml(roleLabel)}</dd>
            </div>`,
          stateClass: 'is-success',
        });
        if (userRole === 'customer') {
          renderDashboardCards(
            'Customer dashboard sections',
            'These sections now use the Users API group helpers to load bookings and reviews for the signed-in customer.',
            createCustomerLoadingCards(),
          );

          const [bookingsResult, reviewsResult] = await Promise.all([
            apiHelpers.getUserBookings(),
            apiHelpers.getUserReviews(),
          ]);

          if (apiHelpers.isUnauthorizedResponse(bookingsResult) || apiHelpers.isUnauthorizedResponse(reviewsResult)) {
            updateDashboardState({
              title: 'Your session has expired.',
              description: 'A customer dashboard request came back as unauthorized, so we are clearing your saved token now.',
              welcomeTitle: 'Please log in again',
              welcomeText: 'Redirecting you to the login page so you can start a fresh session.',
              userFields: `
                <div>
                  <dt>Status</dt>
                  <dd>Unauthorized session</dd>
                </div>
                <div>
                  <dt>Next step</dt>
                  <dd>Clearing token and redirecting to login...</dd>
                </div>
              `,
              stateClass: 'is-error',
            });

            renderDashboardCards('Session expired', 'Your secure customer data could not be loaded with the saved session.', [
              {
                label: 'Login Required',
                title: 'Please sign in again',
                text: 'Your saved token is being cleared before the dashboard redirects to the shared login page.',
                stateClass: 'is-error',
                body: '<p class="dashboard-section-note">A fresh sign-in is needed before customer data can be requested again.</p>',
                links: [{ label: 'Go to login', href: 'login.html' }],
              },
            ]);

            window.setTimeout(() => {
              clearSessionAndGoToLogin();
            }, 800);
            return;
          }

          renderDashboardCards(
            'Customer dashboard sections',
            'These summaries come from window.TailorMarketplaceApi.getUserBookings() and window.TailorMarketplaceApi.getUserReviews().',
            createCustomerCardsFromData(bookingsResult, reviewsResult),
          );
        } else if (userRole === 'tailor') {
          renderDashboardCards(
            'Tailor dashboard sections',
            'These sections use live tailor bookings from role-specific endpoints while keeping the protected dashboard flow the same.',
            createTailorLoadingCards(),
          );

          const [tailorResult, tailorBookingsResult, reviewsResult] = await Promise.all([
            apiHelpers.getTailors(),
            apiHelpers.getTailorBookings(),
            apiHelpers.getAppReviews(),
          ]);

          if (apiHelpers.isUnauthorizedResponse(tailorResult)
            || apiHelpers.isUnauthorizedResponse(tailorBookingsResult)
            || apiHelpers.isUnauthorizedResponse(reviewsResult)) {
            updateDashboardState({
              title: 'Your session has expired.',
              description: 'A tailor dashboard request came back as unauthorized, so we are clearing your saved token now.',
              welcomeTitle: 'Please log in again',
              welcomeText: 'Redirecting you to the login page so you can start a fresh session.',
              userFields: `
                <div>
                  <dt>Status</dt>
                  <dd>Unauthorized session</dd>
                </div>
                <div>
                  <dt>Next step</dt>
                  <dd>Clearing token and redirecting to login...</dd>
                </div>
              `,
              stateClass: 'is-error',
            });

            renderDashboardCards('Session expired', 'Your secure tailor data could not be loaded with the saved session.', [
              {
                label: 'Login Required',
                title: 'Please sign in again',
                text: 'Your saved token is being cleared before the dashboard redirects to the shared login page.',
                stateClass: 'is-error',
                body: '<p class="dashboard-section-note">A fresh sign-in is needed before tailor dashboard data can be requested again.</p>',
                links: [{ label: 'Go to login', href: 'login.html' }],
              },
            ]);

            window.setTimeout(() => {
              clearSessionAndGoToLogin();
            }, 800);
            return;
          }

          renderDashboardCards(
            'Tailor dashboard sections',
            'These summaries come from window.TailorMarketplaceApi.getTailors(), getTailorBookings(), and getAppReviews().',
            createTailorCardsFromData(currentUser, tailorResult, tailorBookingsResult, reviewsResult),
          );
        } else {
          renderRoleCards(userRole);
        }
      } catch (error) {
        updateDashboardState({
          title: 'The dashboard request could not finish.',
          description: 'We could not reach the current user service. Please check your connection and try again.',
          welcomeTitle: 'We hit a network problem',
          welcomeText: 'Your token is still saved locally, but the dashboard could not fetch your current user profile just now.',
          userFields: `
            <div>
              <dt>Status</dt>
              <dd>Network error</dd>
            </div>
            <div>
              <dt>Request</dt>
              <dd>GET /auth/me could not be completed.</dd>
            </div>
          `,
          stateClass: 'is-error',
        });
        renderRoleCards('');
      }
    })();
  }
}


if (pageKey === 'tailors') {
  const tailorsStatusPanel = document.querySelector('#tailors-status-panel');
  const tailorsListingState = document.querySelector('#tailors-listing-state');
  const tailorsGrid = document.querySelector('#tailors-grid');
  const apiHelpers = window.TailorMarketplaceApi;

  // Convert any value into safe text before placing it into the page.
  const escapeHtml = (value) => {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  };

  // Keep this helper short and easy to follow:
  // it trims long bios so listing cards stay clean and easy to scan.
  const createBioPreview = (bioText, maxLength = 140) => {
    const safeBio = String(bioText || '').trim();

    if (!safeBio) {
      return 'No bio added yet. Open the profile page to see more tailor details.';
    }

    if (safeBio.length <= maxLength) {
      return safeBio;
    }

    return `${safeBio.slice(0, maxLength).trimEnd()}...`;
  };

  // Keep rating display honest:
  // - If a real rating value exists, show it.
  // - If not, show a neutral fallback.
  const getRatingLabel = (tailor) => {
    const rawRating = getFirstFilledValue(tailor, ['rating', 'average_rating', 'avg_rating', 'stars', 'score']);

    if (!rawRating) {
      return 'No ratings yet';
    }

    const numericRating = Number(rawRating);

    if (!Number.isNaN(numericRating)) {
      return `${numericRating.toFixed(1)} / 5`;
    }

    return rawRating;
  };

  // Keep the card display beginner-friendly by mapping common tailor fields
  // into one consistent object the UI can render.
  const mapTailorToCardData = (tailor, index) => {
    const name = getFirstFilledValue(tailor, ['business_name', 'shop_name', 'name', 'full_name', 'fullName']) || `Tailor ${index + 1}`;
    const location = getFirstFilledValue(tailor, ['location', 'city', 'address', 'region']);
    const email = getFirstFilledValue(tailor, ['email', 'contact_email', 'contactEmail']);
    const bioFull =
      getFirstFilledValue(tailor, ['bio', 'about', 'description']) ||
      'This tailor was loaded from the live directory. Add more profile fields in Xano to show more detail here.';
    const bioPreview = createBioPreview(bioFull);
    const ratingLabel = getRatingLabel(tailor);
    // Profile image fields can be URL strings or Xano image objects.
    // We first read the first available field, then normalize it safely.
    const rawProfileImageValue = tailor && (
      tailor.profile_picture
      || tailor.profile_image
      || tailor.photo
      || tailor.image
      || tailor.avatar
      || ''
    );
    const profileImageUrl = getSafeImageUrl(rawProfileImageValue);
    const tailorId = getFirstFilledValue(tailor, ['id', 'tailor_id', 'tailorId']);

    return {
      tailorId,
      name,
      location,
      email,
      bioPreview,
      ratingLabel,
      profileImageUrl,
    };
  };

  const renderTailorMetaItem = (label, value) => {
    if (!value) {
      return '';
    }

    return `
      <li>
        <strong>${escapeHtml(label)}:</strong>
        <span>${escapeHtml(value)}</span>
      </li>
    `;
  };

  const renderTailorCard = (tailor, index) => {
    const cardData = mapTailorToCardData(tailor, index);
    const detailHref = cardData.tailorId ? `tailor-detail.html?tailorId=${encodeURIComponent(cardData.tailorId)}` : '';
    const imageMarkup = cardData.profileImageUrl
      ? `
        <img
          class="tailor-card-image"
          src="${escapeHtml(cardData.profileImageUrl)}"
          alt="${escapeHtml(`${cardData.name} profile picture`)}"
          loading="lazy"
        />
      `
      : '<div class="tailor-card-image-placeholder">No photo yet</div>';

    return `
      <article class="feature-card tailor-card">
        <div class="tailor-card-image-wrap">
          ${imageMarkup}
        </div>
        <div class="tailor-card-header">
          <span class="panel-label">Tailor ${index + 1}</span>
          <h3>${escapeHtml(cardData.name)}</h3>
        </div>
        <ul class="tailor-card-meta">
          ${renderTailorMetaItem('Location', cardData.location)}
          ${renderTailorMetaItem('Rating', cardData.ratingLabel)}
          ${renderTailorMetaItem('Email', cardData.email)}
        </ul>
        <p class="tailor-card-bio">${escapeHtml(cardData.bioPreview)}</p>
        ${
          detailHref
            ? `<a class="button button-secondary tailor-card-link" href="${detailHref}">View full profile</a>`
            : '<p class="tailor-card-link-note">This record is missing an ID, so a detail link is not available yet.</p>'
        }
      </article>
    `;
  };

  const updateTailorsState = ({ title, description, listingTitle, listingText, stateClass, tailors }) => {
    const tailorList = Array.isArray(tailors) ? tailors : [];

    tailorsStatusPanel.className = `hero-panel tailors-status-panel ${stateClass}`.trim();
    tailorsStatusPanel.innerHTML = `
      <p class="panel-label">Directory Status</p>
      <h2>${title}</h2>
      <p>${description}</p>
    `;

    tailorsListingState.className = `tailors-listing-state feature-card ${stateClass}`.trim();
    tailorsListingState.innerHTML = `
      <h3>${listingTitle}</h3>
      <p>${listingText}</p>
    `;

    if (tailorList.length) {
      tailorsGrid.innerHTML = tailorList.map(renderTailorCard).join('');
      tailorsGrid.hidden = false;
      tailorsListingState.hidden = true;
    } else {
      tailorsGrid.innerHTML = '';
      tailorsGrid.hidden = true;
      tailorsListingState.hidden = false;
    }

    tailorsGrid.setAttribute('aria-busy', stateClass === 'is-loading' ? 'true' : 'false');
  };

  (async () => {
    updateTailorsState({
      title: 'Loading tailor listings...',
      description: 'The Tailors page is requesting live records from Xano with window.TailorMarketplaceApi.getTailors().',
      listingTitle: 'Fetching tailor cards',
      listingText: 'Please wait while the live tailor directory is loaded.',
      stateClass: 'is-loading',
      tailors: [],
    });

    try {
      const result = await apiHelpers.getTailors();
      const tailorRecords = Array.isArray(result.data) ? result.data : [];

      if (!result.ok) {
        updateTailorsState({
          title: 'We could not load tailor listings.',
          description: result.errorMessage || 'The live GET /tailor request did not return a successful response.',
          listingTitle: 'Tailor data is unavailable right now',
          listingText: 'Please refresh the page or try again after the Xano service is available.',
          stateClass: 'is-error',
          tailors: [],
        });
        return;
      }

      if (!tailorRecords.length) {
        updateTailorsState({
          title: 'No tailors are available yet.',
          description: 'The GET /tailor request worked, but the API returned an empty list.',
          listingTitle: 'No tailor profiles found',
          listingText: 'Add tailor records in Xano and reload this page to see them here.',
          stateClass: 'is-empty',
          tailors: [],
        });
        return;
      }

      updateTailorsState({
        title: 'Live tailor listings loaded.',
        description: `The directory received ${tailorRecords.length} tailor record${tailorRecords.length === 1 ? '' : 's'} from Xano.`,
        listingTitle: 'Tailor cards loaded',
        listingText: 'The cards below are now showing live data from the real API response.',
        stateClass: 'is-success',
        tailors: tailorRecords,
      });
    } catch (error) {
      updateTailorsState({
        title: 'The tailor request could not finish.',
        description: 'We could not reach the live tailor service. Please check your connection and try again.',
        listingTitle: 'Network error while loading tailors',
        listingText: 'The listing area stays visible so visitors understand why no tailor cards are showing.',
        stateClass: 'is-error',
        tailors: [],
      });
    }
  })();
}

if (pageKey === 'tailor-detail') {
  const detailStatusPanel = document.querySelector('#tailor-detail-status-panel');
  const detailCard = document.querySelector('#tailor-detail-card');
  const apiHelpers = window.TailorMarketplaceApi;

  // Read the tailor ID from the URL in two beginner-friendly steps:
  // 1) Query string support: ?tailorId=123 or ?id=123
  // 2) Path segment support: /tailor-detail.html/123
  const getTailorIdFromUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryTailorId = queryParams.get('tailorId') || queryParams.get('id');

    if (queryTailorId && queryTailorId.trim()) {
      return queryTailorId.trim();
    }

    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1] || '';

    if (lastPart.includes('.html')) {
      return '';
    }

    return decodeURIComponent(lastPart).trim();
  };

  const renderMetaRow = (label, value) => {
    if (!value) {
      return '';
    }

    return `
      <div>
        <dt>${escapeHtml(label)}</dt>
        <dd>${escapeHtml(value)}</dd>
      </div>
    `;
  };

  const updateDetailState = ({ title, description, cardTitle, cardBody, stateClass }) => {
    detailStatusPanel.className = `hero-panel tailor-detail-status-panel ${stateClass}`.trim();
    detailStatusPanel.innerHTML = `
      <p class="panel-label">Profile Status</p>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(description)}</p>
    `;

    detailCard.className = `feature-card tailor-detail-card ${stateClass}`.trim();
    detailCard.innerHTML = `
      <span class="panel-label">Tailor Record</span>
      <h2 id="tailor-detail-title">${escapeHtml(cardTitle)}</h2>
      ${cardBody}
    `;
  };

  // Read an array field safely. If Xano sends a non-array value, return [] so
  // the UI can still render without crashing.
  const getArrayField = (record, fieldName) => {
    const value = record && record[fieldName];
    return Array.isArray(value) ? value : [];
  };

  const renderServicesList = (services) => {
    if (!services.length) {
      return '<p class="tailor-detail-empty-text">No services listed yet.</p>';
    }

    const serviceItems = services
      .map((serviceItem) => {
        if (typeof serviceItem !== 'string' || !serviceItem.trim()) {
          return '';
        }

        return `<li class="tailor-detail-tag">${escapeHtml(serviceItem.trim())}</li>`;
      })
      .filter(Boolean)
      .join('');

    return serviceItems
      ? `<ul class="tailor-detail-tag-list">${serviceItems}</ul>`
      : '<p class="tailor-detail-empty-text">No services listed yet.</p>';
  };

  const renderPortfolioGallery = (portfolioImages, businessName) => {
    const validImageUrls = portfolioImages
      .map((imageItem) => getSafeImageUrl(imageItem))
      .filter(Boolean);

    if (!validImageUrls.length) {
      return '<p class="tailor-detail-empty-text">No portfolio images yet.</p>';
    }

    return `
      <div class="tailor-portfolio-grid">
        ${validImageUrls
          .map(
            (imageUrl, index) => `
              <img
                class="tailor-portfolio-image"
                src="${escapeHtml(imageUrl)}"
                alt="${escapeHtml(`${businessName} portfolio image ${index + 1}`)}"
                loading="lazy"
              />
            `,
          )
          .join('')}
      </div>
    `;
  };

  const renderTailorDetail = (tailorData) => {
    // Align this page with the real tailor table schema from Xano.
    const businessName = getFirstFilledValue(tailorData, ['business_name', 'shop_name', 'name']) || 'Tailor profile';
    const location = getFirstFilledValue(tailorData, ['location', 'city', 'address', 'region']) || 'Location not added yet';
    const bio = getFirstFilledValue(tailorData, ['bio', 'about', 'description']) || 'No bio has been added yet.';
    const priceRange = getFirstFilledValue(tailorData, ['price_range', 'priceRange']) || 'Price range not listed';
    const turnaroundTime = getFirstFilledValue(tailorData, ['turnaround_time', 'turnaroundTime']) || 'Turnaround time not listed';
    const email = getFirstFilledValue(tailorData, ['email', 'contact_email', 'contactEmail']) || 'Email not listed';
    const phoneNumber = getFirstFilledValue(tailorData, ['phone_number', 'phone', 'phoneNumber']) || 'Phone number not listed';
    const whatsappLinkRaw = getFirstFilledValue(tailorData, ['whatsapp_link']);
    const tailorId = getFirstFilledValue(tailorData, ['id', 'tailor_id', 'tailorId']);
    const profileImageUrl = getSafeImageUrl(tailorData && tailorData.profile_picture);
    const servicesOffered = getArrayField(tailorData, 'services_offered');
    const portfolioImages = getArrayField(tailorData, 'portfolio_images');
    const whatsappLink = getSafeImageUrl(whatsappLinkRaw);

    const profileImageMarkup = profileImageUrl
      ? `
        <img
          class="tailor-profile-image"
          src="${escapeHtml(profileImageUrl)}"
          alt="${escapeHtml(`${businessName} profile picture`)}"
        />
      `
      : '<div class="tailor-profile-placeholder">No profile image yet</div>';

    const contactMarkup = whatsappLink
      ? `
        <a
          class="button button-primary tailor-whatsapp-link"
          href="${escapeHtml(whatsappLink)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact on WhatsApp
        </a>
      `
      : '<p class="tailor-detail-empty-text">WhatsApp link not added yet.</p>';
    const bookingLink = tailorId ? `bookings.html?tailorId=${encodeURIComponent(tailorId)}` : 'bookings.html';

    return {
      name: businessName,
      body: `
        <section class="tailor-detail-group tailor-profile-group" aria-label="Profile">
          <div class="tailor-profile-image-wrap">
            ${profileImageMarkup}
          </div>
          <div class="tailor-profile-info">
            <h3>${escapeHtml(businessName)}</h3>
            <p class="tailor-detail-location">${escapeHtml(location)}</p>
          </div>
        </section>

        <section class="tailor-detail-group" aria-label="About">
          <h3>About</h3>
          <p class="tailor-detail-bio">${escapeHtml(bio)}</p>
        </section>

        <section class="tailor-detail-group" aria-label="Services">
          <h3>Services</h3>
          ${renderServicesList(servicesOffered)}
        </section>

        <section class="tailor-detail-group" aria-label="Pricing and turnaround">
          <h3>Pricing &amp; Turnaround</h3>
          <dl class="tailor-detail-meta">
            ${renderMetaRow('Price range', priceRange)}
            ${renderMetaRow('Turnaround time', turnaroundTime)}
          </dl>
        </section>

        <section class="tailor-detail-group" aria-label="Contact">
          <h3>Contact</h3>
          <dl class="tailor-detail-meta">
            ${renderMetaRow('Email', email)}
            ${renderMetaRow('Phone number', phoneNumber)}
          </dl>
          ${contactMarkup}
          <a class="button button-secondary tailor-booking-link" href="${bookingLink}">Book this tailor</a>
        </section>

        <section class="tailor-detail-group" aria-label="Portfolio">
          <h3>Portfolio</h3>
          ${renderPortfolioGallery(portfolioImages, businessName)}
        </section>
      `,
    };
  };

  (async () => {
    const tailorId = getTailorIdFromUrl();

    if (!tailorId) {
      updateDetailState({
        title: 'Tailor ID is missing.',
        description: 'Open this page with a tailor ID in the URL, for example ?tailorId=1.',
        cardTitle: 'No tailor ID was found',
        cardBody: '<p>This page needs a tailor ID in the URL before it can request a profile.</p>',
        stateClass: 'is-empty',
      });
      return;
    }

    updateDetailState({
      title: 'Loading tailor profile...',
      description: `Requesting tailor ID ${tailorId} from Xano with getTailorById().`,
      cardTitle: 'Loading profile details',
      cardBody: '<p>Please wait while this tailor record is being loaded.</p>',
      stateClass: 'is-loading',
    });

    try {
      const result = await apiHelpers.getTailorById(tailorId);
      const tailorData = result && result.data;

      if (!result.ok) {
        updateDetailState({
          title: 'We could not load this tailor profile.',
          description: result.errorMessage || 'The tailor detail request returned an error response.',
          cardTitle: 'Tailor data is unavailable',
          cardBody: '<p>Please go back to the directory and try opening this profile again.</p>',
          stateClass: 'is-error',
        });
        return;
      }

      if (!tailorData || (typeof tailorData === 'object' && !Object.keys(tailorData).length)) {
        updateDetailState({
          title: 'No detail record was returned.',
          description: 'The request worked, but this tailor ID did not return profile data.',
          cardTitle: 'Tailor not found',
          cardBody: '<p>Try opening another profile from the Tailors listing page.</p>',
          stateClass: 'is-empty',
        });
        return;
      }

      const detailView = renderTailorDetail(tailorData);
      updateDetailState({
        title: 'Tailor profile loaded successfully.',
        description: 'This page is now showing live data from the App API group.',
        cardTitle: detailView.name,
        cardBody: detailView.body,
        stateClass: 'is-success',
      });
    } catch (error) {
      updateDetailState({
        title: 'Network error while loading tailor profile.',
        description: 'We could not reach Xano right now. Please check your connection and try again.',
        cardTitle: 'Request could not finish',
        cardBody: '<p>The detail page keeps this message visible so the issue is clear to visitors.</p>',
        stateClass: 'is-error',
      });
    }
  })();
}

if (pageKey === 'booking-detail') {
  const detailStatusPanel = document.querySelector('#booking-detail-status-panel');
  const detailCard = document.querySelector('#booking-detail-card');
  const apiHelpers = window.TailorMarketplaceApi;
  let currentViewerRole = 'customer';
  let currentBookingId = '';

  // Read bookingId from the expected query string key:
  // booking-detail.html?bookingId=12
  const getBookingIdFromUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const bookingId = queryParams.get('bookingId');
    return bookingId && bookingId.trim() ? bookingId.trim() : '';
  };

  // Keep status/card updates in one helper so each page state is easy to follow.
  const updateDetailState = ({ title, description, cardTitle, cardBody, stateClass = '' }) => {
    detailStatusPanel.className = `hero-panel booking-detail-status-panel ${stateClass}`.trim();
    detailStatusPanel.innerHTML = `
      <p class="panel-label">Detail Status</p>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(description)}</p>
    `;

    detailCard.className = `feature-card booking-detail-card ${stateClass}`.trim();
    detailCard.innerHTML = `
      <span class="panel-label">Booking Record</span>
      <h2 id="booking-detail-title">${escapeHtml(cardTitle)}</h2>
      ${cardBody}
    `;
  };

  // Read common nested fields safely so this page can handle slightly different
  // response shapes from the enriched endpoint.
  const getNestedValue = (record, keyPath) => {
    const keyParts = keyPath.split('.');
    let currentValue = record;

    for (const keyPart of keyParts) {
      if (!currentValue || typeof currentValue !== 'object') {
        return '';
      }

      currentValue = currentValue[keyPart];
    }

    return getFirstFilledValue({ value: currentValue }, ['value']);
  };

  // Render one booking record using the most useful enriched fields.
  const renderBookingDetail = (bookingData, viewerRole = 'customer') => {
    const bookingId = getFirstFilledValue(bookingData, ['booking_id', 'id', 'bookingId']) || 'Not available';
    const serviceRequested = getFirstFilledValue(bookingData, ['service_requested', 'service', 'request']) || 'Not provided';
    const measurements = getFirstFilledValue(bookingData, ['measurements', 'measurement_notes', 'notes']) || 'Not provided';
    const bookingStatus = getFirstFilledValue(bookingData, ['status', 'booking_status', 'state']) || 'Not provided';
    const createdDateRaw = getFirstFilledValue(bookingData, ['created_at', 'createdAt']);
    const appointmentRaw = getFirstFilledValue(bookingData, ['appointment_datetime', 'appointment_at', 'appointment_date', 'appointmentDate']);
    const dueDateRaw = getFirstFilledValue(bookingData, ['due_date', 'dueDate']);
    const completionDateRaw = getFirstFilledValue(bookingData, ['completion_date', 'completionDate']);
    const customerNote = getFirstFilledValue(bookingData, ['customer_note', 'note_for_tailor']);
    const cancellationReason = getFirstFilledValue(bookingData, ['cancellation_reason', 'cancel_reason']);
    const priceQuote = getFirstFilledValue(bookingData, ['price_quote', 'quoted_price']);
    const finalPrice = getFirstFilledValue(bookingData, ['final_price', 'completed_price']);
    const tailorBusinessName = getNestedValue(bookingData, 'tailor.business_name')
      || getNestedValue(bookingData, 'tailor.shop_name')
      || getFirstFilledValue(bookingData, ['tailor_business_name', 'business_name', 'shop_name', 'tailor_name', 'tailor'])
      || 'Not provided';
    const tailorEmail = getNestedValue(bookingData, 'tailor.email')
      || getFirstFilledValue(bookingData, ['tailor_email'])
      || 'Not provided';
    const tailorPhone = getNestedValue(bookingData, 'tailor.phone_number')
      || getNestedValue(bookingData, 'tailor.phone')
      || getNestedValue(bookingData, 'tailor.mobile')
      || getFirstFilledValue(bookingData, ['tailor_phone_number', 'tailor_phone'])
      || 'Not provided';
    const tailorWhatsapp = getNestedValue(bookingData, 'tailor.whatsapp_link')
      || getNestedValue(bookingData, 'tailor.whatsapp')
      || getFirstFilledValue(bookingData, ['tailor_whatsapp_link', 'tailor_whatsapp']);
    // Keep customer details sourced from enriched user response objects.
    // We do not read duplicated customer profile fields from the booking table.
    const customerName = getNestedValue(bookingData, 'customer.name')
      || getNestedValue(bookingData, 'customer.full_name')
      || getNestedValue(bookingData, 'user.name')
      || getNestedValue(bookingData, 'user.full_name')
      || 'Not provided';
    const customerEmail = getNestedValue(bookingData, 'customer.email')
      || getNestedValue(bookingData, 'user.email')
      || 'Not provided';
    const customerPhone = getNestedValue(bookingData, 'customer.phone_number')
      || getNestedValue(bookingData, 'customer.phone')
      || getNestedValue(bookingData, 'customer.mobile')
      || getNestedValue(bookingData, 'user.phone_number')
      || getNestedValue(bookingData, 'user.phone')
      || 'Not provided';
    const hasReviewRaw = bookingData && (bookingData.has_review ?? bookingData.hasReview);
    const hasReview = hasReviewRaw === undefined || hasReviewRaw === null
      ? 'Not provided'
      : hasReviewRaw
        ? 'Yes'
        : 'No';
    const inspirationImage = getFirstFilledValue(bookingData, ['inspiration_image_upload', 'inspiration_image', 'inspiration_image_url']);
    const inspirationImageSafeUrl = inspirationImage && /^https?:\/\//i.test(inspirationImage.trim()) ? inspirationImage.trim() : '';
    const tailorWhatsappSafeUrl = tailorWhatsapp && /^https?:\/\//i.test(tailorWhatsapp.trim()) ? tailorWhatsapp.trim() : '';

    // Keep this card role-aware:
    // - customer sees tailor contact details
    // - tailor sees customer contact details
    const rightSideCardTitle = viewerRole === 'tailor' ? 'Customer contact details' : 'Tailor contact details';
    const rightSideCardBody = viewerRole === 'tailor'
      ? `
        <dl class="booking-detail-meta">
          <div><dt>Customer name</dt><dd>${escapeHtml(customerName)}</dd></div>
          <div><dt>Customer email</dt><dd>${escapeHtml(customerEmail)}</dd></div>
          <div><dt>Customer phone number</dt><dd>${escapeHtml(customerPhone)}</dd></div>
        </dl>
      `
      : `
        <dl class="booking-detail-meta">
          <div><dt>Business name</dt><dd>${escapeHtml(tailorBusinessName)}</dd></div>
          <div><dt>Email</dt><dd>${escapeHtml(tailorEmail)}</dd></div>
          <div><dt>Phone number</dt><dd>${escapeHtml(tailorPhone)}</dd></div>
          <div>
            <dt>WhatsApp</dt>
            <dd>
              ${
                tailorWhatsappSafeUrl
                  ? `<a class="booking-contact-link" href="${escapeHtml(tailorWhatsappSafeUrl)}" target="_blank" rel="noopener noreferrer">Open WhatsApp chat</a>`
                  : 'Not provided'
              }
            </dd>
          </div>
        </dl>
      `;

    const statusValue = getFirstFilledValue(bookingData, ['status', 'booking_status', 'state']);
    const appointmentValue = getFirstFilledValue(bookingData, ['appointment_datetime', 'appointment_at', 'appointment_date', 'appointmentDate']);
    const dueDateValue = getFirstFilledValue(bookingData, ['due_date', 'dueDate']);

    // Convert API date values into form-friendly input values.
    // datetime-local expects format like "2026-04-01T14:30".
    const formatDateTimeForInput = (dateValue) => {
      const parsedDate = parsePossibleDate(dateValue);

      if (!parsedDate) {
        return '';
      }

      const localDate = new Date(parsedDate.getTime() - (parsedDate.getTimezoneOffset() * 60000));
      return localDate.toISOString().slice(0, 16);
    };

    // due_date input expects plain YYYY-MM-DD text from Xano.
    // We intentionally keep this raw and do not parse as a timestamp.
    const formatDueDateForInput = (dueDateValue) => {
      if (typeof dueDateValue !== 'string') {
        return '';
      }

      const trimmedDueDate = dueDateValue.trim();
      return /^\d{4}-\d{2}-\d{2}$/.test(trimmedDueDate) ? trimmedDueDate : '';
    };

    const manageSectionMarkup = viewerRole === 'tailor'
      ? `
        <section class="booking-detail-group booking-manage-group" aria-label="Manage booking">
          <h3>Manage Booking</h3>
          <p class="booking-manage-copy">
            As the assigned tailor, you can update booking status, timing, and pricing details.
          </p>
          <form
            id="booking-manage-form"
            class="login-form booking-manage-form"
            data-current-completion-date="${escapeHtml(completionDateRaw || '')}"
            novalidate
          >
            <div class="form-field">
              <label for="manage-booking-status">Status</label>
              <select id="manage-booking-status" name="status" required>
                ${['pending', 'confirmed', 'in_progress', 'completed', 'cancelled']
                  .map(
                    (statusOption) => `
                      <option value="${escapeHtml(statusOption)}" ${statusValue.toLowerCase() === statusOption ? 'selected' : ''}>
                        ${escapeHtml(statusOption.replaceAll('_', ' '))}
                      </option>
                    `,
                  )
                  .join('')}
              </select>
            </div>

            <div class="form-field">
              <label for="manage-booking-appointment">Appointment date and time (optional)</label>
              <input
                id="manage-booking-appointment"
                name="appointment_datetime"
                type="datetime-local"
                value="${escapeHtml(formatDateTimeForInput(appointmentValue))}"
              />
            </div>

            <div class="form-field">
              <label for="manage-booking-due-date">Due date (optional)</label>
              <input
                id="manage-booking-due-date"
                name="due_date"
                type="date"
                value="${escapeHtml(formatDueDateForInput(dueDateValue))}"
              />
            </div>

            <div class="form-field">
              <label for="manage-booking-price-quote">Price quote (optional)</label>
              <input
                id="manage-booking-price-quote"
                name="price_quote"
                type="number"
                step="0.01"
                value="${escapeHtml(priceQuote || '')}"
                placeholder="Example: 150.00"
              />
            </div>

            <div class="form-field">
              <label for="manage-booking-final-price">Final price (optional)</label>
              <input
                id="manage-booking-final-price"
                name="final_price"
                type="number"
                step="0.01"
                value="${escapeHtml(finalPrice || '')}"
                placeholder="Example: 175.00"
              />
            </div>

            <div class="form-field" id="manage-booking-cancellation-reason-group" ${statusValue.toLowerCase() === 'cancelled' ? '' : 'hidden style="display: none;"'}>
              <label for="manage-booking-cancellation-reason">Cancellation reason</label>
              <textarea
                id="manage-booking-cancellation-reason"
                name="cancellation_reason"
                rows="3"
                placeholder="Share why this booking was cancelled."
              >${escapeHtml(cancellationReason || '')}</textarea>
            </div>

            <p id="booking-manage-message" class="validation-message">Use this form to update booking lifecycle fields.</p>
            <button id="booking-manage-submit" class="button button-primary" type="submit">Save booking updates</button>
          </form>
        </section>
      `
      : '';

    // Completion confirmation state:
    // - Tailor marks booking as completed.
    // - Customer can then confirm or dispute.
    // - Auto-confirm timeout logic is intentionally not added in this MVP.
    const completionStatusValue = getFirstFilledValue(bookingData, ['completion_confirmation_status', 'completion_status']);
    const completionConfirmedAtValue = getFirstFilledValue(bookingData, ['completion_confirmed_at', 'confirmed_completion_at']);
    const completionDisputedAtValue = getFirstFilledValue(bookingData, ['disputed_at', 'completion_disputed_at']);
    const completionConfirmedFlag = String(
      bookingData && (
        bookingData.completion_confirmed
        ?? bookingData.is_completion_confirmed
        ?? bookingData.confirmed_completion
      ),
    ).toLowerCase();
    const completionDisputedFlag = String(
      bookingData && (
        bookingData.completion_disputed
        ?? bookingData.is_completion_disputed
      ),
    ).toLowerCase();
    const normalizedBookingStatus = String(bookingStatus).trim().toLowerCase();
    const normalizedCompletionStatus = String(completionStatusValue).trim().toLowerCase();
    const isCompletedBooking = normalizedBookingStatus === 'completed';
    const isCompletionConfirmed = normalizedCompletionStatus === 'confirmed'
      || Boolean(completionConfirmedAtValue)
      || completionConfirmedFlag === 'true'
      || completionConfirmedFlag === '1';
    const isCompletionDisputed = normalizedCompletionStatus === 'disputed'
      || Boolean(completionDisputedAtValue)
      || completionDisputedFlag === 'true'
      || completionDisputedFlag === '1';
    const needsCustomerCompletionAction = viewerRole === 'customer'
      && isCompletedBooking
      && !isCompletionConfirmed
      && !isCompletionDisputed;

    const completionActionMarkup = needsCustomerCompletionAction
      ? `
        <section class="booking-detail-group booking-completion-confirmation-group" aria-label="Completion confirmation">
          <h3>Completion confirmation required</h3>
          <p class="booking-manage-copy">
            Please confirm that this booking was completed successfully.
          </p>
          <div class="bookings-list-actions">
            <button id="booking-confirm-completion-button" class="button button-primary" type="button">
              Confirm completion
            </button>
            <button id="booking-dispute-button" class="button button-secondary" type="button">
              Report issue
            </button>
          </div>
          <p id="booking-completion-message" class="validation-message">
            You can confirm completion or report an issue.
          </p>
        </section>
      `
      : '';

    return `
      <div class="booking-detail-grid">
        <section class="booking-detail-group" aria-label="Booking summary">
          <h3>Booking summary</h3>
          <dl class="booking-detail-meta">
            <div><dt>Booking ID</dt><dd>${escapeHtml(bookingId)}</dd></div>
            <div><dt>Service requested</dt><dd>${escapeHtml(serviceRequested)}</dd></div>
            <div><dt>Measurements</dt><dd>${escapeHtml(measurements)}</dd></div>
            <div><dt>Status</dt><dd>${escapeHtml(bookingStatus)}</dd></div>
            <div><dt>Booking submitted</dt><dd>${escapeHtml(formatDisplayDateTime(createdDateRaw))}</dd></div>
            <div><dt>Appointment</dt><dd>${escapeHtml(formatDisplayDateTime(appointmentRaw))}</dd></div>
            <div><dt>Due date</dt><dd>${escapeHtml(formatDueDateForDisplay(dueDateRaw))}</dd></div>
            <div><dt>Completion date</dt><dd>${escapeHtml(formatDisplayDate(completionDateRaw))}</dd></div>
            <div><dt>Customer note</dt><dd>${escapeHtml(customerNote || 'Not provided')}</dd></div>
            <div><dt>Has review</dt><dd>${escapeHtml(hasReview)}</dd></div>
            <div><dt>Price quote</dt><dd>${escapeHtml(priceQuote || 'Not provided')}</dd></div>
            <div><dt>Final price</dt><dd>${escapeHtml(finalPrice || 'Not provided')}</dd></div>
            <div><dt>Cancellation reason</dt><dd>${escapeHtml(cancellationReason || 'Not provided')}</dd></div>
          </dl>
        </section>

        <section class="booking-detail-group booking-contact-group" aria-label="Role based contact info">
          <h3>${escapeHtml(rightSideCardTitle)}</h3>
          ${rightSideCardBody}
        </section>
      </div>

      <section class="booking-detail-group" aria-label="Inspiration image">
        <h3>Inspiration image</h3>
        ${
          inspirationImageSafeUrl
            ? `<img class="booking-detail-image" src="${escapeHtml(inspirationImageSafeUrl)}" alt="Inspiration image for booking ${escapeHtml(bookingId)}" />`
            : '<p class="booking-detail-empty-text">No inspiration image was provided for this booking.</p>'
        }
      </section>

      ${completionActionMarkup}
      ${manageSectionMarkup}
    `;
  };

  // Turn optional form fields into values safe for the update request payload.
  const readOptionalFieldValue = (rawValue) => {
    if (rawValue === undefined || rawValue === null) {
      return null;
    }

    const trimmedValue = String(rawValue).trim();
    return trimmedValue ? trimmedValue : null;
  };

  // Convert optional number inputs into decimal numbers for Xano.
  // Empty values return null so optional payload fields stay consistent.
  const readOptionalDecimalNumber = (rawValue) => {
    const optionalValue = readOptionalFieldValue(rawValue);

    if (!optionalValue) {
      return null;
    }

    const parsedNumber = Number(optionalValue);
    return Number.isFinite(parsedNumber) ? parsedNumber : null;
  };

  // Convert datetime-local input values into full ISO UTC strings.
  // Xano expects timestamps with seconds + timezone (for example: ...:00.000Z).
  // This keeps empty fields as null and avoids sending partial date values.
  const formatDateTimeToIsoUtc = (value) => {
    const optionalValue = readOptionalFieldValue(value);

    if (!optionalValue) {
      return null;
    }

    // datetime-local input format: YYYY-MM-DDTHH:mm
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(optionalValue)) {
      const parsedDate = new Date(optionalValue);
      const isValidDate = !Number.isNaN(parsedDate.getTime());
      return isValidDate ? parsedDate.toISOString() : null;
    }

    return null;
  };

  // Keep due_date as plain YYYY-MM-DD text to match the expected booking field format.
  // Empty or invalid values return null so optional handling stays consistent.
  const readDueDateInputValue = (value) => {
    const optionalValue = readOptionalFieldValue(value);

    if (!optionalValue) {
      return null;
    }

    return /^\d{4}-\d{2}-\d{2}$/.test(optionalValue) ? optionalValue : null;
  };

  // Attach form behavior after the tailor detail markup is in the DOM.
  const setupTailorManageBookingForm = ({ bookingId }) => {
    const manageForm = document.querySelector('#booking-manage-form');

    if (!manageForm) {
      return;
    }

    const manageMessage = document.querySelector('#booking-manage-message');
    const manageSubmitButton = document.querySelector('#booking-manage-submit');
    const statusField = document.querySelector('#manage-booking-status');
    const appointmentField = document.querySelector('#manage-booking-appointment');
    const dueDateField = document.querySelector('#manage-booking-due-date');
    const priceQuoteField = document.querySelector('#manage-booking-price-quote');
    const finalPriceField = document.querySelector('#manage-booking-final-price');
    const cancellationReasonGroup = document.querySelector('#manage-booking-cancellation-reason-group');
    const cancellationReasonField = document.querySelector('#manage-booking-cancellation-reason');

    const updateManageMessage = (message, stateClass = '') => {
      manageMessage.textContent = message;
      manageMessage.className = `validation-message ${stateClass}`.trim();
    };

    // Keep cancellation behavior tied to status:
    // - show cancellation reason only when "cancelled" is selected
    // - otherwise hide it and remove required validation
    const syncCancellationReasonVisibility = () => {
      const isCancelledStatus = statusField.value.trim().toLowerCase() === 'cancelled';

      if (cancellationReasonGroup) {
        cancellationReasonGroup.hidden = !isCancelledStatus;
        cancellationReasonGroup.style.display = isCancelledStatus ? '' : 'none';
      }

      if (cancellationReasonField) {
        cancellationReasonField.required = isCancelledStatus;

        if (!isCancelledStatus) {
          cancellationReasonField.value = '';
        }
      }
    };

    statusField.addEventListener('change', syncCancellationReasonVisibility);
    syncCancellationReasonVisibility();

    manageForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!statusField.value.trim()) {
        updateManageMessage('Please choose a booking status before saving.', 'is-error');
        return;
      }

      const nextStatusValue = statusField.value.trim();
      const isCancellingBooking = nextStatusValue.toLowerCase() === 'cancelled';
      const cancellationReasonValue = readOptionalFieldValue(cancellationReasonField.value);

      if (isCancellingBooking && !cancellationReasonValue) {
        updateManageMessage('Please add a cancellation reason before saving a cancelled booking.', 'is-error');
        return;
      }

      const updatePayload = {
        status: nextStatusValue,
        appointment_datetime: formatDateTimeToIsoUtc(appointmentField.value),
        due_date: readDueDateInputValue(dueDateField.value),
        price_quote: readOptionalDecimalNumber(priceQuoteField.value),
        final_price: readOptionalDecimalNumber(finalPriceField.value),
        cancellation_reason: isCancellingBooking ? cancellationReasonValue : null,
      };

      // Completion protection MVP:
      // If tailor marks booking as completed, automatically set completion_date
      // (only when missing) and mark completion as pending customer confirmation.
      const isMarkingCompleted = nextStatusValue.toLowerCase() === 'completed';

      if (isMarkingCompleted) {
        const existingCompletionDate = readOptionalFieldValue(manageForm.dataset.currentCompletionDate);

        if (!existingCompletionDate) {
          updatePayload.completion_date = new Date().toISOString();
        }

        updatePayload.completion_confirmation_status = 'pending';
      }

      updateManageMessage('Saving booking updates...', 'is-loading');
      manageSubmitButton.disabled = true;

      try {
        const updateResult = await apiHelpers.updateTailorBookingById(bookingId, updatePayload);

        if (apiHelpers.isUnauthorizedResponse(updateResult)) {
          updateManageMessage('Your session expired. Redirecting to login...', 'is-error');

          setTimeout(() => {
            apiHelpers.clearAuthToken();
            apiHelpers.redirectToLoginPage('..');
          }, 900);
          return;
        }

        if (!updateResult.ok) {
          updateManageMessage(updateResult.errorMessage || 'We could not save booking updates right now.', 'is-error');
          return;
        }

        updateManageMessage('Booking updated successfully. Refreshing detail view...', 'is-success');

        // Re-fetch and re-render the booking so summary values match the new data.
        const refreshedResult = await apiHelpers.getTailorBookingById(bookingId);

        if (refreshedResult.ok && refreshedResult.data) {
          updateDetailState({
            title: 'Booking detail updated successfully.',
            description: 'Your tailor updates were saved and this page now shows the latest booking values.',
            cardTitle: `Booking #${getFirstFilledValue(refreshedResult.data, ['booking_id', 'id', 'bookingId']) || bookingId}`,
            cardBody: renderBookingDetail(refreshedResult.data, currentViewerRole),
            stateClass: 'is-success',
          });

          setupTailorManageBookingForm({ bookingId });
          return;
        }

        updateManageMessage('Saved updates, but we could not refresh the detail view automatically.', 'is-success');
      } catch (error) {
        updateManageMessage('Network error while saving. Please try again.', 'is-error');
      } finally {
        manageSubmitButton.disabled = false;
      }
    });
  };

  // Customer action handlers for the new completion confirmation flow.
  const setupCustomerCompletionActions = ({ bookingId }) => {
    const confirmButton = document.querySelector('#booking-confirm-completion-button');
    const disputeButton = document.querySelector('#booking-dispute-button');
    const completionMessage = document.querySelector('#booking-completion-message');

    if (!confirmButton || !disputeButton || !completionMessage) {
      return;
    }

    const updateCompletionMessage = (message, stateClass = '') => {
      completionMessage.textContent = message;
      completionMessage.className = `validation-message ${stateClass}`.trim();
    };

    const toggleActionButtons = (disabled) => {
      confirmButton.disabled = disabled;
      disputeButton.disabled = disabled;
    };

    confirmButton.addEventListener('click', async () => {
      updateCompletionMessage('Confirming completion...', 'is-loading');
      toggleActionButtons(true);

      try {
        const result = await apiHelpers.confirmBookingCompletion(bookingId);

        if (apiHelpers.isUnauthorizedResponse(result)) {
          updateCompletionMessage('Your session expired. Redirecting to login...', 'is-error');
          setTimeout(() => {
            apiHelpers.clearAuthToken();
            apiHelpers.redirectToLoginPage('..');
          }, 900);
          return;
        }

        if (!result.ok) {
          updateCompletionMessage(result.errorMessage || 'We could not confirm completion right now.', 'is-error');
          return;
        }

        updateCompletionMessage('Completion confirmed successfully. Refreshing detail view...', 'is-success');
        window.setTimeout(() => window.location.reload(), 700);
      } catch (error) {
        updateCompletionMessage('Network error while confirming completion. Please try again.', 'is-error');
      } finally {
        toggleActionButtons(false);
      }
    });

    disputeButton.addEventListener('click', async () => {
      updateCompletionMessage('Submitting issue report...', 'is-loading');
      toggleActionButtons(true);

      try {
        const result = await apiHelpers.disputeBooking(bookingId);

        if (apiHelpers.isUnauthorizedResponse(result)) {
          updateCompletionMessage('Your session expired. Redirecting to login...', 'is-error');
          setTimeout(() => {
            apiHelpers.clearAuthToken();
            apiHelpers.redirectToLoginPage('..');
          }, 900);
          return;
        }

        if (!result.ok) {
          updateCompletionMessage(result.errorMessage || 'We could not submit this issue yet.', 'is-error');
          return;
        }

        updateCompletionMessage('Issue reported. A dispute workflow can be connected next.', 'is-success');
      } catch (error) {
        updateCompletionMessage('Network error while reporting an issue. Please try again.', 'is-error');
      } finally {
        toggleActionButtons(false);
      }
    });
  };

  (async () => {
    const bookingId = getBookingIdFromUrl();
    currentBookingId = bookingId;

    if (!bookingId) {
      updateDetailState({
        title: 'Booking ID is missing.',
        description: 'Open this page with a booking ID in the URL, for example ?bookingId=12.',
        cardTitle: 'No booking ID was found',
        cardBody: '<p>This page needs a booking ID in the URL before it can request detail data.</p>',
        stateClass: 'is-empty',
      });
      return;
    }

    updateDetailState({
      title: 'Loading booking detail...',
      description: `Checking your role and requesting booking ID ${bookingId} from the correct authenticated booking endpoint.`,
      cardTitle: 'Loading detail record',
      cardBody: '<p>Please wait while this booking detail record is being loaded.</p>',
      stateClass: 'is-loading',
    });

    try {
      // Decide which booking detail endpoint to call based on the signed-in role.
      // - customer -> getBookingById()      -> GET /get_booking
      // - tailor   -> getTailorBookingById() -> GET /get_tailor_booking
      let detailRequestHelper = apiHelpers.getBookingById;
      let detailEndpointLabel = 'GET /get_booking';

      const currentUserResult = await apiHelpers.getCurrentUser();

      if (apiHelpers.isUnauthorizedResponse(currentUserResult)) {
        updateDetailState({
          title: 'Session expired',
          description: 'Your session is no longer valid for booking detail requests.',
          cardTitle: 'Redirecting to login',
          cardBody: '<p>Your saved token is being cleared now. Please sign in again to continue.</p>',
          stateClass: 'is-error',
        });

        setTimeout(() => {
          apiHelpers.clearAuthToken();
          apiHelpers.redirectToLoginPage('..');
        }, 1000);
        return;
      }

      const currentUserRole = getUserRole(currentUserResult.data);
      currentViewerRole = currentUserRole || 'customer';

      if (currentUserRole === 'tailor') {
        detailRequestHelper = apiHelpers.getTailorBookingById;
        detailEndpointLabel = 'GET /get_tailor_booking';
      }

      const result = await detailRequestHelper(bookingId);
      const bookingData = result && result.data;

      if (apiHelpers.isUnauthorizedResponse(result)) {
        updateDetailState({
          title: 'Session expired',
          description: 'Your session is no longer valid for booking detail requests.',
          cardTitle: 'Redirecting to login',
          cardBody: '<p>Your saved token is being cleared now. Please sign in again to continue.</p>',
          stateClass: 'is-error',
        });

        setTimeout(() => {
          apiHelpers.clearAuthToken();
          apiHelpers.redirectToLoginPage('..');
        }, 1000);
        return;
      }

      if (!result.ok) {
        updateDetailState({
          title: 'We could not load this booking detail.',
          description: result.errorMessage || 'The booking detail request returned an error response.',
          cardTitle: 'Booking detail is unavailable',
          cardBody: '<p>Please go back to your bookings list and try opening this booking again.</p>',
          stateClass: 'is-error',
        });
        return;
      }

      if (!bookingData || (typeof bookingData === 'object' && !Object.keys(bookingData).length)) {
        updateDetailState({
          title: 'No detail record was returned.',
          description: 'The request worked, but this booking ID did not return detail data.',
          cardTitle: 'Booking not found',
          cardBody: '<p>Try opening another booking from the bookings page or dashboard.</p>',
          stateClass: 'is-empty',
        });
        return;
      }

      updateDetailState({
        title: 'Booking detail loaded successfully.',
        description: `This page is now showing enriched booking information from ${detailEndpointLabel}.`,
        cardTitle: `Booking #${getFirstFilledValue(bookingData, ['booking_id', 'id', 'bookingId']) || bookingId}`,
        cardBody: renderBookingDetail(bookingData, currentUserRole),
        stateClass: 'is-success',
      });

      if (currentViewerRole === 'tailor') {
        setupTailorManageBookingForm({ bookingId: currentBookingId });
      }

      if (currentViewerRole === 'customer') {
        setupCustomerCompletionActions({ bookingId: currentBookingId });
      }
    } catch (error) {
      updateDetailState({
        title: 'Network error while loading booking detail.',
        description: 'We could not reach Xano right now. Please check your connection and try again.',
        cardTitle: 'Request could not finish',
        cardBody: '<p>The detail page keeps this message visible so the issue is clear to users.</p>',
        stateClass: 'is-error',
      });
    }
  })();
}

if (pageKey === 'bookings') {
  const bookingsStatusPanel = document.querySelector('#bookings-status-panel');
  const bookingsContextCard = document.querySelector('#bookings-context-card');
  const bookingsForm = document.querySelector('#bookings-form');
  const bookingsMessage = document.querySelector('#bookings-form-message');
  const bookingsSubmitButton = document.querySelector('#bookings-submit-button');
  const bookingsListMessage = document.querySelector('#bookings-list-message');
  const bookingsListContainer = document.querySelector('#bookings-list-container');
  const apiHelpers = window.TailorMarketplaceApi;
  let selectedTailorId = '';

  const getTailorIdFromQuery = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryTailorId = queryParams.get('tailorId');
    return queryTailorId && queryTailorId.trim() ? queryTailorId.trim() : '';
  };

  // Keep all booking form message updates in one helper so loading, success,
  // and error states are easy for beginners to follow.
  const updateBookingsFormMessage = (message, stateClass = '') => {
    bookingsMessage.textContent = message;
    bookingsMessage.className = `validation-message ${stateClass}`.trim();
  };

  // Build FormData for the create_booking endpoint.
  // This keeps file upload logic in one place and avoids repeating field names.
  const createBookingFormData = ({ tailorId, serviceRequested, measurements, inspirationImageFile }) => {
    const bookingFormData = new FormData();
    bookingFormData.append('tailor_id', String(tailorId));
    bookingFormData.append('service_requested', serviceRequested);
    bookingFormData.append('measurements', measurements);

    if (inspirationImageFile) {
      bookingFormData.append('inspiration_image_upload', inspirationImageFile);
    }

    return bookingFormData;
  };


  // Turn different possible bookings response shapes into one simple array so
  // this page can stay flexible as API responses evolve.
  const getBookingsCollectionItems = (apiData) => {
    if (Array.isArray(apiData)) {
      return apiData;
    }

    if (!apiData || typeof apiData !== 'object') {
      return [];
    }

    const possibleArrays = [apiData.items, apiData.data, apiData.results, apiData.bookings];
    const matchingArray = possibleArrays.find((value) => Array.isArray(value));

    return matchingArray || [];
  };

  // Keep list message updates in one helper so loading, empty, success, and
  // error states stay easy to read and maintain.
  const updateBookingsListMessage = (message, stateClass = '') => {
    bookingsListMessage.textContent = message;
    bookingsListMessage.className = `validation-message ${stateClass}`.trim();
  };

  const renderBookingsListItems = (bookingItems) => {
    const listHtml = bookingItems
      .map((bookingItem) => {
        const status = getFirstFilledValue(bookingItem, ['status', 'booking_status', 'state']) || 'Pending update';
        const serviceRequested = getFirstFilledValue(bookingItem, ['service_requested', 'service', 'request']) || 'Service not provided';
        const submittedAtRaw = getFirstFilledValue(bookingItem, ['created_at', 'createdAt']);
        const tailorBusinessName = getFirstFilledValue(
          bookingItem,
          ['tailor_business_name', 'business_name', 'shop_name', 'tailor_name', 'tailor']
        ) || 'Business name not available';
        const bookingId = getFirstFilledValue(bookingItem, ['booking_id', 'id', 'bookingId']) || 'N/A';
        const detailHref = bookingId && bookingId !== 'N/A' ? `booking-detail.html?bookingId=${encodeURIComponent(bookingId)}` : '';

        // Keep this link simple so each booking item can open the shared detail
        // page using booking-detail.html?bookingId=<id>.
        return `
          <article class="bookings-list-item" data-booking-id="${escapeHtml(bookingId)}">
            <h3>Booking #${escapeHtml(bookingId)}</h3>
            <dl class="bookings-list-meta">
              <div>
                <dt>Status</dt>
                <dd>${escapeHtml(status)}</dd>
              </div>
              <div>
                <dt>Service requested</dt>
                <dd>${escapeHtml(serviceRequested)}</dd>
              </div>
              <div>
                <dt>Business name</dt>
                <dd>${escapeHtml(tailorBusinessName)}</dd>
              </div>
              <div>
                <dt>Booking submitted</dt>
                <dd>${escapeHtml(formatDisplayDateTime(submittedAtRaw))}</dd>
              </div>
            </dl>
            <div class="bookings-list-actions">
              ${
                detailHref
                  ? `<a class="button button-primary bookings-detail-button" href="${detailHref}" data-booking-id="${escapeHtml(bookingId)}">View booking details</a>`
                  : '<p class="bookings-list-link-note">Booking ID missing, so detail link is unavailable.</p>'
              }
            </div>
          </article>
        `;
      })
      .join('');

    bookingsListContainer.innerHTML = `<div class="bookings-list-grid">${listHtml}</div>`;
  };

  // Load bookings for the signed-in customer using the centralized
  // getUserBookings() helper from api.js.
  const loadUserBookingsList = async () => {
    const authToken = apiHelpers.getAuthToken();

    if (!authToken) {
      updateBookingsListMessage('Please sign in to view your bookings list.', 'is-error');
      bookingsListContainer.innerHTML = '<p class="bookings-list-placeholder">No session token was found. Open the login page, sign in, then return here.</p>';
      return;
    }

    updateBookingsListMessage('Loading your bookings list...', '');
    bookingsListContainer.innerHTML = '<p class="bookings-list-placeholder">Fetching booking records from the Users API group...</p>';

    try {
      const result = await apiHelpers.getUserBookings();

      if (apiHelpers.isUnauthorizedResponse(result)) {
        updateBookingsListMessage('Your session expired. Please sign in again to view bookings.', 'is-error');
        bookingsListContainer.innerHTML = '<p class="bookings-list-placeholder">The saved session is no longer valid.</p>';
        return;
      }

      if (!result.ok) {
        updateBookingsListMessage(result.errorMessage || 'We could not load your bookings right now.', 'is-error');
        bookingsListContainer.innerHTML = '<p class="bookings-list-placeholder">The request failed before booking records could be shown.</p>';
        return;
      }

      const bookingItems = getBookingsCollectionItems(result.data);

      if (!bookingItems.length) {
        updateBookingsListMessage('No bookings found yet. Submit your first booking to get started.', 'is-empty');
        bookingsListContainer.innerHTML = '<p class="bookings-list-placeholder">When a booking is created, it will appear in this list.</p>';
        return;
      }

      updateBookingsListMessage(`Loaded ${bookingItems.length} booking record${bookingItems.length === 1 ? '' : 's'} for your account.`, 'is-success');
      renderBookingsListItems(bookingItems);
    } catch (error) {
      updateBookingsListMessage('Network error while loading bookings. Please try again.', 'is-error');
      bookingsListContainer.innerHTML = '<p class="bookings-list-placeholder">The bookings list could not be loaded because the request did not finish.</p>';
    }
  };

  bookingsForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const serviceRequestedInput = document.querySelector('#booking-service-requested');
    const measurementsInput = document.querySelector('#booking-measurements');
    const inspirationImageInput = document.querySelector('#booking-inspiration-image');

    const serviceRequested = serviceRequestedInput.value.trim();
    const measurements = measurementsInput.value.trim();
    const inspirationImageFile = inspirationImageInput.files && inspirationImageInput.files[0] ? inspirationImageInput.files[0] : null;

    if (!selectedTailorId) {
      updateBookingsFormMessage(
        'Please open this page from a tailor profile (for example: bookings.html?tailorId=1) so we can send tailor_id.',
        'is-error',
      );
      return;
    }

    if (!serviceRequested || !measurements) {
      updateBookingsFormMessage('Please complete both service requested and measurements before submitting.', 'is-error');
      return;
    }

    updateBookingsFormMessage('Submitting your booking request to Xano... Please wait.');
    bookingsSubmitButton.disabled = true;

    try {
      const bookingFormData = createBookingFormData({
        tailorId: selectedTailorId,
        serviceRequested,
        measurements,
        inspirationImageFile,
      });

      const result = await apiHelpers.createBooking(bookingFormData);

      if (!result.ok) {
        updateBookingsFormMessage(result.errorMessage || 'Booking request failed. Please try again.', 'is-error');
        return;
      }

      updateBookingsFormMessage('Booking request submitted successfully.', 'is-success');
      bookingsForm.reset();

      // Refresh the real bookings list after a successful booking so users can
      // quickly confirm that their latest request appears.
      await loadUserBookingsList();
    } catch (error) {
      updateBookingsFormMessage('We could not reach the booking service right now. Please try again.', 'is-error');
    } finally {
      bookingsSubmitButton.disabled = false;
    }
  });

  const updateBookingsState = ({ title, description, cardTitle, cardBody, stateClass = '' }) => {
    bookingsStatusPanel.className = `hero-panel bookings-status-panel ${stateClass}`.trim();
    bookingsStatusPanel.innerHTML = `
      <p class="panel-label">Booking Status</p>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(description)}</p>
    `;

    bookingsContextCard.className = `feature-card bookings-context-card ${stateClass}`.trim();
    bookingsContextCard.innerHTML = `
      <span class="panel-label">Selected Tailor</span>
      <h2 id="bookings-context-title">${escapeHtml(cardTitle)}</h2>
      ${cardBody}
    `;
  };

  // Load the signed-in user's current bookings as soon as the page opens.
  // This runs independently of tailor context so list viewing still works.
  loadUserBookingsList();

  (async () => {
    const tailorId = getTailorIdFromQuery();

    if (!tailorId) {
      selectedTailorId = '';
      updateBookingsState({
        title: 'Generic booking view',
        description: 'No tailor ID was found in the URL query string, so this page is showing a safe default view.',
        cardTitle: 'Choose a tailor to start',
        cardBody: '<p>You can still continue browsing and return here later from any tailor profile.</p>',
        stateClass: 'is-empty',
      });
      updateBookingsFormMessage(
        'A tailor selection is required before submitting. Open bookings from a tailor profile first.',
        'is-error',
      );
      return;
    }

    updateBookingsState({
      title: 'Loading selected tailor...',
      description: `Found tailorId=${tailorId} in the URL. Requesting profile data with getTailorById().`,
      cardTitle: 'Preparing booking context',
      cardBody: '<p>Please wait while we load this tailor profile.</p>',
      stateClass: 'is-loading',
    });

    try {
      const result = await apiHelpers.getTailorById(tailorId);
      const tailorData = result && result.data;

      if (!result.ok) {
        updateBookingsState({
          title: 'We could not load the selected tailor.',
          description: result.errorMessage || 'The booking context request returned an error response.',
          cardTitle: 'Selected tailor is unavailable',
          cardBody: '<p>Please go back to the tailor directory and try another profile.</p>',
          stateClass: 'is-error',
        });
        return;
      }

      if (!tailorData || (typeof tailorData === 'object' && !Object.keys(tailorData).length)) {
        updateBookingsState({
          title: 'The selected tailor was not found.',
          description: 'The request finished, but no record was returned for this tailor ID.',
          cardTitle: 'No profile data found',
          cardBody: '<p>Try opening bookings from another tailor profile.</p>',
          stateClass: 'is-empty',
        });
        return;
      }

      const businessName = getFirstFilledValue(tailorData, ['business_name', 'shop_name', 'name']) || 'Tailor profile';
      const location = getFirstFilledValue(tailorData, ['location', 'city', 'address']) || 'Location not listed';
      const bio = getFirstFilledValue(tailorData, ['bio', 'about', 'description']) || 'No profile summary is available yet.';
      selectedTailorId = tailorId;

      updateBookingsState({
        title: 'Tailor context is ready',
        description: 'This booking page is now linked to the selected tailor from the detail page.',
        cardTitle: businessName,
        cardBody: `
          <p class="bookings-context-summary">${escapeHtml(bio)}</p>
          <dl class="bookings-context-meta">
            <div>
              <dt>Tailor ID</dt>
              <dd>${escapeHtml(tailorId)}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>${escapeHtml(location)}</dd>
            </div>
          </dl>
        `,
        stateClass: 'is-success',
      });
      updateBookingsFormMessage(`Tailor ID ${tailorId} is selected. You can now submit this booking form.`);
    } catch (error) {
      selectedTailorId = '';
      updateBookingsState({
        title: 'Network error while loading booking context.',
        description: 'We could not reach Xano right now. Please check your connection and try again.',
        cardTitle: 'Selected tailor could not be loaded',
        cardBody: '<p>The booking page stays usable, but this tailor context could not be prepared.</p>',
        stateClass: 'is-error',
      });
      updateBookingsFormMessage(
        'The selected tailor could not be loaded, so submission is blocked until tailor context is available.',
        'is-error',
      );
    }
  })();
}
