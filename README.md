# LAY/ERD

A perspective on money, decisions, and the tech behind both. A writing project
at the overlap of personal finance and security.

The premise: the money decisions people make every day mostly get made without
the background to make them well, and finance and security are really the same
decision seen from two sides. LAY/ERD covers both sets of fundamentals, starting
with a finance primer (risk, the time value of money, valuation) and moving into
company and market analysis.

**Sections**

- **Posts**: the fundamentals
- **Views**: personal takes, plus interview episodes
- **Analyses**: how a company or market actually works
- **Pitches**: the case for or against holding a position, reasoning shown

Written by Tayo, former AML Analyst and founder of LAY/ERD.

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS v4. Content is Markdown/MDX
parsed with `gray-matter` and rendered with `marked`.

## Development

```bash
npm install
npm run dev
```

Content lives in `src/content/` as `.md` / `.mdx` files with frontmatter. Add a
file to `src/content/posts/` with the fields `title`, `date`, `topic`, and
optionally `subtitle` / `description`, `tags`, `draft`. It shows up
automatically, newest first.
