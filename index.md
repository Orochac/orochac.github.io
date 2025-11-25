---
layout: sidebar
title: "Home"
permalink: /
excerpt: "Bridging theory and practice through mathematics, computer science, and continuous exploration"
---

{% include feature_row id="intro" type="center" %}

## Professional & Academic

<div class="feature__wrapper">
  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-briefcase fa-3x"></i>
      </div>
      <div class="archive__item-body">
        <h3 class="archive__item-title">Professional</h3>
        <div class="archive__item-excerpt">
          <p>IT Lead with expertise in automation, system design, and team enablement. Proven track record in delivering scalable solutions.</p>
        </div>
        <p><a href="/professional/resume/" class="btn btn--primary btn--small">View Resume</a></p>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-graduation-cap fa-3x"></i>
      </div>
      <div class="archive__item-body">
        <h3 class="archive__item-title">Academic</h3>
        <div class="archive__item-excerpt">
          <p>Research in pure mathematics, university projects, and independent explorations in mathematical concepts and computer science.</p>
        </div>
        <p><a href="/academic/publications/" class="btn btn--primary btn--small">View Publications</a></p>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-map-marked-alt fa-3x"></i>
      </div>
      <div class="archive__item-body">
        <h3 class="archive__item-title">Travel</h3>
        <div class="archive__item-excerpt">
          <p>Documenting adventures across Asia with photography, stories, and cultural insights from 8 weeks in Southeast Asia and beyond.</p>
        </div>
        <p><a href="/travel/map/" class="btn btn--primary btn--small">View Travel Map</a></p>
      </div>
    </div>
  </div>
</div>

## Recent Highlights

<div class="feature__wrapper">
  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-award fa-3x"></i>
      </div>
      <div class="archive__item-body">
        <h3 class="archive__item-title">Master of Science</h3>
        <div class="archive__item-excerpt">
          <p>Completed Master's in Mathematics & Statistics, specializing in Pure Mathematics at the University of Melbourne (2022-2024)</p>
        </div>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-rocket fa-3x"></i>
      </div>
      <div class="archive__item-body">
        <h3 class="archive__item-title">IT Lead</h3>
        <div class="archive__item-excerpt">
          <p>Led automation and system design initiatives at Partners in Planning, reducing onboarding time by 40%</p>
        </div>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-globe-asia fa-3x"></i>
      </div>
      <div class="archive__item-body">
        <h3 class="archive__item-title">Interactive Travel Map</h3>
        <div class="archive__item-excerpt">
          <p>8 weeks exploring Sumatra, Singapore, and beyond - now with an interactive map showing destinations, photos, and blog posts</p>
        </div>
        <p><a href="/travel/map/" class="btn btn--primary btn--small">Explore Map</a></p>
      </div>
    </div>
  </div>
</div>

## Portfolio & Content

<div class="feature__wrapper">
  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-code fa-3x"></i>
      </div>
      <div class="archive__item-body">
        <h3 class="archive__item-title">Portfolio & Projects</h3>
        <div class="archive__item-excerpt">
          <p>From automation frameworks to mathematical investigations, explore projects spanning industry work and personal explorations.</p>
        </div>
        <p><a href="/portfolio/" class="btn btn--primary btn--small">View Projects</a></p>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-chalkboard-teacher fa-3x"></i>
      </div>
      <div class="archive__item-body">
        <h3 class="archive__item-title">Communication</h3>
        <div class="archive__item-excerpt">
          <p>Teaching, corporate training, client workshops, and content creation. Making complex concepts accessible across diverse audiences.</p>
        </div>
        <p><a href="/professional/contact/" class="btn btn--primary btn--small">Get in Touch</a></p>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-blog fa-3x"></i>
      </div>
      <div class="archive__item-body">
        <h3 class="archive__item-title">Blog</h3>
        <div class="archive__item-excerpt">
          <p>Technical tutorials, mathematical explorations, travel stories, and insights from continuous learning and adventure.</p>
        </div>
        <p><a href="/blog/" class="btn btn--primary btn--small">Read Blog</a></p>
      </div>
    </div>
  </div>
</div>

## Skills & Expertise

<div class="notice--info">
  <h4>Technical Skills</h4>
  <ul>
    <li><strong>Mathematics:</strong> Pure Mathematics, Abstract Algebra, Topology, Discrete Mathematics, Operations Research</li>
    <li><strong>Computer Science:</strong> Python, Java, JavaScript, System Design, Automation, APIs</li>
    <li><strong>Statistics:</strong> Statistical Methods, Data Analysis, Bayesian Methods</li>
    <li><strong>Tools:</strong> Git, Docker, CI/CD, Cloud Platforms</li>
  </ul>
</div>

<div class="notice--success">
  <h4>Soft Skills</h4>
  <ul>
    <li><strong>Communication:</strong> Teaching, Technical Writing, Public Speaking, Workshop Facilitation</li>
    <li><strong>Leadership:</strong> Team Management, Mentoring, Training Development</li>
    <li><strong>Problem Solving:</strong> Analytical Thinking, Creative Solutions, Research</li>
  </ul>
</div>

## Latest Blog Posts

<div class="grid__wrapper">
  {% for post in site.posts limit:3 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>

<div style="text-align: center; margin-top: 2em;">
  <a href="/blog/" class="btn btn--primary btn--large">View All Posts</a>
</div>

## Get in Touch

<div class="notice--primary" style="text-align: center;">
  <p>Interested in collaboration, opportunities, or just want to connect?</p>
  <p>
    <a href="mailto:o.rochanakij@protonmail.com" class="btn btn--info"><i class="fas fa-envelope"></i> Email Me</a>
    <a href="https://github.com/orochac" class="btn btn--info"><i class="fab fa-github"></i> GitHub</a>
    <a href="https://instagram.com/oscarrchkij" class="btn btn--info"><i class="fab fa-instagram"></i> Instagram</a>
  </p>
</div>

---

<div style="text-align: center; color: #666; font-size: 0.9em; margin-top: 3em;">
  <p><em>"Bridging the gap between abstract mathematics and practical applications, one project at a time."</em></p>
</div>