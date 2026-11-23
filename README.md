# Origami HR

Front-end for Origami HR, a time and leave management tool: a marketing landing page, a features page, and a sign-up / login flow that leads to a simple dashboard. Built with React and TypeScript.

This is a front-end only project. There is no backend: accounts are kept in the browser's `localStorage` to make the sign-up and login flow work end to end, so it is a demo of the UI and form logic, not a real authentication system.

## Pages

| Route | Page |
|---|---|
| `/` | Landing page with hero, features, functions and GDPR sections |
| `/features` | Overview of what every plan includes |
| `/signup` | Sign-up form with validation |
| `/login` | Login form with validation and show/hide password |
| `/dashboard` | Welcome screen for the logged-in user |

## What it covers

- Client-side routing with React Router
- A user context (`UserContext`) that handles register, login and logout and persists users between visits
- Form validation with per-field error messages: email format, minimum password length, "no account found" and "incorrect password" states
- Reusable layout pieces (header, footer, buttons) with shared CSS variables for colours and typography

## Tech stack

- React 19 and TypeScript
- Vite 6
- React Router 7
- Plain CSS
- ESLint with typescript-eslint

## Getting started

Requires Node.js 18 or newer.

```sh
npm install
npm run dev
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run build` | Type-check and build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── App.tsx                 # Routes
├── context/
│   └── UserContext.tsx     # Register, login, logout; localStorage persistence
├── components/
│   ├── landing/            # Landing page, header and sections
│   ├── auth/               # Login and sign-up pages and form
│   └── dashboard/          # Features page and dashboard
├── shared/components/      # Footer
└── styles/                 # Component, layout and variable stylesheets
```
