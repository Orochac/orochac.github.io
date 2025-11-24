# Ultimate Personal Brand Hub - Architecture Plan

## Project Overview
Transform Oscar Rochanakij's GitHub Pages site into a comprehensive personal brand hub that balances professional content (resume, portfolio, academic work) with personal interests (travel blog, photography), emphasizing unique personality and experiences.

## Design Philosophy
- **Professional yet Personal**: Clean, modern design that showcases technical expertise while revealing personality
- **Content-First**: Fast loading, accessible, mobile-responsive
- **GitHub Pages Native**: Work within platform limitations, no external dependencies except image hosting
- **Scalable Structure**: Easy to maintain and update over time

## Site Architecture

### 1. Information Architecture

```
orochac.github.io/
├── Home (/)
│   ├── Hero section with dynamic intro
│   ├── Quick stats/highlights
│   ├── Featured projects (3-4)
│   ├── Latest blog posts
│   └── Call-to-action sections
│
├── Professional (/professional/)
│   ├── Resume/CV (/professional/resume/)
│   │   ├── Interactive timeline
│   │   ├── Work experience with achievements
│   │   ├── Education details
│   │   └── PDF download link
│   ├── Skills (/professional/skills/)
│   │   ├── Technical skills matrix
│   │   ├── Tools & technologies
│   │   ├── Certifications
│   │   └── Proficiency indicators
│   └── Contact (/professional/contact/)
│       ├── Social media links
│       ├── Email (with anti-spam measures)
│       └── LinkedIn, GitHub profiles
│
├── Portfolio (/portfolio/)
│   ├── Projects Overview (/portfolio/)
│   ├── Individual Project Pages (/portfolio/project-name/)
│   │   ├── Description & objectives
│   │   ├── Technologies used
│   │   ├── Challenges & solutions
│   │   ├── Results & impact
│   │   ├── Screenshots/demos
│   │   └── GitHub links
│   └── Industry Projects (/portfolio/industry/)
│       └── Professional work and contributions
│
├── Academic (/academic/)
│   ├── Research (/academic/research/)
│   │   ├── Publications and papers
│   │   ├── Thesis work
│   │   └── Research interests
│   ├── University Projects (/academic/university/)
│   │   ├── Course projects
│   │   ├── Assignments and coursework
│   │   └── Academic achievements
│   ├── Independent Study (/academic/independent/)
│   │   ├── Self-directed research
│   │   ├── Personal explorations
│   │   ├── Learning projects
│   │   └── Mathematical investigations
│   └── Teaching & Mentoring (/academic/teaching/)
│       ├── Tutoring experience
│       ├── Study resources created
│       └── Knowledge sharing
│
├── Travel (/travel/)
│   ├── Travel Map (/travel/map/)
│   │   └── Interactive map with visited locations
│   ├── Photo Galleries (/travel/gallery/)
│   │   ├── By location
│   │   ├── Cloudinary-hosted with lazy loading
│   │   └── Links to Google Photos albums
│   └── Trip Summaries (/travel/trips/)
│       └── Detailed trip pages with itineraries
│
├── Blog (/blog/)
│   ├── All Posts (/blog/)
│   ├── Technical Posts (/blog/technical/)
│   │   ├── Programming tutorials
│   │   ├── Math/CS concepts
│   │   └── Project deep-dives
│   └── Travel Posts (/blog/travel/)
│       ├── Travel stories
│       ├── Cultural experiences
│       └── Photography posts
│
└── About (/about/)
    ├── Personal story
    ├── Interests & hobbies
    ├── Philosophy & values
    └── Fun facts
```

### 2. Jekyll Collections Structure

```yaml
collections:
  projects:
    output: true
    permalink: /portfolio/:name/
  industry_projects:
    output: true
    permalink: /portfolio/industry/:name/
  research:
    output: true
    permalink: /academic/research/:name/
  university_projects:
    output: true
    permalink: /academic/university/:name/
  independent_study:
    output: true
    permalink: /academic/independent/:name/
  travel_destinations:
    output: true
    permalink: /travel/destinations/:name/
  skills:
    output: false
```

