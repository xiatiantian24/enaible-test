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
  }
];

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
    $('#in-store-mode-btn').classList.remove('hidden');
  } else {
    $('#preview-trip-btn').classList.add('hidden');
    $('#in-store-mode-btn').classList.add('hidden');
  }
  // Re-render products to update icons
  if (window.renderProducts && window.PRODUCTS) {
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
$('#in-store-mode-btn').onclick = () => {
  renderMapOverlay();
  hide(document.getElementById('products-page'));
  show($('#map-overlay'));
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
hide($('#in-store-mode-btn'));

// Ensure Feather icons are rendered after DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  if (window.feather) window.feather.replace();
});

// Expose for SPA navigation
window.PRODUCTS = PRODUCTS;
window.renderProducts = renderProducts;
window.tripPlan = tripPlan;

// --- SPA Navigation: Nav Bar Clicks ---
window.addEventListener('DOMContentLoaded', () => {
  // Helper to show/hide main screens
  function showScreen(screen) {
    // Hide all main screens
    document.getElementById('refine-page').classList.add('hidden');
    document.getElementById('products-page').classList.add('hidden');
    document.getElementById('profile-page').classList.add('hidden');
    document.getElementById('map-page').classList.add('hidden');
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

    if (screen === 'search') {
      document.getElementById('searchbar-container').classList.remove('hidden');
      if (accent) accent.classList.remove('hidden');
      if (toggleRow) toggleRow.classList.remove('hidden');
      if (locationBar) locationBar.classList.remove('hidden');
      if (refineDesc) refineDesc.classList.add('hidden');
      if (backBtnRefine) backBtnRefine.classList.add('hidden');
      if (searchbarActions) searchbarActions.classList.remove('hidden');
      if (searchbarOuter) searchbarOuter.style.height = '';
    } else if (screen === 'refine') {
      document.getElementById('refine-page').classList.remove('hidden');
      document.getElementById('searchbar-container').classList.remove('hidden');
      if (refineDesc) refineDesc.classList.remove('hidden');
      if (backBtnRefine) {
        backBtnRefine.classList.remove('hidden');
        if (window.feather) window.feather.replace();
      }
      if (searchbarActions) searchbarActions.classList.add('hidden');
      if (searchbarOuter) searchbarOuter.style.height = '58px';
    } else if (screen === 'products') {
      document.getElementById('products-page').classList.remove('hidden');
      if (refineDesc) refineDesc.classList.add('hidden');
      document.getElementById('searchbar-container').classList.add('hidden');
      if (backBtnRefine) backBtnRefine.classList.add('hidden');
      if (searchbarActions) searchbarActions.classList.remove('hidden');
      if (searchbarOuter) searchbarOuter.style.height = '';
    } else if (screen === 'profile') {
      document.getElementById('profile-page').classList.remove('hidden');
      if (refineDesc) refineDesc.classList.add('hidden');
      document.getElementById('searchbar-container').classList.add('hidden');
      if (backBtnRefine) backBtnRefine.classList.add('hidden');
      if (searchbarActions) searchbarActions.classList.remove('hidden');
      if (searchbarOuter) searchbarOuter.style.height = '';
    } else if (screen === 'map') {
      document.getElementById('map-page').classList.remove('hidden');
      if (refineDesc) refineDesc.classList.add('hidden');
      document.getElementById('searchbar-container').classList.add('hidden');
      if (backBtnRefine) backBtnRefine.classList.add('hidden');
      if (typeof renderMapOverlay === 'function') renderMapOverlay();
      if (searchbarActions) searchbarActions.classList.remove('hidden');
      if (searchbarOuter) searchbarOuter.style.height = '';
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
});