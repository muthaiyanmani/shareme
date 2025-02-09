import type { NextConfig } from "next";

const { APP_URL } = process.env;
const nextConfig: NextConfig = {
    output:"standalone",
    experimental:{
        serverActions:{
            allowedOrigins:[APP_URL!]
        }
    }
};

export default nextConfig;
