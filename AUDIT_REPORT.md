# Portfolio UI/UX Audit

Audit performed against the deployed Vercel URL and the local source on 2026-11-20. “Confirmed” means directly observed in source or browser; suggestions are not bugs.

| Issue | Page/Section | Severity | Description | Recommended Fix |
|---|---|---:|---|---|
| Confirmed: reduced-motion intro still runs the greeting sequence | Greeting intro | Medium | The reduced-motion branch skips decorative motion but still waits 1 second before dismissing the blocking overlay. | Dismiss immediately when `prefers-reduced-motion` is enabled. |
| Confirmed: mailto status overstates what the browser knows | Contact | Low | The form says the email client “has been opened”; a browser cannot confirm that an email application opened. The user must still send the draft. | State that the email draft was requested and must be sent manually. |
| Confirmed: no contact backend is configured | Contact | Medium | `contactService` is configured as `mailto` with an empty endpoint. The form therefore cannot submit to a server. | Keep the working mailto fallback and disclose the limitation (already shown on the form). |
| Confirmed: no resume PDF is configured | Resume actions | Low | `resumeUrl` is `#resume`; actions open the existing resume information modal. | Preserve the current placeholder modal until a real PDF is provided. |
| Design suggestion: decorative hero status and multiple telemetry labels add visual density | Hero | Low | The status pill, ID frame, location, and architecture label compete with the name and tagline. | Consider reducing secondary labels if a calmer hierarchy is preferred. |
| Not confirmed: image failures | Projects | — | Project image files exist locally; the live browser initially reported lazy images as incomplete before they entered the viewport. This does not confirm broken images. | Verify after the project images enter the viewport; do not replace them based on an incomplete lazy-load check. |
| Not confirmed: stale canonical/OG domain | SEO | — | HTML metadata names `irfanhossain.dev`, while the audited deployment uses a Vercel URL. The README also identifies `irfanhossain.dev` as the portfolio domain, so the Vercel URL may be a deployment alias. | Confirm the preferred public domain before changing canonical and social metadata. |
| Responsive width check | Home | Pass | Checked 320, 375, 390, 430, 768, 1024, 1440, and 1920 CSS-pixel viewports. Document width matched the available layout width (viewport minus the vertical scrollbar); no horizontal overflow was observed. | No fix required. |
| Build and lint | Project | Pass | `npm run build` and `npm run lint` completed successfully before changes. | Re-run after changes. |

## Scope limits

The deployed homepage was reachable and rendered. The available browser session did not provide a reliable browser-console error stream. External destinations and actual email-client delivery are not verified by a client-side portfolio audit. No automated test script or TypeScript check is defined in `package.json`.
