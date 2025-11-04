# Deploying the UI to GitHub Pages

This repository includes a GitHub Actions workflow that builds the UI (Vite + React) and deploys it to GitHub Pages.

## One-time repository setting

1. Open your repository on GitHub.
2. Go to Settings → Pages.
3. Under "Build and deployment", set "Source" to "GitHub Actions".
4. Save.

Without this step, the deployment job may fail with a 404-like error message.

## Triggering a deployment

- Push any commit to the `main` branch, or
- Open the latest "Deploy UI to GitHub Pages" workflow run and click "Re-run all jobs".

## Vite base path

The Vite config is set to serve under the repository subpath when building for production:

```ts
// ui/vite.config.ts
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/deep-learning-5th-sem-rgpv/' : '/',
  // ...
}))
```

This ensures assets resolve correctly at `https://<user>.github.io/deep-learning-5th-sem-rgpv/`.

## SPA routing fallback

A `404.html` is included so client-side routes (if any) work on Pages. If you add new routes, no extra Pages configuration is required.

## Troubleshooting

- Build fails: run a local build to check errors
  ```powershell
  npm --prefix .\ui run build
  ```
- Missing Node in PATH: restart terminal or use the helper scripts (`run-ui.ps1` / `run-ui.bat`).
- Pages shows old content: wait ~1–2 minutes or hard refresh (Ctrl+F5). You can also re-run the deploy job.
