# NeuroSync

A personal website for psychiatrist & AI researcher. Built with Astro and deployed to GitHub Pages.

## ✨ Features

- **Modern Design**: Dark theme with neural aesthetic
- **Responsive**: Mobile-friendly layout
- **Fast**: Static site generation with Astro
- **Content**: Home, About, and Blog sections
- **Easy Deployment**: GitHub Pages + GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:3000`

## 📝 Content

### Homepage
- Hero section
- Featured research areas
- Latest blog posts
- Contact CTA

### About Page
- Professional background
- Focus areas
- Services & collaboration

### Blog
Sample posts demonstrating the structure. Add your own by creating new `.astro` files in `src/pages/blog/`.

## 🔧 Customization

### Personal Information
- Update doctor/psychiatrist details in About page
- Change contact email
- Add your actual credentials and publications

### Theme Colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --accent: #6366f1; /* Primary accent color */
  --bg-primary: #0a0e27; /* Background */
  /* ... other colors ... */
}
```

### GitHub Pages Configuration
Update `site` and `base` in `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/neurosync', // or remove if using custom domain
});
```

## 📦 Deployment

### First Time Setup

1. Create a repository on GitHub (e.g., `neurosync`)
2. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/neurosync.git
   git branch -M main
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "GitHub Actions" as the deployment source
5. Wait for the workflow to complete

### Subsequent Deployments

Simply push to the `main` branch:
```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions will automatically build and deploy.

## 📄 Project Structure

```
src/
├── pages/
│   ├── index.astro          # Homepage
│   ├── about.astro          # About page
│   ├── blog.astro           # Blog listing
│   └── blog/                # Blog posts
│       ├── ai-psychiatry-future.astro
│       ├── ethics-mental-health-ai.astro
│       └── digital-therapeutics-evidence.astro
├── layouts/
│   └── BaseLayout.astro     # Main layout wrapper
└── styles/
    └── global.css           # Global styles & theme
```

## 🎨 Design

- **Color Scheme**: Dark theme with indigo accents
- **Typography**: System fonts for performance
- **Responsive**: Mobile-first approach
- **Accessibility**: Semantic HTML and ARIA labels

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [GitHub Pages](https://pages.github.com)

## 📄 License

This project is open source and available under the MIT License.

---

**Built with Astro** 🚀
