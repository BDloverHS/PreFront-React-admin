import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
