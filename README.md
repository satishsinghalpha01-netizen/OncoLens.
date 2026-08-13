# OncoLens — Publish Instructions

This project is a Vite + React frontend demo app. The repository includes a GitHub Actions workflow to build and publish the `dist/` folder to the `gh-pages` branch.

Follow the sections below for the three options:

## Option A — Push a fresh repository and trigger automatic deploy

1. Create a new (empty) repository on GitHub: `https://github.com/<your-username>/<repo>.git`
2. In your local project directory, set the remote and push:

```bash
git init
git add .
git commit -m "Prepare OncoLens for GitHub Pages"
git branch -M main
git remote add origin git@github.com:<your-username>/<repo>.git
git push -u origin main
```

Notes:
- The GitHub Actions workflow `.github/workflows/deploy.yml` will run on push to `main` or `master` and publish the built `dist/` to the `gh-pages` branch.
- If your repo uses HTTPS instead of SSH, change the `git remote add` URL accordingly.

After the workflow completes, the site will be available at:

```
https://<your-username>.github.io/<repo>/
```

If the published URL is different, update the `homepage` field in `package.json` to match the final URL.

## Option B — Verify Actions run and troubleshoot

1. Open the repository on GitHub and go to the `Actions` tab.
2. Select the `Deploy to GitHub Pages` workflow and watch the latest run.
3. If it fails, click the failed job and inspect the logs. Common issues:
   - Install/build errors: ensure `node` version is compatible and `package.json` is valid.
   - Missing `gh-pages` dependency (we already add it as a devDependency).
   - Workflow triggers: ensure you pushed to `main` or `master`.

Troubleshooting checklist:
- Ensure `vite.config.js` includes `base: './'` so assets are relative.
- Ensure `package.json` has the correct `homepage` (optional) and the `predeploy`/`deploy` scripts if you use manual deploy.
- Confirm `dist/` exists after `npm run build` locally to rule out build-time problems.

## Option C — Manual publish (from your machine)

If you prefer to publish from your workstation (no Actions), run:

```bash
npm ci
npm run build
npm run deploy
```

This uses the `gh-pages` package to push `dist/` to the `gh-pages` branch.

## Extra notes for a fresh repo

- Replace the `homepage` field value in `package.json` with your actual GitHub Pages URL before building if you prefer an absolute base.
- If your repo default branch isn't `main`, update `.github/workflows/deploy.yml` to the branch name you use.

## Local verification

Run the dev server locally (no backend required):

```bash
npm ci
npm run dev
```

Open `http://localhost:5173` in a browser.

If you'd like, provide the new repository URL and I will check the workflow logs for you (I cannot push to your GitHub without credentials).
# OncoLens

Cancer Genomics & Biomarker Discovery Platform — a React + Vite demo dashboard.

## Run in VS Code

1. Unzip this project and open the folder in VS Code.
2. Open a terminal (Terminal → New Terminal) and install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
OncoLens/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx     # React entry point
    └── App.jsx      # OncoLens application (dashboard, charts, pages)
```

## Notes

This application is intended for research and educational purposes. Computational findings should not be interpreted as clinical diagnosis, treatment recommendations, or validated clinical biomarkers.
