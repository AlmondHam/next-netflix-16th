const { redirect } = require('next/dist/server/api-utils');

/** @type {import('next').NextConfig} */
const API_KEY = 'aaf81bdfd64c8485a414ab01ef93d056';
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
