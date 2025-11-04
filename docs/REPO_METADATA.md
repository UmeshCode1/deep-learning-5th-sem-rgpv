# Repository "About" (Description, Website, Topics)

Your GitHub repository "About" panel appears at the top of the repo page. To make it look professional, set:
- Description
- Website (homepage)
- Topics

## Recommended values

- Description:
  > Deep Learning (AL 503(B)) — RGPV 5th Semester repo: notes, practicals, assignments, and a React UI deployed via GitHub Pages.
- Website:
  > https://umeshcode1.github.io/deep-learning-5th-sem-rgpv/
- Topics:
  > deep-learning, rgpv, aicte, pytorch, react, vite, tailwindcss, jupyter-notebook, machine-learning, education, al503b

## Option A — Set from GitHub UI (easiest)

1. Open your repo on GitHub.
2. Click the gear icon next to the "About" section (top right).
3. Fill Description and Website.
4. Click "Manage topics" and add the topics above.

## Option B — Set via GitHub CLI (scripted)

Requirements: GitHub CLI installed and authenticated (`gh auth login`).

From the repo root in PowerShell:

```powershell
# Use defaults (recommended values)
./scripts/set-repo-about.ps1

# Or customize
./scripts/set-repo-about.ps1 `
  -Description "My awesome DL course repo" `
  -Homepage "https://example.com" `
  -Topics @("deep-learning","pytorch","education")
```

The script will update Description, Homepage, and add the listed topics (idempotent).
