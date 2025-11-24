---
layout: single
title: "Portfolio"
permalink: /portfolio/
author_profile: true
toc: true
toc_label: "Portfolio Sections"
toc_icon: "briefcase"
toc_sticky: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/portfolio-header.jpg
  caption: "Building innovative solutions"
---

## Overview

Welcome to my portfolio! Here you'll find a collection of projects spanning web development, data science, machine learning, and more. Each project represents a unique challenge and learning opportunity, showcasing my technical skills and problem-solving abilities.

---

## Featured Projects

<div class="feature-grid">
{% assign featured_projects = site.projects | where: "featured", true | sort: "date" | reverse %}
{% for project in featured_projects limit:3 %}
  <div class="feature-card">
    {% if project.image %}
    <div class="feature-image">
      <a href="{{ project.url | relative_url }}">
        <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" loading="lazy">
      </a>
    </div>
    {% endif %}
    <div class="feature-content">
      <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
      <p>{{ project.excerpt | strip_html | truncate: 150 }}</p>
      <div class="feature-meta">
        {% if project.technologies %}
        <div class="tech-preview">
          {% for tech in project.technologies limit:3 %}
          <span class="tech-badge">{{ tech }}</span>
          {% endfor %}
          {% if project.technologies.size > 3 %}
          <span class="tech-badge">+{{ project.technologies.size | minus: 3 }} more</span>
          {% endif %}
        </div>
        {% endif %}
        <a href="{{ project.url | relative_url }}" class="read-more">
          View Project <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
{% endfor %}
</div>

---

## All Projects

### Web Development {#web-development}

<div class="project-list">
{% assign web_projects = site.projects | where_exp: "project", "project.categories contains 'web-development'" | sort: "date" | reverse %}
{% for project in web_projects %}
  <div class="project-item">
    <div class="project-item-header">
      <h4><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h4>
      <span class="project-date">{{ project.date | date: "%B %Y" }}</span>
    </div>
    <p class="project-description">{{ project.excerpt | strip_html | truncate: 200 }}</p>
    {% if project.technologies %}
    <div class="project-tech">
      {% for tech in project.technologies limit:5 %}
      <span class="tech-tag-small">{{ tech }}</span>
      {% endfor %}
    </div>
    {% endif %}
    <div class="project-links">
      <a href="{{ project.url | relative_url }}" class="btn btn--small btn--primary">Details</a>
      {% if project.github %}
      <a href="{{ project.github }}" class="btn btn--small btn--secondary" target="_blank" rel="noopener">
        <i class="fab fa-github"></i> GitHub
      </a>
      {% endif %}
      {% if project.demo %}
      <a href="{{ project.demo }}" class="btn btn--small btn--info" target="_blank" rel="noopener">
        <i class="fas fa-external-link-alt"></i> Demo
      </a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

### Data Science & Machine Learning {#data-science}

<div class="project-list">
{% assign ds_projects = site.projects | where_exp: "project", "project.categories contains 'data-science' or project.categories contains 'machine-learning'" | sort: "date" | reverse %}
{% for project in ds_projects %}
  <div class="project-item">
    <div class="project-item-header">
      <h4><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h4>
      <span class="project-date">{{ project.date | date: "%B %Y" }}</span>
    </div>
    <p class="project-description">{{ project.excerpt | strip_html | truncate: 200 }}</p>
    {% if project.technologies %}
    <div class="project-tech">
      {% for tech in project.technologies limit:5 %}
      <span class="tech-tag-small">{{ tech }}</span>
      {% endfor %}
    </div>
    {% endif %}
    <div class="project-links">
      <a href="{{ project.url | relative_url }}" class="btn btn--small btn--primary">Details</a>
      {% if project.github %}
      <a href="{{ project.github }}" class="btn btn--small btn--secondary" target="_blank" rel="noopener">
        <i class="fab fa-github"></i> GitHub
      </a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

### Mobile Development {#mobile}

