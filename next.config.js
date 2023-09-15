/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['gamingtrend.com', 'images.pushsquare.com', 'blog.playstation.com', 'media.cnn.com', 'cdn.mos.cms.futurecdn.net', 'cdn-ext.fanatical.com', ''],

  },
  
}

module.exports = nextConfig;
