# Landing Page Rework — Implementation Plan

## Goal

Replace the current landing page sections entirely with a new narrative-driven blueprint
that better sells Deslop to engineering leaders and developers in the AI-assisted coding
era. The new page leads with pain (PR review tax, AI slop), builds the case for why
existing tools are insufficient, then positions Deslop as the inevitable solution.

---

## Source of Truth

- **Blueprint copy:** The markdown blueprint provided in the original prompt (8 sections +
  hero + bottom CTA).
- **Technical docs:** The `deslop` README pasted alongside the blueprint.
- **Pricing:** `src/features/landing/components/PricingSection.tsx` — keep the 4-tier
  structure (Free, Hobby €4.99, PRO €24.99, Ultra €249.99) plus Enterprise banner. Only
  update the section heading/sub-heading and add a "Manage Subscription" button at the
  bottom.
- **Design system:** `src/components/design-system/` — all new components must use
  `tw`, `typeScale`, `textPresets`, `GlowPrimaryButton`, `GlowSecondaryButton` from the
  design system. No ad-hoc Tailwind color values unless strictly required for a unique
  visual.

---

## URL & Constant Changes

### `src/lib/deslop.ts` — add three new exports

```ts
// Already exists:
export const CONTACT_EMAIL = 'deslop@ivy-apps.com';
export const GITHUB_NEW_ISSUE_URL = 'https://github.com/Ivy-Apps/deslop/issues/new/choose';

// Add:
export const GITHUB_DOCS_URL = 'https://github.com/Ivy-Apps/deslop';
export const GITHUB_EXAMPLES_URL = 'https://github.com/Ivy-Apps/deslop/tree/main/deslop/rules';
export const POLAR_MANAGE_URL = 'https://polar.sh/ivy-apps/portal';
```

The `POLAR_CHECKOUT_URL` stays in `src/lib/polar.ts` — no migration needed, keep
existing `PricingSection` imports working.

---

## File Inventory

### DELETE these files

| File | Reason |
|---|---|
| `src/features/landing/components/FeaturesSection.tsx` | Replaced by 5 new narrative sections |
| `src/features/landing/components/IntegrationSection.tsx` | Content absorbed into TechnicalDetailsSection |
| `src/features/landing/components/ErrorReportingSection.tsx` | Content absorbed into UnifiedDslSection and TechnicalDetailsSection |

### CREATE these new section components

| File | Blueprint section |
|---|---|
| `src/features/landing/components/PrTaxSection.tsx` | Section 1 — The Invisible PR Tax |
| `src/features/landing/components/AiFleetSection.tsx` | Section 2 — Built for the AI-Assisted Fleet |
| `src/features/landing/components/UnifiedDslSection.tsx` | Section 3 — One Unified DSL |
| `src/features/landing/components/TransitiveDefenseSection.tsx` | Section 4 — The Transitive Defense |
| `src/features/landing/components/CapabilityMatrixSection.tsx` | Section 5 — Capability Matrix |
| `src/features/landing/components/FaqSection.tsx` | Section 8 — FAQ Accordion |

### REWRITE these existing files

| File | What changes |
|---|---|
| `src/features/landing/LandingView.tsx` | New section order; remove deleted imports |
| `src/features/landing/components/HeroSection.tsx` | New badge, headline, sub-headline, CTA labels and targets |
| `src/components/HeroDemo.tsx` | Rework from single YAML pane to split-pane (bad import left, terminal right) |
| `src/features/landing/components/TechnicalDetailsSection.tsx` | Section id, minor copy tweaks; add "AI agent blind spot" sub-section from blueprint |
| `src/features/landing/components/PricingSection.tsx` | Updated heading/sub-heading; add "Manage Subscription" link at bottom |
| `src/features/landing/components/CtaSection.tsx` | New headline, copy, CTA labels per blueprint Section 10 |
| `src/features/landing/components/Navbar.tsx` | Updated 4 nav links |
| `src/components/Footer.tsx` | Remove Twitter; replace GitHub with Docs; add "Manage Subscription" link |

