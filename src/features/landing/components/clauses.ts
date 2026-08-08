/**
 * The content of the "Your rules" block: one whole rule, then the four clauses
 * it can carry. Showing a complete rule first is what makes the clause snippets
 * below readable — on their own they are fragments with no `target`, and a
 * reader who has not seen `target` cannot tell what `{{TARGET_DIR}}` is
 * relative to.
 *
 * Kept beside ChecksSection rather than in a shared module because the
 * `features-isolated` rule only permits imports from within the same directory.
 */

/**
 * Every part of a rulebook in one sample: the file's own header, then what a
 * rule selects, what it removes from that selection, the constraint, and the
 * message a violation prints. The inline comments carry the explanation so the
 * prose around it does not have to repeat the snippet in words.
 *
 * The four header lines are not decoration. A rulebook file is rejected without
 * them, so a reader who copies this into `deslop/rules/` and runs the CLI has
 * to get a green run rather than a parse error - the sample is the page's only
 * answer to "what do I actually put in the file".
 *
 * The rule was chosen because `exclude` is load-bearing in it. Targeting every
 * module and then naming the three places allowed to touch the database is the
 * only way to write this rule, so `effective target = target − exclude` is
 * doing visible work rather than decorating a target that would have been fine
 * on its own. If this sample is ever replaced, keep that property — a rule
 * whose `exclude` could be deleted teaches the reader that `exclude` is
 * optional trivia.
 *
 * It is also the failure Next.js engineers have actually had: a helper reaches
 * for the DB client, a Client Component imports the helper, and the driver and
 * its credentials follow the bundle into the browser. `transitive: true` is
 * what catches it, since no file in that chain imports anything obviously wrong.
 */
export const RULE_ANATOMY = `id: architecture            # names this file in every violation it reports
name: Architecture
description: Import boundaries for this codebase.
rules:
  - id: db-stays-on-the-server
    description: The database client is server-only.
    target: "**/*"          # every module in the project...
    exclude:
      - "@/lib/db"          # ...except the client itself,
      - "@/server/**"       # the server layer,
      - "@/app/**/route"    # and route handlers
    forbids:                # the constraint
      - import: "@/lib/db"
        transitive: true    # a helper that imports it counts too
    fix: Call a server action in @/server instead of reaching for the database.`;

/**
 * One match resolving end to end. The page needs this because every remaining
 * snippet on it - the `exists` clause, the `uses` clause, half the worked
 * examples - is written in terms of a variable, and "the name of the module"
 * does not tell a reader that the name is *captured* by the target and
 * *substituted* into the clause. Seeing `UserProfile` fall out of
 * `useUserProfileViewModel` does.
 *
 * Deliberately not YAML: it is a resolution, not a file, and highlighting it as
 * YAML would imply it is something to copy.
 */
export const GLOB_EXPANSION = `target          @/features/**/use{{FileName}}ViewModel
matched         @/features/profile/useUserProfileViewModel
{{FileName}}    UserProfile
{{TARGET_DIR}}  @/features/profile`;

export type Clause = {
  name: string;
  description: string;
  /** A YAML fragment, highlighted by the page before it reaches the section. */
  snippet: string;
};

export const CLAUSES: Clause[] = [
  /*
   * `transitive` is explained here rather than after the list, because this is
   * where a reader first meets it and `forbids` is where it is almost always
   * used. Keeping the definition next to the snippet that demonstrates it means
   * the page never asks anyone to hold an unexplained flag in their head.
   */
  {
    name: 'forbids',
    description:
      'This module may not import that one. By default only the imports written in the file are checked; transitive: true widens that to everything reachable through them, so a dependency pulled in by a helper three modules away is caught too.',
    snippet: `forbids:
  - import: "react"
    transitive: true`,
  },
  {
    name: 'allows',
    description:
      'Carves an exception out of a broad forbids. Unlike exclude, the module stays in the target and stays checked; only the listed import is let through.',
    snippet: `allows:
  - import: "{{TARGET_DIR}}/**"`,
  },
  {
    name: 'uses',
    description: 'This module must import that one.',
    snippet: `uses:
  - import: "@/lib/auth/session"`,
  },
  {
    name: 'exists',
    description:
      'A companion module must be present — a test, a story, a sibling file.',
    snippet: `exists:
  - module: "{{TARGET_DIR}}/{{FileName}}.spec"`,
  },
];
