# Travel Map Guide

Complete guide for using and customizing the interactive travel map feature on your GitHub Pages site.

## Overview

The travel map is an interactive Leaflet.js-powered map that displays your travel destinations with:
- Custom markers for each location
- Popup windows with quick information
- Detailed location panels with blog posts and photo galleries
- Responsive design with dark mode support
- Data-driven architecture using YAML files

## File Structure

```
_data/
  └── travel_locations.yml          # Location data (edit this to add locations)
_pages/
  └── travel/
      └── map.md                     # Map page (rarely needs editing)
```

## Adding New Locations

### Step 1: Edit the Data File

Open `_data/travel_locations.yml` and add a new location entry:

```yaml
- name: "Tokyo, Japan"
  coords: [35.6762, 139.6503]
  country: "Japan"
  description: "Vibrant metropolis blending tradition and technology"
  duration: "2 weeks"
  dates: "March 2025"
  highlights:
    - "Shibuya Crossing"
    - "Senso-ji Temple"
    - "Tokyo Skytree"
    - "Tsukiji Fish Market"
  posts:
    - title: "First Week in Tokyo"
      url: "/blog-post/travel/japan-2025/week-one/"
    - title: "Hidden Gems of Tokyo"
      url: "/blog-post/travel/japan-2025/hidden-gems/"
  photos:
    - id: "tokyo/shibuya-night"
      caption: "Shibuya Crossing at night"
    - id: "tokyo/temple-1"
      caption: "Senso-ji Temple"
  google_photos_album: "https://photos.app.goo.gl/your-tokyo-album"
```

### Step 2: Find Coordinates

