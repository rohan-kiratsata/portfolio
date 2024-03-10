import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { Url } from "url";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 {...props} className="mb-4 text-4xl font-bold font-sans" />
    ),
    h2: (props) => (
      <h2 {...props} className="mb-3 text-3xl font-bold font-sans" />
    ),
    h3: (props) => (
      <h3 {...props} className="mb-2 text-2xl font-bold font-sans" />
    ),
    h4: (props) => (
      <h4 {...props} className="mb-2 text-xl font-bold font-sans" />
    ),
    h5: (props) => (
      <h5 {...props} className="mb-1 text-lg font-bold font-sans" />
    ),
    h6: (props) => (
      <h6 {...props} className="mb-1 text-base font-bold font-sans" />
    ),
    p: (props) => (
      <p {...props} className="font-mono text-content1 mb-4 leading-relaxed" />
    ),
    strong: (props) => (
      <strong {...props} className="text-gray-200 font-bold" />
    ),
    blockquote: (props) => (
      <blockquote {...props} className="mb-4 italic border-l-4 pl-4" />
    ),
    ul: (props) => (
      <ul {...props} className="font-mono text-content1 mb-4 list-disc pl-4" />
    ),
    ol: (props) => (
      <ol
        {...props}
        className="font-mono text-content1 mb-4 list-decimal pl-4"
      />
    ),
    li: (props) => <li {...props} className="mb-2 font-mono text-content1" />,
    pre: (props) => <pre {...props} className="font-mono " />,
    // code: (props) => (
    //   <code {...props}  />
    // ),
    a: ({ href, ...props }) => {
      const isInternal = typeof href === "string" && href.startsWith("/");

      return isInternal ? (
        <Link href={href as unknown as Url} legacyBehavior>
          <a {...props} className="text-blue-500 hover:underline" />
        </Link>
      ) : (
        <a
          {...props}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-500 hover:underline"
        />
      );
    },
    // eslint-disable-next-line @next/next/no-img-element
    img: (props) => <img {...props} className="mb-4" alt="" />,
    ...components,
  };
}
