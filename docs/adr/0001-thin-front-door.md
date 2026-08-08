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

## Revision: the site teaches the mental model

The original wording — "a link, not a new section" — was too strong, and the
page had already outgrown it: "What it checks" showed clause fragments using
`{{TARGET_DIR}}` without ever having introduced `target`, so a reader met a
variable relative to something the page had not named. That is not thin, it is
incomplete.

The budget is now explicit. The site teaches the *mental model* and nothing
past it:

- how a rule selects modules — `target`, `exclude`, and
  `effective target = target − exclude`
- that patterns are Glob+, and that `{{FileName}}` and `{{TARGET_DIR}}` capture
  from the matched module
- the four clauses, one snippet each
- the two built-in checks, by id

Everything beyond that list — the full Glob+ semantics, rulebook structure,
baseline formats, the worked rulebooks — is still a link. The original reasoning
is unchanged and still binding: two copies of an explanation drift apart, and
the website's copy is always the stale one.

The test for a proposed addition becomes: can a reader understand the snippets
already on the page without it? If yes, it is documentation and belongs in the
README.
