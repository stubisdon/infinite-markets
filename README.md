# Infinite Markets

This repository contains a simple SwiftUI app that displays a random "Infinite Market" card each time it launches. The data comes from `Curated_Infinite_Markets_40.csv` and is hardcoded into the app so it runs fully offline.

## Building the iOS App

1. Open the `InfiniteMarketsApp` folder in Xcode.
2. Build and run on an iOS device or simulator.

Every launch will show a random card describing a market opportunity, why it is "infinite", example applications and notable companies.

## Running the Web App

The `webApp` folder contains a very small website that displays a random market card on each browser refresh. To open it locally, simply open `webApp/index.html` in your browser.

### Quick Publishing

The fastest way to put this site online is with a static hosting service such as **GitHub Pages**, **Netlify**, or **Vercel**:

1. Commit the `webApp` folder (already done).
2. Push the repository to GitHub.
3. Enable GitHub Pages in the repository settings, pointing to the `main` branch and `/webApp` folder.
   - or -
   Deploy the folder with Netlify or Vercel by connecting your GitHub repo; they'll build and host the static files automatically.

After that, you'll get a public URL you can share immediately.
