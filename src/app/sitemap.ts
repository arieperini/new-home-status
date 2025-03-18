import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://investment-portal.vercel.app';

  // Main pages
  const mainRoutes = [
    '',
    '/acoes',
    '/fiis',
    '/bdrs',
    '/tesouro-direto',
    '/fundos',
    '/criptomoedas',
    '/comparador',
    '/sobre',
    '/contato',
    '/termos',
    '/privacidade',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [
    ...mainRoutes,
  ];
}
