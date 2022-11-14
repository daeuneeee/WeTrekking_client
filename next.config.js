/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
          disable: process.env.NODE_ENV === "development",
          register: true,
          scope: "/app",
          sw: "server.js",
        },
      },
    ],
    // 추가 플러그인 작성
  ],
  nextConfig
);
