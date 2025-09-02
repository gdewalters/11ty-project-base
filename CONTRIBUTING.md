# Contributing

Thanks for taking the time to contribute — much appreciated. This project is a clean Eleventy v3 + Tailwind v4 base intended to be simple, opinionated, and easy to extend.

Please read and abide by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold it in all project spaces.

---

## Getting started

### Prerequisites
- Node **v20+** (see `.nvmrc`)
- npm

### Setup
```bash
npm install
npm run dev:all   # Eleventy dev server + Tailwind watch + JS watch
# open http://localhost:8080
```

### Production build
```bash
npm run build:all
```

This runs Tailwind → JS bundle (esbuild) → Eleventy (with minification). The built site is in `_site/`.

---

## Project layout (quick map)

```
_config/          # filters, shortcodes, transforms
_data/            # global data (env, site, etc.)
_helpers/         # build helpers (esbuild script)
_includes/        # layouts & partials
content/          # input (pages, 404/500, generated CSS in content/styles)
public/           # passthrough to site root (assets, _redirects)
scripts/          # your JS entry points
styles/           # Tailwind v4 entry (source)
_site/            # output (gitignored)
```

- **Do not commit** `content/styles/main.css` (generated).  
- Add images to `public/assets/images/` (passthrough).  
- JS bundles are written to `public/assets/js/` by esbuild (passthrough).

---

## Branching & pull requests

- Use short, descriptive branches (e.g. `feature/notes-list`, `fix/blockquote-contrast`).  
- Open a PR early if you want feedback.  
- Keep PRs focused; small PRs are easier to review and merge.

### PR checklist
- [ ] `npm run build:all` succeeds locally
- [ ] No obvious Lighthouse regressions (optional but encouraged)
- [ ] Accessibility basics: sensible headings, focus states, alt text
- [ ] UK English spelling in content (e.g., *colour*, *behaviour*, *licence*)

---

## Commit style

Conventional Commits are encouraged (not mandatory):
```
feat(notes): add linked-notes grid
fix(styles): improve blockquote contrast on dark mode
chore(ci): add build workflow
```
Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.

---

## Coding guidelines

### Eleventy
- ESM everywhere; keep config in small, focused files in `_config/`.
- Keep layouts in `_includes/layouts`, shared fragments in `_includes/partials`.
- Prefer `.njk` for templates; keep logic in data/filters/shortcodes where possible.

### Tailwind v4
- Define tokens via `@theme` in `styles/Tailwind.css` (e.g., brand colours).  
- Prefer utilities and component classes; if adding custom CSS, use `@layer components`/`utilities`.  
- Use `.prose` for Markdown/CMS output; keep prose colours legible in light & dark.

### Accessibility
- Maintain heading order; ensure interactive targets have visible focus.
- Provide meaningful `alt` text (or `alt=""` for decorative images).
- Keep colour contrast to WCAG 2.1 AA. Avoid “colour-only” affordances.

### JavaScript
- Source files live in `scripts/`; bundle to `public/assets/js/bundle.js`.
- Keep inline scripts small (e.g., theme bootstrap); prefer bundling otherwise.
- Avoid introducing heavy dependencies unless they deliver clear value.

### Content
- Use UK English spelling.  
- Keep link text descriptive (avoid “click here”).  
- Internal links should work in both dev and production builds.

---

## Adding dependencies

- Prefer dev-time dependencies (`-D`) unless strictly needed at runtime.
- Avoid bundling for the sake of it; keep the base as lean as possible.

---

## Reporting bugs & requesting features

Please open an issue with:
- What you expected vs. what happened
- Steps to reproduce
- Screenshots or logs (if relevant)
- Your OS/Node/npm versions

If security-related, please avoid public issues and contact the maintainer directly.

---

## Release process

Lightweight and ad-hoc. Tag releases in Git with semantic-ish tags (e.g., `v1.2.0`) once merged to `main`.

---

## Contact

Maintainer: **Gareth de Walters**  
Email: hello@example.com (replace with a real address if publishing)

Thanks again for helping improve this starter. 🙌
