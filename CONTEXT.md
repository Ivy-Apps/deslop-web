# deslop-web

The source for [deslop.dev](https://deslop.dev), the landing page for
[Ivy-Apps/deslop](https://github.com/Ivy-Apps/deslop). The site is a thin front
door: it explains what Deslop is and sends the reader to the repo, which holds
the documentation. Anything the repo already says well, the site links to rather
than restates.

## Language

### The tool

**Deslop**:
A static analyzer for TypeScript that checks a project's import graph against
rules the project author writes. Not a linter replacement — it enforces
structure between modules, not style within them.
_Avoid_: linter, AI slop remover, guardrail engine

**Import graph**:
The graph formed by the `import` statements between a project's modules. This is
what Deslop walks, and it is not the package dependency graph — Deslop does not
analyze npm dependencies.
_Avoid_: dependency graph, code graph, dependency analysis

**Module**:
A node in the import graph, identified by the import path used to reach it
(`@/features/home/home-screen`) rather than by a path on disk. Site copy
introduces this once with a parenthetical, then uses the bare term.
_Avoid_: file, source file, unit

**Transitive**:
Reaching a module through a chain of imports rather than directly. Rules opt into
this with `transitive: true`; it is the capability single-file linters
structurally cannot have.
_Avoid_: indirect, multi-hop, deep

### The rules

**Rulebook**:
One YAML file under `deslop/rules/`, holding an id, a name, a description, and
many rules. A project has as many rulebooks as it wants; all are loaded.
_Avoid_: RuleBook, ruleset, config, policy file

**Rule**:
A single named check inside a rulebook: a `target` selecting which modules it
applies to, one or more clauses, and a `fix` message.
_Avoid_: check, constraint, policy

**Clause**:
The part of a rule that states the constraint — `forbids`, `allows`, `uses`, or
`exists`.
_Avoid_: directive, keyword, operator, predicate

**Target**:
The Glob+ pattern selecting which modules a rule applies to, optionally narrowed
by `exclude`.
_Avoid_: scope, selector, matcher

**Glob+**:
Deslop's glob syntax extended with casing variables such as `{{FileName}}` and
`{{TARGET_DIR}}`, which make a rule relative to whichever module it matched.
_Avoid_: glob patterns, templates, placeholders

### Results

**Violation**:
One instance of a rule being broken by one module. What `deslop check` reports.
_Avoid_: problem, error, issue, offense, finding

**Fix**:
The plain-language instruction attached to a rule, printed with every violation
of it. Distinct from `deslop fix`, which rewrites code automatically where it
can.
_Avoid_: remediation, guidance, hint

**Baseline**:
A `deslop/baseline.yaml` recording violations that exist today and are
deliberately not being fixed yet, so they stop being reported. For true
positives being deferred — false positives are handled by narrowing the rule's
`target` instead.
_Avoid_: ignore file, suppressions, allowlist

### The site

**Front door**:
The site's role: orient a reader in one screen and hand them to the repo. The
test for any proposed section is whether it helps someone decide to try Deslop —
not whether it is true or interesting.
_Avoid_: landing page, marketing site
