/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL:process.env.API_URL,
        AUTH_SECRET: process.env.AUTH_SECRET,
        GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
        GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET 
    }
}

module.exports = nextConfig
