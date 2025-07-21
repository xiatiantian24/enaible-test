// --- Product Data (easy to edit) ---
const PRODUCTS = [
  {
    id: 1,
    name: "Black Summer Dress",
    description: "Lightweight, perfect for business trips.",
    inventory: 8,
    distance: 0.3, // km
    location: { x: 60, y: 120 }, // fake map coordinates
    image: "https://via.placeholder.com/80x100?text=Dress"
  },
  {
    id: 2,
    name: "White Linen Shirt",
    description: "Breathable, stylish for summer.",
    inventory: 5,
    distance: 0.5,
    location: { x: 180, y: 80 },
    image: "https://via.placeholder.com/80x100?text=Shirt"
  },
  {
    id: 3,
    name: "Business Tote Bag",
    description: "Fits laptop and essentials.",
    inventory: 2,
    distance: 0.2,
    location: { x: 120, y: 200 },
    image: "https://via.placeholder.com/80x100?text=Bag"
  },
  {
    id: 4,
    name: "Comfort Sandals",
    description: "Walk all day in style.",
    inventory: 10,
    distance: 0.4,
    location: { x: 220, y: 160 },
    image: "https://via.placeholder.com/80x100?text=Sandals"
  }
];

// --- State ---
let tripPlan = [];

// --- UI Helpers ---
function $(selector) {
  return document.querySelector(selector);
}
function show(el) {
  el.classList.remove('hidden');
}
function hide(el) {
  el.classList.add('hidden');
}

// --- Render Product List ---
function renderProducts(products) {
  const list = $('#product-list');
  list.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div style="display:flex;align-items:center;gap:1rem;">
        <img src="${product.image}" alt="${product.name}" style="border-radius:0.5rem;width:80px;height:100px;object-fit:cover;">
        <div style="flex:1;text-align:left;">
          <div class="product-title">${product.name}</div>
          <div class="product-meta">${product.description}</div>
          <div class="product-meta">Inventory: ${product.inventory} | ${product.distance} km away</div>
        </div>
      </div>
      <button class="add-btn" data-id="${product.id}">Add to Trip</button>
    `;
    list.appendChild(card);
  });
  // Add event listeners for add buttons
  list.querySelectorAll('.add-btn').forEach(btn => {
    btn.onclick = () => addToTrip(parseInt(btn.dataset.id));
  });
}

// --- Add to Trip Plan ---
function addToTrip(productId) {
  if (!tripPlan.includes(productId)) {
    tripPlan.push(productId);
    $('#preview-trip-btn').classList.remove('hidden');
    $('#in-store-mode-btn').classList.remove('hidden');
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
$('#search-btn').onclick = () => {
  const goal = $('#shopping-goal').value.trim();
  if (goal.length === 0) return;
  show($('#product-results'));
  renderProducts(PRODUCTS); // In real app, filter by goal
};

$('#preview-trip-btn').onclick = () => {
  renderTripOverlay();
  show($('#trip-overlay'));
};
$('#close-overlay-btn').onclick = () => {
  hide($('#trip-overlay'));
};
$('#in-store-mode-btn').onclick = () => {
  renderMapOverlay();
  show($('#map-overlay'));
};
$('#close-map-btn').onclick = () => {
  hide($('#map-overlay'));
};

// --- Utility: Hide overlays on start ---
hide($('#product-results'));
hide($('#trip-overlay'));
hide($('#map-overlay'));
hide($('#preview-trip-btn'));
hide($('#in-store-mode-btn'));