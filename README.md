# Oussama Sassour — Portfolio

Personal portfolio for Oussama Sassour, a full-stack developer building SaaS applications and AI-powered tools. The live site is [https://www.oussamasassour.com/](https://www.oussamasassour.com/).

## Features

- Single-page home with projects, skills, services, experience, education, and contact
- Project listing and detail pages driven by one data file
- Dark and light theme, stored in the browser
- English and French, switched from the header and stored in the browser
- Contact form through EmailJS
- Downloadable CV

## Stack

- Vue 3
- Vue Router
- Vite
- Tailwind CSS
- EmailJS (`@emailjs/browser`)

## Project structure

```text
public/                 Static files, project screenshots, CV, robots.txt, sitemap.xml
src/components/         Home sections and shared UI
src/composables/        Scroll reveal helper
src/data/projects.js    Project copy, links, and technologies
src/data/skills.js      Skill groups
src/router/index.js     Routes and document metadata updates
src/views/              Home, projects list, project details
index.html              Default title, description, and social metadata
```

## Prerequisites

- Node.js 18 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`.

## Scripts

```bash
npm run dev       # start the development server
npm run build     # create the production build in dist/
npm run preview   # serve the production build locally
```

There is no lint, type-check, or test script in this repository.

## Environment variables

The site runs without an environment file. The contact form uses the public EmailJS service ID, template ID, and public key already set in `src/components/Contact.vue`.

To override those values at build time, copy `.env.example` to `.env` and set:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

These are browser-visible values. Do not put private credentials in this project. In the EmailJS dashboard, restrict the service to `https://www.oussamasassour.com` so other sites cannot submit the form with the public key.

## Build and deployment

```bash
npm run build
```

Deploy the generated `dist/` folder to the host that serves `https://www.oussamasassour.com/`. The app is a client-rendered Vue site: `index.html` is the document for every route, and Vue Router handles `/`, `/projects`, and `/project/:id` in the browser. The host must serve `index.html` for those paths.

`public/robots.txt` and `public/sitemap.xml` are copied into the build and use the production domain.

## Contact

- Portfolio: [https://www.oussamasassour.com/](https://www.oussamasassour.com/)
- Email: oussamasassour@gmail.com
- GitHub: [https://github.com/Ouss77](https://github.com/Ouss77)
