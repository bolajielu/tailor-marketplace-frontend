export function getRouteFromHash() {
  return window.location.hash.replace('#', '') || 'home';
}

export function navigateTo(route) {
  window.location.hash = route;
}
