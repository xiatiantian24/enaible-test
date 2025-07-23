// FilterSheet.js
export function renderFilterSheet() {
  return `
    <!-- Filter Sheet Modal -->
    <div id="filter-overlay" class="filter-overlay hidden"></div>
    <div id="filter-sheet" class="filter-sheet hidden">
      <div class="filter-sheet-header">
        <h3>Filters</h3>
        <button class="close-filter-btn" id="close-filter-btn"><i data-feather="x"></i></button>
      </div>
      <div class="filter-sheet-content">
        <div class="filter-section">
          <h4>Auto-Applied Keywords</h4>
          <div class="keyword-tags" id="keyword-tags">
            <label class="keyword-tag">
              <input type="checkbox" name="keywords" value="tuscany-weather" checked tabindex="-1">
              <span>Good for weather in Tuscany in July</span>
            </label>
            <label class="keyword-tag">
              <input type="checkbox" name="keywords" value="tall-lean" checked tabindex="-1">
              <span>Flattering on tall and lean</span>
            </label>
            <label class="keyword-tag">
              <input type="checkbox" name="keywords" value="cream-palette" checked tabindex="-1">
              <span>Cream palette</span>
            </label>
            <label class="keyword-tag">
              <input type="checkbox" name="keywords" value="summer-wedding" checked tabindex="-1">
              <span>Summer wedding appropriate</span>
            </label>
            <label class="keyword-tag">
              <input type="checkbox" name="keywords" value="business-casual" checked tabindex="-1">
              <span>Business casual</span>
            </label>
            <input type="text" id="custom-keyword-input" class="custom-keyword-input" placeholder="Add your own..." autocomplete="off" />
          </div>
        </div>
        <div class="filter-section">
          <h4>Price Range</h4>
          <div class="price-range">
            <div class="dual-range-slider">
              <input type="range" id="price-min" min="5" max="500" value="5" class="price-slider min-slider">
              <input type="range" id="price-max" min="0" max="500" value="500" class="price-slider max-slider">
              <div class="slider-track"></div>
            </div>
            <div class="price-labels">
              <span id="price-min-label">$5</span>
              <span id="price-max-label">$500+</span>
            </div>
          </div>
        </div>
        <div class="filter-section">
          <h4>Distance</h4>
          <div class="distance-options">
            <label class="filter-option">
              <input type="checkbox" name="distance" value="0.5" unchecked>
              <span>Within 0.5 miles</span>
            </label>
          </div>
        </div>
        <div class="filter-section">
          <h4>Availability</h4>
          <div class="availability-options">
            <label class="filter-option">
              <input type="checkbox" name="availability" value="in-stock" checked>
              <span>In Stock</span>
            </label>
            <label class="filter-option">
              <input type="checkbox" name="availability" value="low-stock" checked>
              <span>Low Stock</span>
            </label>
          </div>
        </div>
      </div>
      <div class="filter-sheet-footer">
        <button class="clear-filters-btn">Clear All</button>
        <button class="apply-filters-btn primary-btn">Apply Filters</button>
      </div>
    </div>
  `;
}

