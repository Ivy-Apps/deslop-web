import type { NextConfig } from 'next';

const GITHUB_REPO = 'https://github.com/Ivy-Apps/deslop';
const GITHUB_LICENSE = `${GITHUB_REPO}/blob/main/LICENSE`;

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  async redirects() {
    return [
      { source: '/docs', destination: GITHUB_REPO, permanent: true },

      /*
       * The published CLI prints "Use implies agreement to deslop.dev/terms &
       * /privacy" on every run, so these paths must keep resolving even though
       * the pages are gone — the MIT licence is what governs use now. Drop
       * these once no released version still prints that banner.
       */
      { source: '/terms', destination: GITHUB_LICENSE, permanent: true },
      { source: '/terms/:path*', destination: GITHUB_LICENSE, permanent: true },
      { source: '/privacy', destination: GITHUB_LICENSE, permanent: true },
      {
        source: '/privacy/:path*',
        destination: GITHUB_LICENSE,
        permanent: true,
      },

      // Pages folded into the single landing page.
      { source: '/get-started', destination: '/', permanent: true },
      { source: '/contact', destination: GITHUB_REPO, permanent: true },
    ];
  },
  /*
   * No webpack override: it existed only to null-load `*.stories` files, and
   * Next 16 defaults to Turbopack, which errors on an unmigrated webpack config.
   * Stories are excluded from tsconfig and the `no-stories-in-prod` rule in
   * deslop/rules/quality.yaml enforces that shipping code never imports them,
   * so nothing pulls them into the bundle in the first place.
   */
};

export default nextConfig;
