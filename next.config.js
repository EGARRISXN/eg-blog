const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    // domains: [
    //   'lh3.googleusercontent.com',
    //   'avatars.githubusercontent.com',
    //   'cdn.discordapp.com',
    //   'pbs.twimg.com',
    //   'static-cdn.jtvnw.net',
    // ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        port: '',
        pathname: '/profile_images/**',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'static-cdn.jtvnw.net',
      //   port: '',
      //   pathname: '/jtv_user_pictures/**',
      // },
    ],
  },
};

module.exports = withMDX(nextConfig);
