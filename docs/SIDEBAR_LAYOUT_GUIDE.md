# Sidebar Layout Guide

## Overview

The sidebar layout provides a modern, app-like navigation experience with a fixed sidebar containing navigation, footer, and dark mode toggle. This replaces the traditional top navigation bar.

## Features

✅ **Fixed Sidebar Navigation** - Always visible on desktop, slide-out on mobile
✅ **Integrated Footer** - Social links and copyright in sidebar
✅ **Dark Mode Toggle** - Accessible from sidebar and mobile header
✅ **Responsive Design** - Adapts seamlessly to all screen sizes
✅ **Active Page Highlighting** - Shows current page in navigation
✅ **Dropdown Submenus** - Organized navigation structure
✅ **Mobile-Optimized** - Hamburger menu with overlay

## File Structure

```
_layouts/
  └── sidebar.html          # Main sidebar layout template

_sass/custom/
  └── _sidebar-layout.scss  # Complete sidebar styling (665 lines)

assets/css/
  └── main.scss             # Imports sidebar styles
```

## Layout Usage

### Apply to Pages

Add to any page's front matter:

```yaml
---
layout: sidebar
title: "Page Title"
---
```

### Pages Using Sidebar Layout

All main pages now use the sidebar layout:

- **Homepage** (`index.md`)
- **About** (`about.markdown`)
- **Professional Pages** (`_pages/professional/*.md`)
- **Portfolio** (`_pages/portfolio/index.md`)
- **Academic** (`_pages/academic/*.md`)
- **Travel** (`_pages/travel/*.md`)
- **Blog** (`Blog/index.md`, `_pages/blog/*.md`)

## Sidebar Components

### 1. Header Section

```html
<div class="sidebar-header">
  <a href="/" class="site-logo">
    <img src="{{ site.author.avatar }}" class="sidebar-avatar">
    <h2 class="site-title">{{ site.author.name }}</h2>
  </a>
  <p class="site-subtitle">{{ site.subtitle }}</p>
</div>
```

**Features:**
- Profile image (80px circle)
- Site title
- Subtitle from `_config.yml`

### 2. Navigation Menu

```html
<nav class="sidebar-menu">
  {% for nav in site.data.navigation.main %}
  <div class="nav-item">
    <a href="{{ nav.url }}" class="nav-link">{{ nav.title }}</a>
    {% if nav.children %}
    <ul class="nav-submenu">
      {% for child in nav.children %}
      <li><a href="{{ child.url }}">{{ child.title }}</a></li>
      {% endfor %}
    </ul>
    {% endif %}
  </div>
  {% endfor %}
</nav>
```

**Features:**
- Reads from `_data/navigation.yml`
- Supports nested submenus
- Active page highlighting
- Hover effects

### 3. Dark Mode Toggle

```html
<div class="sidebar-toggle">
  <button id="dark-mode-toggle-sidebar" class="dark-mode-btn">
    <i class="fas fa-moon"></i>
    <span>Dark Mode</span>
  </button>
</div>
```

**Features:**
- Syncs with mobile toggle
- Persists preference in localStorage
- Icon changes (moon/sun)

### 4. Footer Section

```html
<footer class="sidebar-footer">
  <div class="social-links">
    {% for link in site.author.links %}
    <a href="{{ link.url }}">
      <i class="{{ link.icon }}"></i>
    </a>
    {% endfor %}
  </div>
  <p class="copyright">&copy; {{ 'now' | date: "%Y" }} {{ site.author.name }}</p>
  <p class="built-with">Built with <a href="https://jekyllrb.com/">Jekyll</a></p>
</footer>
```

**Features:**
- Social media icons
- Dynamic copyright year
- Built with attribution

## Responsive Behavior

### Desktop (>768px)

```scss
.sidebar-nav {
  position: fixed;
  left: 0;
  width: 280px;
  height: 100vh;
}

.main-content {
  margin-left: 280px;
}
```

- Sidebar always visible
- Content area offset by sidebar width
- Full navigation visible

### Tablet (768-1024px)

```scss
.sidebar-nav {
  width: 260px;
}

.main-content {
  margin-left: 260px;
}
```

- Slightly narrower sidebar
- Maintains fixed position

### Mobile (<768px)

```scss
.sidebar-nav {
  transform: translateX(-100%);
  width: 280px;
}

.sidebar-nav.active {
  transform: translateX(0);
}

.mobile-header {
  display: flex;
}
```

- Sidebar hidden by default
- Slides in from left when activated
- Mobile header with hamburger menu
- Overlay darkens background

## Styling Customization

### Colors

Edit in `_sass/custom/_sidebar-layout.scss`:

```scss
/* Light Mode */
.sidebar-nav {
  background: #ffffff;
  border-right: 1px solid #e0e0e0;
}

.nav-link {
  color: #333;
}

.nav-link.active {
  background: #e6f2ff;
  color: #0066cc;
  border-left-color: #0066cc;
}

/* Dark Mode */
.dark-mode .sidebar-nav {
  background: #1a1a1a;
  border-right-color: #333;
}

.dark-mode .nav-link {
  color: #ddd;
}

.dark-mode .nav-link.active {
  background: #1a3a5a;
  color: #66b3ff;
}
```

### Dimensions

