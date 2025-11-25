---
layout: sidebar
title: "Travel Blog"
permalink: /blog/travel/
author_profile: true
header:
  overlay_color: "#f5576c"
  overlay_filter: "0.5"
  overlay_image: /assets/images/travel-header.jpg
  caption: "Adventures around the world"
---

## Travel Stories

Welcome to my travel blog! Follow my adventures as I explore new destinations, experience different cultures, and share stories from around the world.

---

## Latest Travel Posts

<div class="travel-posts-grid">
{% assign travel_posts = site.posts | where_exp: "post", "post.categories contains 'travel'" | sort: "date" | reverse %}
{% if travel_posts.size > 0 %}
  {% for post in travel_posts %}
  <article class="travel-post-card">
    {% if post.header.teaser %}
    <div class="travel-post-image">
      <a href="{{ post.url | relative_url }}">
        <img src="{{ post.header.teaser | relative_url }}" alt="{{ post.title }}" loading="lazy">
        {% if post.location %}
        <div class="location-badge">
          <i class="fas fa-map-marker-alt"></i> {{ post.location }}
        </div>
        {% endif %}
      </a>
    </div>
    {% endif %}
    
    <div class="travel-post-content">
      <div class="travel-post-meta">
        <span class="post-date">
          <i class="far fa-calendar"></i> {{ post.date | date: "%B %d, %Y" }}
        </span>
        {% if post.duration %}
        <span class="post-duration">
          <i class="far fa-clock"></i> {{ post.duration }}
        </span>
        {% endif %}
      </div>
      
      <h3 class="travel-post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      
      {% if post.excerpt %}
      <p class="travel-post-excerpt">{{ post.excerpt | strip_html | truncate: 120 }}</p>
      {% endif %}
      
      {% if post.tags %}
      <div class="travel-post-tags">
        {% for tag in post.tags limit:3 %}
        <span class="travel-tag">{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
      
      <a href="{{ post.url | relative_url }}" class="travel-read-more">
        Read Story <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  </article>
  {% endfor %}
{% else %}
  <div class="no-posts-message">
    <i class="fas fa-globe-asia fa-3x"></i>
    <h3>More Adventures Coming Soon</h3>
    <p>Travel stories will appear here as I explore new destinations. Stay tuned!</p>
    <a href="/blog/" class="btn btn--primary">View All Posts</a>
  </div>
{% endif %}
</div>

---

## Travel Map

<div class="travel-map-section">
  <h3><i class="fas fa-map-marked-alt"></i> Places I've Visited</h3>
  <p>Explore an interactive map of all my travel destinations, complete with photos and stories.</p>
  <a href="/travel/" class="btn btn--info btn--large">
    <i class="fas fa-globe"></i> View Travel Map
  </a>
</div>

---

## Destinations

<div class="destinations-grid">
  <div class="destination-card">
    <div class="destination-icon">
      <i class="fas fa-mountain"></i>
    </div>
    <h4>Southeast Asia</h4>
    <p>Indonesia, Singapore, Thailand, Vietnam - exploring tropical paradises, ancient temples, and vibrant cities.</p>
    <span class="destination-count">9 posts</span>
  </div>
  
  <div class="destination-card">
    <div class="destination-icon">
      <i class="fas fa-umbrella-beach"></i>
    </div>
    <h4>Island Adventures</h4>
    <p>From Sumatra to Bali, discovering pristine beaches, coral reefs, and island cultures.</p>
    <span class="destination-count">Coming Soon</span>
  </div>
  
  <div class="destination-card">
    <div class="destination-icon">
      <i class="fas fa-city"></i>
    </div>
    <h4>Urban Exploration</h4>
    <p>Navigating bustling cities, street food scenes, and modern Asian metropolises.</p>
    <span class="destination-count">Coming Soon</span>
  </div>
  
  <div class="destination-card">
    <div class="destination-icon">
      <i class="fas fa-hiking"></i>
    </div>
    <h4>Nature & Wildlife</h4>
    <p>Jungle treks, wildlife encounters, and adventures in some of the world's most biodiverse regions.</p>
    <span class="destination-count">Coming Soon</span>
  </div>
</div>

---

## Travel Resources

<div class="resources-section">
  <h3>Planning Your Own Adventure?</h3>
  
  <div class="resource-cards">
    <div class="resource-card">
      <i class="fas fa-book-open"></i>
      <h4>Destination Guides</h4>
      <p>Detailed guides with practical information, tips, and recommendations.</p>
      <a href="/travel/destinations/">Browse Guides</a>
    </div>
    
    <div class="resource-card">
      <i class="fas fa-camera"></i>
      <h4>Photo Galleries</h4>
      <p>High-quality photos from my travels, organized by destination.</p>
      <a href="/travel/galleries/">View Galleries</a>
    </div>
    
    <div class="resource-card">
      <i class="fas fa-lightbulb"></i>
      <h4>Travel Tips</h4>
      <p>Practical advice on budget travel, packing, safety, and more.</p>
      <a href="/travel/tips/">Read Tips</a>
    </div>
  </div>
</div>

---

## Current Adventure

<div class="current-adventure">
  <div class="adventure-badge">
    <i class="fas fa-plane"></i> Currently Exploring
  </div>
  <h3>Southeast Asia 2024</h3>
  <p>Following an 8-week journey through Indonesia, documenting the culture, nature, and people of this incredible region.</p>
  <div class="adventure-stats">
    <div class="stat">
      <strong>8</strong>
      <span>Weeks</span>
    </div>
    <div class="stat">
      <strong>5</strong>
      <span>Islands</span>
    </div>
    <div class="stat">
      <strong>1000+</strong>
      <span>Photos</span>
    </div>
  </div>
  <a href="/travel/destinations/sumatra/" class="btn btn--primary">
    Follow the Journey <i class="fas fa-arrow-right"></i>
  </a>
</div>

---

## Follow My Travels

<div class="social-follow">
  <h3>Stay Connected</h3>
  <p>Follow me on Instagram for daily updates, stories, and behind-the-scenes content from my travels.</p>
  <div class="social-buttons">
    <a href="https://instagram.com/oscarrchkij" class="social-btn instagram-btn" target="_blank" rel="noopener">
      <i class="fab fa-instagram"></i> Follow on Instagram
    </a>
    <a href="mailto:o.rochanakij@protonmail.com" class="social-btn email-btn">
      <i class="fas fa-envelope"></i> Email Updates
    </a>
  </div>
</div>

<style>
/* Travel Posts Grid */
.travel-posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.travel-post-card {
  background: var(--background-color, #fff);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.travel-post-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.travel-post-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.travel-post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.travel-post-card:hover .travel-post-image img {
  transform: scale(1.1);
}

.location-badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(245, 87, 108, 0.95);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
}

.location-badge i {
  margin-right: 0.25rem;
}

.travel-post-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.travel-post-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: var(--muted-text-color, #666);
}

.travel-post-meta i {
  margin-right: 0.25rem;
}

.travel-post-title {
  margin: 0 0 1rem 0;
  font-size: 1.35rem;
  line-height: 1.3;
}

.travel-post-title a {
  color: var(--text-color, #333);
  text-decoration: none;
  transition: color 0.3s ease;
}

.travel-post-title a:hover {
  color: #f5576c;
}

.travel-post-excerpt {
  color: var(--muted-text-color, #666);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.travel-post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.travel-tag {
  padding: 0.25rem 0.75rem;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.travel-read-more {
  color: #f5576c;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  margin-top: auto;
}

.travel-read-more:hover {
  color: #f093fb;
}

.travel-read-more i {
  margin-left: 0.25rem;
  transition: transform 0.3s ease;
}

.travel-read-more:hover i {
  transform: translateX(4px);
}

/* No Posts Message */
.no-posts-message {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  background: var(--background-color-alt, #f8f9fa);
  border-radius: 16px;
}

.no-posts-message i {
  color: #f5576c;
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

/* Travel Map Section */
.travel-map-section {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px;
  margin: 2rem 0;
}

.travel-map-section h3 {
  margin: 0 0 1rem 0;
  color: white;
  font-size: 1.75rem;
}

.travel-map-section h3 i {
  margin-right: 0.5rem;
}

.travel-map-section p {
  margin-bottom: 2rem;
  opacity: 0.9;
  font-size: 1.1rem;
}

/* Destinations Grid */
.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.destination-card {
  background: var(--background-color, #fff);
  border: 2px solid var(--border-color, #e0e0e0);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
}

.destination-card:hover {
  border-color: #f5576c;
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(245, 87, 108, 0.2);
}

.destination-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 50%;
  font-size: 1.5rem;
}

.destination-card h4 {
  margin: 0 0 0.75rem 0;
  color: var(--text-color, #333);
}

.destination-card p {
  font-size: 0.9rem;
  color: var(--muted-text-color, #666);
  line-height: 1.5;
  margin-bottom: 1rem;
}

.destination-count {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #f5576c;
  color: white;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Resources Section */
.resources-section {
  background: var(--background-color-alt, #f8f9fa);
  padding: 3rem 2rem;
  border-radius: 16px;
  margin: 2rem 0;
}

.resources-section h3 {
  text-align: center;
  margin: 0 0 2rem 0;
  color: var(--text-color, #333);
}

.resource-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.resource-card {
  background: var(--background-color, #fff);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.resource-card:hover {
  transform: translateY(-4px);
}

.resource-card i {
  font-size: 2.5rem;
  color: #f5576c;
  margin-bottom: 1rem;
}

.resource-card h4 {
  margin: 0 0 0.75rem 0;
  color: var(--text-color, #333);
}

.resource-card p {
  color: var(--muted-text-color, #666);
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.resource-card a {
  color: #f5576c;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.resource-card a:hover {
  color: #f093fb;
}

/* Current Adventure */
.current-adventure {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  text-align: center;
  margin: 2rem 0;
}

.adventure-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
}

.adventure-badge i {
  margin-right: 0.5rem;
}

.current-adventure h3 {
  margin: 0 0 1rem 0;
  color: white;
  font-size: 2rem;
}

.current-adventure p {
  margin-bottom: 2rem;
  opacity: 0.95;
  font-size: 1.1rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.adventure-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat strong {
  font-size: 2.5rem;
  font-weight: 700;
  display: block;
  margin-bottom: 0.25rem;
}

.stat span {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Social Follow */
.social-follow {
  text-align: center;
  padding: 3rem 2rem;
  background: var(--background-color-alt, #f8f9fa);
  border-radius: 16px;
  margin: 2rem 0;
}

.social-follow h3 {
  margin: 0 0 1rem 0;
  color: var(--text-color, #333);
}

.social-follow p {
  color: var(--muted-text-color, #666);
  margin-bottom: 2rem;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
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

.instagram-btn {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.email-btn {
  background: #0066cc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .travel-posts-grid {
    grid-template-columns: 1fr;
  }
  
  .destinations-grid,
  .resource-cards {
    grid-template-columns: 1fr;
  }
  
  .adventure-stats {
    gap: 2rem;
  }
  
  .social-buttons {
    flex-direction: column;
  }
  
  .social-btn {
    width: 100%;
    justify-content: center;
  }
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .travel-post-card,
  .destination-card,
  .resource-card {
    --background-color: #1a1a1a;
    --background-color-alt: #2a2a2a;
    --text-color: #e0e0e0;
    --muted-text-color: #a0a0a0;
    --border-color: #404040;
  }
  
  .resources-section,
  .social-follow {
    --background-color-alt: #2a2a2a;
  }
  
  .no-posts-message {
    --background-color-alt: #2a2a2a;
  }
}
</style>