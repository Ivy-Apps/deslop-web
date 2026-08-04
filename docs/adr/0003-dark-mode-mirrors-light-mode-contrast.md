# Dark mode targets light mode's contrast ratios, not the highest available

Dark mode used to sit on `#09090B` — effectively black — and was *higher*
contrast than light mode at every tier: body copy ran at 13.46:1 against light's
7.73:1. That combination is what made it tiring to read, so the fix was to lift
the background to `#18181B` and bring each text tier down to the ratio its light
counterpart already has, rather than up. Light mode is unchanged; it was the
reference, not the problem.

## The ladder

Page `#18181B` (zinc-900), raised surface `#27272A` (zinc-800), hover `#313134`.
Surfaces are opaque rather than translucent overlays, because an overlay
composites differently depending on what it lands on, so the token stops telling
you its own contrast. Surfaces are *raised* rather than recessed because code
blocks and terminal output cover most of this page — recessing them would put
near-black straight back under the majority of the viewport.

Hover is a custom value rather than zinc-700. Contrast ratios compress at low
luminance, so equal steps along the zinc ramp are not equal steps: zinc-700 is a
1.70 jump off the page where light mode's hover moves only 1.10. `#313134` gives
1.37 — still an obvious affordance, without flashing a grey slab. Borders carry
most of the separation, which lets the surfaces themselves stay quiet.

## Measured ratios

| Role | Light | Dark before | Dark now |
| --- | --- | --- | --- |
| primary | 17.72 | 19.06 | 13.96 page / 11.74 surface |
| secondary (body copy) | 7.73 | 13.46 | 6.91 / 5.81 |
| muted | 4.83 | 7.76 | 5.44 / 4.57 |

`muted` is tuned against the surface rather than the page, because it renders on
the code-block filename strip and the terminal caption. Tuning it to light's
4.83 on the page would have left it at 4.06 there — below AA.

## Consequences

**Do not brighten these values.** The reduced contrast is the point. A future
reader comparing against git history will see body copy drop by half and read it
as a regression; it is the fix.

Two exceptions were left alone deliberately. The ANSI palette in
`TerminalOutput` stays at `-400`/`-300`, the only rung where all six hues clear
AA on the new surface — one step dimmer fails red, blue and fuchsia. It
therefore reads brighter than the prose around it, which is correct for verbatim
CLI output. And Shiki keeps `github-dark`, whose native background is `#24292e`
— close enough to the new code surface that it now runs nearer its design intent
than it did on black.
