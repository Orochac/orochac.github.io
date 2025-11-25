# Deployment Checklist

Complete guide for deploying your GitHub Pages site to production.

## Pre-Deployment Tasks

### 1. Content Review ✓

#### Images
- [ ] Replace `/assets/images/profile.jpg` with your actual photo
- [ ] Add hero background image: `/assets/images/hero-bg.jpg`
- [ ] Add section thumbnails:
  - [ ] `/assets/images/professional-thumb.jpg`
  - [ ] `/assets/images/academic-thumb.jpg`
  - [ ] `/assets/images/travel-thumb.jpg`
  - [ ] `/assets/images/portfolio-thumb.jpg`
  - [ ] `/assets/images/communication-thumb.jpg`
  - [ ] `/assets/images/blog-thumb.jpg`
- [ ] Add project images to `/assets/images/projects/`
- [ ] Add travel photos to `/assets/images/travel/`

#### Personal Information
- [ ] Update name and bio in `_config.yml`
- [ ] Verify email address (currently: o.rochanakij@protonmail.com)
- [ ] Update social media links in `_config.yml`
- [ ] Review and update resume content in `_pages/professional/resume.md`
- [ ] Update skills in `_pages/professional/skills.md`
- [ ] Verify contact information in `_pages/professional/contact.md`

#### Content
- [ ] Add real project examples to `_projects/`
- [ ] Remove or update example project: `_projects/example-ecommerce-platform.md`
- [ ] Add research papers (if public) to `/assets/files/papers/`
- [ ] Update publications page with actual papers
- [ ] Review all blog posts for accuracy
- [ ] Update travel locations in `_data/travel_locations.yml`
- [ ] Add real Google Photos album links

#### Configuration
- [ ] Set correct timezone in `_config.yml` (currently: Australia/Melbourne)
- [ ] Update site URL in `_config.yml`
- [ ] Configure Cloudinary credentials (if using)
- [ ] Set up analytics tracking ID (if using)
- [ ] Review and update navigation in `_data/navigation.yml`

### 2. Technical Review ✓

#### Testing
- [ ] Test all internal links
- [ ] Test all external links
- [ ] Verify all images load correctly
- [ ] Test forms and contact methods
- [ ] Check responsive design on mobile
- [ ] Test on different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] Test dark mode functionality
- [ ] Verify lazy loading works
- [ ] Test interactive map functionality
- [ ] Check PDF embeds (if using)

#### Performance
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Check PageSpeed Insights
- [ ] Optimize large images
- [ ] Verify lazy loading is working
- [ ] Test page load times
- [ ] Check mobile performance

