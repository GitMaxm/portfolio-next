import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const BASE_EXTENSIONS = ['tsx', 'ts', 'jsx', 'js'];
const ADMIN_EXTENSIONS = ['admin.tsx', 'admin.ts'];

export default function nextConfig(phase) {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    output: isDev ? undefined : 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
    pageExtensions: isDev ? [...ADMIN_EXTENSIONS, ...BASE_EXTENSIONS] : BASE_EXTENSIONS,
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
}
