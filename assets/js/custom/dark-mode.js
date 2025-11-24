/**
 * Dark Mode Toggle
 * Lightweight, accessible, and performant dark mode implementation
 * Respects user's system preferences and saves preference to localStorage
 */

(function() {
  'use strict';
  
  // Check for saved theme preference or default to system preference
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  };
  
  // Set theme on document
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle button icon
    const toggleBtn = document.querySelector('.dark-mode-toggle');
    if (toggleBtn) {
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      }
    }
    
    // Dispatch custom event for other scripts
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  };
  
  // Toggle theme
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
  
  // Create toggle button
  const createToggleButton = () => {
    const button = document.createElement('button');
    button.className = 'dark-mode-toggle';
    button.setAttribute('aria-label', 'Toggle dark mode');
    button.setAttribute('title', 'Toggle dark mode');
    
    const icon = document.createElement('i');
    const currentTheme = document.documentElement.getAttribute('data-theme');
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    button.appendChild(icon);
    button.addEventListener('click', toggleTheme);
    
    document.body.appendChild(button);
  };
  
  // Initialize on DOM ready
  const init = () => {
    // Set initial theme before page renders to prevent flash
    setTheme(getPreferredTheme());
    
    // Create toggle button when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createToggleButton);
    } else {
      createToggleButton();
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  };
  
  // Initialize immediately
  init();
  
  // Expose toggle function globally for manual control
  window.toggleDarkMode = toggleTheme;
})();

// Made with Bob
