export function getAssetPath(path: string) {
  if (!path || path.startsWith('http')) return path;
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Hardcoding the repository name is the most reliable way to fix
  // the "white page" / 404 issue on GitHub Pages.
  const isProduction = import.meta.env.PROD;
  const base = isProduction ? '/Portfolio/' : '/';
  
  return `${base}${cleanPath}`;
}
