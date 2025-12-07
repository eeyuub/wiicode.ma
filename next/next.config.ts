import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://linktr.ee/dadacuisine?utm_source=wiicode.ma',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
