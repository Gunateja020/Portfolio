export function getAssetPath(path: string) {
  if (!path || path.startsWith('http')) return path;
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Use Vite's built-in BASE_URL which we set to '/Portfolio/' in vite.config.ts
  // This ensures paths are correct in both dev ('/') and prod ('/Portfolio/')
  const baseUrl = import.meta.env.BASE_URL || '/';
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  return `${normalizedBase}${cleanPath}`;
}
