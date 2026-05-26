import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://github.com/Ivy-Apps/deslop',
        permanent: true,
      },
      { source: '/terms', destination: '/terms/v1', permanent: true },
      { source: '/privacy', destination: '/privacy/v1', permanent: true },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.stories\.(ts|tsx|js|jsx)$/,
      loader: 'null-loader',
    });
    return config;
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
