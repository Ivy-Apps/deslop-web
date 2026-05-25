import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-white mb-8 mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-bold text-white mb-4 mt-10">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-zinc-100 mb-3 mt-8">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-base font-semibold text-zinc-200 mb-2 mt-6">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-zinc-400 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-zinc-400 space-y-2 mb-4 pl-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-zinc-400 space-y-2 mb-4 pl-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-zinc-400 leading-relaxed">{children}</li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-zinc-200">{children}</strong>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-white underline underline-offset-2 hover:text-zinc-300 transition-colors"
      >
        {children}
      </a>
    ),
    hr: () => <hr className="border-white/10 my-8" />,
    ...components,
  };
}
