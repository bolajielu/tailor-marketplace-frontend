import { getRouteFromHash, navigateTo } from './utils/router.js';
import { renderLayout } from './components/layout.js';
import { homePage } from './pages/home.js';
import { loginPage } from './pages/login.js';
import { signupPage } from './pages/signup.js';
import { dashboardPage } from './pages/dashboard.js';
import { tailorListingPage } from './pages/tailor-listing.js';
import { tailorDetailPage } from './pages/tailor-detail.js';
import { bookingsPage } from './pages/bookings.js';
import { reviewsPage } from './pages/reviews.js';

const routes = {
  home: homePage,
  login: loginPage,
  signup: signupPage,
  dashboard: dashboardPage,
  'tailor-listing': tailorListingPage,
  'tailor-detail': tailorDetailPage,
  bookings: bookingsPage,
  reviews: reviewsPage,
};

function renderApp() {
  const app = document.querySelector('#app');
  const route = getRouteFromHash();
  const page = routes[route] || homePage;

  app.innerHTML = renderLayout(page(), route);

  document.querySelectorAll('[data-route]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navigateTo(link.dataset.route);
    });
  });
}

window.addEventListener('hashchange', renderApp);
window.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash) {
    navigateTo('home');
    return;
  }

  renderApp();
});
