import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', режим статической генерации
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(process.cwd(), 'src'),
            '@components': path.resolve(process.cwd(), 'src/components'),
        };
        return config;
    },
};

export default nextConfig;
