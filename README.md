# Oscar Rochanakij's Personal Website

A modern, responsive, and performant personal portfolio and blog built with Jekyll and GitHub Pages.

🌐 **Live Site**: [orochac.github.io](https://orochac.github.io)

## 🌟 Features

- **Extremely Responsive** - Mobile-first design optimized for all devices
- **Dark Mode** - System preference detection with manual toggle
- **Lightning Fast** - Optimized for < 3 second load times
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Accessible** - WCAG AA compliant
- **Cross-Browser** - Works on all modern browsers

## 🚀 Quick Start

### Prerequisites

- Ruby 2.6+ (Ruby 3.0+ recommended)
- Bundler
- Git

### Local Development

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

### First Time Setup

If you encounter Ruby version issues, see [docs/SETUP_GUIDE.md](docs/SETUP_GUIDE.md)

## 📁 Project Structure

```
orochac.github.io/
├── _config.yml           # Site configuration
├── index.md              # Homepage
├── README.md             # This file
│
├── _data/                # Data files
│   └── navigation.yml    # Navigation menu
│
├── _pages/               # Static pages
│   ├── professional/     # Resume, skills, contact
│   ├── portfolio/        # Projects
│   ├── academic/         # Research, university work
│   ├── travel/           # Travel content
│   └── blog/             # Blog indexes
│
├── _posts/               # Blog posts
│   ├── technical/        # Technical posts
│   └── travel/           # Travel posts
│
├── Collections/          # Content collections
│   ├── _projects/        # Project portfolio
│   ├── _research/        # Academic research
│   ├── _travel_destinations/  # Travel content
│   └── ...               # Other collections
│
├── _sass/custom/         # Custom styles
│   ├── _variables.scss   # Theme variables
│   ├── _dark-mode.scss   # Dark mode styles
│   └── _responsive.scss  # Responsive design
│
├── assets/
│   ├── css/              # Stylesheets
│   ├── js/custom/        # Custom JavaScript
│   ├── images/           # Images
│   └── files/            # Downloadable files
│
├── _includes/            # Reusable components
│   └── head/custom.html  # Custom head content
│
└── docs/                 # Documentation
    ├── SETUP_GUIDE.md
    ├── ARCHITECTURE_PLAN.md
    └── ...
```

## 📝 Adding Content

### Blog Posts

Create a file in `_posts/` with format `YYYY-MM-DD-title.md`:

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

Create a file in `_projects/`:

```markdown
---
layout: single
title: "Project Name"
technologies: [Python, Django]
github: https://github.com/username/repo
---

Project description...
```

## 🎨 Customization

### Colors & Theme

Edit `_sass/custom/_variables.scss` to customize:
- Color palette
- Typography
- Spacing
- Breakpoints

### Navigation

Edit `_data/navigation.yml` to modify the menu structure.

### Homepage

Edit `index.md` to customize featured content and sections.

## 🚢 Deployment

### Automatic (GitHub Pages)

1. Push to the `main` branch
2. GitHub Pages automatically builds and deploys
3. Visit `https://orochac.github.io`

### Manual Build

```bash
bundle exec jekyll build
# Output is in _site/
```

## 📚 Documentation

Comprehensive documentation is available in the `docs/` folder:

- **[SETUP_GUIDE.md](docs/SETUP_GUIDE.md)** - Installation and troubleshooting
- **[ARCHITECTURE_PLAN.md](docs/ARCHITECTURE_PLAN.md)** - Technical architecture
- **[IMPLEMENTATION_ROADMAP.md](docs/IMPLEMENTATION_ROADMAP.md)** - Implementation details
- **[QUICK_START_GUIDE.md](docs/QUICK_START_GUIDE.md)** - Getting started guide

## 🔧 Development Commands

```bash
# Serve with drafts
bundle exec jekyll serve --drafts

# Serve with future posts
bundle exec jekyll serve --future

# Clean build
bundle exec jekyll clean && bundle exec jekyll build

# Check for errors
bundle exec jekyll doctor
```

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

See [docs/SETUP_GUIDE.md](docs/SETUP_GUIDE.md) for more help.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Oscar Rochanakij**
- GitHub: [@Orochac](https://github.com/Orochac)
- Email: oscarr12345678@gmail.com
- Instagram: [@oscarrchkij](https://instagram.com/oscarrchkij)

## 🙏 Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Theme: [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)
- Hosted on [GitHub Pages](https://pages.github.com/)

---

**Status**: Phase 1 Complete ✅ | Ready for Content