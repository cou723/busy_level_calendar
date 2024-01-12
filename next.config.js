/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  compiler: {
    emotion: true,
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
  experimental: {
    esmExternals: 'loose',
  },
};

module.exports = nextConfig;
