# Sora Landing Page

Sora (空) means “sky” in Japanese. The name represents openness, calm, and creating room to breathe — ideas that inspired this mindful productivity workspace.

Sora is a calm, mindful productivity workspace designed to help people focus on what matters. It encourages intentional planning, creative thinking, and a more balanced way to organize daily work.

This repository contains the **Sora landing page**, converted from a static HTML/CSS website into a modern **Next.js application**.

## Features

* Responsive design
* Smooth page animations
* Modern editorial layout
* Mobile-friendly navigation
* Interactive FAQ section
* Newsletter signup section
* Reusable React components
* Responsive footer and navigation
* Clean, intentional UI design

## Technologies

* Next.js
* React
* TypeScript
* Tailwind CSS
* CSS
* Framer Motion
* JavaScript

## Project Structure

```text
nextjs-app/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   └── sora/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Marquee.tsx
│       ├── HowItWorks.tsx
│       ├── Quote.tsx
│       ├── About.tsx
│       ├── Features.tsx
│       ├── DailyPractice.tsx
│       ├── Testimonials.tsx
│       ├── Journal.tsx
│       ├── FAQ.tsx
│       ├── Newsletter.tsx
│       ├── CTA.tsx
│       └── Footer.tsx
│
├── public/
├── package.json
└── README.md
```

## Run Locally

Clone the repository and install the dependencies:

```bash
git clone <your-repository-url>
cd nextjs-app
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Original Version

The original Sora landing page was built using:

* HTML
* CSS
* JavaScript

The project has now been converted into a reusable **Next.js + TypeScript** application while maintaining the original visual style and layout.
