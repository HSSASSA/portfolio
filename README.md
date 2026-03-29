# 🚀 AI & Data Engineer Portfolio

A sleek, data-driven personal portfolio website built with vanilla HTML, CSS, and JavaScript. All content lives in a single configuration file — no framework, no build step, no coding required to update it.

---

## 📁 Project Structure

```
portfolio/
├── index.html      # Page structure (no hardcoded content)
├── style.css       # Full design system & animations
├── main.js         # Rendering engine — reads data.js and populates HTML
├── data.js         # ✏️  YOUR CONTENT — edit this file to update everything
├── assets/         # (create this folder) put images & screenshots here
│   ├── profile.jpg
│   ├── project-dw.png
│   └── ...
└── README.md       # This file
```

---

## ✏️ How to Update Content

Open **`data.js`** — it is the single source of truth for every word, link, and image on the site.

### Personal Info
```js
personal: {
  name:     "Your Name",
  tag:      "Your Role",
  title:    "Your Headline",
  bio:      "Short bio paragraph...",
  email:    "you@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github:   "https://github.com/yourusername",
  photo:    "assets/profile.jpg",   // ← add a photo here (optional)
},
```

### Add / Edit an Experience
```js
{
  role:    "Senior Data Engineer",
  company: "Acme Corp",
  period:  "2023 – Present",
  type:    "Full-time",
  bullets: [
    "Built a real-time Kafka pipeline processing 10M events/day.",
    "Reduced query latency by 60% via Spark optimisation.",
  ],
  tools:       ["Python", "Kafka", "Spark", "SQL"],
  screenshot:  "assets/acme-pipeline.png",   // ← optional image
},
```

### Add / Edit a Project
```js
{
  title: "My Cool Project",
  desc:  "Short description of what it does.",
  tags:  ["Python", "FastAPI", "React"],
  icon:  "cpu",               // any Lucide icon name: https://lucide.dev/icons/
  image: "assets/proj.png",   // optional screenshot
  link:  "https://github.com/you/repo",   // optional link
},
```

### Add a Certification
```js
{
  title:  "AWS Certified Solutions Architect",
  issuer: "Amazon Web Services",
  link:   "https://aws.amazon.com/certification/...",
  icon:   "award",
},
```

### Add Skills to the Marquee
Just append to the `skills` array:
```js
skills: [
  "Python", "Power BI", "New Skill Here", ...
],
```

### Add Contact Links
```js
{ label: "Twitter", icon: "twitter", href: "https://twitter.com/you" },
```
Any [Lucide icon name](https://lucide.dev/icons/) works for the `icon` field.

---

## 🖼️ Adding Images & Screenshots

1. Create an `assets/` folder next to `index.html`.
2. Drop your image files in (PNG, JPG, WebP all work).
3. Reference them in `data.js`:
   - Profile photo → `personal.photo: "assets/profile.jpg"`
   - Experience screenshot → `experience[n].screenshot: "assets/exp.png"`
   - Project screenshot → `projects[n].image: "assets/project.png"`

---

## 🌐 Deployment

Because this is pure HTML/CSS/JS with no build step, you can host it anywhere:

| Platform | Steps |
|----------|-------|
| **GitHub Pages** | Push to a repo → Settings → Pages → Deploy from main branch |
| **Netlify** | Drag & drop the folder onto netlify.com/drop |
| **Vercel** | `vercel` CLI or connect GitHub repo |
| **Any web server** | Upload all files to your `public_html` / `www` folder |

> ⚠️ Make sure to upload the `assets/` folder too if you added images.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--accent`   | `#00f5d4` (cyan)   | Primary highlights, links |
| `--accent2`  | `#f72585` (pink)   | Secondary accents |
| `--accent3`  | `#7b2fff` (purple) | Tertiary accents |
| `--bg`       | `#050a0e`          | Main background |
| `--font-mono`| Space Mono         | Tags, labels, code |
| `--font-sans`| Syne               | Headings & body |

To change the colour scheme, edit the `:root` block at the top of `style.css`.

---

## 🔧 Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, keyframe animations
- **Vanilla JS** — zero dependencies for rendering
- **[Lucide Icons](https://lucide.dev/)** — via CDN
- **Google Fonts** — Space Mono + Syne, via CDN

No npm, no bundler, no framework. Open `index.html` in any browser and it works.
