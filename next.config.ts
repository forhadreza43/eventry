import type { NextConfig } from "next";
// import withPlaiceholder from "@plaiceholder/next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
// export default withPlaiceholder(nextConfig);