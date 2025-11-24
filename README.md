# Oscar Rochanakij's Personal Website

A modern, responsive, and performant personal portfolio and blog built with Jekyll and GitHub Pages.

## 🌟 Features

- **Extremely Responsive** - Mobile-first design with 5 breakpoints
- **Dark Mode** - System preference detection with manual toggle
- **Lightweight** - Optimized for fast loading (< 3 seconds)
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Accessible** - WCAG AA compliant
- **Cross-Browser** - Works on all modern browsers
- **Lazy Loading** - Images load as needed for better performance

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7 or higher
- Bundler
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Orochac/orochac.github.io.git
cd orochac.github.io

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Development

```bash
# Serve with drafts
bundle exec jekyll serve --drafts

# Serve with future posts
bundle exec jekyll serve --future

# Clean build
bundle exec jekyll clean && bundle exec jekyll build
```

## 📁 Structure

```
orochac.github.io/
├── _config.yml              # Site configuration
├── index.md                 # Homepage
├── _data/
│   └── navigation.yml       # Navigation menu
├── _pages/                  # Static pages
│   ├── professional/        # Resume, skills, contact
│   ├── portfolio/           # Projects
│   ├── academic/            # Research, university work
│   ├── travel/              # Travel content
│   └── blog/                # Blog indexes
├── _posts/                  # Blog posts
├── _projects/               # Project collection
├── _research/               # Research collection
├── _travel_destinations/    # Travel collection
├── _sass/custom/            # Custom styles
├── assets/
│   ├── css/                 # Stylesheets
│   ├── js/custom/           # Custom JavaScript
│   ├── images/              # Images
│   └── files/               # Downloadable files
└── _includes/               # Reusable components
```

## 🎨 Customization

### Colors & Theme

Edit `_sass/custom/_variables.scss` to customize colors, fonts, and spacing.

### Navigation

Edit `_data/navigation.yml` to modify the navigation menu.

### Homepage

Edit `index.md` to customize the homepage content and featured sections.

## 📝 Adding Content

### Blog Posts

Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: single
title: "Your Post Title"
date: 2024-01-01
categories: [technical, travel]
tags: [tag1, tag2]
---

Your content here...
```

### Projects

Create a new file in `_projects/`:

```markdown
---
layout: single
title: "Project Name"
date: 2024-01-01
technologies: [Python, Django]
github: https://github.com/username/repo
---

Project description...
```

### Travel Destinations

Create a new file in `_travel_destinations/`:

```markdown
---
layout: single
title: "Destination Name"
date: 2024-01-01
location: "City, Country"
---

Travel story...
```

## 🚢 Deployment

### GitHub Pages (Automatic)

1. Push to the `main` branch
2. GitHub Pages will automatically build and deploy
3. Visit `https://orochac.github.io`

### Manual Build

```bash
# Build the site
bundle exec jekyll build

# Output is in _site/
```

## 🔧 Configuration

Key settings in `_config.yml`:

- `title` - Site title
- `description` - Site description
- `url` - Site URL
- `author` - Author information
- `social` - Social media links

## 📚 Documentation

- [ARCHITECTURE_PLAN.md](ARCHITECTURE_PLAN.md) - Technical architecture
- [IMPLEMENTATION_ROADMAP.md](IMPLEMENTATION_ROADMAP.md) - Implementation details
- [QUICK_START_GUIDE.md](QUICK_START_GUIDE.md) - Getting started guide
- [ACADEMIC_CONTENT_GUIDE.md](ACADEMIC_CONTENT_GUIDE.md) - Academic content structure
- [COMMUNICATION_SHOWCASE_GUIDE.md](COMMUNICATION_SHOWCASE_GUIDE.md) - Communication showcase
- [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md) - Current status

## 🐛 Troubleshooting

### Site not building?

```bash
bundle exec jekyll doctor
```

### Dependency issues?

```bash
bundle update
```

### Port already in use?

```bash
bundle exec jekyll serve --port 4001
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Oscar Rochanakij**
- GitHub: [@Orochac](https://github.com/Orochac)
- Email: oscarr12345678@gmail.com

## 🙏 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Theme: [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

**Status**: Phase 1 Complete ✅  
**Next**: Adding content pages and collections