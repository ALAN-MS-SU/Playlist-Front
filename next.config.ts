import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     // async rewrites() {
     //     return [
     //         {
     //             source: "/api/:path*",
     //             destination: process.env.NEXT_PUBLIC_API_URL!+"/:path*",
     //         },
     //     ];
     // }
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com",
               // port: "3000",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
