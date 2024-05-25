/** @type {import('next').NextConfig} */

const isProd = (process.env.NODE_ENV = "production");

const nextConfig = {
  basePath: isProd ? "/lokaly-website-deployement" : "",
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
