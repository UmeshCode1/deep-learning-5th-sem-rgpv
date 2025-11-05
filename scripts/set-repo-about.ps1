<#
.SYNOPSIS
  Set the GitHub repository "About" section (description, website, topics) using GitHub CLI.

.DESCRIPTION
  - Requires GitHub CLI (gh) and an authenticated session: `gh auth login`.
  - Run this script from the repository root.
  - By default, it sets a course-appropriate description, the Pages URL as homepage,
    and a curated set of topics. You can override via parameters.

.EXAMPLE
  ./scripts/set-repo-about.ps1

.EXAMPLE
  ./scripts/set-repo-about.ps1 -Description "My Repo" -Homepage "https://example.com" -Topics @("deep-learning","pytorch")
#>
[CmdletBinding()]
param(
  # Use ASCII-only defaults to avoid encoding issues on Windows PowerShell 5.1
  [string]$Description = "Deep Learning (AL 503(B)) - RGPV 5th Semester repo: notes, practicals, assignments, and a React UI deployed via GitHub Pages.",
  [string]$Homepage = "https://umeshcode1.github.io/deep-learning-5th-sem-rgpv/",
  [string[]]$Topics = @(
    "deep-learning","rgpv","aicte","pytorch","react","vite","tailwindcss",
    "jupyter-notebook","machine-learning","education","al503b"
  )
)

# Ensure we run from the repository root (script lives in ./scripts)
try {
  $repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
  Set-Location -LiteralPath $repoRoot
} catch {
  Write-Error "Failed to change directory to repo root: $($_.Exception.Message)" -ErrorAction Stop
}

function Require-Command($name) {
  if (-not (Get-Command $name -ErrorAction SilentlyContinue)) {
    Write-Error "'$name' is required but not found in PATH. Please install it and try again." -ErrorAction Stop
  }
}

try {
  Require-Command gh
  # Validate auth
  gh auth status 1>$null 2>$null
} catch {
  Write-Host "GitHub CLI is not authenticated. Run: gh auth login" -ForegroundColor Yellow
  throw
}

# Confirm repository context
$repoInfo = gh repo view --json nameWithOwner,description,homepageUrl,repositoryTopics | ConvertFrom-Json
if (-not $repoInfo) {
  throw "Unable to determine repository context. Ensure you are in a Git repo with a valid 'origin' remote."
}
Write-Host "Editing repo:" $repoInfo.nameWithOwner -ForegroundColor Cyan

# Update description and homepage
Write-Host "Setting description..." -ForegroundColor DarkCyan
& gh repo edit --description $Description | Out-Null
Write-Host "Setting homepage..." -ForegroundColor DarkCyan
& gh repo edit --homepage $Homepage | Out-Null

# Add topics (idempotent add)
if ($Topics.Count -gt 0) {
  Write-Host "Adding topics: $($Topics -join ', ')" -ForegroundColor DarkCyan
  foreach ($t in $Topics) {
    & gh repo edit --add-topic $t | Out-Null
  }
}

# Show summary
$updated = gh repo view --json nameWithOwner,description,homepageUrl,repositoryTopics | ConvertFrom-Json
$topicNames = @()
if ($updated.repositoryTopics -and $updated.repositoryTopics.nodes) {
  $topicNames = $updated.repositoryTopics.nodes | ForEach-Object { $_.topic.name }
}
Write-Host ""  # newline
Write-Host "Updated About:" -ForegroundColor Green
Write-Host ("- Description: {0}" -f $updated.description)
Write-Host ("- Homepage:   {0}" -f $updated.homepageUrl)
if ($topicNames) {
  $topicNames = $topicNames | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }
}
if ($topicNames -and $topicNames.Count -gt 0) {
  Write-Host ("- Topics:     {0}" -f ($topicNames -join ", "))
} else {
  # Fallback to the topics we attempted to add (API shape may vary by gh version)
  Write-Host ("- Topics:     {0}" -f ($Topics -join ", "))
}
