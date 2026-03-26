/*
  Centralized API helpers for the Tailor Marketplace frontend.

  Why this file exists:
  - It keeps every Xano API base URL in one place.
  - It keeps endpoint paths grouped by purpose so pages stay simple.
  - It gives the project beginner-friendly fetch() helper functions that other pages can reuse.

  This project uses plain browser JavaScript instead of a framework, so this file
  exposes one shared object on window: window.TailorMarketplaceApi.
*/

// Keep all Xano base URLs grouped in one place so page files never need to hardcode them.
const API_BASE_URLS = {
  auth: 'https://x8ki-letl-twmt.n7.xano.io/api:7K6R8GYB',
  app: 'https://x8ki-letl-twmt.n7.xano.io/api:lWSPi4ll',
  users: 'https://x8ki-letl-twmt.n7.xano.io/api:Jp0dBE1E',
};

// Keep endpoint paths grouped by API area so it is easy to see which base URL they belong to.
const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    signup: '/auth/signup',
    // The real protected current-user route in Xano is /get_user_profile.
    // Keeping that path here lets the shared getCurrentUser() helper stay the
    // same everywhere else in the app.
    currentUser: '/get_user_profile',
  },
  app: {
    tailors: '/tailor',
    bookings: '/bookings',
    createBooking: '/create_booking',
    reviews: '/reviews',
  },
  users: {
    bookings: '/get_bookings',
    bookingDetail: '/get_booking',
    reviews: '/get_reviews',
    profile: '/update_user_profile',
  },
};

// Keep the auth token storage key in one place so login and authenticated requests stay aligned.
const AUTH_TOKEN_KEY = 'tailorMarketplaceToken';

// Keep the shared login page path in one place so logout and expired-session
// redirects always send the user to the same screen.
const LOGIN_PAGE_PATH = 'login.html';

// Build the full API URL from one API group and one endpoint path.
const buildApiUrl = (apiGroup, endpointPath) => {
  const baseUrl = API_BASE_URLS[apiGroup];

  if (!baseUrl) {
    throw new Error(`Unknown API group: ${apiGroup}`);
  }

  return `${baseUrl}${endpointPath}`;
};

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
  - apiGroup: one of the keys from API_BASE_URLS such as 'auth', 'app', or 'users'
  - endpointPath: one of the values from API_ENDPOINTS
  - options: regular fetch() options such as method, headers, and body

  It returns the beginner-friendly result object created by createApiResult().
*/
const apiRequest = async (apiGroup, endpointPath, options = {}) => {
  const requestHeaders = {
    ...(options.headers || {}),
  };

  if (!requestHeaders['Content-Type'] && !(options.body instanceof FormData)) {
    requestHeaders['Content-Type'] = 'application/json';
  }

  const requestOptions = {
    method: options.method || 'GET',
    ...options,
    headers: requestHeaders,
  };

  const response = await fetch(buildApiUrl(apiGroup, endpointPath), requestOptions);
  return createApiResult(response);
};

// Simple helper for GET requests.
const getRequest = (apiGroup, endpointPath, options = {}) => {
  return apiRequest(apiGroup, endpointPath, {
    ...options,
    method: 'GET',
  });
};

