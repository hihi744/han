import type { NextConfig } from "next";

// PREVIEW_EXPORT=1 builds a static copy (out/) used for the shareable preview;
// see tools/preview/README.md. Normal builds are unaffected.
const staticExport = process.env.PREVIEW_EXPORT === "1";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  ...(staticExport ? { output: "export" as const, images: { unoptimized: true } } : {}),
};

export default nextConfig;
