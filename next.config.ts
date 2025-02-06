import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output:"standalone",
    experimental:{
        serverActions:{
            allowedOrigins:["http://localhost:3001","*.catalystappsail.in:443"]
        }
    }
};

export default nextConfig;