### 3. Page Layouts

#### Custom Layouts to Create:
1. **home.html** - Enhanced homepage with sections
2. **resume.html** - Timeline-based CV layout
3. **skills-matrix.html** - Visual skills display
4. **project.html** - Detailed project showcase
5. **travel-gallery.html** - Photo gallery with Cloudinary
6. **travel-map.html** - Interactive map integration
7. **blog-technical.html** - Technical blog post layout
8. **blog-travel.html** - Travel blog post layout

### 4. Navigation Structure

```yaml
main:
  - title: "Home"
    url: /
  - title: "Professional"
    sublinks:
      - title: "Resume"
        url: /professional/resume/
      - title: "Skills"
        url: /professional/skills/
      - title: "Contact"
        url: /professional/contact/
  - title: "Portfolio"
    sublinks:
      - title: "Projects"
        url: /portfolio/
      - title: "Industry Work"
        url: /portfolio/industry/
  - title: "Academic"
    sublinks:
      - title: "Research"
        url: /academic/research/
      - title: "University Projects"
        url: /academic/university/
      - title: "Independent Study"
        url: /academic/independent/
      - title: "Teaching"
        url: /academic/teaching/
  - title: "Travel"
    sublinks:
      - title: "Map"
        url: /travel/map/
      - title: "Galleries"
        url: /travel/gallery/
      - title: "Trips"
        url: /travel/trips/
  - title: "Blog"
    sublinks:
      - title: "All Posts"
        url: /blog/
      - title: "Technical"
        url: /blog/technical/
      - title: "Travel"
        url: /blog/travel/
  - title: "About"
    url: /about/
```

## Technical Implementation

### 1. Image Hosting Strategy

#### GitHub Repository (Essential Images ~100MB)
- Profile photo
- Logo/branding
- Project screenshots (key images)
- Icons and UI elements
- Location: `/assets/images/`

#### Cloudinary (Travel Galleries ~25GB free tier)
- Travel photo galleries
- High-resolution images
- Automatic optimization
- Responsive image delivery
- Implementation:
  ```html
  <img src="https://res.cloudinary.com/[cloud-name]/image/upload/c_scale,w_auto,dpr_auto/[image-id]" 
       loading="lazy" 
       alt="Description">
  ```

#### Google Photos (Backup & Full Resolution)
- Embedded albums for full-resolution viewing
- Backup for all travel photos
- Implementation: Embed album links

### 2. Dark Mode Implementation

Using CSS custom properties and JavaScript toggle:
```css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --accent-color: #0066cc;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #e0e0e0;
  --accent-color: #4da6ff;
}
```

### 3. Interactive Travel Map

Options within GitHub Pages limitations:
1. **Leaflet.js** - Open-source JavaScript library
2. **Google My Maps** - Embedded iframe
3. **Mapbox GL JS** - Free tier available

Recommended: Leaflet.js with OpenStreetMap tiles

### 4. Performance Optimization

- Lazy loading for images
- Minified CSS/JS
- Optimized image formats (WebP with fallbacks)
- CDN delivery via Cloudinary
- Minimal external dependencies
- Service worker for offline capability (optional)

### 5. SEO & Metadata

```yaml
# Enhanced _config.yml settings
title: "Oscar Rochanakij | Mathematics, Computer Science & Travel"
description: "Personal portfolio and blog of Oscar Rochanakij - showcasing work in mathematics, computer science, and travel adventures across Asia"
keywords: "Oscar Rochanakij, Mathematics, Computer Science, Portfolio, Travel Blog, Melbourne"

# Open Graph
og_image: /assets/images/og-image.jpg
twitter:
  card: summary_large_image
  username: [if applicable]
```

## Content Templates

### Project Template
```yaml
---
layout: project
title: "Project Name"
date: 2024-01-01
categories: [web, python, data-science]
technologies: [Python, Django, PostgreSQL]
github: https://github.com/username/repo
demo: https://demo-link.com
featured: true
image: /assets/images/projects/project-name.jpg
---

## Overview
Brief description

## Problem
What problem does this solve?

## Solution
How did you solve it?

## Technologies
- Tech 1
- Tech 2

## Challenges & Learnings
What did you learn?

## Results
Impact and outcomes
```

