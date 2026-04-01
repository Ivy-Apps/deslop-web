import CodeBlock from '@/components/CodeBlock';
import { textPresets, typeScale } from '@/components/design-system/typography';

type BeforeAfterProps = {
  before: string;
  after: string;
  beforeFilename: string;
  afterFilename: string;
  title?: string;
};

export default function BeforeAfter({
  before,
  after,
  beforeFilename,
  afterFilename,
  title,
}: BeforeAfterProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h4 className={`${typeScale.labelCaps} text-zinc-400`}>{title}</h4>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span
              className={`${textPresets.codeSm} font-medium text-zinc-500 uppercase`}
            >
              Before AI Slop
            </span>
          </div>
          <CodeBlock code={before} filename={beforeFilename} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 px-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span
              className={`${textPresets.codeSm} font-medium text-zinc-500 uppercase`}
            >
              After Deslop
            </span>
          </div>
          <CodeBlock code={after} filename={afterFilename} />
        </div>
      </div>
    </div>
  );
}
