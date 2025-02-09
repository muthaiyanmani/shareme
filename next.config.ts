import type { NextConfig } from "next";

const { APP_URL } = process.env;
const appUrls = APP_URL ? APP_URL?.split(',').map((url) => url.trim()) : [];

const nextConfig: NextConfig = {
    output:"standalone",
    experimental:{
        serverActions:{
            allowedOrigins:[...appUrls]
        }
    }
};

export default nextConfig;
