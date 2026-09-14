# Jens Penneman

Full-stack software engineer in Belgium. I build dashboards, customer portals and integrations with external services, from the database to a pixel-perfect interface, and I want the result to hold up against the standards: semantic HTML, WCAG 2.2 AAA, a strict Content Security Policy, and browser features before libraries.

Since July 2025 I work at [Advantitge](https://advantitge.com) in Deinze, where we build tailor-made business software for companies. That is where most of my commits go, so the contribution graph below shows only a fraction of the work.

## How I build

- **Standards first.** Semantic HTML with landmarks, real heading structure and `<dl>` where the content is key/value. CSS with container queries, `lch()` colours, `@view-transition` and `scroll-state()` where the platform offers them, all progressive. The platform's own APIs (`Intl.DateTimeFormat`, `Intl.ListFormat`, `Intl.DisplayNames`, speculation rules) before another dependency.
- **Accessibility is a test, not a checklist.** axe runs in CI with every WCAG 2.1 and 2.2 tag up to AAA, in light, dark, increased-contrast and forced-colours modes. 44 px targets, focus order and reduced motion are asserted, not assumed.
- **Secure by default.** Per-request nonce CSP with `strict-dynamic` and `default-src 'none'`, HSTS with preload, COOP and CORP, first-party CSP violation reporting, signed commits and CodeQL on `main`.
- **Typed end to end.** TypeScript at maximum strictness. tRPC and Zod where client and server share a repository, GraphQL (Hasura) and REST where they don't, PostgreSQL with migrations under version control.
- **Tests as gates.** Unit tests with coverage floors, Playwright end-to-end in Chromium, WebKit and a phone profile, visual baselines at a 0.05 % tolerance, Lighthouse score floors, Conventional Commits enforced by hooks, Dependabot grouped per package family.
- **Internationalisation with the platform.** BCP 47 paths, `Accept-Language` negotiation with q-values, `hreflang` with `x-default`, and per-language typography (casing, dashes, apostrophes, list joining) derived from `Intl` instead of hand-maintained strings.
- **One file, one purpose.** Small components, no barrel files, dead code caught by knip.

## Toolbox

- **Front end:** TypeScript, React 19, Next.js (App Router), Tailwind CSS, TanStack Query and Table, Radix UI, React Hook Form with Zod, next-intl
- **Back end:** Node.js, tRPC, GraphQL (Hasura, NestJS), REST, PostgreSQL and PL/pgSQL, Supabase, Strapi
- **Quality:** Vitest, Playwright, axe-core, Lighthouse, Biome, ESLint and Prettier, knip, commitlint, lefthook and husky
- **Platform:** Vercel, AWS, Supabase, GitHub Actions, Dependabot, CodeQL, Sentry, PostHog, Cloudflare DNS, npm and pnpm, Turborepo
- **Also:** Swift (iOS coursework), C# (an upstream fix), LaTeX

## Projects

### [jenspenneman.com](https://jenspenneman.com) ([source](https://github.com/JensPenneman/jenspenneman.com))

My CV as a website, in Dutch, English, French and German. Next.js on Vercel, rendered per request from Frankfurt so every response carries its own CSP nonce. One design unit (`--pt`) drives both screen and paper: the browser's print dialog produces a page identical to the PDF master, verified in CI. WCAG 2.2 AAA audited by axe at four widths and in every colour mode. Lighthouse 100 on accessibility, best practices and SEO, 99 to 100 on performance. Cross-document view transitions, speculation rules and sticky section labels, all standards and all progressive. JSON-LD `ProfilePage`, `llms.txt`, and cookieless analytics that honour Global Privacy Control.

### [everhour-viewer](https://github.com/JensPenneman/everhour-viewer)

Local-first Next.js and tRPC app for Everhour: live timers with day and week targets, timesheet history with an edit audit trail, and one-click backups. Bring your own API key (the server never persists it). Delta sync streamed as NDJSON, so the first week is browsable while the rest is still in flight. Works offline as a PWA through a service worker; every byte of data stays in the browser. MIT.

### [febe](https://github.com/JensPenneman/febe)

A static web app without a build step for a teacher-training bachelor's project: young children scan a QR code to start a language exercise, with audio prompts and printable QR sheets. Plain HTML, CSS and JavaScript on purpose.

### [Ten Boomgaerde](https://github.com/WEB4YOU-BE/P007-TenBoomgaerde)

Rental and booking site for a venue in Lichtervelde, built under WEB4YOU: Next.js, Supabase (Postgres with PL/pgSQL), next-intl, React Email with Resend, TanStack Query and Table, Radix UI, OpenTelemetry on Vercel.

### Older and archived

- [KLJ Stekene](https://github.com/JensPenneman/KLJ-Stekene): the youth club's website, Next.js and Supabase.
- [WEB4YOU](https://github.com/WEB4YOU-BE/web4you-www): the site of my student business, next to client sites for an electrician, an artist's shop, a local shop and an event platform.
- [Hasura mail API](https://github.com/JensPenneman/hasura-exploration-example): a take-home assignment, managing and sending mail on a Hasura back end.
- Student work at Hogeschool Gent: a [front end](https://github.com/JensPenneman/HoGent-WEBDEV-2122-FrontEnd) and [back end](https://github.com/JensPenneman/HoGent-WEBDEV-2122-BackEnd) for managing a youth club's board and its tasks, an [iOS app](https://github.com/JensPenneman/HoGent-iOS-app-22-23) in Swift and a [research paper](https://github.com/JensPenneman/RM-paper-2122-Penneman) in LaTeX.

## Upstream

- [ysrdevs/cyberpunk-savekit-mac#3](https://github.com/ysrdevs/cyberpunk-savekit-mac/pull/3): money edits now update every sub-inventory (C#).
- [strapi/strapi#21208](https://github.com/strapi/strapi/issues/21208): the generated component types were not sorted, which churned version control on every run.

## Background

- **Advantitge**, Deinze: full-stack software engineer, July 2025 to date.
- **Lemon Companies**, Kontich: full-stack software engineer, July 2024 to May 2025.
- **WEB4YOU**, Stekene: self-employed student, October 2021 to June 2024.
- **BASF**, Ghent: front-end engineering intern, October to December 2023.
- **Hogeschool Gent**: Applied Computer Science, 2020 to 2023. Before that industrial IT and communication technology at GTI Beveren, and electromechanics.
- Dutch (native), English (very good).

## Beyond code

- Youth work with KLJ: instructor (2024) and senior youth leader (2022), both issued by KLJ and the Flemish Government.
- Video codecs and hardware: encoding experiments with the AV2 reference codec, and 4K to 1080p HDR10 hardware transcodes with VideoToolbox on Apple Silicon.
- Browser physics: a typographic piece in which every letter is a rigid body (Rapier) in a room the size of the viewport.
- Puzzles: a FreeCell solver in TypeScript that verifies each solution by independent replay.
- A self-hosted home server, and my own house renovation modelled in FreeCAD down to the single-line electrical diagram.

## Contact

- **Location:** Stekene, Belgium
- **Email:** [jenspenneman26@gmail.com](mailto:jenspenneman26@gmail.com)
- **Phone:** +32 474 18 06 83
- **LinkedIn:** [linkedin.com/in/jenspenneman](https://www.linkedin.com/in/jenspenneman/)
- **Website:** [jenspenneman.com](https://jenspenneman.com), the CV in four languages, print-ready