---

## New `LandingView` Section Order

```tsx
<div className={`${appText.shell} ${baseTw.bg.page}`}>
  <Navbar />
  <HeroSection />           {/* Above the fold */}
  <PrTaxSection />          {/* Section 1 */}
  <AiFleetSection />        {/* Section 2 */}
  <UnifiedDslSection />     {/* Section 3 */}
  <TransitiveDefenseSection /> {/* Section 4 */}
  <CapabilityMatrixSection /> {/* Section 5 */}
  <TechnicalDetailsSection /> {/* Section 6 */}
  <PricingSection />        {/* Section 7 */}
  <FaqSection />            {/* Section 8 */}
  <CtaSection />            {/* Bottom CTA */}
  <Footer />
</div>
```

---

## Detailed Section Specs

---

### Navbar (`src/features/landing/components/Navbar.tsx`)

**Keep:** all existing scroll/sticky logic, mobile hamburger, DeslopWordmark.

**Update nav links (desktop + mobile) to:**

| Label | href |
|---|---|
| The Problem | `#problem` |
| How it Works | `#how-it-works` |
| Pricing | `#pricing` |
| Docs | `GITHUB_DOCS_URL` (external, `target="_blank"`) |

**CTA button:** change label from `"Get Deslop"` to `"Get Started Free"`. On click,
navigate to `/get-started`. Both desktop button and mobile list item.

Do NOT add "Manage Subscription" to the Navbar.

---

### Hero Section (`src/features/landing/components/HeroSection.tsx`)

**Badge text:** `"Deterministic TypeScript guardrails for the AI era"`

**H1:**
```
Your AI writes code.
Deslop makes it good.
```
Keep the existing split-line gradient treatment (line 1 `lightText`, line 2 brand
gradient on "Deslop" + "good.").

**Sub-headline (replaces the current `<p>` lead):**
```
Stop playing architectural whack-a-mole in PR reviews. Enforce deterministic
TypeScript guardrails that both humans and AI agents understand — validated
in under 3 seconds.
```

**Primary CTA:** label `"Get Started Free"`, links to `/get-started`.
**Secondary CTA:** label `"Read the Docs"`, links to `GITHUB_DOCS_URL`, opens in new tab.

Remove the existing small print paragraph below the CTAs.

---

### HeroDemo (`src/components/HeroDemo.tsx`)

**Rework to a split-pane UI.** Replace the single YAML code panel with a two-column
layout inside the existing styled window chrome (traffic lights, border glow effects
stay the same).

**Left pane — "Bad import" code file:**
- Tab/filename: `@/domain/UserService.ts`
- Shows a TypeScript file with a problematic React import highlighted in red:

```ts
// UserService.ts — pure domain logic
import { useState } from 'react';       // violation
import { ReactNode } from 'react';      // violation

export function getUser(id: string) {
  const [user, setUser] = useState(null);
  // ...
}
```

Highlight the two `import ... from 'react'` lines with a subtle red left border
(`border-l-2 border-red-500/60`) and red text tint on the import string.

**Right pane — Terminal output of `deslop check .`:**
- Tab/label: `Terminal`
- Shows the violation report in Deslop's markdown output format:

```
> deslop check .

✗  domain-no-framework
   @/domain/UserService.ts

   imports react (transitive: true)

   FIX: Domain logic is plain TypeScript.
   Move any React imports to the UI layer.

──────────────────────────────────────
✔  Checked 412 modules in 2.1s
   1 violation found
```

Color the `✗` and violation lines in `text-red-400`. Color `✔ Checked ...` in
`text-emerald-400`. Color `FIX:` label in `text-[#3E99F5]`.

**Layout:** on mobile, stack vertically (left pane first, right pane below). On `md+`,
show side-by-side with a `1px` divider between them using `border-white/[0.08]`.

The existing glow border, backdrop blur, and bottom fade gradient stay unchanged.

---

### Section 1 — PrTaxSection (`src/features/landing/components/PrTaxSection.tsx`)

