/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: generates a fully static site in /out for Cloudflare Pages.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
