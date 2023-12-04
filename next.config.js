const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'api.twitter.com',
      'cdn.discordapp.com',
      'id.twitch.tv',
      'static-cdn.jtvnw.net',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
  },
};

module.exports = withMDX(nextConfig);
