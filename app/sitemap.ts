import type { MetadataRoute } from 'next';
const routes = ['', '/about', '/services', '/projects', '/designs', '/standards', '/contact'];
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kaizerbrixconsults.com';
  return routes.map((route) => ({ url: base + route, changeFrequency: route === '' ? 'monthly' : 'yearly', priority: route === '' ? 1 : 0.7 }));
}
