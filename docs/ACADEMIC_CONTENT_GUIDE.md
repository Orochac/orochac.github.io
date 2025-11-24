# Academic Content Structure Guide

## Overview

This guide details how to showcase your academic interests across three distinct contexts:
1. **University Work** - Formal academic projects and coursework
2. **Industry Applications** - How academic knowledge applies to professional work
3. **Independent Study** - Personal explorations and self-directed learning

## Academic Section Architecture

### 1. Research (/academic/research/)

**Purpose**: Showcase formal research, publications, and thesis work

**Content Types**:
- Master's thesis (Mathematics and Statistics)
- Research papers and publications
- Conference presentations
- Research interests and areas of focus
- Ongoing research projects

**Template Structure**:
```yaml
---
layout: research
title: "Research Title"
date: 2024-01-01
type: [thesis, paper, presentation]
field: [Pure Mathematics, Statistics, Computer Science]
status: [completed, in-progress, published]
coauthors: ["Name 1", "Name 2"]
publication: "Journal/Conference Name"
doi: "10.xxxx/xxxxx"
pdf: /assets/files/research/paper.pdf
github: https://github.com/username/research-code
featured: true
---

## Abstract
Brief summary of the research

## Introduction
Background and motivation

## Methodology
Research approach and methods

## Results
Key findings and contributions

## Conclusion
Summary and future work

## References
Citations and related work
```

**Example Content**:
- Master's thesis on Pure Mathematics
- Research papers from university
- Collaborative research projects
- Mathematical proofs and theorems
- Statistical analysis projects

---

### 2. University Projects (/academic/university/)

**Purpose**: Showcase significant coursework and academic projects from your degrees

**Content Categories**:

#### Mathematics & Statistics Projects
- Pure mathematics investigations
- Statistical analysis projects
- Mathematical modeling
- Discrete mathematics problems
- Operations research projects

#### Computer Science Projects
- Computing and Software Systems coursework
- Algorithm implementations
- Software engineering projects
- Data structures and algorithms
- System design projects

**Template Structure**:
```yaml
---
layout: university-project
title: "Project Title"
course: "Course Name and Code"
institution: "University of Melbourne"
degree: [Bachelor of Science, Master of Science, Diploma]
date: 2022-01-01
field: [Mathematics, Statistics, Computer Science]
topics: [Pure Math, Discrete Math, Algorithms, Data Science]
grade: "H1" # Optional
technologies: [Python, R, Java, LaTeX]
github: https://github.com/username/project
report: /assets/files/academic/project-report.pdf
featured: true
---

## Project Overview
What was the project about?

## Course Context
How did this fit into your degree?

## Objectives
What were you trying to achieve?

## Approach
How did you tackle the problem?

## Key Concepts
Mathematical/CS concepts applied

## Implementation
Technical details and code

## Results
Outcomes and learnings

## Academic Significance
What did this teach you?
```

**Example Projects**:
- Discrete Mathematics: Graph theory implementations
- Operations Research: Optimization problems
- Pure Mathematics: Abstract algebra proofs
- Statistics: Bayesian analysis projects
- Software Systems: Large-scale application development
- Data Structures: Advanced algorithm implementations

---

### 3. Independent Study (/academic/independent/)

**Purpose**: Showcase self-directed learning and personal academic explorations

**Content Types**:

#### Mathematical Explorations
- Personal investigations into mathematical concepts
- Self-study of advanced topics
- Mathematical puzzles and problems
- Proof writing and theorem exploration
- Connections between different mathematical areas

#### Computer Science Learning
- Self-taught programming languages
- Personal coding projects with academic focus
- Algorithm challenges and solutions
- System design experiments
- Open-source contributions

#### Interdisciplinary Work
- Combining mathematics and computer science
- Applications of theory to real problems
- Personal research questions
- Learning new frameworks and tools

**Template Structure**:
```yaml
---
layout: independent-study
title: "Study Title"
date: 2024-01-01
motivation: "Why did you explore this?"
field: [Mathematics, Computer Science, Statistics]
topics: [Specific topics]
duration: "3 months"
resources: ["Book 1", "Course 2", "Paper 3"]
github: https://github.com/username/exploration
status: [ongoing, completed]
featured: true
---

## Motivation
Why did you decide to study this?

## Learning Goals
What did you want to understand?

## Approach
How did you structure your learning?

## Key Concepts
What did you learn?

## Projects/Implementations
Practical applications of your learning

## Insights
What surprised you or changed your thinking?

## Future Directions
Where will you take this next?

## Resources
Books, papers, courses, websites used
```

