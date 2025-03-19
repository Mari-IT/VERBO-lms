/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       remotePatterns: [
        {
           protocol: "https",
           hostname: "images.pexels.com",
           port: "",
           pathname: "/**"
        }
       ] 
    },
    eslint: {
      ignoreDuringBuilds: true, // Ігнорувати ESLint при білді
    },
}

module.exports = nextConfig;