// Simple helper for POST requests that send JSON data.
const postRequest = (apiGroup, endpointPath, data = {}, options = {}) => {
  return apiRequest(apiGroup, endpointPath, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// Simple helper for PATCH requests that send JSON data.
const patchRequest = (apiGroup, endpointPath, data = {}, options = {}) => {
  return apiRequest(apiGroup, endpointPath, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};

// Simple helper for DELETE requests.
const deleteRequest = (apiGroup, endpointPath, options = {}) => {
  return apiRequest(apiGroup, endpointPath, {
    ...options,
    method: 'DELETE',
  });
};

/*
  Shared helper for authenticated requests.

  Why this helper matters:
  - Pages can ask for an authenticated request without manually building headers.
  - The Bearer token format stays in one place.
  - The dashboard page can stay focused on rendering instead of fetch setup.
*/
const authenticatedRequest = (apiGroup, endpointPath, options = {}) => {
  return apiRequest(apiGroup, endpointPath, {
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...(options.headers || {}),
    },
  });
};

// Authentication helpers use the auth API base automatically.
const loginUser = (loginData) => postRequest('auth', API_ENDPOINTS.auth.login, loginData);
const signupUser = (signupData) => postRequest('auth', API_ENDPOINTS.auth.signup, signupData);
const getCurrentUser = () => authenticatedRequest('auth', API_ENDPOINTS.auth.currentUser, { method: 'GET' });

// Tailor and marketplace helpers use the app API base automatically.
const getTailors = () => getRequest('app', API_ENDPOINTS.app.tailors);
const getTailorById = (tailorId) => getRequest('app', `${API_ENDPOINTS.app.tailors}/${tailorId}`);
const getAppBookings = () => authenticatedRequest('app', API_ENDPOINTS.app.bookings, { method: 'GET' });
const getAppReviews = () => authenticatedRequest('app', API_ENDPOINTS.app.reviews, { method: 'GET' });
/*
  Create a booking through the authenticated App API endpoint.

  Why this helper uses FormData:
  - The inspiration image input is a file upload.
  - FormData lets us send text fields and file fields in one request.
  - The shared apiRequest() helper automatically avoids setting Content-Type
    for FormData, so the browser can set the proper multipart boundary.

  Required payload fields:
  - tailor_id
  - service_requested
  - measurements
  - inspiration_image_upload (optional file from the form)
*/
const createBooking = (bookingFormData) => authenticatedRequest('app', API_ENDPOINTS.app.createBooking, {
  method: 'POST',
  body: bookingFormData,
});
const createTailor = (tailorData) => authenticatedRequest('app', API_ENDPOINTS.app.tailors, {
  method: 'POST',
  body: JSON.stringify(tailorData),
});
const updateTailor = (tailorId, tailorData) => authenticatedRequest('app', `${API_ENDPOINTS.app.tailors}/${tailorId}`, {
  method: 'PATCH',
  body: JSON.stringify(tailorData),
});
const deleteTailor = (tailorId) => authenticatedRequest('app', `${API_ENDPOINTS.app.tailors}/${tailorId}`, {
  method: 'DELETE',
});

// Customer dashboard helpers use the users API base automatically.
const getUserBookings = () => authenticatedRequest('users', API_ENDPOINTS.users.bookings, { method: 'GET' });
/*
  Load one enriched booking detail record for the signed-in user.

  Endpoint used:
  - GET /get_booking?booking_id=<id>

  Why this helper exists:
  - Pages should not build this endpoint URL manually.
  - Keeping query parameter logic here makes pages easier for beginners to read.
*/
const getBookingById = (bookingId) => {
  const safeBookingId = String(bookingId || '').trim();
  const queryString = `?booking_id=${encodeURIComponent(safeBookingId)}`;

  return authenticatedRequest('users', `${API_ENDPOINTS.users.bookingDetail}${queryString}`, { method: 'GET' });
};
const getUserReviews = () => authenticatedRequest('users', API_ENDPOINTS.users.reviews, { method: 'GET' });
const updateUserProfile = (profileData) => authenticatedRequest('users', API_ENDPOINTS.users.profile, {
  method: 'PATCH',
  body: JSON.stringify(profileData),
});

// Backward-compatible aliases keep existing page behavior intact while the API grows.
const getBookings = () => getUserBookings();
const getReviews = () => getUserReviews();

// Expose one beginner-friendly global object that other scripts can use later.
window.TailorMarketplaceApi = {
  API_BASE_URLS,
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
  patchRequest,
  deleteRequest,
  authenticatedRequest,
  loginUser,
  signupUser,
  getCurrentUser,
  getTailors,
  getTailorById,
  getAppBookings,
  getAppReviews,
  createBooking,
  createTailor,
  updateTailor,
  deleteTailor,
  getUserBookings,
  getBookingById,
  getUserReviews,
  updateUserProfile,
  getBookings,
  getReviews,
};
