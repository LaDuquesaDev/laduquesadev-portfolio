import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