#### SEO
- [ ] Verify meta tags on all pages
- [ ] Check Open Graph tags
- [ ] Verify Twitter Card tags
- [ ] Test structured data with [Schema Validator](https://validator.schema.org/)
- [ ] Create and verify `sitemap.xml`
- [ ] Create and verify `robots.txt`
- [ ] Add descriptive alt text to all images

#### Accessibility
- [ ] Run WAVE accessibility checker
- [ ] Verify keyboard navigation
- [ ] Check color contrast ratios
- [ ] Test with screen reader
- [ ] Verify ARIA labels
- [ ] Check heading hierarchy

### 3. Security Review ✓

- [ ] Remove any sensitive information
- [ ] Verify no API keys in code
- [ ] Check `.gitignore` is properly configured
- [ ] Review file permissions
- [ ] Ensure HTTPS will be enabled
- [ ] Check for mixed content warnings

### 4. Legal & Privacy ✓

- [ ] Add privacy policy (if collecting data)
- [ ] Add cookie notice (if using analytics)
- [ ] Verify copyright notices
- [ ] Check license information
- [ ] Review terms of use (if applicable)
- [ ] Ensure GDPR compliance (if applicable)

## GitHub Pages Setup

### 1. Repository Configuration

```bash
# Ensure you're on the main branch
git checkout main

# Add all changes
git add .

# Commit changes
git commit -m "Prepare for deployment"

# Push to GitHub
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait for deployment (usually 1-2 minutes)

### 3. Verify Deployment

- [ ] Visit `https://orochac.github.io`
- [ ] Check that homepage loads correctly
- [ ] Navigate through all main sections
- [ ] Verify no 404 errors
- [ ] Check browser console for errors

### 4. Custom Domain (Optional)

If using a custom domain:

1. **Add CNAME file**:
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS** with your domain provider:
   - Add A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add CNAME record: `orochac.github.io`

3. **Enable HTTPS** in GitHub Pages settings

4. **Wait for DNS propagation** (up to 24 hours)

## Post-Deployment Tasks

### 1. Search Engine Optimization

#### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Verify ownership
4. Submit sitemap: `https://orochac.github.io/sitemap.xml`
5. Request indexing for key pages

#### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

### 2. Analytics Setup

#### Google Analytics 4
1. Create GA4 property
2. Get tracking ID
3. Add to `_config.yml`:
   ```yaml
   analytics:
     provider: "google-gtag"
     google:
       tracking_id: "G-XXXXXXXXXX"
   ```
4. Verify tracking is working

#### Plausible Analytics (Alternative)
1. Sign up at [Plausible.io](https://plausible.io)
2. Add your domain
3. Add script to `_includes/head/custom.html`
4. Verify tracking

### 3. Social Media

- [ ] Share site on LinkedIn
- [ ] Share site on Twitter/X
- [ ] Update Instagram bio link
- [ ] Add to GitHub profile README
- [ ] Share in relevant communities

### 4. Monitoring Setup

#### Uptime Monitoring
- [ ] Set up [UptimeRobot](https://uptimerobot.com/) (free)
- [ ] Configure alerts for downtime
- [ ] Monitor response times

#### Performance Monitoring
- [ ] Set up [Google PageSpeed Insights](https://pagespeed.web.dev/) monitoring
- [ ] Schedule monthly performance audits
- [ ] Monitor Core Web Vitals

#### Error Tracking
- [ ] Check GitHub Pages build logs regularly
- [ ] Monitor 404 errors in analytics
- [ ] Set up error notifications

### 5. Backup Strategy

- [ ] Keep local copy of all content
- [ ] Export analytics data monthly
- [ ] Backup images to external storage
- [ ] Document any custom configurations
- [ ] Keep list of external dependencies

## Maintenance Schedule

### Daily
- Monitor analytics for unusual activity
- Check for broken links (automated)

### Weekly
- Review new comments/messages
- Add new blog posts
- Update travel map with new locations

### Monthly
- Update resume/skills if needed
- Add new projects
- Review and update content
- Check for dependency updates
- Review analytics reports
- Backup content

### Quarterly
- Run full site audit
- Update Jekyll and dependencies
- Review and refresh old content
- Check all external links
- Update documentation
- Performance optimization review

### Annually
- Major content refresh
- Design review and updates
- Security audit
- Comprehensive SEO review
- Update copyright year
- Review and update goals

## Troubleshooting

### Site Not Building

**Check build status**:
1. Go to repository → Actions tab
2. Check latest workflow run
3. Review error messages

**Common issues**:
- YAML syntax errors in front matter
- Missing dependencies in Gemfile
- Liquid template errors
- Invalid configuration in `_config.yml`

**Solution**:
```bash
# Test build locally
bundle exec jekyll build --verbose

# Check for errors
bundle exec jekyll doctor
```

### 404 Errors

**Check**:
- File paths are correct
- Permalinks match navigation
- Files are in correct directories
- No typos in URLs

**Fix**:
- Update navigation links
- Add redirects if needed
- Check `_config.yml` exclude rules

### Images Not Loading

**Check**:
- File paths are correct
- Images exist in `/assets/images/`
- File names match (case-sensitive)
- Images are not too large (< 1MB recommended)

**Fix**:
- Optimize images
- Use correct paths
- Check file permissions

### Slow Performance

**Diagnose**:
- Run Lighthouse audit
- Check PageSpeed Insights
- Review network tab in DevTools

**Optimize**:
- Compress images
- Enable lazy loading
- Minimize CSS/JS
- Use CDN for external resources
- Optimize fonts

## Emergency Procedures

### Site Down

1. Check GitHub Pages status: [githubstatus.com](https://www.githubstatus.com/)
2. Verify DNS configuration (if using custom domain)
3. Check repository settings
4. Review recent commits for issues
5. Rollback if necessary:
   ```bash
   git revert HEAD
   git push
   ```

### Security Issue

1. Immediately remove sensitive data
2. Force push if needed (use with caution):
   ```bash
   git push --force
   ```
3. Rotate any exposed credentials
4. Review commit history
5. Update security practices

### Content Issue

1. Identify problematic content
2. Create fix in local environment
3. Test thoroughly
4. Deploy fix:
   ```bash
   git add .
   git commit -m "Fix: [description]"
   git push
   ```

## Success Metrics

### Week 1
- [ ] Site is live and accessible
- [ ] No critical errors
- [ ] Basic analytics tracking working
- [ ] All main pages loading correctly

### Month 1
- [ ] Indexed by Google
- [ ] Receiving organic traffic
- [ ] No major performance issues
- [ ] Positive user feedback

### Month 3
- [ ] Growing organic traffic
- [ ] Good search rankings for name
- [ ] Regular content updates
- [ ] Engaged audience

### Month 6
- [ ] Established online presence
- [ ] Strong portfolio showcase
- [ ] Active blog readership
- [ ] Professional opportunities

## Resources

### Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE Accessibility](https://wave.webaim.org/)
- [Schema Validator](https://validator.schema.org/)
- [UptimeRobot](https://uptimerobot.com/)

### Documentation
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Minimal Mistakes Docs](https://mmistakes.github.io/minimal-mistakes/)

### Support
- [GitHub Community](https://github.community/)
- [Jekyll Talk](https://talk.jekyllrb.com/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/github-pages)

## Final Checklist

Before going live, ensure:

- [ ] All content is reviewed and accurate
- [ ] All images are optimized and loading
- [ ] All links are working
- [ ] Site is responsive on all devices
- [ ] Dark mode works correctly
- [ ] Performance scores are good (90+)
- [ ] SEO is optimized
- [ ] Analytics is configured
- [ ] Backup strategy is in place
- [ ] Monitoring is set up
- [ ] Documentation is complete

---

**Ready to Deploy?** 🚀

Once all items are checked, you're ready to go live!

**Last Updated**: November 2024  
**Version**: 1.0