import nextMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
// module.exports = withMDX(nextConfig);