export function initializeFilterSheet() {
  const filterBtn = document.getElementById('filter-btn-refine');
  const filterSheet = document.getElementById('filter-sheet');
  const filterOverlay = document.getElementById('filter-overlay');
  const closeFilterBtn = document.getElementById('close-filter-btn');
  const clearFiltersBtn = document.querySelector('.clear-filters-btn');
  const applyFiltersBtn = document.querySelector('.apply-filters-btn');
  
  console.log('Filter elements found:', { filterBtn, filterSheet, filterOverlay, closeFilterBtn });
  
  // Helper function to close filter sheet
  function closeFilterSheet() {
    filterSheet.classList.remove('show');
    filterOverlay.classList.remove('show');
    setTimeout(() => {
      filterSheet.classList.add('hidden');
      filterOverlay.classList.add('hidden');
    }, 300);
  }
  
  // Open filter sheet
  if (filterBtn) {
    filterBtn.addEventListener('click', () => {
      console.log('Filter button clicked');
      // Show overlay first
      filterOverlay.classList.remove('hidden');
      setTimeout(() => {
        filterOverlay.classList.add('show');
      }, 10);
      
      // Show filter sheet
      filterSheet.classList.remove('hidden');
      setTimeout(() => {
        filterSheet.classList.add('show');
        console.log('Filter sheet should be visible now');
        // Remove focus from any elements to prevent focus issues
        if (document.activeElement) {
          document.activeElement.blur();
        }
        // Enable interactions after animation completes
        setTimeout(() => {
          const keywordTags = filterSheet.querySelectorAll('.keyword-tag');
          keywordTags.forEach(tag => {
            tag.style.pointerEvents = 'auto';
          });
        }, 300);
      }, 10);
      if (window.feather) window.feather.replace();
    });
  } else {
    console.log('Filter button not found');
  }
  
  // Close filter sheet
  if (closeFilterBtn) {
    closeFilterBtn.addEventListener('click', () => {
      closeFilterSheet();
    });
  }
  
  // Initialize dual-range slider functionality
  function initializeDualRangeSlider() {
    const minSlider = document.getElementById('price-min');
    const maxSlider = document.getElementById('price-max');
    const minLabel = document.getElementById('price-min-label');
    const maxLabel = document.getElementById('price-max-label');
    
    if (minSlider && maxSlider && minLabel && maxLabel) {
      // Update labels when sliders change
      function updateLabels() {
        minLabel.textContent = `$${minSlider.value}`;
        maxLabel.textContent = `$${maxSlider.value}`;
      }
      
      // Ensure min doesn't exceed max and vice versa
      function updateSliders() {
        const minVal = parseInt(minSlider.value);
        const maxVal = parseInt(maxSlider.value);
        
        if (minVal > maxVal) {
          if (this === minSlider) {
            minSlider.value = maxVal;
          } else {
            maxSlider.value = minVal;
          }
        }
        updateLabels();
      }
      
      minSlider.addEventListener('input', updateSliders);
      maxSlider.addEventListener('input', updateSliders);
      
      // Initialize labels
      updateLabels();
    }
  }
  
  // Clear all filters
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      // Reset all form elements
      document.querySelectorAll('#filter-sheet input[type="radio"]').forEach(radio => {
        radio.checked = false;
      });
      document.querySelectorAll('#filter-sheet input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
      });
      document.getElementById('price-min').value = 0;
      document.getElementById('price-max').value = 500;
      
      // Re-check default distance
      const defaultDistance = document.querySelector('input[name="distance"][value="0.5"]');
      if (defaultDistance) defaultDistance.checked = true;
      
      // Re-check default availability
      document.querySelectorAll('input[name="availability"]').forEach(checkbox => {
        checkbox.checked = true;
      });
      
      // Re-check default keywords
      document.querySelectorAll('input[name="keywords"]').forEach(checkbox => {
        checkbox.checked = true;
      });
      
      // Update price labels
      const minLabel = document.getElementById('price-min-label');
      const maxLabel = document.getElementById('price-max-label');
      if (minLabel) minLabel.textContent = '$0';
      if (maxLabel) maxLabel.textContent = '$500';
    });
  }
  
  // Apply filters
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', () => {
      // Get filter values
      const minPrice = document.getElementById('price-min').value;
      const maxPrice = document.getElementById('price-max').value;
      const distance = document.querySelector('input[name="distance"]:checked')?.value;
      const availability = Array.from(document.querySelectorAll('input[name="availability"]:checked')).map(cb => cb.value);
      const keywords = Array.from(document.querySelectorAll('input[name="keywords"]:checked')).map(cb => cb.value);
      
      console.log('Applied filters:', { minPrice, maxPrice, distance, availability, keywords });
      
      // Close filter sheet
      closeFilterSheet();
      
      // TODO: Apply filters to product list
      // This would filter the products based on the selected criteria
    });
  }
  
  // Close filter sheet when clicking outside
  if (filterOverlay) {
    filterOverlay.addEventListener('click', () => {
      closeFilterSheet();
    });
  }
  
  // Prevent closing when clicking inside the sheet
  if (filterSheet) {
    filterSheet.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
  
  // Initialize dual-range slider
  initializeDualRangeSlider();

  // Custom keyword input logic
  const keywordTagsDiv = document.getElementById('keyword-tags');
  const customKeywordInput = document.getElementById('custom-keyword-input');
  if (customKeywordInput && keywordTagsDiv) {
    customKeywordInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && this.value.trim()) {
        e.preventDefault();
        addCustomKeyword(this.value.trim());
        this.value = '';
      }
    });
    customKeywordInput.addEventListener('blur', function() {
      if (this.value.trim()) {
        addCustomKeyword(this.value.trim());
        this.value = '';
      }
    });
  }
  function addCustomKeyword(keyword) {
    // Prevent duplicates
    const exists = Array.from(keywordTagsDiv.querySelectorAll('input[name="keywords"]')).some(input => input.value.toLowerCase() === keyword.toLowerCase());
    if (exists) return;
    // Create new tag
    const label = document.createElement('label');
    label.className = 'keyword-tag';
    label.innerHTML = `<input type="checkbox" name="keywords" value="${keyword.replace(/"/g, '&quot;')}" checked tabindex="-1"><span>${keyword}</span>`;
    // Insert before the input
    keywordTagsDiv.insertBefore(label, customKeywordInput);
  }
} 