# llms.txt is the one document the site owns

deslop.dev serves `/llms.txt`: a complete Deslop reference - rulebook schema,
Glob+ semantics, every clause, module resolution, CLI behaviour, a rule cookbook
and the engine's sharp edges - written for coding agents rather than people.

This contradicts ADR-0001, which says the site restates none of the
documentation because two copies of an explanation drift apart and the website's
copy is always the stale one. The reasoning there is unchanged and still binds
the human-facing page. This is a deliberate exception for one file.

## Why the exception

Agents probe the domain, not the repository. `deslop.dev/llms.txt` is the
conventional location, and a link to a GitHub README is not a substitute: the
whole value of the file is that an agent given one URL needs nothing else in
order to write a correct rulebook.

Nor could the README have played this role. It is written to be read by a person
deciding whether to adopt Deslop, so it is deliberately short on the things an
agent needs and cannot infer: that `export ... from` is not an import edge, that
`extends` in a tsconfig aborts the run, that `deslop fix` never evaluates
rulebooks, that `deslop/rules/` must be flat, that a baseline must never be
hand-written. Documenting those in the README would make it worse at its own
job.

We also considered authoring the file in `Ivy-Apps/deslop` and fetching it at
build time. That removes the drift by construction, at the cost of making the
site build depend on a cross-repo network fetch. Rejected: a build that fails
when GitHub is slow is a worse problem than a doc that needs updating when the
DSL changes.

## Consequences

- The file states the Deslop version it describes. When that version is behind,
  the staleness is visible in the file rather than inferred from its contents.
- Its claims are established by running the CLI, not by reading the README. Each
  behaviour it documents was reproduced against `@ivy-apps/deslop` 0.8.1 with a
  fixture project.
- It documents *shipped* behaviour. Where a behaviour is a bug we intend to fix,
  the file stays silent rather than hardening the bug into contract - a doc that
  teaches a workaround outlives the workaround.
- ADR-0001 still governs the landing page. "The site should explain X" is still
  answered with a link; the answer for an agent-facing X is now llms.txt.
