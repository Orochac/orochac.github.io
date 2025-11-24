# Analytics & Performance Monitoring Guide

Complete guide for setting up analytics and monitoring your Jekyll site's performance.

## Table of Contents
- [Analytics Options](#analytics-options)
- [Google Analytics 4 Setup](#google-analytics-4-setup)
- [Plausible Analytics Setup](#plausible-analytics-setup)
- [Performance Monitoring](#performance-monitoring)
- [Privacy Considerations](#privacy-considerations)

## Analytics Options

### Comparison

| Feature | Google Analytics 4 | Plausible | Simple Analytics |
|---------|-------------------|-----------|------------------|
| **Cost** | Free | $9/month | $19/month |
| **Privacy** | Requires cookie consent | Privacy-friendly | Privacy-friendly |
| **GDPR** | Complex compliance | GDPR compliant | GDPR compliant |
| **Features** | Extensive | Essential | Essential |
| **Setup** | Complex | Simple | Simple |
| **Data Ownership** | Google | You | You |

### Recommendation

- **For personal sites**: Plausible or Simple Analytics (privacy-friendly)
- **For business**: Google Analytics 4 (comprehensive data)
- **For minimal tracking**: Self-hosted Matomo

## Google Analytics 4 Setup

### Step 1: Create Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Start measuring"
3. Create account and property
4. Get your Measurement ID (G-XXXXXXXXXX)

### Step 2: Add to Jekyll

Add to `_config.yml`:

```yaml
# Google Analytics
google_analytics: G-XXXXXXXXXX
```

### Step 3: Add Tracking Code

Minimal Mistakes theme handles this automatically. If using custom theme, add to `_includes/head/custom.html`:

```html
<!-- Google Analytics 4 -->
{% if site.google_analytics %}
<script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google_analytics }}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ site.google_analytics }}', {
    'anonymize_ip': true,
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>
{% endif %}
```

### Step 4: Cookie Consent (GDPR)

Add cookie consent banner. Create `_includes/cookie-consent.html`:

```html
<div id="cookie-consent" class="cookie-consent" style="display: none;">
  <div class="cookie-content">
    <p>
      This site uses cookies to analyze traffic and improve your experience.
      <a href="/privacy/">Learn more</a>
    </p>
    <div class="cookie-actions">
      <button id="cookie-accept" class="btn btn--primary">Accept</button>
      <button id="cookie-decline" class="btn btn--secondary">Decline</button>
    </div>
  </div>
</div>

<script>
(function() {
  const consent = localStorage.getItem('cookie-consent');
  
  if (!consent) {
    document.getElementById('cookie-consent').style.display = 'block';
  }
  
  document.getElementById('cookie-accept').addEventListener('click', function() {
    localStorage.setItem('cookie-consent', 'accepted');
    document.getElementById('cookie-consent').style.display = 'none';
    // Load analytics
    loadAnalytics();
  });
  
  document.getElementById('cookie-decline').addEventListener('click', function() {
    localStorage.setItem('cookie-consent', 'declined');
    document.getElementById('cookie-consent').style.display = 'none';
  });
  
  function loadAnalytics() {
    // GA4 code here
  }
  
  if (consent === 'accepted') {
    loadAnalytics();
  }
})();
</script>

<style>
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2c3e50;
  color: white;
  padding: 1.5rem;
  z-index: 9999;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.cookie-content p {
  margin: 0;
  flex: 1;
}

.cookie-actions {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .cookie-content {
    flex-direction: column;
    text-align: center;
  }
  
  .cookie-actions {
    width: 100%;
    flex-direction: column;
  }
  
  .cookie-actions button {
    width: 100%;
  }
}
</style>
```

### Step 5: Verify Installation

1. Visit your site
2. Open GA4 dashboard
3. Go to Reports → Realtime
4. Verify your visit appears

## Plausible Analytics Setup

### Step 1: Create Account

1. Go to [plausible.io](https://plausible.io)
2. Sign up (30-day free trial)
3. Add your domain
4. Get your tracking script

### Step 2: Add to Jekyll

Add to `_includes/head/custom.html`:

```html
<!-- Plausible Analytics -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Step 3: Custom Events (Optional)

Track custom events:

```html
<script>
// Track downloads
document.querySelectorAll('a[download]').forEach(function(link) {
  link.addEventListener('click', function() {
    plausible('Download', {props: {file: this.getAttribute('href')}});
  });
});

// Track external links
document.querySelectorAll('a[target="_blank"]').forEach(function(link) {
  link.addEventListener('click', function() {
    plausible('Outbound Link', {props: {url: this.href}});
  });
});
</script>
```

### Step 4: Verify Installation

1. Visit your site
2. Check Plausible dashboard
3. Verify real-time visitor appears

## Performance Monitoring

### Google PageSpeed Insights

Monitor performance:

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://yourdomain.com --view
```

### Core Web Vitals

Add to `_includes/head/custom.html`:

```html
<!-- Web Vitals Monitoring -->
<script type="module">
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'https://unpkg.com/web-vitals@3/dist/web-vitals.js?module';

function sendToAnalytics({name, delta, id}) {
  // Send to GA4
  gtag('event', name, {
    event_category: 'Web Vitals',
    value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    event_label: id,
    non_interaction: true,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
</script>
```

### Performance Budget

Create `.lighthouserc.json`:

```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:4000"],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

## Custom Event Tracking

### Track Page Views

```javascript
// Track page views with additional data
function trackPageView() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    });
  }
}

// Track on page load
window.addEventListener('load', trackPageView);
```

### Track Downloads

```javascript
// Track PDF downloads
document.querySelectorAll('a[href$=".pdf"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'file_download', {
        file_name: this.getAttribute('href'),
        link_text: this.textContent
      });
    }
  });
});
```

### Track External Links

```javascript
// Track outbound links
document.querySelectorAll('a[href^="http"]').forEach(function(link) {
  if (!link.href.includes(window.location.hostname)) {
    link.addEventListener('click', function(e) {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'outbound',
          event_label: this.href,
          transport_type: 'beacon'
        });
      }
    });
  }
});
```

### Track Search

```javascript
// Track site search
const searchForm = document.querySelector('.search-form');
if (searchForm) {
  searchForm.addEventListener('submit', function(e) {
    const query = this.querySelector('input[type="search"]').value;
    if (typeof gtag !== 'undefined') {
      gtag('event', 'search', {
        search_term: query
      });
    }
  });
}
```

## Privacy Considerations

### GDPR Compliance

1. **Cookie Consent**: Implement consent banner
2. **Privacy Policy**: Create `/privacy/` page
3. **Data Processing Agreement**: With analytics provider
4. **User Rights**: Allow data deletion requests

### Privacy Policy Template

Create `_pages/privacy.md`:

```markdown
---
layout: single
title: "Privacy Policy"
permalink: /privacy/
---

