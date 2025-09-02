# 11ty Project Base

(README was regenerated due to kernel reset.)


## Using this starter for a new project

Spin up a fresh site from this starter in a brand-new directory. Pick the route that suits you:

### Option A — GitHub “Use this template” (UI)
1. Open this repo on GitHub and click **Use this template → Create a new repository**.
2. Name your new repo (e.g. `my-new-site`) and create it.
3. Clone it locally:
   ```bash
   git clone git@github.com:<YOUR-GH-USER>/my-new-site.git
   cd my-new-site
   npm install
   npm run dev:all
   ```

### Option B — GitHub CLI (from template)
Replace `OWNER/REPO` with this starter’s full name.
```bash
gh repo create my-new-site   --template OWNER/REPO   --public   --clone
cd my-new-site
npm install
npm run dev:all
```

### Option C — Shallow clone (no template UI)
```bash
git clone --depth=1 git@github.com:OWNER/REPO.git my-new-site
cd my-new-site
rm -rf .git
git init -b main
git add .
git commit -m "chore: bootstrap from starter"
# (optional) set up the remote:
# git remote add origin git@github.com:<YOUR-GH-USER>/my-new-site.git
# git push -u origin main
npm install
npm run dev:all
```

---

### Post-setup checklist (2 minutes)

- **Project metadata**
  - `package.json`: update `name`, `description`, `repository`, `author`, `homepage`, `bugs`.
  - `README.md`: change the short description to match the new site.
  - `LICENCE`: ensure the copyright holder/year suit this project.

- **Site identity**
  - `_data/site.js`: set your site `name` (and any other fields you add later).
  - `_includes/layouts/base.njk`: update header nav links (and email in 404/500).
  - Replace `public/assets/images/example.jpg` with a real image or remove it.

- **Dev & build**
  - Ensure Node **v20+** (run `nvm use` if you use `nvm`; see `.nvmrc`).
  - Dev: `npm run dev:all` → http://localhost:8080
  - Prod build: `npm run build:all` (outputs to `_site/`)

- **Deploy (Netlify)**
  - Connect the new repo in Netlify.
  - Build command: `npm run build:all`
  - Publish directory: `_site`
  - Node version: 20 (in **Site settings** or via `netlify.toml`).
  - `_redirects` and headers in `netlify.toml` are picked up automatically.

- **CI (GitHub Actions)**
  - The included workflow builds on pushes/PRs to `main`/`master`.
  - Check the **Actions** tab after your first push.

---

### Common tweaks
- Want a different container width? Adjust `.container-page` (and optionally add `.container-narrow`) in `styles/Tailwind.css`.
- Need extra colours or typography? Add tokens under `@theme` and style `.prose` as needed.
- Not using JS yet? Remove the `JS` process from `dev:all` or leave it—it’s harmless.
