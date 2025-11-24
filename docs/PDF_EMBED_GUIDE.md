# PDF Embed Guide

Complete guide for embedding PDFs and documents in your Jekyll site using the custom `pdf-embed.html` include.

## Table of Contents
- [Overview](#overview)
- [Basic Usage](#basic-usage)
- [Supported Platforms](#supported-platforms)
- [Parameters](#parameters)
- [Examples](#examples)
- [Styling](#styling)
- [Troubleshooting](#troubleshooting)

## Overview

The PDF embed include provides a flexible way to embed PDFs and documents from various sources:
- Direct PDF files (hosted on your site or external URLs)
- Overleaf read-only links
- Google Drive files
- OneDrive files
- Any other embeddable document viewer

### Features
- Responsive design (mobile-friendly)
- Dark mode support
- Lazy loading for performance
- Fallback options for unsupported browsers
- Download and open-in-new-tab actions
- Accessible with proper ARIA labels

## Basic Usage

Add this line to any markdown file where you want to embed a PDF:

```liquid
{% include pdf-embed.html 
   url="YOUR_PDF_URL_HERE"
   title="Document Title"
%}
```

## Supported Platforms

### 1. Direct PDF Files

For PDFs hosted on your site or any direct URL:

```liquid
{% include pdf-embed.html 
   url="/assets/documents/my-resume.pdf"
   title="My Resume"
   type="direct"
%}
```

Or external URLs:

```liquid
{% include pdf-embed.html 
   url="https://example.com/document.pdf"
   title="External Document"
   type="direct"
%}
```

### 2. Overleaf

For Overleaf read-only links, you can use either:

**Full URL:**
```liquid
{% include pdf-embed.html 
   url="https://www.overleaf.com/read/abcdefghijklmnop"
   title="Research Paper"
   type="overleaf"
%}
```

**Just the project ID:**
```liquid
{% include pdf-embed.html 
   url="abcdefghijklmnop"
   title="Research Paper"
   type="overleaf"
%}
```

### 3. Google Drive

For Google Drive files, you can use either:

**Full sharing URL:**
```liquid
{% include pdf-embed.html 
   url="https://drive.google.com/file/d/1ABC123xyz/view"
   title="Presentation"
   type="gdrive"
%}
```

**Just the file ID:**
```liquid
{% include pdf-embed.html 
   url="1ABC123xyz"
   title="Presentation"
   type="gdrive"
%}
```

**Note:** Make sure the Google Drive file is set to "Anyone with the link can view"

### 4. OneDrive

For OneDrive files, use the embed URL:

```liquid
{% include pdf-embed.html 
   url="https://onedrive.live.com/embed?..."
   title="Document"
   type="onedrive"
%}
```

To get the embed URL:
1. Right-click the file in OneDrive
2. Select "Embed"
3. Copy the iframe src URL

## Parameters

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `url` | Yes | - | URL to the PDF or document |
| `title` | No | "PDF Document" | Title for accessibility and fallback |
| `type` | No | "direct" | Type of embed: `direct`, `overleaf`, `gdrive`, `onedrive` |
| `height` | No | "600px" | Height of the embed frame |
| `caption` | No | - | Optional caption displayed below the embed |

## Examples

### Example 1: Resume with Custom Height

```liquid
{% include pdf-embed.html 
   url="/assets/documents/oscar-rochanakij-resume.pdf"
   title="Oscar Rochanakij - Resume"
   height="800px"
   caption="Last updated: November 2024"
%}
```

### Example 2: Research Paper from Overleaf

```liquid
{% include pdf-embed.html 
   url="https://www.overleaf.com/read/xyzabc123"
   title="Machine Learning Research Paper"
   type="overleaf"
   height="700px"
   caption="Published in IEEE Conference 2024"
%}
```

### Example 3: Presentation from Google Drive

```liquid
{% include pdf-embed.html 
   url="1ABC123xyz456"
   title="Project Presentation"
   type="gdrive"
   height="500px"
%}
```

### Example 4: Multiple Documents on One Page

```markdown
## My Publications

### Paper 1: Deep Learning Applications
{% include pdf-embed.html 
   url="https://www.overleaf.com/read/paper1id"
   title="Deep Learning Applications"
   type="overleaf"
   caption="Conference Paper - 2024"
%}

### Paper 2: Data Analysis Methods
{% include pdf-embed.html 
   url="https://www.overleaf.com/read/paper2id"
   title="Data Analysis Methods"
   type="overleaf"
   caption="Journal Article - 2023"
%}
```

## Styling

The PDF embed includes built-in responsive styling that adapts to:
- Different screen sizes (mobile, tablet, desktop)
- Dark mode preferences
- Print media

### Custom Styling

You can override the default styles by adding CSS to your `assets/css/main.scss`:

```scss
// Custom PDF embed styling
.pdf-embed-container {
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.pdf-embed-actions {
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
}
```

## Troubleshooting

### PDF Not Displaying

**Problem:** The PDF doesn't show, only fallback links appear.

**Solutions:**
1. Check if the URL is correct and accessible
2. Ensure the PDF is publicly accessible (not behind authentication)
3. Try opening the URL directly in a browser
4. Some browsers block embedded PDFs - the fallback links will work

### Google Drive "Access Denied"

**Problem:** Google Drive embed shows "Access Denied" or doesn't load.

**Solutions:**
1. Right-click the file in Google Drive
2. Select "Share" → "Get link"
3. Change to "Anyone with the link can view"
4. Use the file ID from the sharing URL

### Overleaf Not Loading

**Problem:** Overleaf document doesn't display.

**Solutions:**
1. Ensure you're using a read-only link (not edit link)
2. Check that the project is published/shared
3. The project owner must enable "Link sharing"

### Mobile Display Issues

**Problem:** PDF is too small or doesn't fit on mobile.

**Solutions:**
1. The embed is responsive by default
2. Try adjusting the `height` parameter
3. On mobile, users can use "Open in New Tab" for better viewing

### Performance Issues

**Problem:** Page loads slowly with multiple PDFs.

**Solutions:**
1. The embeds use lazy loading by default
2. Consider linking to PDFs instead of embedding all of them
3. Use thumbnails with click-to-expand for multiple documents

## Best Practices

1. **Use Descriptive Titles:** Always provide meaningful titles for accessibility
2. **Add Captions:** Include publication date, context, or other relevant info
3. **Optimize File Size:** Keep PDFs under 5MB for better performance
4. **Test Across Browsers:** Check how embeds appear in Chrome, Firefox, Safari
5. **Provide Fallbacks:** The include automatically provides download/open links
6. **Mobile First:** Test on mobile devices - consider if embedding is necessary
7. **External Hosting:** For large files, use Google Drive or similar services

## Integration Examples

### In a Research Page

```markdown
---
layout: single
title: "Research Publications"
permalink: /research/
---

## Published Papers

### Machine Learning in Healthcare (2024)
{% include pdf-embed.html 
   url="https://www.overleaf.com/read/mlhealthcare2024"
   title="Machine Learning in Healthcare"
   type="overleaf"
   caption="IEEE Conference on AI in Medicine, 2024"
%}

[Download PDF](/assets/papers/ml-healthcare-2024.pdf){: .btn .btn--primary}
```

### In a Project Page

```markdown
---
layout: single
title: "Capstone Project"
---

## Project Documentation

{% include pdf-embed.html 
   url="/assets/projects/capstone-report.pdf"
   title="Capstone Project Report"
   height="700px"
   caption="Final report submitted May 2024"
%}

## Presentation Slides

{% include pdf-embed.html 
   url="1XYZ789abc"
   title="Project Presentation"
   type="gdrive"
   height="500px"
%}
```

### In a Resume/CV Page

```markdown
---
layout: single
title: "Resume"
---

## Download Resume

{% include pdf-embed.html 
   url="/assets/documents/oscar-rochanakij-resume.pdf"
   title="Oscar Rochanakij - Resume"
   height="800px"
%}

[Download PDF](/assets/documents/oscar-rochanakij-resume.pdf){: .btn .btn--primary}
[View on LinkedIn](https://linkedin.com/in/yourprofile){: .btn .btn--info}
```

## Advanced Usage

### Conditional Embedding

Only embed on desktop, show link on mobile:

```liquid
<div class="desktop-only">
{% include pdf-embed.html 
   url="/assets/large-document.pdf"
   title="Large Document"
%}
</div>

<div class="mobile-only">
<a href="/assets/large-document.pdf" class="btn btn--primary">
  View Document (PDF)
</a>
</div>
```

### With JavaScript Enhancement

Add custom JavaScript for analytics tracking:

```javascript
document.querySelectorAll('.pdf-action-link').forEach(link => {
  link.addEventListener('click', function() {
    // Track PDF views
    gtag('event', 'pdf_view', {
      'pdf_title': this.closest('.pdf-embed-container')
                       .querySelector('iframe, object')
                       .getAttribute('title')
    });
  });
});
```

## Support

For issues or questions:
- Check the [Jekyll documentation](https://jekyllrb.com/docs/)
- Review browser console for errors
- Test the PDF URL directly in a browser
- Ensure all required parameters are provided

## Updates

This include is maintained as part of the site's custom components. Check the `_includes/pdf-embed.html` file for the latest version and features.