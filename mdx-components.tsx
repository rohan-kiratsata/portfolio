import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="mb-4 text-4xl font-bold" />,
    h2: (props) => <h2 {...props} className="mb-3 text-3xl font-bold" />,
    h3: (props) => <h3 {...props} className="mb-2 text-2xl font-bold" />,
    h4: (props) => <h4 {...props} className="mb-2 text-xl font-bold" />,
    h5: (props) => <h5 {...props} className="mb-1 text-lg font-bold" />,
    h6: (props) => <h6 {...props} className="mb-1 text-base font-bold" />,
    p: (props) => (
      <p {...props} className="font-mono text-content1 mb-4 leading-relaxed" />
    ),
    blockquote: (props) => (
      <blockquote {...props} className="mb-4 italic border-l-4 pl-4" />
    ),
    ul: (props) => <ul {...props} className="mb-4 list-disc pl-4" />,
    ol: (props) => <ol {...props} className="mb-4 list-decimal pl-4" />,
    li: (props) => <li {...props} className="mb-2" />,
    pre: (props) => <pre {...props} className="font-mono " />,
    // code: (props) => (
    //   <code {...props}  />
    // ),
    a: (props) => <a {...props} className="text-blue-500 hover:underline" />,
    // eslint-disable-next-line @next/next/no-img-element
    img: (props) => <img {...props} className="mb-4" alt="" />,
    ...components,
  };
}
