# Project Template Guide

This guide provides templates and instructions for adding new projects to your portfolio.

## Quick Start

1. Create a new file in `_projects/` directory
2. Name it descriptively: `project-name.md`
3. Copy the appropriate template below
4. Fill in your project details
5. Add images to `assets/images/projects/`
6. Commit and push to GitHub

## Basic Project Template

```markdown
---
layout: project
title: "Your Project Title"
date: 2024-01-15
categories: [web-development, full-stack]
technologies: [Python, Django, React, PostgreSQL]
github: https://github.com/username/project
demo: https://demo.example.com
featured: true
image: /assets/images/projects/project-hero.jpg
excerpt: "Brief one-sentence description of your project"
duration: "3 months"
role: "Full-Stack Developer"
team_size: "Solo project"
tags: [api, rest, authentication]
---

## Overview

Brief introduction to your project. What is it? Why did you build it?

## Problem Statement

What problem does this project solve? Who is it for?

## Solution

How did you approach solving this problem? What was your strategy?

## Key Features

- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

## Technologies Used

### Backend
- **Language/Framework**: Description
- **Database**: Description
- **Other**: Description

### Frontend
- **Framework**: Description
- **Libraries**: Description

## Challenges & Solutions

### Challenge 1: Title
**Problem**: Describe the challenge

**Solution**: How you solved it

**Result**: What was the outcome

## Results

- Metric 1
- Metric 2
- Metric 3

## Screenshots

![Description](/assets/images/projects/screenshot1.jpg)

## Code Highlights

```python
# Example code snippet
def example_function():
    pass
```

## Learnings

What did you learn from this project?

## Future Improvements

- Planned feature 1
- Planned feature 2

[View on GitHub](https://github.com/username/project) | [Live Demo](https://demo.example.com)
```

## Advanced Project Template

For more complex projects with detailed documentation:

```markdown
---
layout: project
title: "Advanced Project Title"
date: 2024-01-15
categories: [web-development, data-science, machine-learning]
technologies: [Python, TensorFlow, React, Docker, AWS]
github: https://github.com/username/project
demo: https://demo.example.com
documentation: https://docs.example.com
featured: true
image: /assets/images/projects/project-hero.jpg
excerpt: "Comprehensive description of your advanced project"
duration: "6 months"
role: "Technical Lead"
team_size: "5 developers"
tags: [ml, scalability, microservices]
---

## Overview

Detailed introduction with context and background.

## Problem Statement

### Business Context
Explain the business need or problem.

### Technical Requirements
- Requirement 1
- Requirement 2
- Requirement 3

### Constraints
- Constraint 1
- Constraint 2

## Solution

### Architecture Overview
Describe your system architecture.

### Design Decisions
Explain key architectural and design decisions.

### Technology Stack Rationale
Why you chose specific technologies.

## Key Features

### Feature 1: Title
Detailed description with screenshots or diagrams.

### Feature 2: Title
Detailed description with screenshots or diagrams.

### Feature 3: Title
Detailed description with screenshots or diagrams.

## Technologies Used

### Backend Stack
- **Language**: Version and why
- **Framework**: Version and why
- **Database**: Type and why
- **Caching**: Solution and why
- **Message Queue**: If applicable

### Frontend Stack
- **Framework**: Version and why
- **State Management**: Solution
- **UI Library**: Choice and why
- **Build Tools**: What you used

### DevOps & Infrastructure
- **Containerization**: Docker, etc.
- **Orchestration**: Kubernetes, etc.
- **Cloud Provider**: AWS, Azure, G