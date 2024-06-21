/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dnd5eapi.co',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