**Section id:** `problem`
**Background:** `bg-zinc-900` with `border-t border-white/5`

**Layout:** centered text block, max-width ~`max-w-3xl mx-auto`, no visual aside needed.

**Heading:**
```
If architecture enforcement is so easy,
why haven't you automated it yet?
```

**Sub-heading:**
```
Because custom-building architecture guardrails is an expensive infrastructure distraction.
```

**Body copy (blockquote-style card):**
Render as a styled card with a subtle left border accent (`border-l-4 border-[#3E99F5]/40`)
and `bg-white/[0.03]` background. The copy is:

> "Every engineering leader says the same thing: 'We can just write custom ESLint AST
> rules or map our boundaries in Dependency Cruiser.'
>
> But be honest: you haven't done it. Why? Because writing abstract syntax tree (AST)
> plugins is tedious, specialized work, and maintaining a massive wall of regex rules in
> JSON is a DevOps nightmare. Your team has product deadlines; they don't have time to
> build custom linting infrastructure from scratch.
>
> Instead, you pay an invisible tax. Your senior engineers waste hours every week in PR
> reviews playing 'human compiler'—flagging the exact same architectural leaks and
> boundary violations over and over again.
>
> Deslop ends the groundhog day of PR reviews. It gives you production-ready
> architectural guardrails out of the box, configured in 5 lines of human-readable
> YAML instead of days of custom code."

Use `typeScale.bodyLg` and `baseTw.text.secondary` for the body text.

---

### Section 2 — AiFleetSection (`src/features/landing/components/AiFleetSection.tsx`)

**Section id:** `ai-fleet`
**Background:** `bg-zinc-950` with `border-t border-white/5`

**Layout:** two-column on `lg+` — copy left, visual right. On mobile, stack.

**Heading:**
```
AI tools write code at 10x speed.
They also write slop at 10x speed.
```

**Sub-heading:**
```
How to keep your codebase clean when humans and AI agents collaborate.
```

**Body copy:**
> "Tools like Cursor, Copilot, and automated coding agents have transformed development
> velocity. An LLM can write a perfectly functioning feature in seconds that passes
> every unit test.
>
> But AI agents completely lack your team's tribal knowledge. They don't know your clean
> architecture boundaries, your feature isolation layers, or your Next.js conventions.
> They simply pull whatever import resolves the TypeScript type, silently introducing
> spaghetti code deep into your dependency graph.
>
> Line-by-line linters are completely blind to this. Deslop is different. It analyzes
> the **entire module dependency graph** instantly, ensuring that as your AI code
> generation scales, your architectural integrity remains unbroken."

**Visual (right column):** A styled three-row "flow" diagram showing:
```
AI Agent generates code
        ↓
Imports whatever resolves TypeScript
        ↓
Deslop catches the boundary violation
        in 2.1s
```
Each row is a small card with an icon: `Sparkles` (AI), `AlertTriangle` (import),
`ShieldCheck` (Deslop catch). Use lucide-react icons from the existing dependency.

---

### Section 3 — UnifiedDslSection (`src/features/landing/components/UnifiedDslSection.tsx`)

**Section id:** `unified-dsl`
**Background:** `bg-zinc-900` with `border-t border-white/5`

**Layout:** two-column on `lg+` — copy left, code block right. On mobile, stack.

**Heading:**
```
Stop duct-taping open-source plugins together.
```

**Sub-heading:**
```
A single, zero-maintenance declarative DSL for your entire macro-architecture.
```

**Body copy:**
> "To achieve comprehensive architecture governance today, teams end up wrestling with a
> fragile stack of 2 to 3 different open-source tools and third-party plugins. You need
> one plugin to forbid imports, a custom script to enforce that unit tests or Storybook
> components exist, and a third setup to check dependency boundaries. Every time ESLint
> updates or Node versions shift, your custom infrastructure breaks.
>
> Deslop replaces this maintenance nightmare with a single, unified declarative YAML DSL.
>
> In five lines of human-readable YAML, you get full coverage over import boundaries
> (`forbids`), exceptions (`allows`), mandatory module chains (`uses`), and companion
> file rules (`exists`). It's an entire architectural quality gate packaged into one
> lightweight tool that requires zero AST knowledge, zero regex, and zero ongoing
> DevOps overhead."

