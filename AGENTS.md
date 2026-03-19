# AGENTS.md

## Project Purpose
This repository is a beginner-friendly frontend for a Tailor Marketplace application. It is built with plain HTML, CSS, and JavaScript and is intended to connect to a Xano backend over time.

When contributing to this project, prefer simple, readable solutions that are easy for a beginner to follow, edit, and extend.

## Structure Rules
- Keep the existing project structure in place:
  - `index.html`
  - `pages/`
  - `assets/css/`
  - `assets/js/`
- Do not introduce frontend frameworks or meta-frameworks such as React, Vue, Next.js, Nuxt, Angular, Svelte, or similar tools.
- Do not replace the current architecture with a new pattern unless the user explicitly asks for that change.
- Add new files only when they clearly fit the current structure and are necessary for the requested task.

## Layout Rules
- Always use the shared layout system defined in `assets/js/layout.js`.
- Do not duplicate header, navigation, or footer markup directly inside page HTML files.
- All pages must render inside the shared app shell (`#app-shell`) so the site stays visually consistent.
- If a page needs a new shared layout feature, update the shared layout system instead of creating one-off page layouts.

## Page Content Rules
- Store page-specific content in `assets/js/pages.js` whenever possible.
- Keep HTML files minimal, predictable, and consistent with the current pattern.
- Do not hardcode large sections of page content directly into HTML files.
- Use HTML files mainly to declare the page shell, page metadata, stylesheet links, and script imports.

## Styling Rules
- Use the existing `assets/css/styles.css` file for styling.
- Avoid inline styles unless absolutely necessary and clearly justified.
- Keep styles simple, consistent, and easy to understand.
- Prefer extending the current design system instead of introducing a separate styling approach.
- Do not add CSS frameworks unless explicitly requested.

## JavaScript Rules
- Keep JavaScript beginner-friendly, readable, and well-commented.
- Prefer simple functions, straightforward DOM updates, and clear variable names.
- Avoid overengineering, advanced abstractions, or complex design patterns unless explicitly needed.
- Add comments that explain what each file, function, and important code block is doing.
- Write code in a way that makes future maintenance easy for someone new to frontend development.

## Xano Integration Rules
- Prepare for Xano integration using plain `fetch()` calls.
- Centralize API configuration and request logic in a future dedicated API or config file inside the existing structure.
- Do not hardcode API base URLs or endpoint strings in multiple places.
- Clearly comment where Xano base URLs, endpoints, and request settings should be inserted.
- When API work is added, keep the integration simple and easy to trace from the UI to the request.

## General Principles
- Prioritize clarity over cleverness.
- Make the smallest reasonable change that solves the task.
- Keep the codebase easy for a beginner to understand and modify.
- Preserve consistency across pages, styles, and scripts.
- Add helpful comments instead of relying on hidden assumptions.
- When in doubt, choose the simpler implementation.

## Guidance for Future Contributors and Codex Tasks
Before making changes, review the existing structure and follow the established pattern used by `index.html`, files in `pages/`, `assets/js/layout.js`, `assets/js/pages.js`, and `assets/css/styles.css`.

For any future task:
- keep page HTML minimal,
- use the shared app shell,
- place shared layout logic in `assets/js/layout.js`,
- place page-specific content in `assets/js/pages.js`,
- keep styling in `assets/css/styles.css`, and
- keep JavaScript simple enough for a beginner to read comfortably.

If a requested change seems to require a larger architectural rewrite, do not do that by default. Only make that kind of change when the user explicitly asks for it.
