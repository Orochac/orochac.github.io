# Oscar Rochanakij - Personal Website

A comprehensive personal, portfolio, and professional resume website built with Jekyll and hosted on GitHub Pages.

## 🌟 Features

- **Professional Resume/CV** - Complete work history, skills matrix, and achievements
- **Project Portfolio** - Showcase of industry, academic, and personal projects
- **Academic Section** - Research publications with PDF embedding
- **Interactive Travel Map** - Leaflet.js powered map with blog integration
- **Dual Blog System** - Separate technical and travel blogs
- **Dark Mode** - System-aware theme switching
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Image Optimization** - Cloudinary integration with lazy loading
- **Comprehensive Documentation** - 13+ guides covering all aspects

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7+ (check with `ruby -v`)
- Bundler (install with `gem install bundler`)
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/orochac/orochac.github.io.git
cd orochac.github.io

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# View at http://localhost:4000
```

### Building for Production

```bash
# Build the site
bundle exec jekyll build

# Output will be in _site/ directory
```

## 📁 Project Structure

```
.
├── _config.yml              # Jekyll configuration
├── _data/                   # Data files (navigation, locations)
├── _includes/               # Reusable components
├── _layouts/                # Page layouts
├── _pages/                  # Main pages
│   ├── professional/        # Resume, skills, contact
│   ├── portfolio/           # Project portfolio
│   ├── academic/            # Publications
│   ├── blog/                # Blog pages
│   └── travel/              # Travel map
├── _posts/                  # Blog posts
│   ├── technical/           # Technical posts
│   └── travel/              # Travel posts
├── _projects/               # Project collection
├── _sass/                   # Custom styles
├── assets/                  # Static assets
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript
│   └── images/              # Images
└── docs/                    # Documentation
```

## 📝 Content Management

### Adding a New Blog Post

Create a file in `_posts/technical/` or `_posts/travel/`:

```markdown
---
layout: single
title: "Your Post Title"
date: 2024-11-25
categories: [technical, python]
tags: [tutorial, automation]
---

Your content here...
```

### Adding a New Project

Create a file in `_projects/`:

```markdown
---
layout: project
title: "Project Name"
excerpt: "Brief description"
header:
  teaser: /assets/images/project-thumb.jpg
technologies:
  - Python
  - Docker
github: https://github.com/username/repo
---

Project details...
```

### Adding a Travel Location

Edit `_data/travel_locations.yml`:

```yaml
- name: "City, Country"
  coords: [latitude, longitude]
  country: "Country"
  description: "Brief description"
  duration: "X weeks"
  dates: "Month Year"
  highlights:
    - "Highlight 1"
    - "Highlight 2"
  posts:
    - title: "Post Title"
      url: "/blog-post/path/"
  google_photos_album: "https://photos.app.goo.gl/..."
```

## 🎨 Customization

### Colors

Edit `_sass/custom/_variables.scss`:

```scss
$primary-color: #e91e63;  // Pink
$secondary-color: #9c27b0; // Purple
```

### Navigation

Edit `_data/navigation.yml`:

```yaml
main:
  - title: "Section"
    url: /section/
```

### Dark Mode

Toggle is automatic. Customize in `_sass/custom/_dark-mode.scss`.

## 📚 Documentation

Comprehensive guides available in `/docs/`:

1. **QUICK_START_GUIDE.md** - Get started quickly
2. **SETUP_GUIDE.md** - Detailed setup instructions
3. **ARCHITECTURE_PLAN.md** - Site architecture overview
4. **IMPLEMENTATION_ROADMAP.md** - Development roadmap
5. **PROJECT_TEMPLATE.md** - Project page template
6. **PDF_EMBED_GUIDE.md** - Embedding PDFs
7. **CLOUDINARY_SETUP.md** - Image optimization
8. **ANALYTICS_SETUP.md** - Analytics integration
9. **TRAVEL_MAP_GUIDE.md** - Interactive map usage
10. **ACADEMIC_CONTENT_GUIDE.md** - Academic content
11. **COMMUNICATION_SHOWCASE_GUIDE.md** - Teaching content
12. **IMPLEMENTATION_STATUS.md** - Current status
13. **FINAL_IMPLEMENTATION_SUMMARY.md** - Complete summary

## 🔧 Maintenance

### Regular Updates

- **Weekly**: Add new blog posts
- **Monthly**: Update resume and skills
- **Quarterly**: Add new projects
- **Annually**: Review and refresh content

### Dependency Updates

```bash
# Update gems
bundle update

# Check for security issues
bundle audit
```

### Performance Monitoring

- Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Check [Lighthouse](https://developers.google.com/web/tools/lighthouse) scores
- Monitor [Google Search Console](https://search.google.com/search-console)

## 🚢 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Go to Settings → Pages
3. Set source to `main` branch
4. Site will be live at `https://orochac.github.io`

### Custom Domain (Optional)

1. Add `CNAME` file with your domain
2. Configure DNS with your provider
3. Enable HTTPS in GitHub Pages settings

## 🐛 Troubleshooting

### Jekyll Won't Build

```bash
# Clear cache and rebuild
rm -rf _site .jekyll-cache
bundle exec jekyll build
```

### Map Not Showing

1. Check browser console for errors (F12)
2. Verify Leaflet.js is loading
3. Check `_data/travel_locations.yml` syntax
4. Ensure coordinates are correct format: `[lat, lng]`

### Images Not Loading

1. Check file paths are correct
2. Verify images exist in `/assets/images/`
3. For Cloudinary, check credentials in `_config.yml`

## 📊 Analytics

### Google Analytics 4

Add to `_config.yml`:

```yaml
analytics:
  provider: "google-gtag"
  google:
    tracking_id: "G-XXXXXXXXXX"
```

### Plausible Analytics

Add script to `_includes/head/custom.html`:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

## 🤝 Contributing

This is a personal website, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Jekyll** - Static site generator
- **Minimal Mistakes** - Base theme
- **Leaflet.js** - Interactive maps
- **Cloudinary** - Image optimization
- **Font Awesome** - Icons
- **OpenStreetMap** - Map tiles

## 📞 Contact

- **Email**: o.rochanakij@protonmail.com
- **GitHub**: [@orochac](https://github.com/orochac)
- **Instagram**: [@oscarrchkij](https://instagram.com/oscarrchkij)
- **Website**: [orochac.github.io](https://orochac.github.io)

## 🗺️ Roadmap

### Completed ✅
- [x] Professional resume/CV
- [x] Skills matrix
- [x] Project portfolio
- [x] Academic publications
- [x] Interactive travel map
- [x] Dual blog system
- [x] Dark mode
- [x] Image optimization
- [x] SEO optimization
- [x] Comprehensive documentation

### Future Enhancements 🚀
- [ ] Search functionality
- [ ] Comments system
- [ ] Newsletter subscription
- [ ] Project filtering
- [ ] Timeline visualization
- [ ] Testimonials section
- [ ] Case studies
- [ ] Video content

## 📈 Stats

- **Total Pages**: 15+
- **Blog Posts**: 9 (travel)
- **Projects**: 1 example (template for more)
- **Documentation**: 13 guides
- **Lines of Code**: 3,000+
- **Lines of Documentation**: 5,000+

---

**Built with ❤️ using Jekyll and GitHub Pages**

Last Updated: November 2024