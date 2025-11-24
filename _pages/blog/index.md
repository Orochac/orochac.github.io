---
layout: single
title: "Blog"
permalink: /blog/
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/blog-header.jpg
  caption: "Sharing knowledge and experiences"
---

## Welcome to My Blog

I write about two main topics: **technical content** covering programming, data science, and software development, and **travel experiences** documenting my adventures around the world.

---

## Latest Posts

<div class="post-grid">
{% assign latest_posts = site.posts | sort: "date" | reverse %}
{% for post in latest_posts limit:6 %}
  <article class="post-card">
    {% if post.header.teaser %}
    <div class="post-image">
      <a href="{{ post.url | relative_url }}">
        <img src="{{ post.header.teaser | relative_url }}" alt="{{ post.title }}" loading="lazy">
      </a>
    </div>
    {% endif %}
    
    <div class="post-content">
      <div class="post-meta">
        <span class="post-date">
          <i class="far fa-calendar"></i> {{ post.date | date: "%B %d, %Y" }}
        </span>
        {% if post.categories %}
        <span class="post-category">
          {% for category in post.categories limit:1 %}
          <a href="/blog/{{ category }}/" class="category-badge category-{{ category }}">
            {{ category | capitalize }}
          </a>
          {% endfor %}
        </span>
        {% endif %}
      </div>
      
      <h3 class="post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      
      {% if post.excerpt %}
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
      {% endif %}
      
      <div class="post-footer">
        {% if post.tags %}
        <div class="post-tags">
          {% for tag in post.tags limit:3 %}
          <span class="tag-small">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
        
        <a href="{{ post.url | relative_url }}" class="read-more-link">
          Read More <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </article>
{% endfor %}
</div>

---

## Browse by Category

<div class="category-cards">
  <div class="category-card technical-card">
    <div class="category-icon">
      <i class="fas fa-code"></i>
    </div>
    <h3>Technical</h3>
    <p>Programming tutorials, data science insights, software development best practices, and technical deep-dives.</p>
    <div class="category-stats">
      {% assign technical_count = site.posts | where_exp: "post", "post.categories contains 'technical'" | size %}
      <span class="post-count">{{ technical_count }} posts</span>
    </div>
    <a href="/blog/technical/" class="btn btn--primary">
      View Technical Posts <i class="fas fa-arrow-right"></i>
    </a>
  </div>
  
  <div class="category-card travel-card">
    <div class="category-icon">
      <i class="fas fa-globe-asia"></i>
    </div>
    <h3>Travel</h3>
    <p>Travel stories, destination guides, photography, cultural experiences, and adventure tales from around the world.</p>
    <div class="category-stats">
      {% assign travel_count = site.posts | where_exp: "post", "post.categories contains 'travel'" | size %}
      <span class="post-count">{{ travel_count }} posts</span>
    </div>
    <a href="/blog/travel/" class="btn btn--info">
      View Travel Posts <i class="fas fa-arrow-right"></i>
    </a>
  </div>
</div>

---

## Popular Tags

<div class="tag-cloud">
{% assign all_tags = site.posts | map: 'tags' | join: ',' | split: ',' | uniq | sort %}
{% for tag in all_tags %}
  {% assign tag_posts = site.posts | where_exp: "post", "post.tags contains tag" %}
  {% if tag_posts.size > 0 %}
  <a href="/blog/tags/#{{ tag | slugify }}" class="tag-cloud-item" style="font-size: {{ tag_posts.size | times: 0.2 | plus: 1 }}rem;">
    {{ tag }}
  </a>
  {% endif %}
{% endfor %}
</div>

---

## Subscribe

Stay updated with my latest posts! Follow me on social media or check back regularly for new content.

<div class="social-subscribe">
  <a href="https://github.com/orochac" class="social-btn github-btn" target="_blank" rel="noopener">
    <i class="fab fa-github"></i> GitHub
  </a>
  <a href="https://instagram.com/oscarrchkij" class="social-btn instagram-btn" target="_blank" rel="noopener">
    <i class="fab fa-instagram"></i> Instagram
  </a>
  <a href="mailto:o.rochanakij@protonmail.com" class="social-btn email-btn">
    <i class="fas fa-envelope"></i> Email
  </a>
</div>

<style>
/* Post Grid */
.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.post-card {
  background: var(--background-color, #fff);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.post-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.post-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.1);
}

.post-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: var(--muted-text-color, #666);
}

.post-date i {
  margin-right: 0.25rem;
}

.category-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.8rem;
  transition: opacity 0.3s ease;
}

.category-badge:hover {
  opacity: 0.8;
}

.category-technical {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.category-travel {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.post-title {
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  line-height: 1.4;
}

.post-title a {
  color: var(--text-color, #333);
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-title a:hover {
  color: var(--primary-color, #007bff);
}

.post-excerpt {
  color: var(--muted-text-color, #666);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color, #e0e0e0);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-small {
  padding: 0.2rem 0.6rem;
  background: var(--background-color-alt, #f8f9fa);
  border-radius: 10px;
  font-size: 0.75rem;
  color: var(--muted-text-color, #666);
}

.read-more-link {
  color: var(--primary-color, #007bff);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.read-more-link:hover {
  color: var(--link-hover-color, #0056b3);
}

.read-more-link i {
  margin-left: 0.25rem;
  transition: transform 0.3s ease;
}

.read-more-link:hover i {
  transform: translateX(4px);
}

/* Category Cards */
.category-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.category-card {
  background: var(--background-color, #fff);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.category-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2rem;
}

.technical-card .category-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.travel-card .category-icon {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.category-card h3 {
  margin: 0 0 1rem 0;
  font-size: 1.75rem;
}

.category-card p {
  color: var(--muted-text-color, #666);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.category-stats {
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: var(--muted-text-color, #666);
}

.post-count {
  font-weight: 600;
}

/* Tag Cloud */
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
  padding: 2rem;
  background: var(--background-color-alt, #f8f9fa);
  border-radius: 12px;
}

.tag-cloud-item {
  padding: 0.5rem 1rem;
  background: var(--background-color, #fff);
  border: 2px solid var(--border-color, #e0e0e0);
  border-radius: 20px;
  text-decoration: none;
  color: var(--text-color, #333);
  transition: all 0.3s ease;
  font-weight: 500;
}

.tag-cloud-item:hover {
  background: var(--primary-color, #007bff);
  color: white;
  border-color: var(--primary-color, #007bff);
  transform: translateY(-2px);
}

/* Social Subscribe */
.social-subscribe {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  color: white;
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.github-btn {
  background: #333;
}

.instagram-btn {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.email-btn {
  background: #0066cc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .post-grid {
    grid-template-columns: 1fr;
  }
  
  .category-cards {
    grid-template-columns: 1fr;
  }
  
  .post-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .social-subscribe {
    flex-direction: column;
  }
  
  .social-btn {
    width: 100%;
    justify-content: center;
  }
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .post-card,
  .category-card {
    --background-color: #1a1a1a;
    --background-color-alt: #2a2a2a;
    --text-color: #e0e0e0;
    --muted-text-color: #a0a0a0;
    --border-color: #404040;
    --primary-color: #4da3ff;
    --link-hover-color: #80b3ff;
  }
  
  .tag-cloud {
    --background-color-alt: #2a2a2a;
  }
  
  .tag-cloud-item {
    --background-color: #1a1a1a;
    --border-color: #404040;
  }
}
</style>