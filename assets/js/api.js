/*
  Centralized API helpers for the Tailor Marketplace frontend.

  Why this file exists:
  - It keeps the future Xano base URL in one place.
  - It keeps endpoint paths in one place.
  - It gives the project simple fetch() helper functions that other pages can reuse.

  This project uses plain browser JavaScript instead of a framework, so this file
  exposes one shared object on window: window.TailorMarketplaceApi.
*/

// Real Xano base URL for the shared Tailor Marketplace backend.
// Keeping this value here means pages only call helper functions instead of hardcoding URLs.
const XANO_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:7K6R8GYB';

// Keep every API path in one central place so URLs are not repeated across files.
const API_ENDPOINTS = {
  login: '/auth/login',
  signup: '/auth/signup',
  currentUser: '/auth/me',
  tailors: '/tailors',
  bookings: '/bookings',
  reviews: '/reviews',
};

// Keep the auth token storage key in one place so login and authenticated requests stay aligned.
const AUTH_TOKEN_KEY = 'tailorMarketplaceToken';

// Keep the shared login page path in one place so logout and expired-session
// redirects always send the user to the same screen.
const LOGIN_PAGE_PATH = 'login.html';

// Build the full API URL from the shared base URL and one endpoint path.
const buildApiUrl = (endpointPath) => `${XANO_BASE_URL}${endpointPath}`;

/*
  Read the saved auth token from localStorage.

  Why this helper matters:
  - Pages should not repeat the token key string in multiple places.
  - Authenticated requests should use one shared way to read the token.
  - Returning an empty string when no token exists keeps later checks simple.
*/
const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_KEY) || '';

// Remove the saved auth token. Keeping this in one helper makes logout and
// expired-session cleanup easier to reuse across pages.
const clearAuthToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);

// Send the user to the shared login page. The basePath value lets the same
// helper work from both the home page and files inside /pages.
const redirectToLoginPage = (basePath = '..') => {
  const loginPath = basePath === '.' ? `./pages/${LOGIN_PAGE_PATH}` : LOGIN_PAGE_PATH;
  window.location.href = loginPath;
};

// Keep unauthorized checks in one beginner-friendly helper so page scripts can
// clearly say what they are looking for.
const isUnauthorizedResponse = (result) => {
  if (!result) {
    return false;
  }

  const errorMessage = typeof result.errorMessage === 'string' ? result.errorMessage.toLowerCase() : '';
  return result.status === 401 || errorMessage.includes('unauthorized');
};

/*
  Build the Authorization header for authenticated requests.

  Returned shape:
  - {} when no token exists
  - { Authorization: 'Bearer <token>' } when a token exists

  This keeps the Bearer token format centralized in one beginner-friendly helper.
*/
const getAuthHeaders = () => {
  const authToken = getAuthToken();

  if (!authToken) {
    return {};
  }

  return {
    Authorization: `Bearer ${authToken}`,
  };
};

/*
  Safely read JSON from a fetch() response.

  Why this helper matters:
  - Some responses may have no body at all.
  - Some responses may return plain text or broken JSON.
  - Beginner-friendly pages should not crash just because response.json()
    throws an error.

  This helper returns:
  - parsed JSON data when parsing works
  - null when the body is empty or invalid JSON
*/
const safeParseJson = async (response) => {
  const responseText = await response.text();

  if (!responseText || !responseText.trim()) {
    return null;
  }

  try {
    return JSON.parse(responseText);
  } catch (error) {
    return null;
  }
};

/*
  Turn a fetch response into one simple object shape that pages can use.

  Returned shape:
  {
    ok: boolean,
    status: number,
    data: any,
    errorMessage: string | null
  }

  This keeps page code easy to read because every request result follows the
  same pattern.
*/
const createApiResult = async (response) => {
  const data = await safeParseJson(response);
  let errorMessage = null;

  if (!response.ok) {
    if (data && typeof data === 'object') {
      errorMessage = data.message || data.error || null;
    }

    if (!errorMessage) {
      errorMessage = `Request failed with status ${response.status}.`;
    }
  }

  return {
    ok: response.ok,
    status: response.status,
    data,
    errorMessage,
  };
};

/*
  Shared request helper.

  Use this function whenever a page needs to talk to Xano.
  It accepts:
  - endpointPath: one of the values from API_ENDPOINTS
  - options: regular fetch() options such as method, headers, and body

  It returns the beginner-friendly result object created by createApiResult().
*/
const apiRequest = async (endpointPath, options = {}) => {
  const requestOptions = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  };

  const response = await fetch(buildApiUrl(endpointPath), requestOptions);
  return createApiResult(response);
};

// Simple helper for GET requests.
const getRequest = (endpointPath, options = {}) => {
  return apiRequest(endpointPath, {
    ...options,
    method: 'GET',
  });
};

// Simple helper for POST requests that send JSON data.
const postRequest = (endpointPath, data = {}, options = {}) => {
  return apiRequest(endpointPath, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/*
  Shared helper for authenticated requests.

  Why this helper matters:
  - Pages can ask for an authenticated request without manually building headers.
  - The Bearer token format stays in one place.
  - The dashboard page can stay focused on rendering instead of fetch setup.
*/
const authenticatedRequest = (endpointPath, options = {}) => {
  return apiRequest(endpointPath, {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...(options.headers || {}),
    },
  });
};

// Authentication helpers keep login and signup endpoint configuration centralized.
// The login helper sends { email, password } to Xano and returns one shared result shape.
const loginUser = (loginData) => postRequest(API_ENDPOINTS.login, loginData);
const signupUser = (signupData) => postRequest(API_ENDPOINTS.signup, signupData);
const getCurrentUser = () => authenticatedRequest(API_ENDPOINTS.currentUser, { method: 'GET' });

// Marketplace data helpers.
const getTailors = () => getRequest(API_ENDPOINTS.tailors);
const getBookings = () => getRequest(API_ENDPOINTS.bookings);
const getReviews = () => getRequest(API_ENDPOINTS.reviews);

// Expose one beginner-friendly global object that other scripts can use later.
window.TailorMarketplaceApi = {
  XANO_BASE_URL,
  API_ENDPOINTS,
  AUTH_TOKEN_KEY,
  LOGIN_PAGE_PATH,
  buildApiUrl,
  getAuthToken,
  clearAuthToken,
  redirectToLoginPage,
  isUnauthorizedResponse,
  getAuthHeaders,
  safeParseJson,
  createApiResult,
  apiRequest,
  getRequest,
  postRequest,
  authenticatedRequest,
  loginUser,
  signupUser,
  getCurrentUser,
  getTailors,
  getBookings,
  getReviews,
};
