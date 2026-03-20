/*
  Centralized API helpers for the Tailor Marketplace frontend.

  Why this file exists:
  - It keeps the future Xano base URL in one place.
  - It keeps endpoint paths in one place.
  - It gives the project simple fetch() helper functions that other pages can reuse.

  This project uses plain browser JavaScript instead of a framework, so this file
  exposes one shared object on window: window.TailorMarketplaceApi.
*/

// Replace this placeholder with your real Xano base URL later.
// Example format: https://your-xano-instance.xano.io/api:example123
const XANO_BASE_URL = 'https://your-xano-base-url-here';

// Keep every API path in one central place so URLs are not repeated across files.
const API_ENDPOINTS = {
  login: '/auth/login',
  signup: '/auth/signup',
  currentUser: '/auth/me',
  tailors: '/tailors',
  bookings: '/bookings',
  reviews: '/reviews',
};

// Build the full API URL from the shared base URL and one endpoint path.
const buildApiUrl = (endpointPath) => `${XANO_BASE_URL}${endpointPath}`;

/*
  Shared request helper.

  Use this function whenever a page needs to talk to Xano.
  It accepts:
  - endpointPath: one of the values from API_ENDPOINTS
  - options: regular fetch() options such as method, headers, and body
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

  // Return the raw response for now so future pages can decide how to handle
  // loading states, JSON parsing, errors, and auth tokens.
  return response;
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

// Authentication helpers.
const loginUser = (loginData) => postRequest(API_ENDPOINTS.login, loginData);
const signupUser = (signupData) => postRequest(API_ENDPOINTS.signup, signupData);
const getCurrentUser = () => getRequest(API_ENDPOINTS.currentUser);

// Marketplace data helpers.
const getTailors = () => getRequest(API_ENDPOINTS.tailors);
const getBookings = () => getRequest(API_ENDPOINTS.bookings);
const getReviews = () => getRequest(API_ENDPOINTS.reviews);

// Expose one beginner-friendly global object that other scripts can use later.
window.TailorMarketplaceApi = {
  XANO_BASE_URL,
  API_ENDPOINTS,
  buildApiUrl,
  apiRequest,
  getRequest,
  postRequest,
  loginUser,
  signupUser,
  getCurrentUser,
  getTailors,
  getBookings,
  getReviews,
};