**Method 1: Google Maps**
1. Go to [Google Maps](https://maps.google.com)
2. Right-click on your destination
3. Click the coordinates (they'll be copied)
4. Format as `[latitude, longitude]`

**Method 2: Coordinates Finder**
- Use [LatLong.net](https://www.latlong.net/)
- Search for your location
- Copy the coordinates

### Step 3: Link Blog Posts

Make sure your blog post URLs match the paths in your `_posts` directory:

```yaml
posts:
  - title: "Week One in Tokyo"
    url: "/blog-post/travel/japan-2025/week-one/"  # Must match actual post URL
```

### Step 4: Add Photo Gallery Link

Get a shareable Google Photos album link:
1. Open Google Photos
2. Create or select an album
3. Click "Share" → "Create link"
4. Copy the link
5. Add to your location data

## Data Field Reference

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `name` | String | Location name | `"Singapore"` |
| `coords` | Array | `[latitude, longitude]` | `[1.3521, 103.8198]` |
| `country` | String | Country name | `"Singapore"` |
| `description` | String | Brief description | `"Gateway to Southeast Asia"` |
| `duration` | String | Length of stay | `"1 week"` |
| `dates` | String | When you visited | `"July 2024"` |

### Optional Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `highlights` | Array | Key experiences | `["Marina Bay", "Gardens"]` |
| `posts` | Array | Related blog posts | See structure below |
| `photos` | Array | Photo metadata | See structure below |
| `google_photos_album` | String | Album URL | `"https://photos.app.goo.gl/..."` |

### Post Structure

```yaml
posts:
  - title: "Post Title"
    url: "/blog-post/category/post-slug/"
```

### Photo Structure

```yaml
photos:
  - id: "folder/image-name"
    caption: "Photo description"
```

## Customization

### Changing Map Style

Edit `_pages/travel/map.md` to change the tile provider:

```javascript
// Current: OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);

// Alternative: Mapbox (requires API key)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: '© Mapbox',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  accessToken: 'YOUR_MAPBOX_TOKEN'
}).addTo(map);

// Alternative: CartoDB Dark (good for dark mode)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap © CartoDB',
  maxZoom: 19
}).addTo(map);
```

### Changing Marker Color

Edit the custom marker icon in `_pages/travel/map.md`:

```javascript
const customIcon = L.divIcon({
  className: 'custom-marker',
  html: '<div style="background: #YOUR_COLOR; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});
```

Color suggestions:
- Pink (current): `#f5576c`
- Blue: `#4285f4`
- Green: `#34a853`
- Orange: `#fbbc04`
- Purple: `#9c27b0`

### Adjusting Map Height

Edit the inline style in `_pages/travel/map.md`:

```html
<!-- Desktop height -->
<div id="travel-map" style="height: 600px; ..."></div>

<!-- Mobile height (in CSS) -->
@media (max-width: 768px) {
  #travel-map {
    height: 400px;  /* Change this */
  }
}
```

### Customizing Popup Content

Edit the popup content in the `locations.forEach` loop:

```javascript
let popupContent = `
  <div class="map-popup">
    <h3 style="margin: 0 0 0.5rem 0; color: #f5576c;">${location.name}</h3>
    <p style="margin: 0 0 1rem 0; color: #666;">${location.description}</p>
    <!-- Add custom content here -->
  </div>
`;
```

## Advanced Features

### Adding Polylines (Travel Routes)

Add travel routes between locations:

```javascript
// After adding markers, add this:
const route = L.polyline([
  [1.3521, 103.8198],  // Singapore
  [0.5897, 101.3431]   // Sumatra
], {
  color: '#f5576c',
  weight: 3,
  opacity: 0.7,
  dashArray: '10, 10'
}).addTo(map);
```

### Adding Marker Clusters

For many locations, use marker clustering:

1. Add Leaflet.markercluster library:
```html
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css" />
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css" />
<script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>
```

2. Use marker clusters:
```javascript
const markers = L.markerClusterGroup();
locations.forEach(location => {
  const marker = L.marker(location.coords, { icon: customIcon });
  marker.bindPopup(popupContent);
  markers.addLayer(marker);
});
map.addLayer(markers);
```

### Adding Search Functionality

Add a search box to find locations:

```html
<input type="text" id="location-search" placeholder="Search locations..." 
       style="margin-bottom: 1rem; padding: 0.5rem; width: 100%; max-width: 400px; border-radius: 4px; border: 1px solid #ddd;">
```

```javascript
document.getElementById('location-search').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = locations.filter(loc => 
    loc.name.toLowerCase().includes(query) || 
    loc.country.toLowerCase().includes(query)
  );
  // Update map with filtered locations
});
```

## Troubleshooting

### Map Not Displaying

**Issue**: Blank space where map should be

**Solutions**:
1. Check browser console for errors (F12)
2. Verify Leaflet.js is loading:
   ```html
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
   ```
3. Ensure map container has height:
   ```css
   #travel-map { height: 600px; }
   ```

### Markers Not Appearing

**Issue**: Map loads but no markers

**Solutions**:
1. Check `_data/travel_locations.yml` syntax (use YAML validator)
2. Verify coordinates format: `[latitude, longitude]`
3. Check browser console for JavaScript errors
4. Ensure Jekyll is processing the data file:
   ```liquid
   {{ site.data.travel_locations | jsonify }}
   ```

### Coordinates Wrong

**Issue**: Markers in wrong location

**Solutions**:
1. Verify coordinate order: `[latitude, longitude]` (not longitude, latitude)
2. Check coordinate signs:
   - North latitude: positive
   - South latitude: negative
   - East longitude: positive
   - West longitude: negative
3. Use Google Maps to verify coordinates

### YAML Syntax Errors

**Issue**: Jekyll build fails

**Solutions**:
1. Check indentation (use spaces, not tabs)
2. Quote strings with special characters:
   ```yaml
   description: "It's amazing!"  # Quote needed for apostrophe
   ```
3. Use YAML validator: [yamllint.com](http://www.yamllint.com/)
4. Check array syntax:
   ```yaml
   highlights:
     - "Item 1"
     - "Item 2"
   ```

### Dark Mode Issues

**Issue**: Map hard to see in dark mode

**Solutions**:
1. Use dark map tiles:
   ```javascript
   L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
     attribution: '© OpenStreetMap © CartoDB',
     maxZoom: 19
   }).addTo(map);
   ```
2. Or add filter to existing tiles (already in CSS):
   ```css
   @media (prefers-color-scheme: dark) {
     .leaflet-tile {
       filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7);
     }
   }
   ```

## Performance Optimization

### For Many Locations (50+)

1. **Use marker clustering** (see Advanced Features)
2. **Lazy load location details**:
   ```javascript
   marker.on('click', async () => {
     const details = await fetch(`/api/location/${location.id}`);
     showLocationDetails(await details.json());
   });
   ```
3. **Reduce marker complexity**:
   ```javascript
   // Simple circle instead of custom HTML
   const customIcon = L.circleMarker([lat, lng], {
     radius: 8,
     fillColor: '#f5576c',
     color: '#fff',
     weight: 2,
     fillOpacity: 0.8
   });
   ```

### Image Optimization

Use Cloudinary for location photos:
```yaml
photos:
  - id: "tokyo/shibuya"
    cloudinary_id: "travel/tokyo/shibuya"
    caption: "Shibuya Crossing"
```

## Best Practices

### Data Organization

1. **Consistent naming**: Use "City, Country" format
2. **Chronological order**: List locations by visit date
3. **Complete data**: Fill all fields for best experience
4. **Accurate coordinates**: Double-check on Google Maps

### Content Guidelines

1. **Descriptions**: 1-2 sentences, engaging and specific
2. **Highlights**: 3-5 key experiences
3. **Blog posts**: Link all related posts
4. **Photos**: Use high-quality images, descriptive captions

### Maintenance

1. **Regular updates**: Add locations after each trip
2. **Link verification**: Check blog post URLs periodically
3. **Photo albums**: Keep Google Photos albums public
4. **Backup data**: Keep copy of `travel_locations.yml`

## Examples

### Minimal Location

```yaml
- name: "Paris, France"
  coords: [48.8566, 2.3522]
  country: "France"
  description: "City of lights and romance"
  duration: "3 days"
  dates: "May 2024"
```

### Complete Location

```yaml
- name: "Kyoto, Japan"
  coords: [35.0116, 135.7681]
  country: "Japan"
  description: "Ancient capital with thousands of temples and traditional gardens"
  duration: "1 week"
  dates: "April 2025"
  highlights:
    - "Fushimi Inari Shrine - 10,000 torii gates"
    - "Arashiyama Bamboo Grove"
    - "Kinkaku-ji (Golden Pavilion)"
    - "Gion District - Geisha spotting"
    - "Traditional tea ceremony"
  posts:
    - title: "Temples and Gardens of Kyoto"
      url: "/blog-post/travel/japan-2025/kyoto-temples/"
    - title: "Kyoto Food Guide"
      url: "/blog-post/travel/japan-2025/kyoto-food/"
    - title: "Day Trip to Nara"
      url: "/blog-post/travel/japan-2025/nara-day-trip/"
  photos:
    - id: "kyoto/fushimi-inari-1"
      caption: "Torii gates at Fushimi Inari"
    - id: "kyoto/bamboo-grove"
      caption: "Arashiyama Bamboo Grove"
    - id: "kyoto/golden-pavilion"
      caption: "Kinkaku-ji reflected in pond"
  google_photos_album: "https://photos.app.goo.gl/kyoto2025"
```

## Integration with Other Features

### Link from Travel Blog

Add map link to travel blog posts:

```markdown
---
layout: single
title: "Week One in Tokyo"
categories: travel
tags: [japan, tokyo, asia]
---

See this location on the [interactive travel map](/travel/map/).
```

### Homepage Feature

Add map preview to homepage:

```markdown
## 🗺️ Travel Map

Explore the places I've visited on my [interactive travel map](/travel/map/). 
Click markers to see photos, blog posts, and highlights from each destination.
```

### Navigation Menu

Already added to `_data/navigation.yml`:

```yaml
- title: "Travel"
  children:
    - title: "Travel Blog"
      url: /blog/travel/
    - title: "Travel Map"
      url: /travel/map/
```

## Resources

- [Leaflet.js Documentation](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [YAML Syntax Guide](https://yaml.org/spec/1.2/spec.html)
- [Google Maps Coordinates](https://support.google.com/maps/answer/18539)
- [Leaflet Plugins](https://leafletjs.com/plugins.html)

## Support

If you encounter issues:
1. Check browser console (F12) for errors
2. Validate YAML syntax
3. Review this guide's troubleshooting section
4. Check Jekyll build logs
5. Test in different browsers

---

**Last Updated**: November 2024  
**Version**: 1.0