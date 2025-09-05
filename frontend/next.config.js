/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dvl2r3bdw/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
