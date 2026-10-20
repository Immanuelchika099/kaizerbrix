import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  const routes = ['', '/about', '/services', '/projects', '/designs', '/standards', '/contact'];
  return routes.map((route) => ({ url: new URL(route, siteUrl).toString(), changeFrequency: route === '' ? 'monthly' : 'yearly', priority: route === '' ? 1 : 0.7 }));
}
