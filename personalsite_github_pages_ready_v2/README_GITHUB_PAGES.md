# GitHub Pages Ready

This folder is ready to publish on GitHub Pages.

**How to publish**
1. Create a new GitHub repo (any name), or use `username.github.io` for a user site.
2. Upload all files from this zip **into the root of the repo** (so `index.html` is at the repo root).
3. In **Settings → Pages**, set **Source** to `Deploy from a branch`:
   - Branch: `main`
   - Folder: `/ (root)`
4. Save. Wait ~1–2 minutes. Your site will be live.

Notes:
- `.nojekyll` disables Jekyll so assets in folders like `_assets` are served.
- `404.html` helps redirect unknown paths back to `index.html` (useful for SPAs).