**Code block (right column):** Use the existing `CodeBlock` component with
`filename="deslop/rules/domain-integrity.yaml"` and this YAML:

```yaml
# deslop/rules/domain-integrity.yaml
id: domain-boundaries
name: Domain Layer Integrity
rules:
  - id: pure-domain-logic
    description: Pure domain logic must remain framework-agnostic.
    target: "@/domain/**"
    forbids:
      - import: "react"
        transitive: true # Catches sneaky indirect imports instantly
    fix: >
      Move UI or framework-specific code out of the domain layer.
      If you need state, pass primitive values or pure types.
```

This uses the existing `highlightCode` async helper (same pattern as `FeaturesSection`
and `ErrorReportingSection` — wrap in `Suspense` + `use()`).

---

### Section 4 — TransitiveDefenseSection (`src/features/landing/components/TransitiveDefenseSection.tsx`)

**Section id:** `transitive`
**Background:** `bg-zinc-950` with `border-t border-white/5`

**Layout:** centered text, max `max-w-3xl`, then a visual diagram below.

**Heading:**
```
The Transitive Security Gate Traditional Linters Can't Match.
```

**Sub-heading:**
```
Because checking direct imports is no longer enough to stop architectural rot.
```

**Body copy:**
> "Standard linters and basic FOSS tools are line-by-line static checkers. They only see
> direct imports. If you have a rule stating 'No React code inside the pure @/domain or
> @/lib utility layers,' a lazy engineer or a clever AI agent can easily bypass it.
>
> All they have to do is create an intermediate file — say, a generic helper in
> @/utils/ui-bridge.ts that imports React — and then import that helper into the domain
> layer. To a standard linter, the domain layer looks pristine because it's only
> importing from utils.
>
> Deslop stops this completely with **deep transitive reachability checks**. Because
> Deslop is powered by a native Haskell engine, it maps the entire dependency graph in
> under 3 seconds. When you mark an import as `transitive: true`, Deslop traces the
> entire tree. If a module reaches a forbidden dependency through 2, 5, or 10 layers of
> intermediate files, Deslop flags it instantly. It is an un-hackable containment shield
> for your codebase."

**Visual — "The Bypass Attempt" diagram:**
A horizontal chain of styled pill/badge nodes showing the import chain, with an arrow
between each:

```
@/domain/UserService  →  @/utils/ui-bridge  →  react
```

- `@/domain/UserService`: blue brand border
- `@/utils/ui-bridge`: yellow/amber border (the sneaky middleman)
- `react`: red border

Below the chain, a banner:
```
✔  Deslop detects: react reachable transitively (2 hops)
```
In `text-emerald-400` with a green background pill.

This is pure JSX, no external data fetching needed.

---

### Section 5 — CapabilityMatrixSection (`src/features/landing/components/CapabilityMatrixSection.tsx`)

**Section id:** `comparison`
**Background:** `bg-zinc-900` with `border-t border-white/5`

**Layout:** centered heading, then a full-width responsive table. On mobile, allow
horizontal scroll (`overflow-x-auto`).

**Heading:**
```
One Tool vs. A Fragile Ecosystem of Plugins
```

**Sub-heading:**
```
How Deslop compares to the tools your team is already using.
```

