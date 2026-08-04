/**
 * The whole DSL is four clauses. Showing each one's syntax next to its
 * description is both faster to read than prose and evidence that the language
 * really is this small.
 *
 * Kept beside ChecksSection rather than in a shared module because the
 * `features-isolated` rule only permits imports from within the same directory.
 */
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
    description: 'Carves an exception out of a broad forbids.',
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
