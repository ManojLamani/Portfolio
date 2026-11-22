import process from 'node:process';

// GitHub Pages serves the site under /Portfolio/; Vercel and local dev serve from the root.
const basePath = process.env.GITHUB_PAGES === 'true' ? '/Portfolio' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: works on Vercel and on GitHub Pages (out/ folder).
  output: 'export',
  basePath,
  trailingSlash: true,
};

export default nextConfig;
