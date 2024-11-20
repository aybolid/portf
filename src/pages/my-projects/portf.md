---
layout: ../../md-page-layout.astro
title: Portfolio

type: fullstack

description: >
  This project you can see right now! 😎
  This is a website built with Astro. UI built with TailwindCSS.

links:
  - label: source code
    url: https://github.com/aybolid/portf

tags:
  - astro
  - tailwind
  - typescript
  - turso
  - drizzle
  - solid
---

# Portfolio: My Personal Website

The goal of this project is simple: to showcase myself, my skills, and my experience.

## Core technologies

I chose to use [Astro](https://astro.build/) because I believe it’s the most suitable framework for this type of project. As a static site generator with built-in support for rendering Markdown files, Astro offers excellent performance and SEO. The Markdown support allows me to easily add new content to the site.

For parts of the site that require reactivity, I used [Solid](https://www.solidjs.com/). It’s an excellent library for building reactive UIs, and I really appreciate how it utilizes signals. The developer experience (DX) is fantastic.

## User interface and design

The UI is built with [Tailwind CSS](https://tailwindcss.com/), a powerful library that simplifies styling. The design reflects my identity as a developer, using a monospace font throughout the application. It’s minimalistic and simple while maintaining a modern and informative feel.

## Comments feature

Although I’m not sure if anyone will ever use it, I decided to implement a comments feature anyway. I think it adds a layer of interactivity that makes the site feel more “alive.”

You can leave comments on the [/say-smth](/say-smth) page. These comments are stored in a hosted **libSQL** database via [Turso](https://turso.tech/).
In the app, the database is managed by Astro's [Drizzle ORM](https://orm.drizzle.team/) integration.

The comments page is server-side rendered, while the rest of the site is statically generated. This is necessary to support form submissions in Astro. While I’m not a fan of the slightly longer load time for this page, it’s acceptable for now.

## Deployment

This project is hosted on [Netlify](https://www.netlify.com/), a fantastic service that allows me to deploy my site with a single click.
