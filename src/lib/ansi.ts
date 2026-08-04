/**
 * Minimal ANSI SGR parser — enough to render `deslop check` output as the
 * terminal shows it.
 *
 * Only the escape sequences Deslop actually emits are handled: 30–37 and
 * 90–97 for foreground colour, 1 for bold, and 0 to reset. Anything else is
 * dropped rather than rendered as literal garbage, so an unrecognised sequence
 * degrades to plain text instead of leaking `[38;5;204m` onto the page.
 */

/**
 * ESC [ <params> m
 *
 * The ESC control character is the point of this module, not an accident — an
 * SGR sequence is defined as starting with 0x1B, so there is nothing to match
 * without it.
 */
// biome-ignore lint/suspicious/noControlCharactersInRegex: ESC (0x1B) is what an ANSI escape sequence is made of
const SGR_PATTERN = /\x1b\[([0-9;]*)m/g;

export type AnsiColor =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white';

export type AnsiSegment = {
  text: string;
  /** Character index of `text` within the original string. Stable render key. */
  offset: number;
  color?: AnsiColor;
  /** ANSI's "bright" variants (90–97), rendered as a lighter shade. */
  bright?: boolean;
  bold?: boolean;
};

const COLORS: AnsiColor[] = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
];

type Style = Omit<AnsiSegment, 'text' | 'offset'>;

function applyCode(style: Style, code: number): Style {
  if (code === 0) return {};
  if (code === 1) return { ...style, bold: true };
  if (code === 22) return { ...style, bold: false };
  if (code === 39) return { ...style, color: undefined, bright: false };
  if (code >= 30 && code <= 37) {
    return { ...style, color: COLORS[code - 30], bright: false };
  }
  if (code >= 90 && code <= 97) {
    return { ...style, color: COLORS[code - 90], bright: true };
  }
  // Backgrounds, underlines, 256-colour and truecolour sequences: ignored.
  return style;
}

/**
 * Splits ANSI-coded text into styled segments. Text with no escape codes comes
 * back as a single unstyled segment, so this is safe to run on plain output.
 */
export function parseAnsi(input: string): AnsiSegment[] {
  const segments: AnsiSegment[] = [];
  let style: Style = {};
  let cursor = 0;

  SGR_PATTERN.lastIndex = 0;
  let match = SGR_PATTERN.exec(input);

  while (match !== null) {
    if (match.index > cursor) {
      segments.push({
        ...style,
        text: input.slice(cursor, match.index),
        offset: cursor,
      });
    }

    // An empty parameter list (ESC[m) means reset, same as ESC[0m.
    const codes = match[1] === '' ? [0] : match[1].split(';').map(Number);
    for (const code of codes) {
      style = applyCode(style, code);
    }

    cursor = match.index + match[0].length;
    match = SGR_PATTERN.exec(input);
  }

  if (cursor < input.length) {
    segments.push({ ...style, text: input.slice(cursor), offset: cursor });
  }

  return segments;
}
