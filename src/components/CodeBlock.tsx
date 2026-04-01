type CodeBlockProps = {
  code: string;
  filename?: string;
  className?: string;
};

export default function CodeBlock({
  code,
  filename,
  className = "",
}: CodeBlockProps) {
  return (
    <div
      className={`bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden font-mono text-base ${className}`}
    >
      {filename && (
        <div className="bg-white/5 border-b border-white/10 px-4 py-2 flex items-center justify-between">
          <span className="text-zinc-400 text-sm font-medium">{filename}</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          </div>
        </div>
      )}
      <div className="p-5 overflow-x-auto">
        <pre className="text-zinc-200">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