## Privacy Policy

Last updated: [Date]

### Information We Collect

This website uses analytics to understand how visitors use the site. We collect:

- Pages visited
- Time spent on site
- Referring websites
- Device and browser information
- Geographic location (country/city level)

### How We Use Information

We use this information to:

- Improve website content and user experience
- Understand which content is most valuable
- Identify technical issues

### Third-Party Services

We use the following services:

- **Google Analytics**: [Privacy Policy](https://policies.google.com/privacy)
- **Cloudinary**: [Privacy Policy](https://cloudinary.com/privacy)

### Your Rights

You have the right to:

- Access your data
- Request data deletion
- Opt-out of tracking
- Export your data

### Contact

For privacy concerns: [your-email]
```

### Opt-Out Mechanism

Add opt-out link:

```html
<a href="#" id="analytics-opt-out">Opt-out of Analytics</a>

<script>
document.getElementById('analytics-opt-out').addEventListener('click', function(e) {
  e.preventDefault();
  document.cookie = 'ga-disable-G-XXXXXXXXXX=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  window['ga-disable-G-XXXXXXXXXX'] = true;
  alert('Analytics tracking has been disabled.');
});
</script>
```

## Testing Analytics

### Local Testing

Test analytics locally:

```javascript
// Add to development environment
if (window.location.hostname === 'localhost') {
  window.gtag = function() {
    console.log('GA Event:', arguments);
  };
}
```

### Debug Mode

Enable GA4 debug mode:

```html
<script>
gtag('config', 'G-XXXXXXXXXX', {
  'debug_mode': true
});
</script>
```

## Performance Optimization

### Lazy Load Analytics

Load analytics after page interaction:

```javascript
let analyticsLoaded = false;

function loadAnalytics() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  
  // Load GA4 script
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
  script.async = true;
  document.head.appendChild(script);
}

// Load on first interaction
['scroll', 'click', 'touchstart'].forEach(function(event) {
  window.addEventListener(event, loadAnalytics, {once: true});
});

// Or load after delay
setTimeout(loadAnalytics, 3000);
```

## Monitoring Checklist

- [ ] Analytics installed and verified
- [ ] Cookie consent implemented (if using GA)
- [ ] Privacy policy created
- [ ] Custom events configured
- [ ] Performance monitoring set up
- [ ] Core Web Vitals tracked
- [ ] Error tracking configured
- [ ] Regular performance audits scheduled

## Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics)
- [Plausible Documentation](https://plausible.io/docs)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [GDPR Compliance Guide](https://gdpr.eu/)

---

*Last Updated: November 2024*