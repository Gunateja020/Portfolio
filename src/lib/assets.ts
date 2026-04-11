export function getAssetPath(path: string) {
  if (path.startsWith('http')) return path;
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // For GitHub Pages with base: './', we can just use the relative path
  // In development, BASE_URL is '/'
  // In production with base: './', BASE_URL is './'
  const baseUrl = import.meta.env.BASE_URL;
  
  if (baseUrl === './') {
    return `./${cleanPath}`;
  }
  
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${normalizedBase}${cleanPath}`;
}
