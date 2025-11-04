/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable Next.js image optimization (set to false previously)
    unoptimized: false,
    // Allow loading images from the production domain and common hosts
    domains: [
      'accordmedical.co.ke',
      'www.accordmedical.co.ke',
      'images.unsplash.com',
    ],
  },
}

export default nextConfig
