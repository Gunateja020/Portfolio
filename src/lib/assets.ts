export function getAssetPath(path: string) {
  if (!path || path.startsWith('http')) return path;
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get base URL from Vite (e.g., '/Portfolio/')
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  try {
    // In the browser, we can use the current origin to construct a full URL
    const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost';
    
    // Construct the base URL for the assets
    // If baseUrl is relative (like './'), we resolve it against the current location
    const base = new URL(baseUrl, origin).href;
    
    // Resolve the asset path against the base
    return new URL(cleanPath, base).href;
  } catch (e) {
    // Fallback if URL constructor fails
    const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    return `${normalizedBase}${cleanPath}`;
  }
}