### Travel Destination Template
```yaml
---
layout: travel-destination
title: "Sumatra, Indonesia"
date: 2024-07-01
location: "Sumatra, Indonesia"
coordinates: [0.5897, 101.3431]
duration: "8 weeks"
highlights: [Nature, Culture, Adventure]
gallery_cloudinary_folder: "sumatra-2024"
google_photos_album: "album-link"
featured_image: "cloudinary-id"
---

## Overview
Trip summary

## Highlights
- Highlight 1
- Highlight 2

## Practical Information
Travel tips and recommendations
```

## File Structure

```
orochac.github.io/
├── _config.yml (enhanced configuration)
├── index.md (new homepage)
├── Gemfile
├── README.md
│
├── _data/
│   ├── navigation.yml (enhanced with dropdowns)
│   ├── skills.yml (skills data)
│   ├── timeline.yml (work/education timeline)
│   └── travel_stats.yml (travel statistics)
│
├── _includes/
│   ├── head/
│   │   └── custom.html (dark mode, analytics)
│   ├── footer/
│   │   └── custom.html
│   ├── hero.html
│   ├── project-card.html
│   ├── skill-badge.html
│   ├── timeline-item.html
│   └── gallery-cloudinary.html
│
├── _layouts/
│   ├── home.html
│   ├── resume.html
│   ├── skills-matrix.html
│   ├── project.html
│   ├── travel-gallery.html
│   ├── travel-map.html
│   └── travel-destination.html
│
├── _sass/
│   ├── custom/
│   │   ├── _variables.scss
│   │   ├── _dark-mode.scss
│   │   ├── _hero.scss
│   │   ├── _timeline.scss
│   │   ├── _skills.scss
│   │   └── _gallery.scss
│
├── assets/
│   ├── css/
│   │   └── main.scss (import custom styles)
│   ├── js/
│   │   ├── dark-mode.js
│   │   ├── lazy-load.js
│   │   ├── travel-map.js
│   │   └── cloudinary-gallery.js
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── og-image.jpg
│   │   └── projects/ (project screenshots)
│   └── files/
│       └── Oscar_Rochanakij_CV.pdf
│
├── _pages/
│   ├── professional/
│   │   ├── resume.md
│   │   ├── skills.md
│   │   └── contact.md
│   ├── portfolio/
│   │   ├── index.md
│   │   └── industry.md
│   ├── academic/
│   │   ├── research.md
│   │   ├── university.md
│   │   ├── independent.md
│   │   └── teaching.md
│   ├── travel/
│   │   ├── map.md
│   │   ├── gallery.md
│   │   └── trips.md
│   ├── blog/
│   │   ├── index.md
│   │   ├── technical.md
│   │   └── travel.md
│   └── about.md
│
├── _projects/ (collection)
│   ├── project-1.md
│   ├── project-2.md
│   └── ...
│
├── _industry_projects/ (collection)
│   ├── industry-project-1.md
│   └── ...
│
├── _research/ (collection)
│   ├── paper-1.md
│   ├── thesis.md
│   └── ...
│
├── _university_projects/ (collection)
│   ├── course-project-1.md
│   └── ...
│
├── _independent_study/ (collection)
│   ├── math-exploration-1.md
│   └── ...
│
├── _travel_destinations/ (collection)
│   ├── sumatra.md
│   ├── singapore.md
│   └── ...
│
├── _posts/
│   ├── technical/
│   │   └── YYYY-MM-DD-title.md
│   └── travel/
│       └── YYYY-MM-DD-title.md
│
└── docs/
    ├── CONTENT_GUIDE.md (how to add content)
    ├── CLOUDINARY_SETUP.md (image hosting setup)
    └── MAINTENANCE.md (ongoing maintenance)
```

## Implementation Phases

### Phase 1: Foundation (Core Structure)
1. Update `_config.yml` with enhanced settings
2. Create new directory structure
3. Set up collections for projects, research, travel
4. Create basic custom layouts
5. Implement new navigation with dropdowns