```scss
/* Sidebar Width */
.sidebar-nav {
  width: 280px;  /* Desktop */
}

@media (max-width: 1024px) {
  .sidebar-nav {
    width: 260px;  /* Tablet */
  }
}

@media (max-width: 768px) {
  .sidebar-nav {
    width: 280px;  /* Mobile (slide-out) */
  }
}

/* Avatar Size */
.sidebar-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
```

### Typography

```scss
.site-title {
  font-size: 1.25rem;
  font-weight: 700;
}

.site-subtitle {
  font-size: 0.875rem;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
}

.nav-submenu li a {
  font-size: 0.875rem;
}
```

## JavaScript Functionality

### Mobile Menu Toggle

```javascript
const menuToggle = document.querySelector('.mobile-menu-toggle');
const sidebar = document.querySelector('.sidebar-nav');
const overlay = document.querySelector('.mobile-overlay');

menuToggle.addEventListener('click', function() {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});
```

### Dark Mode Sync

```javascript
function syncDarkMode() {
  const isDark = document.body.classList.contains('dark-mode');
  sidebarToggle.querySelector('i').className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  mobileToggle.querySelector('i').className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}

// Load preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}
syncDarkMode();
```

## Blog Posts Grid

Special styling for blog listing pages:

```scss
.blog-posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.blog-post-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.blog-post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

## Configuration

### Navigation Data

Edit `_data/navigation.yml`:

```yaml
main:
  - title: "Home"
    url: /
    
  - title: "Professional"
    url: /professional/
    children:
      - title: "Resume/CV"
        url: /professional/resume/
      - title: "Skills"
        url: /professional/skills/
```

### Site Config

Edit `_config.yml`:

```yaml
author:
  name: "Your Name"
  avatar: "/assets/images/profile.jpg"
  bio: "Your bio"
  links:
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/username"
```

## Accessibility

### Keyboard Navigation

- All links and buttons are keyboard accessible
- Focus states clearly visible
- Logical tab order

### ARIA Labels

```html
<button class="mobile-menu-toggle" aria-label="Toggle menu">
  <i class="fas fa-bars"></i>
</button>

<button id="dark-mode-toggle-sidebar" aria-label="Toggle dark mode">
  <i class="fas fa-moon"></i>
</button>
```

### Screen Readers

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images

## Performance

### CSS Optimization

```scss
// Compressed output
sass:
  style: compressed

// GPU acceleration
.sidebar-nav {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

### Smooth Animations

```scss
.sidebar-nav {
  transition: transform 0.3s ease;
}

.nav-link {
  transition: all 0.2s ease;
}

.blog-post-card {
  transition: all 0.3s ease;
}
```

## Browser Support

✅ **Modern Browsers**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

✅ **Mobile Browsers**
- iOS Safari 14+
- Chrome Mobile 90+
- Samsung Internet 14+

⚠️ **Fallbacks**
- CSS Grid with flexbox fallback
- Transform with position fallback
- Modern features with graceful degradation

## Troubleshooting

### Sidebar Not Showing

1. Check layout is set to `sidebar` in front matter
2. Verify `_sass/custom/_sidebar-layout.scss` is imported
3. Clear Jekyll cache: `bundle exec jekyll clean`
4. Rebuild site: `bundle exec jekyll serve`

### Mobile Menu Not Working

1. Check JavaScript is loading
2. Verify Font Awesome icons are loaded
3. Check browser console for errors
4. Test on different devices

### Dark Mode Not Persisting

1. Check localStorage is enabled
2. Verify JavaScript is running
3. Clear browser cache
4. Test in incognito mode

### Navigation Not Highlighting

1. Check `page.url` matches navigation URLs
2. Verify `_data/navigation.yml` structure
3. Inspect active class in browser DevTools

## Migration from Top Navigation

### Before (Minimal Mistakes Default)

```yaml
---
layout: single
title: "Page Title"
author_profile: true
---
```

### After (Sidebar Layout)

```yaml
---
layout: sidebar
title: "Page Title"
---
```

### Bulk Update

Use search and replace:
- Find: `layout: single`
- Replace: `layout: sidebar`

Or use command line:
```bash
find _pages -name "*.md" -exec sed -i 's/layout: single/layout: sidebar/g' {} +
```

## Best Practices

1. **Keep Navigation Organized** - Use logical grouping with submenus
2. **Limit Menu Items** - 6-8 top-level items maximum
3. **Use Clear Labels** - Descriptive, concise navigation text
4. **Test Responsiveness** - Check on multiple devices
5. **Maintain Consistency** - Use sidebar layout site-wide
6. **Update Social Links** - Keep footer links current
7. **Optimize Images** - Use appropriate avatar size (80x80px)
8. **Monitor Performance** - Check page load times

## Future Enhancements

Potential improvements:

- [ ] Collapsible submenu sections
- [ ] Search functionality in sidebar
- [ ] Breadcrumb navigation
- [ ] Sidebar width customization
- [ ] Multiple sidebar themes
- [ ] Animated transitions
- [ ] Sticky section headers
- [ ] Quick links section

## Support

For issues or questions:

1. Check this documentation
2. Review `_layouts/sidebar.html`
3. Inspect `_sass/custom/_sidebar-layout.scss`
4. Test in browser DevTools
5. Check Jekyll build output

---

**Last Updated:** November 25, 2024
**Version:** 1.0.0
**Compatibility:** Jekyll 4.x, Minimal Mistakes 4.26.2