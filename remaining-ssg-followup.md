# Remaining SSG follow-up

## Current status

The site is now producing real prerendered HTML for the key route families, including:

- blog entries such as `/blog/seo-for-nigerian-businesses-complete-guide`
- blog entries such as `/blog/seo-for-nigerian-businesses-2025`
- service pages such as `/services/digital-marketing/seo`
- service pages such as `/services/digital-marketing/ppc`
- service pages such as `/services/digital-marketing/social-media`

Verified evidence from the generated `dist/` output shows route-specific titles, meta descriptions, canonical URLs, and visible content in the final HTML.

## What is left

### 1) Remove or formalize the runtime compatibility patch

The remaining issue is not page correctness. It is the local package compatibility workaround inside the installed `vite-react-ssg` runtime.

Why this still matters:

- it is a dependency-level compatibility patch, not an app-level fix
- it is vulnerable to being lost on a clean reinstall or different environment
- it should be replaced by an upstream-supported React Router v7-compatible release if one is available

Recommended next step:

- upgrade `vite-react-ssg` to a package version that officially supports React Router v7
- remove the manual patch once the upstream release is verified
- if no official release exists yet, persist the patch through a repo-controlled mechanism such as `patch-package`

### 2) Re-verify clean environment reproducibility

A fresh clone or CI run should be tested without relying on the current patched `node_modules` state.

Recommended verification:

- remove `node_modules`
- reinstall from `package-lock.json`
- run `npm run build`
- confirm HTML output remains route-specific and present in `dist/`

### 3) Keep the fallback rewrite as a safety net, not a dependency

The current Vercel rewrite can remain in place, but the actual SEO/SSG output should no longer rely on it.

The correct production model is:

- real static files in `dist/`
- route-specific prerendered HTML
- a Vercel rewrite that only handles unexpected SPA fallback cases

## Priority

- High priority: make the dependency fix reproducible and environment-safe
- Medium priority: remove the manual patch once an upstream-compatible release is available
- Low priority: keep the fallback rewrite for safety, but treat it as backup behavior

## Bottom line

The site-level SSG migration is already functionally successful. The remaining work is dependency hardening and making the build reproducible over time.
