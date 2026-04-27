# Infinite Markets

**[→ Try it now at stubisdon.github.io/infinite-markets](https://stubisdon.github.io/infinite-markets/)**

**A one-click business idea generator.** Tap once and you're dropped into a random "infinite market" — a category of human need that will never go away — along with why it's durable, real-world examples of products being built there, and notable companies already playing in it.

It's a pocket-sized muse for founders, builders, and anyone who likes asking *"what could I solve here?"*

## The Idea

Most "startup idea generators" produce noise: random nouns smashed together, vibes-only Mad Libs. Infinite Markets does the opposite. Every card is a hand-curated **enduring market** — longevity, AI copilots, climate tech, human relationships, decentralized living, and 35+ more — chosen because demand for it doesn't go away when a trend ends.

Each card gives you four things in one screen:

- **Market** — the space (e.g. *Longevity & Preventive Health*)
- **Why Infinite?** — the durable human reason it won't disappear
- **Examples** — concrete product shapes already being built
- **Notables** — companies worth studying

Then you hit shuffle and explore another one. That's the whole product.

## Apps

This repo ships two clients backed by the same 40-card dataset:

### Web App (`docs/`)

A zero-dependency static site. One card per visit; tap shuffle for another; tap share to send the link to a friend. Deployed via GitHub Pages straight out of the `docs/` folder.

To run locally, open `docs/index.html` in any browser.

### iOS App (`InfiniteMarketsApp/`)

A minimal SwiftUI app that draws a random card on every launch — built to live on your home screen so a new market is always one tap away.

To build:

1. Open `InfiniteMarketsApp/infiniteMarkets.xcodeproj` in Xcode.
2. Run on a simulator or device.

## Data

All 40 markets live in [`Curated_Infinite_Markets_40.csv`](Curated_Infinite_Markets_40.csv). Both apps embed this dataset directly, so they work fully offline — no API, no backend, no tracking beyond anonymous shuffle/share counts on the web version.

To add or edit markets, update the CSV and mirror the changes into `docs/marketCards.js` (web) and `InfiniteMarketsApp/MarketData.swift` (iOS).

## Deploying the Web App

The `docs/` folder is the standard GitHub Pages directory. To publish:

1. Push the repo to GitHub.
2. In **Settings → Pages**, set the source to the `main` branch and `/docs` folder.
3. GitHub gives you a public URL within a minute.

Netlify and Vercel work the same way — point them at `docs/` and you're live.
