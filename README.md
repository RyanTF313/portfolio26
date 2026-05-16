# Ryry — Developer Portfolio

A modern, responsive single-page portfolio built with React, TypeScript, and CSS Modules.

## Features

- Sticky header with hide-on-scroll-down / show-on-scroll-up behavior
- Social links and smooth in-page navigation
- Full-screen hero section
- About Me section with resume download
- Responsive project card grid
- Contact form with real-time validation and simulated async submission

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Resume download

Place your PDF at `public/resume.pdf`. The About Me section links to it automatically. Edit the blurb in `src/data/about.ts`.

### Contact form (Formspree)

Submissions POST to `https://formspree.io/f/mvzypgbv` via `src/api/submitContactForm.ts`. Override with `VITE_FORMSPREE_ENDPOINT` in `.env` if needed. Confirm the form in your [Formspree dashboard](https://formspree.io/forms) on first use.

## Scripts

| Command         | Description          |
| --------------- | -------------------- |
| `npm run dev`   | Start dev server     |
| `npm run build` | Production build     |
| `npm run preview` | Preview production build |

## Tech Stack

- React 19 + TypeScript
- Vite
- CSS Modules
- [react-icons](https://react-icons.github.io/react-icons/)
