// --- Product Data (easy to edit) ---
const PRODUCTS = [
  {
    id: 1,
    name: "Black Summer Dress",
    description: "Lightweight, perfect for business trips.",
    inventory: 8,
    distance: 0.3, // km
    location: { x: 60, y: 120 }, // fake map coordinates
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" // Black dress
  },
  {
    id: 2,
    name: "White Linen Shirt",
    description: "Breathable, stylish for summer.",
    inventory: 5,
    distance: 0.5,
    location: { x: 180, y: 80 },
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" // White shirt
  },
  {
    id: 3,
    name: "Business Tote Bag",
    description: "Fits laptop and essentials.",
    inventory: 2,
    distance: 0.2,
    location: { x: 120, y: 200 },
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" // Tote bag
  },
  {
    id: 4,
    name: "Comfort Sandals",
    description: "Walk all day in style.",
    inventory: 10,
    distance: 0.4,
    location: { x: 220, y: 160 },
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" // Sandals
  },
  {
    id: 5,
    name: "Lightweight Scarf",
    description: "Perfect for breezy summer evenings.",
    inventory: 7,
    distance: 0.6,
    location: { x: 90, y: 60 },
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" // Scarf
  },
  {
    id: 6,
    name: "Classic Sunglasses",
    description: "UV protection with timeless style.",
    inventory: 12,
    distance: 0.7,
    location: { x: 160, y: 180 },
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" // Sunglasses
  }
];