### Phase 2: Professional Content
1. Build resume/CV page with timeline
2. Create skills matrix page
3. Set up project collection structure
4. Create project templates and examples
5. Add academic/research section
6. Create contact page

### Phase 3: Travel Content
1. Set up Cloudinary account and integration
2. Create travel map page with Leaflet.js
3. Build photo gallery system
4. Create travel destination collection
5. Migrate existing travel blog posts
6. Add Google Photos album links

### Phase 4: Blog System
1. Reorganize blog posts into categories
2. Create separate technical and travel blog indexes
3. Update blog post layouts
4. Add category and tag filtering
5. Implement related posts

### Phase 5: Enhancement & Polish
1. Implement dark mode toggle
2. Add lazy loading for images
3. Optimize performance
4. Enhance SEO metadata
5. Add analytics setup
6. Create documentation for content updates
7. Test responsive design
8. Final QA and launch

## Key Features Summary

### Professional Features
- ✅ Interactive timeline resume
- ✅ Skills matrix with proficiency levels (including soft skills)
- ✅ Downloadable PDF CV
- ✅ Project portfolio with detailed case studies
- ✅ Industry work showcase
- ✅ Professional contact information

### Academic Features
- ✅ Research papers and thesis
- ✅ University projects from all degrees
- ✅ Independent study showcase
- ✅ Teaching and mentoring experience

### Communication Features
- ✅ Teaching and education showcase
- ✅ Corporate training materials
- ✅ Client workshop highlights
- ✅ Tutorial blogs and explainer videos
- ✅ Speaking engagements and presentations
- ✅ Documentation and knowledge sharing

### Personal Features
- ✅ Interactive travel map
- ✅ Photo galleries by location (Cloudinary)
- ✅ Travel blog with stories
- ✅ Trip summaries and itineraries
- ✅ Personal interests and about section

### Technical Features
- ✅ Dark mode toggle
- ✅ Lazy loading images
- ✅ Mobile responsive
- ✅ Fast loading (optimized images)
- ✅ SEO optimized
- ✅ Accessible design
- ✅ GitHub Pages compatible

### Content Management
- ✅ Easy-to-update collections
- ✅ Content templates
- ✅ Documentation for maintenance
- ✅ Scalable structure

## GitHub Pages Constraints & Solutions

| Constraint | Solution |
|------------|----------|
| 1GB repo size limit | Use Cloudinary for large images |
| Limited plugins | Use only GitHub-approved plugins |
| No server-side processing | Use client-side JavaScript for interactivity |
| No databases | Use YAML data files and collections |
| Static site only | Pre-generate all content with Jekyll |
| No custom domains (free) | Use orochac.github.io subdomain |

## Maintenance & Updates

### Regular Updates
- Add new blog posts to `_posts/technical/` or `_posts/travel/`
- Add new projects to `_projects/` collection
- Update resume in `_pages/professional/resume.md`
- Upload new photos to Cloudinary
- Update skills in `_data/skills.yml`

### Periodic Reviews
- Update CV PDF quarterly
- Review and update project descriptions
- Archive old blog posts if needed
- Update travel map with new destinations
- Refresh homepage featured content

## Success Metrics

### Professional Goals
- Clear presentation of skills and experience
- Easy access to downloadable CV
- Showcase of best projects
- Professional online presence

### Personal Goals
- Share travel experiences and photos
- Document adventures
- Express personality and interests
- Connect with like-minded people

### Technical Goals
- Fast loading (< 3 seconds)
- Mobile responsive (100% usability)
- Accessible (WCAG AA compliance)
- SEO optimized (good search rankings)
- Easy to maintain and update

## Next Steps

1. Review this architecture plan
2. Confirm approach and priorities
3. Begin Phase 1 implementation
4. Iterate based on feedback
5. Launch enhanced site

---

**Note**: This plan is designed to work entirely within GitHub Pages limitations while creating a professional, feature-rich personal website. All features are achievable with static site generation, client-side JavaScript, and external image hosting.