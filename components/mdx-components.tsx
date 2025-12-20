import Image from 'next/image';

export const mdxComponents = {
  // 기본 HTML 요소에 스타일 적용
  h1: ({ children }: any) => (
    <h1 className="text-4xl font-bold mt-8 mb-6 text-foreground border-b pb-4">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">
      {children}
    </h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="text-xl font-semibold mt-4 mb-2 text-foreground">
      {children}
    </h4>
  ),
  p: ({ children }: any) => (
    <p className="text-base leading-relaxed mb-4 text-muted-foreground">
      {children}
    </p>
  ),
  ul: ({ children }: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">
      {children}
    </ul>
  ),
  ol: ({ children }: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }: any) => (
    <li className="ml-4">{children}</li>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-muted-foreground bg-muted/30 rounded-r">
      {children}
    </blockquote>
  ),
  code: ({ children }: any) => (
    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground">
      {children}
    </code>
  ),
  pre: ({ children }: any) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm border">
      {children}
    </pre>
  ),
  a: ({ href, children }: any) => (
    <a
      href={href}
      className="text-primary hover:underline font-medium"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  table: ({ children }: any) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-border border rounded-lg">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-muted">{children}</thead>
  ),
  tbody: ({ children }: any) => (
    <tbody className="divide-y divide-border bg-background">{children}</tbody>
  ),
  tr: ({ children }: any) => (
    <tr className="hover:bg-muted/50 transition-colors">{children}</tr>
  ),
  th: ({ children }: any) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="px-4 py-3 text-sm text-muted-foreground">{children}</td>
  ),
  hr: () => (
    <hr className="my-8 border-t border-border" />
  ),
  img: (props: any) => (
    <Image
      {...props}
      alt={props.alt || ''}
      width={800}
      height={600}
      className="rounded-lg my-6 w-full h-auto object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
    />
  ),
  strong: ({ children }: any) => (
    <strong className="font-bold text-foreground">{children}</strong>
  ),
  em: ({ children }: any) => (
    <em className="italic text-foreground">{children}</em>
  ),
};

