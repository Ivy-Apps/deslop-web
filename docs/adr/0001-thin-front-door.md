# deslop.dev is a thin front door, not a docs site

Deslop's documentation lives in the `Ivy-Apps/deslop` repository — the README is
the DSL reference, and `examples/rules/` holds the worked rulebooks. deslop.dev
deliberately does not restate any of it. The site is a single page that orients a
reader in about one screen (what Deslop is, the four clauses, two real
violations, how to install it) and links out to the repo for everything else.

We chose this over hosting the documentation on the site, and over a longer
explainer page, because two copies of the same explanation drift apart and the
one on the website is always the stale one. The repo is where contributors
already work, so it is the copy that stays correct.

## Consequences

The test for any proposed section is whether it helps someone decide to try
Deslop — not whether it is true or interesting. Content that teaches the DSL in
depth belongs in the repo README, and a link, not a new section, is the correct
response to "the site should explain X".
