/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "i.ibb.co"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
