import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Pin the workspace root to this project so Next doesn't pick a stray
  // parent-directory lockfile (e.g. ~/package-lock.json).
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
  // TEMP DIAGNOSTIC — bundles dev React so the live hydration error shows
  // real component names/content instead of a minified code. Revert after
  // reading the console error on the redeployed site.
  experimental: {
    allowDevelopmentBuild: true,
  },
};

export default nextConfig;
