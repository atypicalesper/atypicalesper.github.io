export const dynamic = 'force-static';

const BASE = 'https://atypicalesper.github.io';

export default function sitemap() {
  return [
    { url: `${BASE}/`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/work/`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/resume/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // /bonus is an intentional easter egg — kept out of the sitemap so it isn't indexed.
  ];
}