**Table data** (use the technical docs comparison, not the blueprint's sales table):

| Feature | Deslop | ESLint + plugin | Dependency Cruiser |
|---|---|---|---|
| Rule format | Declarative YAML | JS config objects | Regex-heavy JS/JSON |
| Forbid dependencies | `forbids` | Yes | `forbidden` |
| Allow exceptions | `allows` | Yes | `allowed` |
| Require a dependency | `uses` | No | `required` |
| Require companion files | `exists` | No | No |
| Transitive checks | Yes — `transitive: true` | No | Limited (`reachable`, path conditions only) |
| Named path variables | `{{FileName}}`, `{{TARGET_DIR}}` | No | No |
| AI-native fix output | Yes — structured markdown `fix` field | No | No |
| Dependency graph visualization | No | No | Yes |
| Typical rule length | ~5 lines of YAML | ~20–40 lines of JS | ~10–20 lines of regex |
| Engine | Haskell | JavaScript | JavaScript |

**Styling:**
- Table container: `rounded-2xl border border-white/10 overflow-hidden`
- Header row: `bg-white/[0.05]` background; the "Deslop" column header gets a brand
  gradient background pill `bg-gradient-to-r from-[#3E99F5]/15 to-[#5C3DF5]/15`
- Alternating row background: `even:bg-white/[0.02]`
- "Yes" values in Deslop column: `text-emerald-400 font-semibold`
- "No" values in other columns: `text-zinc-500`
- Deslop column cells get a subtle `bg-[#3E99F5]/[0.04]` tint to visually highlight it

**Below the table:** a small disclaimer paragraph (from the docs):
> Deslop is not a replacement for ESLint, Biome, or other linters — use those alongside
> it. Deslop focuses on a bigger-picture problem: enforcing the project architecture by
> analysing the entire module dependency graph, something line-by-line linters are not
> designed to do.

Use `typeScale.bodySm` and `baseTw.text.muted`.

---

### Section 6 — TechnicalDetailsSection (repurpose existing)

**File:** `src/features/landing/components/TechnicalDetailsSection.tsx`

**Section id:** keep `how-it-works`
**Background:** keep `bg-zinc-900 border-y border-white/5`

**Keep:** all existing `PipelineColumn` (CST → AST → Whole-Repo Graph), `HaskellBadge`.

**Update `TechnicalCopyColumn`:**

"Why Biome and ESLint aren't enough" — keep existing copy, no changes needed.

"The blind spot of AI coding agents" — **replace** the current paragraph (which mentions
MCP) with the blueprint version:

> "Modern AI harnesses like Cursor and Claude Code rely on RAG
> (Retrieval-Augmented Generation) to understand your repository. They chunk code
> based on text embeddings, which is inherently probabilistic and easily fragmented.
> Vector search frequently misses crucial edge cases, buried import chains, or implicit
> type dependencies, resulting in hallucinatory refactors.
>
> Deslop fixes this by feeding clear structural errors directly into the developer loop.
> When an agent violates a design rule, Deslop hands it back an explicit, high-context
> markdown summary of the failure. Instead of guessing based on vague code chunks, the
> agent can react to hard compiler diagnostics, ensuring AI-generated code perfectly
> aligns with your pipeline's exact architectural rules."

Remove the sentence about MCP / Model Context Protocol entirely.

---

### Section 7 — PricingSection (repurpose existing)

**File:** `src/features/landing/components/PricingSection.tsx`

**Keep:** all plan cards (Free, Hobby, PRO, Ultra), `EnterpriseBanner`, `TrialCallout`.
No price or feature changes.

**Update section heading:**
```
Free for local development. Insurance for your pipeline.
```

**Update section sub-heading:**
```
Why pay for Deslop when linters are free?
```

**Add a short persuasion paragraph** between the sub-heading and `TrialCallout`:

> "You don't pay for Deslop to format your code; you pay for Deslop to reclaim lost
> engineering hours. It pays for itself the very first time it stops a wayward AI agent
> or a rushed developer from shipping architectural debt to production."

Use `typeScale.bodyLg` and `baseTw.text.secondary`, centered, `max-w-2xl mx-auto`.

**Add "Manage Subscription" link at the bottom** — after `EnterpriseBanner`:

```tsx
<div className="mt-8 text-center">
  <a
    href={POLAR_MANAGE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors underline underline-offset-4"
  >
    Already a customer? Manage your subscription
  </a>
</div>
```

Import `POLAR_MANAGE_URL` from `@/lib/deslop`.

---

### Section 8 — FaqSection (`src/features/landing/components/FaqSection.tsx`)

**Section id:** `faq`
**Background:** `bg-zinc-950` with `border-t border-white/5`

**Layout:** centered heading, then a `max-w-3xl mx-auto` list of accordion items.

**Heading:**
```
Frequently Asked Questions
```

**Accordion behavior:**
- `'use client'` directive required (needs `useState`)
- Each item is collapsed by default
- Clicking the question row toggles the answer open/closed
- Use a `ChevronDown` icon from lucide-react, rotated `180deg` when open
  (`transition-transform duration-200`)
- No animation on the answer panel needed — simple `hidden` / `block` toggle is fine

**FAQ items (5 total):**

**Q1:** Why can't I just put my architecture rules in an `AGENTS.md` file?
**A1:** Because LLMs are fundamentally non-deterministic probabilistic models, not
compilers. You cannot prompt your way to a zero-trust architecture. When an AI agent
gets a large prompt, encounters a high token load, or is simply instructed to "make this
code compile and typecheck immediately," it will aggressively optimize for short-term
completion. For example, if your AGENTS.md says "Never import React or UI code inside
pure domain utilities," but the agent needs a layout object type to clear a TypeScript
compilation error, it will blindly pull `import { ReactNode } from "react"` straight
into the domain layer to pass the compiler block. The agent ignores the text markdown
rules file because clearing the local compiler is its immediate statistical success
metric. You don't combat non-deterministic shortcuts with prose instructions; you
combat them with a deterministic binary gate that catches the leak in 2 seconds flat.

**Q2:** Isn't Deslop just another linter? Why should I pay for something that should be free?
**A2:** Deslop is not a syntax linter — keep using ESLint or Biome for formatting,
types, and semicolons. Deslop is an architectural guardrail. Traditional linters look
at your code line-by-line in isolation. Deslop analyzes your entire module dependency
graph transitively. You aren't paying for code styling; you are paying to stop
architectural drift, eliminate hours of repetitive PR review cycles, and prevent AI
agents from turning your codebase into spaghetti.

**Q3:** Why can't I just have an AI agent write custom ESLint or Dependency Cruiser rules for me for free?
**A3:** LLMs can write complex regex and AST boilerplate, but they still have to
maintain it. If an AI writes a 50-line regex rule for Dependency Cruiser and it breaks
your build tool two months later because a folder was renamed, a human engineer still
has to spend hours debugging that opaque regex string. Furthermore, an AI cannot give an
alternative tool the ability to perform deep transitive analysis or enforce file
existence (`exists`). Deslop removes the complexity entirely, making rules maintainable
for both humans and AI.

**Q4:** We use Dependency Cruiser already. Why switch?
**A4:** Dependency Cruiser is a great tool for visualizing a graph, but it relies on
dense, regular expressions that are incredibly difficult to scale and maintain. More
importantly, it wasn't built for the AI era. Dependency Cruiser tells you that something
is broken, but it can't tell an AI agent how to fix it. Deslop's structured markdown
`fix` field allows coding agents to read the violation and instantly rewrite their own
code correctly without human intervention.

**Q5:** Does running a full graph analysis slow down our development loop or CI build?
**A5:** Quite the opposite. Because Deslop is compiled natively in Haskell, it bypasses
the performance bottlenecks of JavaScript-based tools. It parses and maps your entire
project's module architecture graph in 2 to 3 seconds flat, making it an unnoticeable
blip in your local pre-commit hooks or GitHub Actions pipeline.

**Item styling:**
- Border between items: `border-b border-white/[0.07]`
- Question row: `flex items-center justify-between py-5 cursor-pointer`
- Question text: `typeScale.titleMd` but `text-lg font-semibold` (slightly smaller than
  titleMd's `text-xl`)
- Answer text: `typeScale.bodyMd baseTw.text.secondary pb-5`

---

### Bottom CTA — CtaSection (repurpose existing)

**File:** `src/features/landing/components/CtaSection.tsx`

**Headline:**
```
Ready to audit your import graph?
It takes 3 seconds.
```

**Sub-copy:**
```
npx @ivy-apps/deslop check .
```
Render as a styled terminal snippet (dark card, monospace font, leading `$` prompt in
`text-zinc-500`).

**Button:**
- Primary: `"Read the Docs & View Examples"` → links to `GITHUB_DOCS_URL`, new tab
- Remove the "Request Team Access" secondary button

---

### Footer (`src/components/Footer.tsx`)

**Remove:** Twitter link entirely.
**Replace GitHub link** with:
```tsx
<a href={GITHUB_DOCS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
  Docs
</a>
```

**Add "Manage Subscription" link** in the footer link group:
```tsx
<a href={POLAR_MANAGE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
  Manage Subscription
</a>
```

Import both from `@/lib/deslop`.

---

## Implementation Order

Work in this order to keep the page in a buildable state at each step:

1. **`src/lib/deslop.ts`** — add the 3 new URL constants first so all new components
   can import them immediately.

2. **Delete** `FeaturesSection.tsx`, `IntegrationSection.tsx`,
   `ErrorReportingSection.tsx`.

3. **Update `LandingView.tsx`** — remove deleted imports; temporarily the page has only
   Hero + TechnicalDetails + Pricing + Cta. It should still build.

4. **`src/components/HeroDemo.tsx`** — rework to split-pane. Confirm it renders
   correctly in the hero before moving on.

5. **`src/features/landing/components/HeroSection.tsx`** — update copy and CTA targets.

6. **Create new sections one at a time**, adding each to `LandingView.tsx` immediately
   after creation so you can verify layout:
   - `PrTaxSection`
   - `AiFleetSection`
   - `UnifiedDslSection` (uses `highlightCode` — needs `Suspense`)
   - `TransitiveDefenseSection`
   - `CapabilityMatrixSection`
   - `FaqSection`

7. **`TechnicalDetailsSection.tsx`** — update AI agent blind spot copy.

8. **`PricingSection.tsx`** — update heading/sub-heading, add persuasion para, add
   "Manage Subscription" link.

9. **`CtaSection.tsx`** — update headline, terminal snippet, buttons.

10. **`Navbar.tsx`** — update 4 nav links and CTA button.

11. **`Footer.tsx`** — remove Twitter, add Docs, add Manage Subscription.

---

## Key Decisions & Constraints

- **No new dependencies.** All visuals use only Tailwind, lucide-react (already
  installed), and existing design-system tokens.
- **`FaqSection` must be `'use client'`** for accordion state. All other new sections
  are Server Components (no `'use client'`).
- **`UnifiedDslSection`** uses `highlightCode` which returns a Promise. Wrap in
  `Suspense` + `use()` the same way `FeaturesSection` and `ErrorReportingSection` did.
- **Preserve existing section `id` attributes** (`how-it-works`, `pricing`) so any
  existing inbound anchor links keep working.
- **Background alternation:** odd sections use `bg-zinc-900`, even sections use
  `bg-zinc-950` to create visual rhythm. The ordering is:
  - Hero: `bg-zinc-950`
  - PrTax: `bg-zinc-900`
  - AiFleet: `bg-zinc-950`
  - UnifiedDsl: `bg-zinc-900`
  - TransitiveDefense: `bg-zinc-950`
  - CapabilityMatrix: `bg-zinc-900`
  - TechnicalDetails: `bg-zinc-900` (keep existing)
  - Pricing: `bg-zinc-950` (keep existing)
  - Faq: `bg-zinc-950`
  - CtaSection: `bg-zinc-950` (keep existing)
- **Mobile-first.** All new sections must be fully readable on 375px width. Two-column
  layouts stack vertically on `< lg`.
- **`Github` import deprecation warning** in `FeaturesSection.tsx` is resolved by
  deleting that file. The `Github` icon in `IntegrationSection.tsx` is also deleted.
  If you need a GitHub icon anywhere new, use `import { Github } from 'lucide-react'` —
  the deprecation warning is cosmetic (the icon still renders correctly).
