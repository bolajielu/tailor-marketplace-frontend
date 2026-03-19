const XANO_BASE_URL = 'https://your-xano-instance.xano.io/api:replace-me';

export async function getFromXano(endpoint) {
  const response = await fetch(`${XANO_BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Xano request failed: ${response.status}`);
  }

  return response.json();
}
