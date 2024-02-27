/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  },
};

module.exports = nextConfig;
