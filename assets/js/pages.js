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

contentRoot.innerHTML =
  pageKey === 'login' ? renderLoginPage() : pageKey === 'signup' ? renderSignupPage() : renderStandardPage();

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

      // The safer API helper already tried to read JSON for us.
      // If the backend returned an empty body or invalid JSON, result.data will be null.
      const responseData = result.data;

      // Store the real Xano auth token after a successful login.
      // Example: localStorage.setItem('tailorMarketplaceToken', responseData.authToken);
      // Replace `responseData.authToken` with the actual token field returned by your Xano login API.

      updateLoginMessage('Login successful. Your account response was handled safely.', 'is-success');

      // Do not redirect until you are ready to connect the successful response
      // to the next page in your real application flow.
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
