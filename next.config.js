const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'api.twitter.com',
      'cdn.discordapp.com',
      'id.twitch.tv',
      'static-cdn.jtvnw.net',
    ],
  },
};

module.exports = withMDX(nextConfig);