// --- Refine Images (separate from products) ---
const REFINE_IMAGES = [
  { id: 1, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80', alt: 'Tan Satchel' },
  { id: 2, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', alt: 'Red Handbag' },
  { id: 3, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', alt: 'Blue Crossbody' },
  { id: 4, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', alt: 'Green Backpack' },
  { id: 5, image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80', alt: 'Yellow Tote' },
  { id: 6, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', alt: 'Grey Messenger' },
];

// Map refine image id to product ids
const REFINE_TO_PRODUCTS = {
  1: [3],        // Canvas Tote Bag → Business Tote Bag
  2: [4],        // Brown Leather Crossbody → Comfort Sandals
  3: [5],        // Green Messenger Bag → Lightweight Scarf
  4: [1],        // Black Satchel → Black Summer Dress
  5: [2],        // White Slouch Bag → White Linen Shirt
  6: [6],        // Black Shoulder Bag → Classic Sunglasses
};

// --- State ---
let tripPlan = [];

// --- UI Helpers ---
function $(selector) {
  return document.querySelector(selector);
}
function show(el) {
  if (el) el.classList.remove('hidden');
}
function hide(el) {
  if (el) el.classList.add('hidden');
}

// --- Render Product List ---
function renderProducts(products) {
  const list = $('#product-list');
  list.innerHTML = '';
  import('./components/ProductCard.js').then(({ renderProductCard }) => {
    products.forEach(product => {
      const card = renderProductCard(product, { onAdd: addToTrip });
      list.appendChild(card);
    });
    if (window.feather) window.feather.replace();
  });
}

// --- Add to Trip Plan ---
function addToTrip(productId) {
  const idx = tripPlan.indexOf(productId);
  if (idx === -1) {
    tripPlan.push(productId);
  } else {
    tripPlan.splice(idx, 1);
  }
  // Update button visibility
  if (tripPlan.length > 0) {
    $('#preview-trip-btn').classList.remove('hidden');
  } else {
    $('#preview-trip-btn').classList.add('hidden');
  }
  // Re-render products to update icons
  if (window.renderProducts && window.lastProductSelection) {
    const filteredProducts = (window.PRODUCTS || []).filter(p => window.lastProductSelection.includes(p.id));
    window.renderProducts(filteredProducts);
  } else if (window.renderProducts && window.PRODUCTS) {
    window.renderProducts(window.PRODUCTS);
  }
}

// --- Render Trip Plan Overlay ---
function renderTripOverlay() {
  const tripList = $('#trip-list');
  tripList.innerHTML = '';
  if (tripPlan.length === 0) {
    tripList.innerHTML = '<p>No products added yet.</p>';
    return;
  }
  tripPlan.forEach(id => {
    const product = PRODUCTS.find(p => p.id === id);
    const item = document.createElement('div');
    item.className = 'product-card';
    item.innerHTML = `
      <div style="display:flex;align-items:center;gap:1rem;">
        <img src="${product.image}" alt="${product.name}" style="border-radius:0.5rem;width:60px;height:75px;object-fit:cover;">
        <div style="flex:1;text-align:left;">
          <div class="product-title">${product.name}</div>
          <div class="product-meta">${product.description}</div>
        </div>
      </div>
    `;
    tripList.appendChild(item);
  });
}

// --- Render Map Overlay ---
function renderMapOverlay() {
  const map = document.getElementById('map-container');
  if (!map) return;
  map.innerHTML = '';
  // Fake map size
  map.style.position = 'relative';
  map.style.background = 'repeating-linear-gradient(45deg, #e0e0e0, #e0e0e0 10px, #fff 10px, #fff 20px)';
  map.style.width = '100%';
  map.style.height = '250px';
  // Place markers for each product
  tripPlan.forEach((id, idx) => {
    const product = PRODUCTS.find(p => p.id === id);
    const marker = document.createElement('div');
    marker.className = 'map-product-marker';
    marker.style.left = (product.location.x - 16) + 'px';
    marker.style.top = (product.location.y - 16) + 'px';
    marker.style.position = 'absolute';
    marker.title = product.name;
    marker.innerText = idx + 1;
    map.appendChild(marker);
  });
}

// --- Event Listeners ---
// $('#search-btn').onclick = () => {
//   const goal = $('#shopping-goal').value.trim();
//   if (goal.length === 0) return;
//   show($('#product-results'));
//   renderProducts(PRODUCTS); // In real app, filter by goal
// };

$('#preview-trip-btn').onclick = () => {
  renderTripOverlay();
  hide(document.getElementById('products-page'));
  show($('#trip-overlay'));
};
$('#close-overlay-btn').onclick = () => {
  hide($('#trip-overlay'));
  show(document.getElementById('products-page'));
};
$('#close-map-btn').onclick = () => {
  hide($('#map-overlay'));
  show(document.getElementById('products-page'));
};

// --- Utility: Hide overlays on start ---
hide($('#product-results'));
hide($('#trip-overlay'));
hide($('#map-overlay'));
hide($('#preview-trip-btn'));

// Ensure Feather icons are rendered after DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  if (window.feather) window.feather.replace();
});

// Expose for SPA navigation
window.PRODUCTS = PRODUCTS;
window.renderProducts = renderProducts;
window.tripPlan = tripPlan;
window.REFINE_IMAGES = REFINE_IMAGES;
window.REFINE_TO_PRODUCTS = REFINE_TO_PRODUCTS;

// Map productId to array of badge objects for this session
window.productBadgeMap = window.productBadgeMap || {};
window.getRandomBadgesForProduct = function(productId) {
  if (!window.productBadgeMap[productId]) {
    const allBadges = [
      { class: 'trending', html: '<i class="fa-solid fa-fire"></i> Trending on Tiktok' },
      { class: 'selling', html: '<i class="fa-solid fa-bolt"></i> Selling Fast' },
      { class: 'sale', html: '45% Off' },
      { class: 'rare', html: '<i class="fa-solid fa-gem"></i> Rare Find' }
    ];
    const badgeCount = Math.random() < 0.5 ? 1 : 2;
    const shuffled = allBadges.sort(() => 0.5 - Math.random());
    window.productBadgeMap[productId] = shuffled.slice(0, badgeCount);
  }
  return window.productBadgeMap[productId];
};

// Store last randomized product selection for the session
window.lastProductSelection = null;

// Example search placeholders for rotating search bar inspiration
window.examplePlaceholders = [
  "What are you searching for today?",
  "White cotton tees that I can wear for walking to class in a Philly summer",
  "Navy button down shirts for a Catholic  summer wedding in Quito",
  "Formal cream dress for 28 y.o. women for a barn wedding in TX this weekend",
  "Bags that go well with linen pants for summer in Tuscany"
];
window.placeholderIndex = 0;
window.placeholderInterval = null;

// --- SPA Navigation: Nav Bar Clicks ---
window.addEventListener('DOMContentLoaded', () => {
  // Helper to show/hide main screens
  function showScreen(screen) {
    // Hide all main screens
    document.getElementById('refine-page').classList.add('hidden');
    document.getElementById('products-page').classList.add('hidden');
    document.getElementById('profile-page').classList.add('hidden');
    document.getElementById('map-page').classList.add('hidden');
    // Hide all back bars
    document.querySelectorAll('.back-btn-bar').forEach(bar => bar.classList.add('hidden'));
    // Show/hide search UI
    document.getElementById('searchbar-container').classList.add('hidden');
    const accent = document.querySelector('.accent-heading');
    if (accent) accent.classList.add('hidden');
    const toggleRow = document.getElementById('search-toggle-row');
    if (toggleRow) toggleRow.classList.add('hidden');
    const locationBar = document.getElementById('location-bar');
    if (locationBar) locationBar.classList.add('hidden');
    const refineDesc = document.getElementById('refine-desc');
    if (refineDesc) refineDesc.classList.add('hidden');
    const backBtnRefine = document.getElementById('back-to-search-btn-refine');
    if (backBtnRefine) backBtnRefine.classList.add('hidden');

    const searchbarActions = document.querySelector('.searchbar-actions-row-fixed');
    const searchbarOuter = document.querySelector('.searchbar-outer');
    if (searchbarActions) searchbarActions.classList.remove('hidden');
    if (searchbarOuter) searchbarOuter.style.height = '';

    const exampleSearches = document.getElementById('example-searches-container');
    if (exampleSearches) exampleSearches.classList.add('hidden');

    if (screen === 'search') {
      document.getElementById('searchbar-container').classList.remove('hidden');
      if (accent) accent.classList.remove('hidden');
      if (toggleRow) toggleRow.classList.remove('hidden');
      if (locationBar) locationBar.classList.remove('hidden');
      if (refineDesc) refineDesc.classList.add('hidden');
      if (backBtnRefine) backBtnRefine.classList.add('hidden');
      if (searchbarActions) searchbarActions.classList.remove('hidden');
      if (searchbarOuter) searchbarOuter.style.height = '';
      // Reset scroll for searchbar container
      const searchbarContainer = document.getElementById('searchbar-container');
      if (searchbarContainer) searchbarContainer.scrollTop = 0;
      // Rotating placeholder logic with fade transition
      setTimeout(() => {
        let searchInput = document.querySelector('#searchbar-container .searchbar-input');
        if (!searchInput) {
          searchInput = document.querySelector('#searchbar-container textarea');
        }
        if (!searchInput) {
          searchInput = document.querySelector('#searchbar-container input');
        }
        if (searchInput) {
          // Add transition class for smooth fade
          searchInput.classList.add('placeholder-fade');
          searchInput.placeholder = window.examplePlaceholders[0];
          if (window.placeholderInterval) clearInterval(window.placeholderInterval);
          window.placeholderIndex = 0;
          window.placeholderInterval = setInterval(() => {
            // Fade out
            searchInput.style.opacity = '0.3';
            setTimeout(() => {
              // Change placeholder text
              window.placeholderIndex = (window.placeholderIndex + 1) % window.examplePlaceholders.length;
              searchInput.placeholder = window.examplePlaceholders[window.placeholderIndex];
              // Fade in
              searchInput.style.opacity = '1';
            }, 150);
          }, 3000);
        }
      }, 100);
    } else if (screen === 'refine') {
      document.getElementById('refine-page').classList.remove('hidden');
      document.getElementById('searchbar-container').classList.remove('hidden');
      if (refineDesc) refineDesc.classList.remove('hidden');
      const bar = document.querySelector('.back-btn-bar[data-back="refine"]');
      if (bar) bar.classList.remove('hidden');
      if (backBtnRefine) {
        backBtnRefine.classList.remove('hidden');
        if (window.feather) window.feather.replace();
      }
      if (searchbarActions) searchbarActions.classList.add('hidden');
      if (searchbarOuter) searchbarOuter.style.height = '58px';
      if (exampleSearches) exampleSearches.classList.add('hidden');
      // Reset scroll for refine page
      const refinePage = document.getElementById('refine-page');
      if (refinePage) refinePage.scrollTop = 0;
      
      // Add animation-played class after animations complete to prevent re-animation
      setTimeout(() => {
        const refineDescEl = document.getElementById('refine-desc');
        const refinePageEl = document.getElementById('refine-page');
        if (refineDescEl) refineDescEl.classList.add('animation-played');
        if (refinePageEl) refinePageEl.classList.add('animation-played');
      }, 2400); // Wait for all animations to complete (1.8s + 0.6s = 2.4s)
      
      // Initialize filter functionality
      if (window.initializeFilterSheet) {
        window.initializeFilterSheet();
      }
    } else if (screen === 'products') {
      document.getElementById('products-page').classList.remove('hidden');
      if (refineDesc) refineDesc.classList.add('hidden');
      document.getElementById('searchbar-container').classList.add('hidden');
      const bar = document.querySelector('.back-btn-bar[data-back="products"]');
      if (bar) bar.classList.remove('hidden');
      if (backBtnRefine) backBtnRefine.classList.add('hidden');
      if (searchbarActions) searchbarActions.classList.remove('hidden');
      if (searchbarOuter) searchbarOuter.style.height = '';
      if (exampleSearches) exampleSearches.classList.add('hidden');
      // Reset scroll for product list
      const productList = document.getElementById('product-list');
      if (productList) productList.scrollTop = 0;
    } else if (screen === 'profile') {
      document.getElementById('profile-page').classList.remove('hidden');
      if (refineDesc) refineDesc.classList.add('hidden');
      document.getElementById('searchbar-container').classList.add('hidden');
      const bar = document.querySelector('.back-btn-bar[data-back="profile"]');
      if (bar) bar.classList.remove('hidden');
      if (backBtnRefine) backBtnRefine.classList.add('hidden');
      if (searchbarActions) searchbarActions.classList.remove('hidden');
      if (searchbarOuter) searchbarOuter.style.height = '';
      if (exampleSearches) exampleSearches.classList.add('hidden');
      // Reset scroll for profile page
      const profilePage = document.getElementById('profile-page');
      if (profilePage) profilePage.scrollTop = 0;
    } else if (screen === 'map') {
      document.getElementById('map-page').classList.remove('hidden');
      if (refineDesc) refineDesc.classList.add('hidden');
      document.getElementById('searchbar-container').classList.add('hidden');
      const bar = document.querySelector('.back-btn-bar[data-back="map"]');
      if (bar) bar.classList.remove('hidden');
      if (typeof renderMapOverlay === 'function') renderMapOverlay();
      if (searchbarActions) searchbarActions.classList.remove('hidden');
      if (searchbarOuter) searchbarOuter.style.height = '';
      if (exampleSearches) exampleSearches.classList.add('hidden');
      // Reset scroll for map page
      const mapPage = document.getElementById('map-page');
      if (mapPage) mapPage.scrollTop = 0;
    }
  }

  // Expose showScreen globally for use in index.html
  window.showScreen = showScreen;

  // Attach nav bar click listeners
  const navBar = document.getElementById('navbar-container');
  if (navBar) {
    navBar.addEventListener('click', (e) => {
      let navItem = e.target.closest('.nav-item');
      if (!navItem) return;
      // Remove active from all nav-items and nav-icon-bg
      navBar.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      navBar.querySelectorAll('.nav-icon-bg').forEach(i => i.classList.remove('active'));
      // Set active on clicked
      navItem.classList.add('active');
      const iconBg = navItem.querySelector('.nav-icon-bg');
      if (iconBg) iconBg.classList.add('active');
      // Switch view
      const label = navItem.querySelector('.nav-label')?.textContent?.trim();
      if (label === 'Find') {
        showScreen('search');
      } else if (label === 'Trip') {
        showScreen('map');
      } else if (label === 'Me') {
        showScreen('profile');
      }
    });
  }

  // Attach click handler for refine back button
  const backBtnRefine = document.getElementById('back-to-search-btn-refine');
  if (backBtnRefine) {
    backBtnRefine.onclick = () => {
      showScreen('search');
    };
  }
  

  
  // Initialize filter sheet functionality
  if (typeof initializeFilterSheet === 'function') {
    initializeFilterSheet();
  }
});