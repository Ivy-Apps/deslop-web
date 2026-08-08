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
 * Every part of a rule in one sample: what it selects, what it removes from
 * that selection, the constraint, and the message a violation prints. The
 * inline comments carry the explanation so the prose around it does not have to
 * repeat the snippet in words.
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
export const RULE_ANATOMY = `- id: db-stays-on-the-server
  description: The database client is server-only.
  target: "**/*"            # every module in the project...
  exclude:
    - "@/lib/db"            # ...except the client itself,
    - "@/server/**"         # the server layer,
    - "@/app/**/route"      # and route handlers
  forbids:                  # the constraint
    - import: "@/lib/db"
      transitive: true      # a helper that imports it counts too
  fix: Call a server action in @/server instead of reaching for the database.`;

export type Clause = {
  name: string;
  description: string;
  /** A YAML fragment, highlighted by the page before it reaches the section. */
  snippet: string;
};

export const CLAUSES: Clause[] = [
  {
    name: 'forbids',
    description:
      'This module may not import that one — directly, or through any chain of imports.',
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
