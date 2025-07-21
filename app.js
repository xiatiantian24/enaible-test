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
  const map = $('#map-container');
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