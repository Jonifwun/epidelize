/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'www.pharmaexcipients.com',
      'firebasestorage.googleapis.com',
      'www.andersonmaterials.com'
    ]
  }
}

module.exports = nextConfig
