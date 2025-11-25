---
layout: sidebar
title: Blog
---

<div class="blog-posts-grid">
  {% for post in site.posts %}
  <article class="blog-post-card">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
    {% if post.excerpt %}
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    {% endif %}
    <a href="{{ post.url }}" class="read-more">Read More →</a>
  </article>
  {% endfor %}
</div>