**Example Content**:
- "Exploring Category Theory: A Self-Study Journey"
- "Implementing Machine Learning Algorithms from Scratch"
- "Understanding Topology Through Visualization"
- "Building a Computer Algebra System"
- "Investigating Number Theory Patterns"
- "Functional Programming Deep Dive"

---

### 4. Teaching & Mentoring (/academic/teaching/)

**Purpose**: Showcase knowledge sharing and educational contributions

**Content Types**:
- Tutoring experience
- Study guides created
- Educational resources
- Mentoring activities
- Workshops or presentations given
- Explanations of complex concepts

**Template Structure**:
```yaml
---
layout: teaching
title: "Teaching Activity"
date: 2024-01-01
type: [tutoring, resource, workshop, mentoring]
subject: "Subject Area"
level: [undergraduate, high-school, peer]
duration: "6 months"
students: "~20 students"
materials: /assets/files/teaching/materials.pdf
---

## Overview
What did you teach?

## Approach
How did you make concepts accessible?

## Materials Created
Study guides, notes, exercises

## Impact
How did students benefit?

## Learnings
What did teaching teach you?
```

---

## Integration with Other Sections

### Homepage Integration
```markdown
## Academic Highlights
- 🎓 Master of Science in Mathematics & Statistics (Pure Mathematics)
- 📊 Bachelor of Science in Computing & Software Systems
- 📜 Diploma in Mathematical Sciences (Discrete Math & Operations Research)
- 🔬 [Featured Research]: Link to thesis or key paper
- 💡 [Current Exploration]: Link to ongoing independent study
```

### Resume/CV Integration
**Education Section** should link to:
- Relevant university projects
- Thesis and research
- Key coursework highlights

**Skills Section** should reference:
- Academic foundations
- Theoretical knowledge
- Research methodologies

### Blog Integration
**Technical Blog Posts** can reference:
- Academic concepts explained
- Deep dives into mathematical topics
- Computer science theory
- Learning journeys

---

## Content Organization Strategy

### By Timeline
```
University Era (2019-2024)
├── Coursework Projects
├── Research Work
└── Thesis

Industry Era (2022-2024)
├── Applying Academic Knowledge
├── Real-world Problem Solving
└── Continuous Learning

Independent Study (Ongoing)
├── Personal Explorations
├── Self-Directed Research
└── Skill Development
```

### By Field
```
Pure Mathematics
├── University: Abstract Algebra, Topology
├── Independent: Category Theory, Number Theory
└── Research: Thesis Work

Computer Science
├── University: Algorithms, Software Systems
├── Industry: Automation, System Design
└── Independent: New Languages, Frameworks

Statistics
├── University: Statistical Methods
├── Industry: Data Analysis
└── Independent: Bayesian Methods
```

### By Complexity
```
Foundational
├── Core concepts from coursework
└── Basic implementations

Intermediate
├── Advanced coursework projects
└── Industry applications

Advanced
├── Research-level work
├── Thesis
└── Complex independent studies
```

---

## Example Academic Journey Narrative

### Homepage Feature
```markdown
## My Academic Journey

From **discrete mathematics** to **pure mathematics**, my academic path has been 
driven by curiosity about abstract structures and their practical applications.

**At University**: Explored the beauty of pure mathematics while building strong 
foundations in computer science and statistics.

**In Industry**: Applied mathematical thinking to automation and system design, 
discovering how theory informs practice.

**In My Own Time**: Continuing to explore mathematical concepts that fascinate me, 
from category theory to number theory.

[Explore My Academic Work →](/academic/)
```

### Academic Landing Page
```markdown
# Academic Work

## Research & Publications
My formal research in pure mathematics and related fields.
[View Research →](/academic/research/)

## University Projects
Significant projects from my Bachelor's, Master's, and Diploma programs.
[View Projects →](/academic/university/)

## Independent Study
Self-directed explorations in mathematics and computer science.
[View Studies →](/academic/independent/)

## Teaching & Sharing
Resources and experiences from tutoring and mentoring.
[View Teaching →](/academic/teaching/)
```

