/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: generates a fully static site in /out that Cloudflare Pages
  // can serve with no server runtime.
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
