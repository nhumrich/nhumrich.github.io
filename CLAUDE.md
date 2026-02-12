# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:4321
npm run build        # Production build (output: ./dist)
npm run preview      # Preview production build locally
```

## Architecture

Astro 5 static blog with Tailwind CSS 3 and `@tailwindcss/typography`, deployed to GitHub Pages via GitHub Actions on push to `master`. Site URL: `https://blog.humrich.us`.

### Routing

Post URLs use `/:year/:slug` pattern, driven by `src/pages/[year]/[slug].astro` which extracts the year from the post's `date` frontmatter field. There is no components directory — all UI lives directly in layouts and pages.

### Content

Blog posts are markdown files in `src/content/blog/` with schema defined in `src/content/config.ts`. Frontmatter:

```yaml
---
title: "Post Title"
description: "Optional subtitle"   # optional
date: 2024-01-15
heroImage: /media/image.png         # optional
tags: [tag1, tag2]                  # optional, defaults to []
draft: false                        # defaults to false; drafts filtered from index
---
```

### Code Blocks

Uses `astro-expressive-code` with `plugin-line-numbers`. Themes are `github-light`/`github-dark`, toggled via `.dark` class on `<html>`. Line numbers are on by default.

### Dark Mode

Class-based (`darkMode: 'class'` in Tailwind). Theme preference stored in `localStorage('theme')` with system preference fallback. Toggle logic and inline script for flash prevention live in `src/layouts/BaseLayout.astro`.

### Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on push to `master`. Builds with Node 20, deploys via GitHub Pages artifact upload.
