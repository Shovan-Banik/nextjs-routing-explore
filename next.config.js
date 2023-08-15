/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['dummyjson.com', 'i.dummyjson.com'], // Add both domains here
    },
  };
  
  module.exports = nextConfig;
// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'i.dummyjson.com',
//           port: '',
//           pathname: '/productList/**',
//         },
//       ],
//     },
//   }