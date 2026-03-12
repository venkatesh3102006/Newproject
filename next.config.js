/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://student-base-management-2.onrender.com/api',
  },
}

module.exports = nextConfig
