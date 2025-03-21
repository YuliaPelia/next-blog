/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js"

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      images: {
        domains: ['res.cloudinary.com', 'res-console.cloudinary.com'],
      },
      env: {
        mongodb_username: 'Yulia109',
        mongodb_password: 'SGcXrHt5rtWLTmk',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      }
    }

  }
  return {
    reactStrictMode: true,
    images: {
      domains: ['res.cloudinary.com', 'res-console.cloudinary.com'],
    },
  }
}
export default nextConfig; 