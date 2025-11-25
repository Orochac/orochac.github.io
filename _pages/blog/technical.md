---
layout: sidebar
title: "Technical Blog"
permalink: /blog/technical/
author_profile: true
header:
  overlay_color: "#667eea"
  overlay_filter: "0.5"
  overlay_image: /assets/images/technical-header.jpg
  caption: "Code, data, and everything in between"
---

## Technical Posts

Welcome to my technical blog! Here I share tutorials, insights, and deep-dives into programming, data science, software development, and technology.

---

## Latest Technical Posts

<div class="technical-posts-list">
{% assign technical_posts = site.posts | where_exp: "post", "post.categories contains 'technical'" | sort: "date" | reverse %}
{% if technical_posts.size > 0 %}
  {% for post in technical_posts %}
  <article class="tech-post-item">
    <div class="tech-post-header">
      {% if post.header.teaser %}
      <div class="tech-post-image">
        <a href="{{ post.url | relative_url }}">
          <img src="{{ post.header.teaser | relative_url }}" alt="{{ post.title }}" loading="lazy">
        </a>
      </div>
      {% endif %}
      
      <div class="tech-post-info">
        <div class="tech-post-meta">
          <span class="post-date">
            <i class="far fa-calendar"></i> {{ post.date | date: "%B %d, %Y" }}
          </span>
          {% if post.read_time %}
          <span class="read-time">
            <i class="far fa-clock"></i> {{ post.read_time }}
          </span>
          {% endif %}
        </div>
        
        <h3 class="tech-post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        
        {% if post.excerpt %}
        <p class="tech-post-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
        {% endif %}
        
        {% if post.tags %}
        <div class="tech-post-tags">
          {% for tag in post.tags %}
          <span class="tech-tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
        
        <a href="{{ post.url | relative_url }}" class="tech-read-more">
          Read Full Article <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </article>
  {% endfor %}
{% else %}
  <div class="no-posts-message">
    <i class="fas fa-code fa-3x"></i>
    <h3>No Technical Posts Yet</h3>
    <p>Technical posts will appear here once published. Check back soon!</p>
    <a href="/blog/" class="btn btn--primary">View All Posts</a>
  </div>
{% endif %}
</div>

---

## Topics I Write About

<div class="topics-grid">
  <div class="topic-card">
    <div class="topic-icon">
      <i class="fab fa-python"></i>
    </div>
    <h4>Python & Data Science</h4>
    <p>Tutorials on Python programming, data analysis with Pandas, machine learning, and scientific computing.</p>
  </div>
  
  <div class="topic-card">
    <div class="topic-icon">
      <i class="fab fa-js"></i>
    </div>
    <h4>Web Development</h4>
    <p>Modern web development with JavaScript, React, Node.js, and full-stack application architecture.</p>
  </div>
  
  <div class="topic-card">
    <div class="topic-icon">
      <i class="fas fa-brain"></i>
    </div>
    <h4>Machine Learning</h4>
    <p>Deep learning, neural networks, model training, and practical ML applications.</p>
  </div>
  
  <div class="topic-card">
    <div class="topic-icon">
      <i class="fas fa-database"></i>
    </div>
    <h4>Databases & APIs</h4>
    <p>Database design, SQL optimization, REST APIs, GraphQL, and backend development.</p>
  </div>
  
  <div class="topic-card">
    <div class="topic-icon">
      <i class="fas fa-cloud"></i>
    </div>
    <h4>DevOps & Cloud</h4>
    <p>Docker, Kubernetes, CI/CD pipelines, AWS, Azure, and infrastructure as code.</p>
  </div>
  
  <div class="topic-card">
    <div class="topic-icon">
      <i class="fas fa-chart-line"></i>
    </div>
    <h4>Data Visualization</h4>
    <p>Creating effective visualizations with D3.js, Plotly, Matplotlib, and interactive dashboards.</p>
  </div>
</div>

---

## Popular Series

<div class="series-list">
  <div class="series-item">
    <h4><i class="fas fa-book-open"></i> Python for Data Science</h4>
    <p>A comprehensive series covering Python fundamentals, NumPy, Pandas, and data analysis techniques.</p>
    <span class="series-count">Coming Soon</span>
  </div>
  
  <div class="series-item">
    <h4><i class="fas fa-book-open"></i> Building Modern Web Apps</h4>
    <p>Step-by-step guide to building full-stack applications with React and Django.</p>
    <span class="series-count">Coming Soon</span>
  </div>
  
  <div class="series-item">
    <h4><i class="fas fa-book-open"></i> Machine Learning Fundamentals</h4>
    <p>Understanding ML algorithms, model evaluation, and practical implementation.</p>
    <span class="series-count">Coming Soon</span>
  </div>