<div class="project-list">
{% assign mobile_projects = site.projects | where_exp: "project", "project.categories contains 'mobile'" | sort: "date" | reverse %}
{% for project in mobile_projects %}
  <div class="project-item">
    <div class="project-item-header">
      <h4><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h4>
      <span class="project-date">{{ project.date | date: "%B %Y" }}</span>
    </div>
    <p class="project-description">{{ project.excerpt | strip_html | truncate: 200 }}</p>
    {% if project.technologies %}
    <div class="project-tech">
      {% for tech in project.technologies limit:5 %}
      <span class="tech-tag-small">{{ tech }}</span>
      {% endfor %}
    </div>
    {% endif %}
    <div class="project-links">
      <a href="{{ project.url | relative_url }}" class="btn btn--small btn--primary">Details</a>
      {% if project.github %}
      <a href="{{ project.github }}" class="btn btn--small btn--secondary" target="_blank" rel="noopener">
        <i class="fab fa-github"></i> GitHub
      </a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

---

## Academic Work

Explore my academic projects, research papers, and university coursework:

- [Research Publications](/academic/publications/) - Published papers and conference presentations
- [University Projects](/portfolio/university/) - Academic coursework and capstone projects
- [Independent Study](/portfolio/independent/) - Self-directed learning projects

---

## Industry Experience

For detailed information about my professional work experience:

- [Industry Projects](/portfolio/industry/) - Commercial projects and enterprise solutions
- [Corporate Training](/portfolio/training/) - Training programs and workshops delivered
- [Client Work](/portfolio/clients/) - Consulting and freelance projects

---

## Technologies & Skills

Across all projects, I've worked with a diverse range of technologies:

**Languages:** Python, JavaScript, TypeScript, Java, C++, SQL, R  
**Web:** React, Vue.js, Django, Flask, Node.js, Express  
**Data:** Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch  
**Mobile:** React Native, Flutter, Swift  
**DevOps:** Docker, Kubernetes, CI/CD, AWS, Azure  
**Databases:** PostgreSQL, MongoDB, Redis, MySQL  
**Tools:** Git, VS Code, Jupyter, Postman

For a detailed breakdown of my skills and proficiency levels, visit my [Skills Matrix](/professional/skills/).

---

## Get in Touch

Interested in collaborating or have a project in mind? I'm always open to discussing new opportunities and interesting challenges.

[Contact Me](/professional/contact/){: .btn .btn--primary .btn--large}
[View Resume](/professional/resume/){: .btn .btn--info .btn--large}

<style>
/* Feature Grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.feature-card {
  background: var(--background-color, #fff);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.feature-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-image img {
  transform: scale(1.1);
}

.feature-content {
  padding: 1.5rem;
}

.feature-content h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.feature-content h3 a {
  color: var(--text-color, #333);
  text-decoration: none;
  transition: color 0.3s ease;
}

.feature-content h3 a:hover {
  color: var(--primary-color, #007bff);
}

.feature-content p {
  color: var(--muted-text-color, #666);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.feature-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--primary-color, #007bff);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.read-more {
  color: var(--primary-color, #007bff);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: var(--link-hover-color, #0056b3);
}

/* Project List */
.project-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.project-item {
  background: var(--background-color, #fff);
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 8px;
  padding: 1.5rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.project-item:hover {
  border-color: var(--primary-color, #007bff);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.1);
}

.project-item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-item-header h4 {
  margin: 0;
  font-size: 1.25rem;
}

.project-item-header h4 a {
  color: var(--text-color, #333);
  text-decoration: none;
  transition: color 0.3s ease;
}

.project-item-header h4 a:hover {
  color: var(--primary-color, #007bff);
}

.project-date {
  color: var(--muted-text-color, #666);
  font-size: 0.9rem;
}

.project-description {
  color: var(--text-color, #333);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag-small {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  background: var(--background-color-alt, #f8f9fa);
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 10px;
  font-size: 0.8rem;
  color: var(--muted-text-color, #666);
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.project-links .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-links .btn:hover {
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .project-item-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .project-links {
    width: 100%;
  }
  
  .project-links .btn {
    flex: 1;
    justify-content: center;
  }
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .feature-card,
  .project-item {
    --background-color: #1a1a1a;
    --text-color: #e0e0e0;
    --muted-text-color: #a0a0a0;
    --border-color: #404040;
    --background-color-alt: #2a2a2a;
    --primary-color: #4da3ff;
    --link-hover-color: #80b3ff;
  }
}
</style>