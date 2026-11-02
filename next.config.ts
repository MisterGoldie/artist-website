import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Placeholder artwork ships as local SVG; the optimizer refuses SVG unless
  // this is enabled. Safe here because every file in public/art is our own.
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
