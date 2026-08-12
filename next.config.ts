import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Keep trailing slashes off so canonical URLs stay clean for SEO.
  trailingSlash: false,
};

export default nextConfig;
