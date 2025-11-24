# Cloudinary Integration Guide

Complete guide for setting up and using Cloudinary for optimized image delivery on your Jekyll site.

## Table of Contents
- [Why Cloudinary?](#why-cloudinary)
- [Account Setup](#account-setup)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Why Cloudinary?

Cloudinary provides:
- **Automatic optimization** - WebP, AVIF format conversion
- **Responsive images** - Different sizes for different devices
- **CDN delivery** - Fast loading worldwide
- **Free tier** - 25GB storage, 25GB bandwidth/month
- **Transformations** - Resize, crop, effects on-the-fly

## Account Setup

### Step 1: Create Account

1. Visit [cloudinary.com](https://cloudinary.com)
2. Sign up for free account
3. Verify your email
4. Note your **Cloud Name** from dashboard

### Step 2: Get API Credentials

1. Go to Dashboard → Settings → Security
2. Copy your:
   - **Cloud Name** (e.g., `dxyz123abc`)
   - **API Key** (for uploads)
   - **API Secret** (keep private!)

### Step 3: Install Upload Tool (Optional)

For bulk uploads, install Cloudinary CLI:

```bash
npm install -g cloudinary-cli
# or
pip install cloudinary-cli
```

## Configuration

### Jekyll Configuration

Add to `_config.yml`:

```yaml
# Cloudinary Configuration
cloudinary:
  cloud_name: "your-cloud-name"
  # Don't commit API credentials to public repos!
```

### Environment Variables

For API credentials, use environment variables:

```bash
# Add to ~/.bashrc or ~/.zshrc
export CLOUDINARY_CLOUD_NAME="your-cloud-name"
export CLOUDINARY_API_KEY="your-api-key"
export CLOUDINARY_API_SECRET="your-api-secret"
```

## Usage Examples

### Basic Image

```liquid
{% assign cloud_name = site.cloudinary.cloud_name %}
<img src="https://res.cloudinary.com/{{ cloud_name }}/image/upload/sample-image.jpg" 
     alt="Description">
```

### Responsive Image with Transformations

```liquid
{% assign cloud_name = site.cloudinary.cloud_name %}
{% assign image_id = "travel/sumatra/lake-toba" %}

<img 
  src="https://res.cloudinary.com/{{ cloud_name }}/image/upload/c_scale,w_800,f_auto,q_auto/{{ image_id }}.jpg"
  srcset="
    https://res.cloudinary.com/{{ cloud_name }}/image/upload/c_scale,w_400,f_auto,q_auto/{{ image_id }}.jpg 400w,
    https://res.cloudinary.com/{{ cloud_name }}/image/upload/c_scale,w_800,f_auto,q_auto/{{ image_id }}.jpg 800w,
    https://res.cloudinary.com/{{ cloud_name }}/image/upload/c_scale,w_1200,f_auto,q_auto/{{ image_id }}.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 800px"
  alt="Lake Toba at sunset"
  loading="lazy">
```

### Transformation Parameters

Common transformations:
- `c_scale` - Scale to fit
- `c_fill` - Fill and crop
- `c_fit` - Fit within dimensions
- `w_800` - Width 800px
- `h_600` - Height 600px
- `f_auto` - Auto format (WebP, AVIF)
- `q_auto` - Auto quality
- `dpr_auto` - Auto device pixel ratio

### Gallery with Cloudinary

```liquid
{% assign cloud_name = site.cloudinary.cloud_name %}
{% assign folder = "travel/sumatra" %}

<div class="gallery">
  {% for image in page.gallery_images %}
  <div class="gallery-item">
    <a href="https://res.cloudinary.com/{{ cloud_name }}/image/upload/{{ folder }}/{{ image.id }}.jpg">
      <img 
        src="https://res.cloudinary.com/{{ cloud_name }}/image/upload/c_fill,w_400,h_300,f_auto,q_auto/{{ folder }}/{{ image.id }}.jpg"
        alt="{{ image.caption }}"
        loading="lazy">
    </a>
    <p class="caption">{{ image.caption }}</p>
  </div>
  {% endfor %}
</div>
```

## Uploading Images

### Method 1: Web Interface

1. Go to Cloudinary Dashboard
2. Click "Media Library"
3. Click "Upload"
4. Drag and drop images
5. Organize into folders

### Method 2: CLI Upload

```bash
# Upload single image
cld uploader upload image.jpg folder=travel/sumatra

# Upload folder
cld uploader upload_dir ./photos folder=travel/sumatra

# With transformations
cld uploader upload image.jpg \
  folder=travel/sumatra \
  transformation="c_limit,w_2000,q_auto"
```

### Method 3: Bulk Upload Script

Create `scripts/upload-to-cloudinary.sh`:

```bash
#!/bin/bash

FOLDER=$1
CLOUDINARY_FOLDER=$2

if [ -z "$FOLDER" ] || [ -z "$CLOUDINARY_FOLDER" ]; then
  echo "Usage: ./upload-to-cloudinary.sh <local-folder> <cloudinary-folder>"
  exit 1
fi

for file in "$FOLDER"/*; do
  if [[ -f "$file" ]]; then
    filename=$(basename "$file")
    echo "Uploading $filename..."
    cld uploader upload "$file" \
      folder="$CLOUDINARY_FOLDER" \
      use_filename=true \
      unique_filename=false
  fi
done

echo "Upload complete!"
```

Usage:
```bash
chmod +x scripts/upload-to-cloudinary.sh
./scripts/upload-to-cloudinary.sh ./assets/images/travel/sumatra travel/sumatra
```

## Folder Structure

Organize images in Cloudinary:

```
your-cloud/
├── travel/
│   ├── sumatra/
│   │   ├── lake-toba-1.jpg
│   │   ├── lake-toba-2.jpg
│   │   └── bukit-lawang-1.jpg
│   ├── singapore/
│   └── thailand/
├── projects/
│   ├── ecommerce/
│   └── ml-project/
└── profile/
    └── avatar.jpg
```

## Jekyll Include for Cloudinary Images

Create `_includes/cloudinary-image.html`:

```liquid
{% assign cloud_name = site.cloudinary.cloud_name %}
{% assign image_id = include.id %}
{% assign width = include.width | default: 800 %}
{% assign alt = include.alt | default: "" %}
{% assign caption = include.caption %}

<figure class="cloudinary-image">
  <img 
    src="https://res.cloudinary.com/{{ cloud_name }}/image/upload/c_scale,w_{{ width }},f_auto,q_auto/{{ image_id }}.jpg"
    srcset="
      https://res.cloudinary.com/{{ cloud_name }}/image/upload/c_scale,w_400,f_auto,q_auto/{{ image_id }}.jpg 400w,
      https://res.cloudinary.com/{{ cloud_name }}/image/upload/c_scale,w_800,f_auto,q_auto/{{ image_id }}.jpg 800w,
      https://res.cloudinary.com/{{ cloud_name }}/image/upload/c_scale,w_1200,f_auto,q_auto/{{ image_id }}.jpg 1200w"
    sizes="(max-width: 768px) 100vw, {{ width }}px"
    alt="{{ alt }}"
    loading="lazy">
  {% if caption %}
  <figcaption>{{ caption }}</figcaption>
  {% endif %}
</figure>
```

Usage:
```liquid
{% include cloudinary-image.html 
   id="travel/sumatra/lake-toba-1"
   alt="Lake Toba at sunset"
   caption="Beautiful sunset over Lake Toba"
   width="1000"
%}
```

## Best Practices

### 1. Image Naming

Use descriptive, URL-friendly names:
- ✅ `lake-toba-sunset-1.jpg`
- ❌ `IMG_1234.jpg`

### 2. Folder Organization

Group by category and location:
```
travel/country/city/image-name.jpg
projects/project-name/screenshot-1.jpg
```

### 3. Optimization

Always use:
- `f_auto` - Automatic format
- `q_auto` - Automatic quality
- `c_scale` or `c_fill` - Proper sizing

### 4. Responsive Images

Provide multiple sizes:
```liquid
srcset="
  ...w_400... 400w,
  ...w_800... 800w,
  ...w_1200... 1200w"
sizes="(max-width: 768px) 100vw, 800px"
```

### 5. Lazy Loading

Always add `loading="lazy"` for images below the fold.

### 6. Alt Text

Provide descriptive alt text for accessibility:
```html
alt="Sunset over Lake Toba with mountains in background"
```

## Performance Tips

### 1. Use Transformations

Let Cloudinary do the work:
```
c_scale,w_800,f_auto,q_auto,dpr_auto
```

### 2. Progressive Loading

Use blur placeholder:
```
c_scale,w_800,f_auto,q_auto,e_blur:1000
```

### 3. Lazy Loading

Combine with Intersection Observer for best results.

### 4. Preload Critical Images

For hero images:
```html
<link rel="preload" 
      as="image" 
      href="https://res.cloudinary.com/.../hero.jpg">
```

## Troubleshooting

### Images Not Loading

1. **Check cloud name** - Verify in `_config.yml`
2. **Check image ID** - Must match Cloudinary path
3. **Check permissions** - Images must be public
4. **Check URL** - View in browser dev tools

### Slow Loading

1. **Use f_auto** - Enables WebP/AVIF
2. **Use q_auto** - Optimizes quality
3. **Add lazy loading** - `loading="lazy"`
4. **Check image size** - Don't serve 4K to mobile

### Upload Errors

1. **Check credentials** - Verify API key/secret
2. **Check file size** - Free tier has limits
3. **Check format** - Supported: JPG, PNG, GIF, WebP
4. **Check quota** - Monitor usage in dashboard

## Free Tier Limits

Cloudinary free tier includes:
- **Storage:** 25 GB
- **Bandwidth:** 25 GB/month
- **Transformations:** 25,000/month
- **Images:** Unlimited

Monitor usage in Dashboard → Usage.

## Advanced Features

### Video Support

Cloudinary also supports video:
```liquid
<video controls>
  <source src="https://res.cloudinary.com/{{ cloud_name }}/video/upload/travel/sumatra/video-1.mp4" type="video/mp4">
</video>
```

### Image Effects

Apply effects on-the-fly:
```
e_grayscale - Grayscale
e_sepia - Sepia tone
e_blur:300 - Blur
e_sharpen - Sharpen
```

### Overlays

Add watermarks:
```
l_text:Arial_40:Copyright,co_rgb:ffffff,o_50
```

## Resources

- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Transformation Reference](https://cloudinary.com/documentation/image_transformations)
- [Jekyll Integration](https://cloudinary.com/documentation/jekyll_integration)
- [Responsive Images](https://cloudinary.com/documentation/responsive_images)

## Next Steps

1. Create Cloudinary account
2. Add cloud name to `_config.yml`
3. Upload test images
4. Create cloudinary-image include
5. Use in travel pages
6. Monitor performance

---

*Last Updated: November 2024*