</div>

---

## Resources

Looking for more technical content? Check out these resources:

- [GitHub Repositories](https://github.com/orochac) - Code examples and projects
- [Portfolio](/portfolio/) - Detailed project case studies
- [Skills Matrix](/professional/skills/) - My technical expertise

---

## Stay Updated

<div class="subscribe-section">
  <h3>Get Notified of New Posts</h3>
  <p>Follow me on GitHub to stay updated with my latest technical content and projects.</p>
  <a href="https://github.com/orochac" class="btn btn--primary btn--large" target="_blank" rel="noopener">
    <i class="fab fa-github"></i> Follow on GitHub
  </a>
</div>

<style>
/* Technical Posts List */
.technical-posts-list {
  margin: 2rem 0;
}

.tech-post-item {
  background: var(--background-color, #fff);
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 12px;
  margin-bottom: 2rem;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.tech-post-item:hover {
  border-color: #667eea;
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.2);
}

.tech-post-header {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

.tech-post-image {
  width: 250px;
  height: 200px;
  overflow: hidden;
}

.tech-post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.tech-post-item:hover .tech-post-image img {
  transform: scale(1.1);
}

.tech-post-info {
  padding: 1.5rem 1.5rem 1.5rem 0;
  display: flex;
  flex-direction: column;
}

.tech-post-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: var(--muted-text-color, #666);
}

.tech-post-meta i {
  margin-right: 0.25rem;
}

.tech-post-title {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  line-height: 1.3;
}

.tech-post-title a {
  color: var(--text-color, #333);
  text-decoration: none;
  transition: color 0.3s ease;
}

.tech-post-title a:hover {
  color: #667eea;
}

.tech-post-excerpt {
  color: var(--muted-text-color, #666);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.tech-post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.tech-read-more {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  margin-top: auto;
}

.tech-read-more:hover {
  color: #764ba2;
}

.tech-read-more i {
  margin-left: 0.25rem;
  transition: transform 0.3s ease;
}

.tech-read-more:hover i {
  transform: translateX(4px);
}

/* No Posts Message */
.no-posts-message {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--background-color-alt, #f8f9fa);
  border-radius: 12px;
}

.no-posts-message i {
  color: #667eea;
  margin-bottom: 1rem;
}

.no-posts-message h3 {
  margin-bottom: 1rem;
  color: var(--text-color, #333);
}

.no-posts-message p {
  color: var(--muted-text-color, #666);
  margin-bottom: 2rem;
}

/* Topics Grid */
.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.topic-card {
  background: var(--background-color, #fff);
  border: 2px solid var(--border-color, #e0e0e0);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.topic-card:hover {
  border-color: #667eea;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
}

.topic-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
}

.topic-card h4 {
  margin: 0 0 0.75rem 0;
  color: var(--text-color, #333);
}

.topic-card p {
  font-size: 0.9rem;
  color: var(--muted-text-color, #666);
  line-height: 1.5;
  margin: 0;
}

/* Series List */
.series-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.series-item {
  background: var(--background-color, #fff);
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.series-item h4 {
  margin: 0 0 0.75rem 0;
  color: var(--text-color, #333);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.series-item h4 i {
  color: #667eea;
}

.series-item p {
  color: var(--muted-text-color, #666);
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.series-count {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #667eea;
  color: white;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Subscribe Section */
.subscribe-section {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin: 2rem 0;
}

.subscribe-section h3 {
  margin: 0 0 1rem 0;
  color: white;
}

.subscribe-section p {
  margin-bottom: 2rem;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .tech-post-header {
    grid-template-columns: 1fr;
  }
  
  .tech-post-image {
    width: 100%;
    height: 200px;
  }
  
  .tech-post-info {
    padding: 1.5rem;
  }
  
  .topics-grid {
    grid-template-columns: 1fr;
  }
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .tech-post-item,
  .topic-card,
  .series-item {
    --background-color: #1a1a1a;
    --background-color-alt: #2a2a2a;
    --text-color: #e0e0e0;
    --muted-text-color: #a0a0a0;
    --border-color: #404040;
  }
  
  .no-posts-message {
    --background-color-alt: #2a2a2a;
  }
}
</style>