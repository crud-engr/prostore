import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tutunknuzlqbykoerjsj.supabase.co',
        port: '',
        pathname: '/**',
        // pathname: '/storage/v1/object/public/products/**',
      },
    ],
  },
};

export default nextConfig;
