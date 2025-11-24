/**
 * Lazy Loading Images
 * High-performance image lazy loading with Intersection Observer
 * Falls back to immediate loading for older browsers
 */

(function() {
  'use strict';
  
  // Configuration
  const config = {
    rootMargin: '50px 0px', // Start loading 50px before image enters viewport
    threshold: 0.01,
    loadingClass: 'loading',
    loadedClass: 'loaded',
    errorClass: 'error'
  };
  
  /**
   * Load image
   */
  const loadImage = (img) => {
    // Get image source from data attribute
    const src = img.dataset.src || img.getAttribute('data-src');
    const srcset = img.dataset.srcset || img.getAttribute('data-srcset');
    
    if (!src && !srcset) return;
    
    // Add loading class
    img.classList.add(config.loadingClass);
    
    // Create new image to preload
    const tempImg = new Image();
    
    // Handle successful load
    tempImg.onload = () => {
      // Set actual image source
      if (src) img.src = src;
      if (srcset) img.srcset = srcset;
      
      // Update classes
      img.classList.remove(config.loadingClass);
      img.classList.add(config.loadedClass);
      
      // Remove data attributes
      img.removeAttribute('data-src');
      img.removeAttribute('data-srcset');
      
      // Dispatch custom event
      img.dispatchEvent(new CustomEvent('lazyloaded', { bubbles: true }));
    };
    
    // Handle load error
    tempImg.onerror = () => {
      img.classList.remove(config.loadingClass);
      img.classList.add(config.errorClass);
      console.error('Failed to load image:', src || srcset);
    };
    
    // Start loading
    if (srcset) tempImg.srcset = srcset;
    if (src) tempImg.src = src;
  };
  
  /**
   * Initialize Intersection Observer
   */
  const initIntersectionObserver = () => {
    // Check for Intersection Observer support
    if (!('IntersectionObserver' in window)) {
      // Fallback: load all images immediately
      document.querySelectorAll('img[data-src], img[data-srcset]').forEach(loadImage);
      return;
    }
    
    // Create observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImage(img);
          obs.unobserve(img); // Stop observing once loaded
        }
      });
    }, config);
    
    // Observe all lazy images
    const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset], img[loading="lazy"]');
    lazyImages.forEach(img => {
      // Add loading attribute for native lazy loading support
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Use Intersection Observer for better control
      if (img.dataset.src || img.dataset.srcset) {
        observer.observe(img);
      }
    });
    
    return observer;
  };
  
  /**
   * Handle dynamically added images
   */
  const observeDynamicImages = (observer) => {
    if (!observer || !('MutationObserver' in window)) return;
    
    const mutationObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            // Check if node itself is a lazy image
            if (node.tagName === 'IMG' && (node.dataset.src || node.dataset.srcset)) {
              observer.observe(node);
            }
            
            // Check for lazy images within node
            const lazyImages = node.querySelectorAll?.('img[data-src], img[data-srcset]');
            lazyImages?.forEach(img => observer.observe(img));
          }
        });
      });
    });
    
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  };
  
  /**
   * Preload critical images
   */
  const preloadCriticalImages = () => {
    const criticalImages = document.querySelectorAll('img[data-critical="true"]');
    criticalImages.forEach(img => {
      loadImage(img);
    });
  };
  
  /**
   * Initialize on DOM ready
   */
  const init = () => {
    // Preload critical images immediately
    preloadCriticalImages();
    
    // Initialize lazy loading
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        const observer = initIntersectionObserver();
        observeDynamicImages(observer);
      });
    } else {
      const observer = initIntersectionObserver();
      observeDynamicImages(observer);
    }
  };
  
  // Initialize
  init();
  
  // Expose for manual control
  window.lazyLoadImage = loadImage;
})();

// Made with Bob
