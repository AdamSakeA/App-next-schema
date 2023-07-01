/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  env: {
    IMGBB_API_KEY: "b2c5a25001e954f7a0165e9c73a85cca",
    BASE_URL: "https://app-next-schema.vercel.app/api/",
  },
  images: {
    domains: ["raw.githubusercontent.com", "i.ibb.co"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
