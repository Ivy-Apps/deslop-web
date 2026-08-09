import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

/**
 * The social card, rendered at build time by Satori.
 *
 * It is generated rather than a committed PNG so a change to it is diffable in
 * a PR and can never quietly fall out of date behind the page it advertises.
 *
 * The colours below are restated as hex instead of coming from `tw.*` because
 * Satori has no Tailwind - it takes inline styles only. See
 * docs/adr/0006-the-social-card-is-generated-not-a-screenshot.md.
 */

export const alt =
  'Deslop: a static import-graph analyzer for TypeScript. A terminal shows deslop check reporting that @/features/home/data/bad-repository transitively imports react via home-screen.';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * The ADR 0003 ladder, restated because Satori cannot read Tailwind classes.
 * These must track `palette` and `tw` in @/components/design-system/colors -
 * changing one without the other is how the card starts lying about the site.
 */
const color = {
  page: '#18181B',
  surface: '#27272A',
  border: '#3F3F46',
  /**
   * Pure white, brighter than the site's `zinc-200`. A deliberate exception to
   * ADR 0003's "do not brighten these values" - that ruling is about fatigue
   * when reading long-form copy, and this is two seconds of glancing at a
   * thumbnail in a feed competing for attention. Argued in ADR 0006.
   */
  primary: '#FFFFFF',
  muted: '#8E8E94',
  /**
   * `palette.link.dark`. This is the site's dark-mode link colour, not the
   * brand pair - so the domain reading as a link does not break the rule in
   * `colors.tsx` that the blue/purple pair belongs to the logo mark alone.
   */
  link: '#3E99F5',
  /** ANSI red at the -400 rung ADR 0003 pins for verbatim CLI output. */
  violation: '#F87171',
} as const;

/**
 * Verbatim `deslop check` output, taken from the `transitiveOutput` sample in
 * @/features/landing/components/example-output.json.
 *
 * Two of that sample's five blocks. The rule description, the offending import
 * snippet and the FIX paragraph are dropped: the full output is roughly 800
 * characters, and a social card is viewed at about 0.42x in a feed, so all five
 * blocks only fit at a size where the whole thing reads as texture rather than
 * text. What survives is the pair a reader cannot infer - which rule fired, and
 * the chain of imports that broke it.
 *
 * Spelled out rather than sliced out of the JSON on purpose. The card's copy is
 * short because the card is small, which is a constraint the page does not
 * share, so these are not two copies of one string that must be kept in step.
 * Slicing by block index would tie this layout to the sample's paragraph
 * structure and change the card silently when the page's example is edited.
 *
 * Nothing here is reworded. Whole blocks are omitted; the characters that
 * remain are the characters the CLI prints.
 */
const VIOLATION_HEADER =
  '# architecture#no-react-in-data#@/features/home/data/bad-repository';

const VIOLATION_BODY =
  "Module '@/features/home/data/bad-repository' transitively imports 'react' via: @/features/home/data/bad-repository → @/features/home/home-screen → react.";

const COMMAND = '$ npx @ivy-apps/deslop check .';

/**
 * `break-word` rather than `break-all`: the header is one unbroken 80-character
 * token that has to wrap somewhere, but the sentence below it has spaces and
 * should still break at them.
 */
const terminalLine = {
  fontSize: 24,
  lineHeight: 1.5,
  wordBreak: 'break-word',
} as const;

async function font(weight: 'Regular' | 'Bold'): Promise<Buffer> {
  return readFile(
    join(process.cwd(), `src/app/fonts/JetBrainsMono-${weight}.ttf`)
  );
}

export default async function OpengraphImage(): Promise<ImageResponse> {
  const [regular, bold] = await Promise.all([font('Regular'), font('Bold')]);

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: '48px 56px',
        backgroundColor: color.page,
        fontFamily: 'JetBrains Mono',
        color: color.primary,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        {/*
          The one place the brand pair is allowed, exactly as on the site. A
          white glyph on the gradient is the only treatment that reads the same
          whatever the card lands on.
        */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 78,
            height: 78,
            borderRadius: 18,
            backgroundImage: `linear-gradient(135deg, #3E99F5, #5C3DF5)`,
            color: '#FFFFFF',
            fontSize: 46,
            fontWeight: 700,
          }}
        >
          δ
        </div>
        <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: -1 }}>
          Deslop
        </div>
      </div>

      {/*
        The definition, not the claim. The claim is carried by `openGraph.title`
        in the layout, which every unfurl renders beside this image - saying the
        same sentence in both would waste half the card.

        White and full strength: this is the line that has to survive being
        scaled to 42% in a feed, so it is the last thing that should be dimmed.
      */}
      <div
        style={{
          marginTop: 26,
          fontSize: 26,
          lineHeight: 1.4,
          color: color.primary,
        }}
      >
        Static import-graph analyzer for TypeScript. You write architecture
        rules in YAML; Deslop checks them on every run.
      </div>

      {/*
        Command and result in one frame. A command floating on its own says the
        tool exists; a command with its output says the tool works.
      */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 32,
          padding: '26px 28px',
          borderRadius: 14,
          border: `1px solid ${color.border}`,
          backgroundColor: color.surface,
        }}
      >
        <div style={{ ...terminalLine, color: color.muted }}>{COMMAND}</div>
        <div style={{ ...terminalLine, marginTop: 20, color: color.violation }}>
          {VIOLATION_HEADER}
        </div>
        <div style={{ ...terminalLine, marginTop: 14, color: color.violation }}>
          {VIOLATION_BODY}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 'auto',
          fontSize: 21,
          color: color.muted,
        }}
      >
        <div>MIT licensed · free · no account</div>
        {/* Blue because it is the one thing on the card a reader is meant to
            act on. Muted grey put it level with the licence strip beside it. */}
        <div style={{ color: color.link }}>deslop.dev</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'JetBrains Mono', data: regular, weight: 400, style: 'normal' },
        { name: 'JetBrains Mono', data: bold, weight: 700, style: 'normal' },
      ],
    }
  );
}
