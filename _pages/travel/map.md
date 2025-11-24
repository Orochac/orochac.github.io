---
layout: single
title: "Travel Map"
permalink: /travel/map/
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/travel-header.jpg
---

<div id="travel-map" style="height: 600px; width: 100%; border-radius: 12px; margin: 2rem 0;"></div>

<div id="location-details" class="location-details" style="display: none;">
  <h3 id="location-title"></h3>
  <p id="location-description"></p>
  <div id="location-content"></div>
</div>

<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<script>
// Initialize the map
const map = L.map('travel-map').setView([0, 100], 4);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);

// Travel locations data - loaded from _data/travel_locations.yml
const locations = {{ site.data.travel_locations | jsonify }};

// Custom marker icon
const customIcon = L.divIcon({
  className: 'custom-marker',
  html: '<div style="background: #f5576c; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

// Add markers for each location
locations.forEach(location => {
  const marker = L.marker(location.coords, { icon: customIcon }).addTo(map);
  
  // Create popup content
  let popupContent = `
    <div class="map-popup">
      <h3 style="margin: 0 0 0.5rem 0; color: #f5576c;">${location.name}</h3>
      <p style="margin: 0 0 1rem 0; color: #666;">${location.description}</p>
      <div style="margin-bottom: 1rem;">
        <strong>Duration:</strong> ${location.duration}<br>
        <strong>Highlights:</strong> ${location.highlights.join(', ')}
      </div>
  `;
  
  if (location.posts.length > 0) {
    popupContent += '<div style="margin-top: 1rem;"><strong>Blog Posts:</strong><ul style="margin: 0.5rem 0; padding-left: 1.5rem;">';
    location.posts.forEach(post => {
      popupContent += `<li><a href="${post.url}" style="color: #f5576c;">${post.title}</a></li>`;
    });
    popupContent += '</ul></div>';
  }
  
  popupContent += '</div>';
  
  marker.bindPopup(popupContent, {
    maxWidth: 300,
    className: 'custom-popup'
  });
  
  // Show location details on click
  marker.on('click', function() {
    showLocationDetails(location);
  });
});

// Fit map to show all markers
if (locations.length > 0) {
  const group = L.featureGroup(locations.map(loc => L.marker(loc.coords)));
  map.fitBounds(group.getBounds().pad(0.1));
}

// Show location details function
function showLocationDetails(location) {
  const detailsDiv = document.getElementById('location-details');
  const titleEl = document.getElementById('location-title');
  const descEl = document.getElementById('location-description');
  const contentEl = document.getElementById('location-content');
  
  titleEl.textContent = location.name;
  descEl.textContent = location.description;
  
  let content = `
    <div class="location-info">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
        <div><strong>Country:</strong> ${location.country}</div>
        <div><strong>Duration:</strong> ${location.duration}</div>
        <div><strong>Dates:</strong> ${location.dates || 'N/A'}</div>
      </div>
      <p><strong>Highlights:</strong></p>
      <ul>
        ${location.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `;
  
  if (location.posts && location.posts.length > 0) {
    content += `
      <div class="location-posts">
        <h4>Blog Posts</h4>
        <div class="post-grid">
          ${location.posts.map(post => `
            <a href="${post.url}" class="post-card">
              <span>${post.title}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  if (location.google_photos_album) {
    content += `
      <div style="margin-top: 2rem;">
        <a href="${location.google_photos_album}" target="_blank" rel="noopener noreferrer" 
           style="display: inline-block; padding: 0.75rem 1.5rem; background: #f5576c; color: white; 
                  text-decoration: none; border-radius: 8px; font-weight: 500; 
                  transition: transform 0.2s, box-shadow 0.2s;">
          📸 View Photo Gallery
        </a>
      </div>
    `;
  }
  
  contentEl.innerHTML = content;
  detailsDiv.style.display = 'block';
  
  // Smooth scroll to details
  detailsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
</script>

<style>
/* Map container */
#travel-map {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

/* Custom popup styling */
.leaflet-popup-content-wrapper {
  border-radius: 12px;
  padding: 0;
}

.leaflet-popup-content {
  margin: 0;
  min-width: 250px;
}

.map-popup {
  padding: 1rem;
}

.map-popup h3 {
  font-size: 1.25rem;
}

.map-popup a {
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.map-popup a:hover {
  opacity: 0.7;
}

/* Location details */
.location-details {
  margin-top: 3rem;
  padding: 2rem;
  background: var(--background-color-alt, #f8f9fa);
  border-radius: 12px;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.location-details h3 {
  color: #f5576c;
  margin-top: 0;
}

.location-info {
  margin-bottom: 2rem;
}

.location-info ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.location-posts h4 {
  margin-bottom: 1rem;
  color: var(--text-color, #333);
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.post-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-color, #333);
  transition: all 0.3s ease;
}

.post-card:hover {
  border-color: #f5576c;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(245, 87, 108, 0.2);
}

.post-card svg {
  color: #f5576c;
  flex-shrink: 0;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .location-details {
    --background-color-alt: #2a2a2a;
    --text-color: #e0e0e0;
  }
  
  .post-card {
    background: #1a1a1a;
    border-color: #404040;
    color: #e0e0e0;
  }
  
  .post-card:hover {
    border-color: #f5576c;
  }
  
  /* Dark mode map tiles */
  .leaflet-tile {
    filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7);
  }
}

/* Responsive */
@media (max-width: 768px) {
  #travel-map {
    height: 400px;
    border-radius: 8px;
  }
  
  .location-details {
    padding: 1.5rem;
  }
  
  .post-grid {
    grid-template-columns: 1fr;
  }
}

/* Print */
@media print {
  #travel-map {
    height: 400px;
  }
  
  .location-details {
    page-break-inside: avoid;
  }
}
</style>

---

## How to Add New Locations

To add a new location to the map, edit the `_data/travel_locations.yml` file and add a new entry:

```yaml
- name: "City, Country"
  coords: [latitude, longitude]
  country: "Country Name"
  description: "Brief description of your experience"
  duration: "X weeks/days"
  dates: "Month Year"
  highlights:
    - "Highlight 1"
    - "Highlight 2"
  posts:
    - title: "Post Title"
      url: "/blog-post/path/"
  photos:
    - id: "folder/image-name"
      caption: "Photo caption"
  google_photos_album: "https://photos.app.goo.gl/album-link"
```

**Finding Coordinates:**
1. Go to [Google Maps](https://maps.google.com)
2. Right-click on the location
3. Click the coordinates to copy them
4. Use format: `[latitude, longitude]`

**Benefits of using YAML data file:**
- Cleaner separation of data and presentation
- Easier to maintain and update locations
- Can be reused across multiple pages
- Better version control and collaboration