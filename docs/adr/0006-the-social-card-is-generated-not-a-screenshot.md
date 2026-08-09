# The social card is generated from code, not a committed screenshot

An unfurled link is the first screen most people ever see of Deslop, so the card
has to argue the tool rather than just name it. We render it at build time from
`src/app/opengraph-image.tsx` via `next/og`, instead of committing a PNG made in
a design tool, because a generated card is diffable in review and regenerates on
every build - a committed image drifts silently the first time the tagline or
the brand changes, and nobody remembers it exists.

## What the card says, and what it leaves out

The card carries the definition - what Deslop is, and that you write the rules
in YAML - and one real violation: the transitive React rule, which is the check
a single-file linter structurally cannot perform. The claim goes in
`openGraph.title` instead of on the image, because every unfurl renders that
title directly beside the card - putting the definition in both spends the whole
unfurl on one sentence.

The violation is verbatim within each block, but only two of the five blocks the
CLI prints survive: the rule header and the import chain. The full output is
roughly 800 characters, and a 1200x630 card is displayed at about 0.42x in a
feed, so all five blocks only fit at a size where the whole thing reads as
texture rather than text. Blocks are omitted; nothing is reworded. Where text
does not fit on a line it wraps rather than truncating, which is how
`TerminalOutput` renders CLI output on the site itself.

## The card is higher contrast than the site, on purpose

The definition is pure white, not the `zinc-200` the site uses for its brightest
text, and it sits directly on the page colour at 15.9:1. ADR 0003 says in terms
that brightening these values is a regression rather than a fix, so this is an
explicit exception to it and not an oversight.

The reasoning in ADR 0003 is about fatigue: dark mode used to out-contrast light
mode at every tier, and reading long-form copy at 13.46:1 was tiring. None of
that applies here. Nobody reads a social card. It is glanced at for about two
seconds, at roughly 42% of its rendered size, in a feed full of things competing
for the same glance, and it gets exactly one chance. The tier that must survive
that is the definition, so it is the one thing on the card that is never dimmed.
Everything the site's ladder governs - the terminal surface, the border, the
muted licence strip, the ANSI red - is unchanged.

`deslop.dev` is set in `palette.link.dark`, the site's dark-mode link colour.
That is not the brand pair escaping the logo mark: it is the site's own rule
that links are blue, applied to the one thing on the card a reader is meant to
act on.

## Three things that look wrong on purpose

**The card is entirely monospace**, where the site sets prose in the system sans
stack. The site has no canonical wordmark font - `typography.tsx` is a system
stack, so "Deslop" already renders in SF Pro on a Mac and Segoe on Windows - so
the card was never matching a fixed face. Setting the whole card in JetBrains
Mono makes it read as one terminal, which is what the tool is, and means the
delta glyph comes from a real font: Geist, the only face `next/og` bundles, has
no Greek coverage, so any sans pairing would have forced a hand-authored SVG
outline for the mark.

**Colours are restated as hex** rather than coming from `tw.*`. Satori has no
Tailwind; it takes inline styles only. The values track the ADR 0003 ladder and
must be changed in both places together.

**The violation text is spelled out here** rather than read from the
`transitiveOutput` sample in `example-output.json`. This is not the duplication
ADR 0001 warns about, because the two are not copies of one thing: the page
renders the whole sample, and the card renders a deliberately shortened
selection from it. The card has a hard size budget the page does not, so its
copy has to be short, and short is a property of the card rather than of the
sample.

Deriving the card's text by importing the JSON and slicing blocks by index would
tie the card's layout to the sample's paragraph structure, so an edit to the
page's example could silently change which blocks the card shows. Spelling the
two blocks out keeps each artifact free to change on its own terms, with a
comment pointing at where they came from.

## Consequences

Fonts are vendored to `src/app/fonts/`, subset to Latin plus the handful of
extra glyphs the card needs, which takes JetBrains Mono from 274KB to 17KB per
weight. Satori cannot read WOFF2, so these stay TTF. They are never served to a
browser: Node reads them at build time and rasterises them into the PNG.

**The fonts are SIL OFL 1.1, and the rest of this repo is not.** OFL condition 5
requires the Font Software to stay under OFL and forbids relicensing it, so if a
root `LICENSE` is ever added here it needs an explicit carve-out saying
`src/app/fonts/` is OFL 1.1 rather than whatever covers the source. `OFL.txt`
ships beside the fonts to satisfy condition 2, which requires the notice and
licence to accompany every copy; the fonts' own `copyright`, `licenseDescription`
and `licenseURL` name records survived subsetting and carry it a second time.

Subsetting makes these a Modified Version under the OFL, which would normally
forbid keeping the original name - but JetBrains Mono declares no Reserved Font
Name, so `family = JetBrains Mono` is retained legitimately. Swapping in a font
that does reserve its name would mean renaming the files. The rendered PNG is a
document created with the font, which the OFL explicitly leaves unencumbered.

Colour values here must be changed together with `@/components/design-system/colors`.
Nothing enforces that.
