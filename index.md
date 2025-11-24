---
layout: splash
title: "Oscar Rochanakij"
permalink: /
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/hero-bg.jpg
  actions:
    - label: "View Resume"
      url: "/professional/resume/"
    - label: "Explore Projects"
      url: "/portfolio/"
  caption: "Mathematics • Computer Science • Travel"
excerpt: "Bridging theory and practice through mathematics, computer science, and continuous exploration"
intro:
  - excerpt: 'Master of Science in Mathematics & Statistics • Bachelor of Science in Computing & Software Systems • IT Lead • Educator • Explorer'
feature_row:
  - image_path: /assets/images/professional-thumb.jpg
    alt: "Professional Work"
    title: "Professional"
    excerpt: "IT Lead with expertise in automation, system design, and team enablement. Proven track record in delivering scalable solutions."
    url: "/professional/resume/"
    btn_label: "View Resume"
    btn_class: "btn--primary"
  - image_path: /assets/images/academic-thumb.jpg
    alt: "Academic Work"
    title: "Academic"
    excerpt: "Research in pure mathematics, university projects, and independent explorations in mathematical concepts and computer science."
    url: "/academic/"
    btn_label: "Explore Academic Work"
    btn_class: "btn--primary"
  - image_path: /assets/images/travel-thumb.jpg
    alt: "Travel Adventures"
    title: "Travel"
    excerpt: "Documenting adventures across Asia with photography, stories, and cultural insights from 8 weeks in Southeast Asia and beyond."
    url: "/travel/"
    btn_label: "View Travel Map"
    btn_class: "btn--primary"
feature_row2:
  - image_path: /assets/images/portfolio-thumb.jpg
    alt: "Project Portfolio"
    title: "Portfolio & Projects"
    excerpt: "From automation frameworks to mathematical investigations, explore projects spanning industry work and personal explorations."
    url: "/portfolio/"
    btn_label: "View Projects"
    btn_class: "btn--primary"
  - image_path: /assets/images/communication-thumb.jpg
    alt: "Communication & Teaching"
    title: "Communication"
    excerpt: "Teaching, corporate training, client workshops, and content creation. Making complex concepts accessible across diverse audiences."
    url: "/academic/teaching/"
    btn_label: "View Teaching Work"
    btn_class: "btn--primary"
  - image_path: /assets/images/blog-thumb.jpg
    alt: "Blog"
    title: "Blog"
    excerpt: "Technical tutorials, mathematical explorations, travel stories, and insights from continuous learning and adventure."
    url: "/Blog/"
    btn_label: "Read Blog"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

## Recent Highlights

<div class="feature__wrapper">
  <div class="feature__item">
    <div class="archive__item">
      <div class="archive__item-teaser">
        <i class="fas fa-graduation-cap fa-3x"></i>
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
        <i class="fas fa-briefcase fa-3x"></i>
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
        <h3 class="archive__item-title">Southeast Asia Journey</h3>
        <div class="archive__item-excerpt">
          <p>8 weeks exploring Sumatra, Singapore, and beyond - documenting culture, nature, and adventure</p>
        </div>
      </div>
    </div>
  </div>
</div>

{% include feature_row id="feature_row2" %}

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
  <a href="/Blog/" class="btn btn--primary btn--large">View All Posts</a>
</div>

## Get in Touch

<div class="notice--primary" style="text-align: center;">
  <p>Interested in collaboration, opportunities, or just want to connect?</p>
  <p>
    <a href="mailto:oscarr12345678@gmail.com" class="btn btn--info"><i class="fas fa-envelope"></i> Email Me</a>
    <a href="https://github.com/orochac" class="btn btn--info"><i class="fab fa-github"></i> GitHub</a>
    <a href="https://instagram.com/oscarrchkij" class="btn btn--info"><i class="fab fa-instagram"></i> Instagram</a>
  </p>
</div>

---

<div style="text-align: center; color: #666; font-size: 0.9em; margin-top: 3em;">
  <p><em>"Bridging the gap between abstract mathematics and practical applications, one project at a time."</em></p>
</div>