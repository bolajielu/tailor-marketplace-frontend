# tailor-marketplace-frontend

A beginner-friendly frontend starter for a tailor marketplace that can later connect to a Xano backend.

## Why this setup

This repository now uses plain HTML, CSS, and JavaScript modules instead of adding a full frontend framework.
That keeps the learning curve low, makes each file easy to understand, and still leaves a clear place to add Xano API calls with `fetch`.

## Recommended folder structure

```text
.
├── index.html
├── public/
└── src/
    ├── app.js
    ├── components/
    ├── data/
    ├── pages/
    ├── services/
    ├── styles/
    └── utils/
```

## What each folder is for

- `index.html`: the single entry page that loads the app shell.
- `public/`: static files such as images, icons, or future logos.
- `src/app.js`: the main startup file that connects routing and page rendering.
- `src/components/`: shared UI pieces such as the main layout, header, sidebar, cards, or buttons.
- `src/data/`: simple sample data for local development before the Xano backend is connected.
- `src/pages/`: one file per page so beginners can quickly find where each screen lives.
- `src/services/`: API helpers, including the future Xano connection layer.
- `src/styles/`: global CSS and later page-specific styles if needed.
- `src/utils/`: small reusable helpers such as routing or formatting functions.

## Marketplace pages included

- Home
- Login
- Signup
- Dashboard
- Tailor listing
- Tailor detail
- Bookings
- Reviews

## Connecting to Xano later

When you are ready to connect a backend:

1. Replace the placeholder base URL in `src/services/xano.js`.
2. Move sample data usage from `src/data/` into API calls in `src/services/`.
3. Load data inside each page module with simple `fetch` requests.
4. Keep business logic in `services/` so page files stay easy to read.

## Getting started

Because this project uses plain frontend files, you can open `index.html` directly in a browser for a quick review.
If you want a local server, you can use any simple static server later.
