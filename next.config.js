const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['github.com', 'lh3.googleusercontent.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'avatars.githubusercontent.com',
    //     port: '',
    //     pathname: '/u/**',
    //   },
    // ],
  },
};

module.exports = withMDX(nextConfig);
