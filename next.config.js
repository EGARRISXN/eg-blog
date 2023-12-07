const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'pbs.twimg.com',
      'cdn.discordapp.com',
    ],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'lh3.googleusercontent.com',
    //     port: '',
    //     pathname: '/a/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'avatars.githubusercontent.com',
    //     port: '',
    //     pathname: '/u/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.discordapp.com',
    //     port: '',
    //     pathname: '/avatars/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'pbs.twimg.com',
    //     port: '',
    //     pathname: '/profile_images/**',
    //   },
    // ],
  },
};

module.exports = withMDX(nextConfig);
