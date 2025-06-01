/**
 * Browser utilities for handling extensions and preventing common issues
 */

// Create a self-executing function to avoid polluting the global namespace
(function() {
  // Configuration object for the utilities
  const config = {
    urlCheckInterval: 500, // ms between URL change checks
    extensionSelectors: ['[id*="extension"]', '[class*="extension"]']
  };

  /**
   * Safely observe DOM elements with MutationObserver
   * @param {MutationObserver} observer - The observer instance
   * @param {Node} target - The target element to observe
   * @returns {boolean} - Whether observation was successful
   */
  const safeObserve = (observer, target) => {
    if (target && target.nodeType === Node.ELEMENT_NODE) {
      observer.observe(target);
      return true;
    }
    return false;
  };

  /**
   * Generate a unique ID for the current page visit
   * @returns {string} - A unique ID
   */
  const generatePageId = () => {
    return `page_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  };

  /**
   * Handle URL changes in single-page applications
   * @param {string} pageId - The unique page ID
   */
  const setupUrlChangeHandler = (pageId) => {
    let lastUrl = window.location.href;
    
    // Use requestAnimationFrame for better performance than setInterval
    const checkUrlChange = () => {
      if (lastUrl !== window.location.href) {
        lastUrl = window.location.href;
        
        // Remove extension elements that might cause conflicts
        config.extensionSelectors.forEach(selector => {
          document.querySelectorAll(selector).forEach(element => element.remove());
        });
      }
      
      // Schedule the next check
      requestAnimationFrame(() => {
        setTimeout(checkUrlChange, config.urlCheckInterval);
      });
    };
    
    // Start checking for URL changes
    checkUrlChange();
  };

  /**
   * Handle password manager extensions to prevent duplicate IDs
   * @param {string} pageId - The unique page ID
   */
  const handlePasswordManagers = (pageId) => {
    // Process all forms
    document.querySelectorAll('form').forEach((form, index) => {
      // Add unique identifiers and attributes to forms
      form.setAttribute('data-form-id', `form-${pageId}-${index}`);
      form.setAttribute('autocomplete', 'off');
      form.setAttribute('novalidate', 'true');
    });

    // Process password and text inputs
    document.querySelectorAll('input[type="password"], input[type="text"]').forEach((input, index) => {
      input.setAttribute('autocomplete', 'off');
      input.setAttribute('data-input-id', `input-${pageId}-${index}`);
    });
  };

  /**
   * Initialize duplicate ID prevention
   */
  const preventDuplicateIds = () => {
    const pageId = generatePageId();
    
    // Add a hidden element with the unique ID
    const hiddenElement = document.createElement('div');
    hiddenElement.id = pageId;
    hiddenElement.style.display = 'none';
    document.body.appendChild(hiddenElement);
    
    // Set up URL change detection
    setupUrlChangeHandler(pageId);
    
    // Handle password managers initially
    handlePasswordManagers(pageId);
    
    // Set up observer for DOM changes
    const observer = new MutationObserver(() => handlePasswordManagers(pageId));
    observer.observe(document.body, { childList: true, subtree: true });
  };

  /**
   * Handle back/forward cache issues
   */
  const handleBFCache = () => {
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        // Page was loaded from back/forward cache
        window.location.reload();
      }
    });
  };

  /**
   * Initialize all browser utilities
   */
  const init = () => {
    // Handle back/forward cache
    handleBFCache();
    
    // Initialize duplicate ID prevention when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      preventDuplicateIds();
    });
    
    // Expose the safe observe function globally
    window.safeObserve = safeObserve;
  };

  // Run initialization
  init();
})();