/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: 'https',
    hostname: 'teacher-blog-admin-dashboard.vercel.app',
   },
  ],
 },
};

export default nextConfig;
