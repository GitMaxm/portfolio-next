import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const BASE_EXTENSIONS = ['tsx', 'ts', 'jsx', 'js'];
const ADMIN_EXTENSIONS = ['admin.tsx', 'admin.ts'];

export default function nextConfig(phase) {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    output: isDev ? undefined : 'export',
    pageExtensions: isDev ? [...ADMIN_EXTENSIONS, ...BASE_EXTENSIONS] : BASE_EXTENSIONS,
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
}
