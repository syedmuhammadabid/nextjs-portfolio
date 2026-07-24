<div align="center">
  <h1>Syed Muhammad Abid - Portfolio</h1>
  <p><strong>Senior Full-Stack Engineer</strong> · Karachi, Pakistan</p>
  <p>
    <a href="https://syedmuhammadabid.dev">Live Site</a> ·
    <a href="https://linkedin.com/in/syedmuhammadabid">LinkedIn</a> ·
    <a href="https://github.com/syedmuhammadabid">GitHub</a>
  </p>
</div>

---

## About

Personal portfolio and blog of **Syed Muhammad Abid Hussain**, a Senior Full-Stack Engineer with 7+ years of experience building scalable React, Next.js, and Node.js applications that power enterprise SaaS. The site showcases work experience, projects, skills, and long-form writing on software engineering.

🔗 **Live at [syedmuhammadabid.dev](https://syedmuhammadabid.dev)**

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Magic UI](https://magicui.design/)
- **Content:** MDX blog via [content-collections](https://www.content-collections.dev/) with [Shiki](https://shiki.style/) syntax highlighting
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) (light / dark / system)
- **Analytics:** [Google Analytics 4](https://analytics.google.com/) via [`@next/third-parties`](https://nextjs.org/docs/app/guides/third-party-libraries) with full click-event tracking
- **Deployment:** [Vercel](https://vercel.com/)

## Features

- ⚡ **Fast & SEO-optimized** - SSR/SSG, structured data (JSON-LD), OpenGraph images, sitemap, and robots.txt
- 📝 **MDX blog** with paginated post list, prev/next navigation, and code blocks
- 🎨 **Light / dark / system** theme with a dock-style navbar
- 📊 **Google Analytics 4** with named events on every actionable item (nav, social, projects, blog, theme toggle, etc.) plus a global click tracker
- 📱 **Fully responsive** across devices
- 🛠️ **Single-file config** - edit your entire profile in [`src/data/resume.tsx`](./src/data/resume.tsx)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/syedmuhammadabid/nextjs-portfolio
   cd nextjs-portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Set your Google Analytics 4 measurement ID (leave empty to disable analytics):

   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Personalize** by editing [`src/data/resume.tsx`](./src/data/resume.tsx) - name, work experience, projects, skills, education, and social links.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Run the production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |

## Project Structure

```
content/            # MDX blog posts
src/
  app/              # Next.js App Router (pages, blog, metadata, sitemap)
  components/       # UI, sections, MagicUI, MDX, analytics
  data/resume.tsx   # ← Single source of truth for your profile
  lib/              # Analytics, pagination, and utility helpers
public/             # Static assets (images, fonts)
```

## Analytics

Google Analytics is wired up via `@next/third-parties`. It only loads when `NEXT_PUBLIC_GA_ID` is set. Beyond GA4's built-in enhanced measurement (page views, scrolls, outbound clicks), the site sends **named events** for key interactions - e.g. `project_click`, `social_click`, `blog_post_click`, `theme_toggle` - and a global tracker captures every other click as `ui_click`. To surface custom parameters in reports, register them as custom dimensions in **GA → Admin → Custom definitions**.

## License

Licensed under the [MIT license](./LICENSE).

---

<div align="center">
  <sub>Originally based on <a href="https://github.com/dillionverma/portfolio">dillionverma/portfolio</a>, extensively customized and extended.</sub>
</div>
