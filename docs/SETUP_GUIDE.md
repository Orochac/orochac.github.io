# Setup Guide - Fixing Ruby Version Issue

## Problem
Your system Ruby (2.6.10) is too old for the bundler version (2.5.16) required by Gemfile.lock.

## Solution Options

### Option 1: Use rbenv (Recommended)

Install rbenv to manage Ruby versions:

```bash
# Install rbenv via Homebrew
brew install rbenv ruby-build

# Initialize rbenv
rbenv init

# Add to your ~/.zshrc
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc
source ~/.zshrc

# Install Ruby 3.2.2 (or latest stable)
rbenv install 3.2.2

# Set it as local version for this project
cd /Users/oscarrochanakij/Personal/orochac.github.io
rbenv local 3.2.2

# Verify
ruby --version  # Should show 3.2.2

# Now install bundler and dependencies
gem install bundler
bundle install

# Run Jekyll
bundle exec jekyll serve
```

### Option 2: Regenerate Gemfile.lock

Use your current Ruby but regenerate the lock file:

```bash
cd /Users/oscarrochanakij/Personal/orochac.github.io

# Remove the old lock file
rm Gemfile.lock

# Install compatible bundler for Ruby 2.6
gem install bundler -v 2.3.26

# Generate new Gemfile.lock
bundle install

# Run Jekyll
bundle exec jekyll serve
```

### Option 3: Use Docker (Easiest, No Ruby Install)

```bash
# Pull Jekyll Docker image
docker pull jekyll/jekyll:latest

# Run Jekyll in Docker
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  --publish 4000:4000 \
  jekyll/jekyll:latest \
  jekyll serve

# Visit http://localhost:4000
```

### Option 4: GitHub Codespaces (Cloud-based)

1. Go to your GitHub repository
2. Click "Code" → "Codespaces" → "Create codespace"
3. In the terminal:
```bash
bundle install
bundle exec jekyll serve
```

## Recommended: Option 1 (rbenv)

This is the best long-term solution as it:
- Doesn't interfere with system Ruby
- Allows multiple Ruby versions
- Works well with Jekyll development
- Is the standard in Ruby development

## Quick Fix for Now: Option 2

If you want to test immediately without installing rbenv:

```bash
cd /Users/oscarrochanakij/Personal/orochac.github.io
rm Gemfile.lock
gem install bundler -v 2.3.26
bundle install
bundle exec jekyll serve
```

## After Setup

Once Jekyll is running, visit:
- **Local site**: http://localhost:4000
- **Admin**: http://localhost:4000/admin (if configured)

## Troubleshooting

### "Permission denied" errors
```bash
# Don't use sudo with gem install
# Use rbenv or --user-install flag
gem install bundler --user-install
```

### Port 4000 already in use
```bash
bundle exec jekyll serve --port 4001
```

### "Could not find gem" errors
```bash
bundle update
bundle install
```

### Still having issues?
```bash
# Clean everything and start fresh
bundle exec jekyll clean
rm -rf _site .jekyll-cache
bundle install
bundle exec jekyll serve
```

## Verify Installation

After setup, verify everything works:

```bash
# Check Ruby version
ruby --version  # Should be 3.0+

# Check bundler
bundle --version

# Check Jekyll
bundle exec jekyll --version

# Build site
bundle exec jekyll build

# Serve site
bundle exec jekyll serve
```

## Next Steps

Once the site is running:
1. Visit http://localhost:4000
2. Check that the homepage loads
3. Test navigation
4. Try dark mode toggle
5. Check mobile responsiveness (browser dev tools)

## Need Help?

If you continue having issues:
1. Check Ruby version: `ruby --version`
2. Check bundler version: `bundle --version`
3. Check Jekyll version: `bundle exec jekyll --version`
4. Share error messages for specific help