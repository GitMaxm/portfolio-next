/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', режим статической генерации
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Алиасы путей (@/*) берутся из jsconfig.json — Turbopack читает их сам
};

export default nextConfig;
