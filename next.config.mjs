import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://nextjs.org/docs/advanced-features/using-mdx#mdx-plugins
// https://github.com/vercel/next.js/discussions/36310
// https://mdxjs.com/guides/syntax-highlighting/
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
}

export default withMDX(nextConfig)
