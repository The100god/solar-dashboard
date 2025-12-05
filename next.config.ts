import type { NextConfig } from "next";
import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,

  // If you still have experimental, keep only valid keys
  typedRoutes: true,
  // experimental: {
  //   // optimizePackageImports: ["lucide-react"],
  // },

  // 👇 This line silences that Turbopack warning
  turbopack: {},
};

export default withPWA(nextConfig);