---

## Content Examples

### Example 1: University Project
**Title**: "Graph Coloring Algorithms: Implementation and Analysis"
- **Course**: Discrete Mathematics and Operations Research
- **Degree**: Diploma in Mathematical Sciences
- **Topics**: Graph Theory, Algorithms, Optimization
- **Description**: Implemented and compared various graph coloring algorithms, 
  analyzing their performance on different graph structures.

### Example 2: Independent Study
**Title**: "Exploring Homotopy Type Theory"
- **Motivation**: Fascinated by connections between logic, type theory, and topology
- **Duration**: Ongoing (6 months so far)
- **Resources**: HoTT Book, Coq proof assistant, online lectures
- **Projects**: Formalizing basic proofs in Coq, exploring univalence axiom

### Example 3: Research
**Title**: "Applications of Algebraic Topology to Data Analysis"
- **Type**: Master's Thesis
- **Field**: Pure Mathematics with Statistical Applications
- **Status**: Completed 2024
- **Contribution**: Novel approach to persistent homology in high-dimensional data

### Example 4: Industry Application
**Title**: "Mathematical Optimization in Automation Systems"
- **Context**: IT Lead at Partners in Planning
- **Academic Foundation**: Operations Research, Discrete Mathematics
- **Application**: Used graph algorithms and optimization techniques to improve 
  workflow automation
- **Impact**: 40% reduction in processing time

---

## Visual Elements

### Academic Timeline
```
2019 ─────────────────────────────────────────────────── 2024
  │                                                         │
  ├─ Bachelor of Science (Computing & Software Systems)    │
  │                                                         │
  ├─ Diploma (Discrete Math & Operations Research) ────────┤
  │                                                         │
  └─ Master of Science (Pure Mathematics) ─────────────────┘
     │                                                      │
     ├─ Coursework Projects                                │
     ├─ Research Work                                      │
     └─ Thesis                                             │
```

### Knowledge Map
```
                    Mathematics
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   Pure Math      Statistics      Applied Math
        │                │                │
    ┌───┴───┐        ┌───┴───┐       ┌───┴───┐
    │       │        │       │       │       │
Abstract  Topology  Bayesian Data   Operations
Algebra            Methods  Analysis Research
    │                                    │
    └────────────────┬───────────────────┘
                     │
              Computer Science
                     │
        ┌────────────┼────────────┐
        │            │            │
   Algorithms   Software      Data
               Systems      Structures
```

---

## SEO & Discoverability

### Keywords for Academic Content
- Oscar Rochanakij mathematics
- Pure mathematics portfolio
- Computer science projects Melbourne
- Mathematical research
- Discrete mathematics operations research
- University of Melbourne mathematics
- Academic portfolio computer science

### Meta Descriptions
**Research Page**: "Explore Oscar Rochanakij's research in pure mathematics, 
including thesis work, publications, and ongoing investigations in abstract algebra 
and topology."

**University Projects**: "Academic projects from Bachelor's and Master's degrees 
in Mathematics, Statistics, and Computer Science at the University of Melbourne."

**Independent Study**: "Self-directed explorations in mathematics and computer 
science, from category theory to functional programming."

---

## Maintenance Guidelines

### Regular Updates
- Add new independent study projects as you explore them
- Document learning journeys and insights
- Update research status and publications
- Add teaching resources as you create them

### Quarterly Reviews
- Reflect on academic growth
- Update featured projects
- Refresh academic interests
- Add new connections between topics

### Annual Updates
- Review and update academic narrative
- Highlight major achievements
- Archive completed studies
- Set new learning goals

---

## Integration with Professional Content

### Resume/CV Links
- Education section → University projects
- Skills section → Academic foundations
- Experience section → Industry applications of academic knowledge

### Portfolio Links
- Industry projects → Academic concepts applied
- Personal projects → Independent study connections

### Blog Links
- Technical posts → Deep dives into academic topics
- Learning posts → Independent study documentation

---

This structure allows you to showcase the full spectrum of your academic interests 
and demonstrate how they inform your professional work and personal growth.