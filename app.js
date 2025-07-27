// --- Test Data Configuration ---
const TEST_CONFIGS = {
  test1: {
    name: "Test 1 - Summer Shirts",
    searchQuery: "white cotton tees that I can wear for walking to class in a Philly summer",
    products: [
      {
        id: 1,
        name: "Plum Linen Shirt",
        brand: "J.Crew",
        seller: "Nordstrom",
        price: 125.00,
        walkingTime: 4,
        inventory: 8,
        images: [
          "assets/images/test1/product/1-1.jpg",
          "assets/images/test1/product/1-2.jpg",
          "assets/images/test1/product/1-3.jpg",
          "assets/images/test1/product/1-4.jpg",
        ],
        material: "100% Linen",
        features: "Breathable fabric, buttoned front placket, chest pocket",
        fit: "Relaxed fit, dropped shoulders, true to size",
        care: "Machine wash cold with like colors. Tumble dry low or hang to dry. Warm iron if needed",
        countryOfOrigin: "Made in Portugal",
        size: "L"
      },
      {
        id: 2,
        name: "Jacquard Floral Shirt",
        brand: "NN07",
        seller: "Nordstrom",
        price: 137.00,
        walkingTime: 7,
        inventory: 5,
        images: [
          "assets/images/test1/product/2-1.png",
          "assets/images/test1/product/2-2.png",
          "assets/images/test1/product/2-3.png",
          "assets/images/test1/product/2-4.png",
          "assets/images/test1/product/2-5.png",
        ],
        material: "100% Organic Cotton",
        features: "Flower jacquard pattern,  Cuban collar, Ribbed trim, Side slits",
        fit: "Regular fit",
        care: "Machine wash cold inside out. Do not bleach. Tumble dry low. Warm iron if needed",
        countryOfOrigin: "Made in China",
        size: "L"
      },
      {
        id: 3,
        name: "Burgundy Embroidered Shirt",
        brand: "Kotn",
        seller: "Macy's",
        price: 145.00,
        walkingTime: 2,
        inventory: 2,
        images: [
          "assets/images/test1/product/3-1.png",
          "assets/images/test1/product/3-2.png",
          "assets/images/test1/product/3-3.png",
        ],
        material: "100% BCI Cotton",
        features: "Featuring a subtle herringbone pattern, contrast stitching, and a patch pocket on the front body. Made to layer open over a t-shirt or buttoned up. Ethically crafted",
        fit: "Relaxed fit – intended to follow the shape of your body with extra room; waist length – intended to hit between the waist and high hip",
        care: "Wash cold and lay flat to dry",
        countryOfOrigin: "Made in Portugal",
        size: "L"
      },
      {
        id: 4,
        name: "77 Flamé Rugby Shirt",
        brand: "New Balance",
        seller: "Nordstrom",
        price: 90.00,
        walkingTime: 5,
        inventory: 10,
        images: [
          "assets/images/test1/product/4-1.png",
          "assets/images/test1/product/4-2.png",
          "assets/images/test1/product/4-3.png",
          "assets/images/test1/product/4-4.png",
          "assets/images/test1/product/4-5.png",
        ],
        material: "100% Cotton",
        features: "Limited edition, ribbed hem and cuffs, rubber buttons, covered placket",
        fit: "Fits true to size – for a more relaxed fit, size up",
        care: "Machine wash cold with like colors",
        countryOfOrigin: "Made in Germany",
        size: "L"
      },
    ],
    refineImages: [
      { id: 1, image: 'assets/images/test1/refine/1.jpg', alt: 'Tan Satchel' },
      { id: 2, image: 'assets/images/test1/refine/2.jpg', alt: 'Red Handbag' },
      { id: 3, image: 'assets/images/test1/refine/3.jpg', alt: 'Blue Crossbody' },
      { id: 4, image: 'assets/images/test1/refine/4.jpg', alt: 'Green Backpack' },
    ]
  },
  test2: {
    name: "Test 2 - Wedding Attire",
    searchQuery: "navy button down shirts for a Catholic summer wedding in Quito",
    products: [
      {
        id: 1,
        name: "Navy Oxford Shirt",
        brand: "Brooks Brothers",
        seller: "Nordstrom",
        price: 89.50,
        walkingTime: 3,
        inventory: 12,
        images: [
          "assets/images/test2/product/1-1.jpg",
          "assets/images/test2/product/1-2.jpg",
          "assets/images/test2/product/1-3.jpg",
          "assets/images/test2/product/1-4.jpg",
          "assets/images/test2/product/1-5.jpg",
        ],
        material: "100% Cotton Oxford",
        features: "Classic button-down collar, chest pocket, traditional fit",
        fit: "Traditional fit, true to size",
        care: "Machine wash cold, tumble dry low",
        countryOfOrigin: "Made in USA",
        size: "L"
      },
      {
        id: 2,
        name: "Navy Poplin Shirt",
        brand: "Ralph Lauren",
        seller: "Macy's",
        price: 95.00,
        walkingTime: 6,
        inventory: 8,
        images: [
          "assets/images/test2/product/2-1.jpg",
          "assets/images/test2/product/2-2.jpg",
        ],
        material: "100% Cotton Poplin",
        features: "Spread collar, single chest pocket, slim fit",
        fit: "Slim fit, consider sizing up",
        care: "Machine wash cold, iron as needed",
        countryOfOrigin: "Made in China",
        size: "L"
      },
      {
        id: 3,
        name: "Navy Twill Shirt",
        brand: "J.Crew",
        seller: "J.Crew",
        price: 79.50,
        walkingTime: 4,
        inventory: 15,
        images: [
          "assets/images/test2/product/3-1.jpg",
          "assets/images/test2/product/3-2.jpg",
          "assets/images/test2/product/3-3.jpg",
          "assets/images/test2/product/3-4.jpg",
          "assets/images/test2/product/3-5.jpg",
        ],
        material: "100% Cotton Twill",
        features: "Button-down collar, chest pocket, relaxed fit",
        fit: "Relaxed fit, true to size",
        care: "Machine wash cold, tumble dry low",
        countryOfOrigin: "Made in Vietnam",
        size: "L"
      },
      {
        id: 4,
        name: "Navy Chambray Shirt",
        brand: "Gap",
        seller: "Gap",
        price: 49.99,
        walkingTime: 2,
        inventory: 20,
        images: [
          "assets/images/test2/product/4-1.jpg",
          "assets/images/test2/product/4-2.jpg",
          "assets/images/test2/product/4-3.jpg",
        ],
        material: "100% Cotton Chambray",
        features: "Spread collar, chest pocket, modern fit",
        fit: "Modern fit, true to size",
        care: "Machine wash cold, tumble dry low",
        countryOfOrigin: "Made in Bangladesh",
        size: "L"
      },
      {
        id: 5,
        name: "Navy Dress Shirt",
        brand: "Banana Republic",
        seller: "Banana Republic",
        price: 69.99,
        walkingTime: 5,
        inventory: 10,
        images: [
          "assets/images/test2/product/5-1.jpg",
          "assets/images/test2/product/5-2.jpg",
          "assets/images/test2/product/5-3.jpg",
          "assets/images/test2/product/5-4.jpg",
          "assets/images/test2/product/5-5.jpg",
        ],
        material: "100% Cotton",
        features: "Spread collar, chest pocket, tailored fit",
        fit: "Tailored fit, true to size",
        care: "Machine wash cold, iron as needed",
        countryOfOrigin: "Made in Vietnam",
        size: "L"
      },
    ],
    refineImages: [
      { id: 1, image: 'assets/images/test2/refine/1.jpg', alt: 'Formal Navy Shirt' },
      { id: 2, image: 'assets/images/test2/refine/2.jpg', alt: 'Classic Button Down' },
      { id: 3, image: 'assets/images/test2/refine/3.jpg', alt: 'Wedding Attire' },
      { id: 4, image: 'assets/images/test2/refine/4.jpg', alt: 'Business Casual' },
      { id: 5, image: 'assets/images/test2/refine/5.jpg', alt: 'Formal Dress Shirt' },
    ]
  },
  test3: {
    name: "Test 3 - Summer Dresses",
    searchQuery: "formal cream dress for 28 y.o. women for a barn wedding in TX this weekend",
    products: [
      {
        id: 1,
        name: "Cream Linen Dress",
        brand: "Anthropologie",
        seller: "Anthropologie",
        price: 168.00,
        walkingTime: 5,
        inventory: 6,
        images: [
          "assets/images/test3/product/1-1.jpg",
          "assets/images/test3/product/1-2.jpg",
          "assets/images/test3/product/1-3.jpg",
          "assets/images/test3/product/1-4.jpg",
          "assets/images/test3/product/1-5.jpg",
        ],
        material: "100% Linen",
        features: "V-neck, adjustable straps, midi length",
        fit: "True to size, relaxed fit",
        care: "Dry clean only",
        countryOfOrigin: "Made in China",
        size: "M"
      },
      {
        id: 2,
        name: "Cream Cotton Dress",
        brand: "Free People",
        seller: "Nordstrom",
        price: 128.00,
        walkingTime: 7,
        inventory: 4,
        images: [
          "assets/images/test3/product/2-1.jpg",
          "assets/images/test3/product/2-2.jpg",
          "assets/images/test3/product/2-3.jpg",
          "assets/images/test3/product/2-4.jpg",
        ],
        material: "100% Cotton",
        features: "Square neck, smocked bodice, tiered skirt",
        fit: "True to size, flowy fit",
        care: "Machine wash cold, hang to dry",
        countryOfOrigin: "Made in India",
        size: "M"
      },
      {
        id: 3,
        name: "Cream Silk Dress",
        brand: "Reformation",
        seller: "Reformation",
        price: 248.00,
        walkingTime: 3,
        inventory: 3,
        images: [
          "assets/images/test3/product/3-1.jpg",
          "assets/images/test3/product/3-2.jpg",
          "assets/images/test3/product/3-3.jpg",
          "assets/images/test3/product/3-4.jpg",
          "assets/images/test3/product/3-5.jpg",
        ],
        material: "100% Silk",
        features: "Wrap style, adjustable tie, midi length",
        fit: "True to size, flattering fit",
        care: "Dry clean only",
        countryOfOrigin: "Made in USA",
        size: "M"
      },
      {
        id: 4,
        name: "Cream Chiffon Dress",
        brand: "ASOS",
        seller: "ASOS",
        price: 89.99,
        walkingTime: 4,
        inventory: 8,
        images: [
          "assets/images/test3/product/4-1.jpg",
          "assets/images/test3/product/4-2.jpg",
          "assets/images/test3/product/4-3.jpg",
          "assets/images/test3/product/4-4.jpg",
        ],
        material: "100% Polyester Chiffon",
        features: "V-neck, empire waist, maxi length",
        fit: "True to size, flowy fit",
        care: "Hand wash cold, hang to dry",
        countryOfOrigin: "Made in China",
        size: "M"
      },
      {
        id: 5,
        name: "Cream Maxi Dress",
        brand: "Lulus",
        seller: "Lulus",
        price: 98.00,
        walkingTime: 6,
        inventory: 5,
        images: [
          "assets/images/test3/product/5-1.jpg",
          "assets/images/test3/product/5-2.jpg",
          "assets/images/test3/product/5-3.jpg",
          "assets/images/test3/product/5-4.jpg",
          "assets/images/test3/product/5-5.jpg",
        ],
        material: "100% Polyester",
        features: "V-neck, empire waist, flowy maxi length",
        fit: "True to size, flowy fit",
        care: "Machine wash cold, hang to dry",
        countryOfOrigin: "Made in China",
        size: "M"
      },
    ],
    refineImages: [
      { id: 1, image: 'assets/images/test3/refine/1.jpeg', alt: 'Cream Formal Dress' },
      { id: 2, image: 'assets/images/test3/refine/2.jpg', alt: 'Wedding Guest Dress' },
      { id: 3, image: 'assets/images/test3/refine/3.jpeg', alt: 'Summer Dress' },
      { id: 4, image: 'assets/images/test3/refine/4.jpg', alt: 'Barn Wedding Style' },
      { id: 5, image: 'assets/images/test3/refine/5.jpg', alt: 'Formal Maxi Dress' },
    ]
  },
  test4: {
    name: "Test 4 - Summer Bags",
    searchQuery: "bags that go well with linen pants for summer in Tuscany",
    products: [
      {
        id: 1,
        name: "Straw Tote Bag",
        brand: "Free People",
        seller: "Free People",
        price: 78.00,
        walkingTime: 4,
        inventory: 12,
        images: [
          "assets/images/test4/product/1-1.jpg",
          "assets/images/test4/product/1-2.jpg",
          "assets/images/test4/product/1-3.jpg",
          "assets/images/test4/product/1-4.jpg",
          "assets/images/test4/product/1-5.jpg",
          "assets/images/test4/product/1-6.jpg",
        ],
        material: "Natural Straw",
        features: "Large tote with leather handles, perfect for beach or market",
        fit: "One size fits all",
        care: "Spot clean only, keep dry",
        countryOfOrigin: "Made in Italy",
        size: "One Size"
      },
      {
        id: 2,
        name: "Canvas Crossbody",
        brand: "Madewell",
        seller: "Madewell",
        price: 65.00,
        walkingTime: 3,
        inventory: 8,
        images: [
          "assets/images/test4/product/2-1.jpg",
          "assets/images/test4/product/2-2.jpg",
          "assets/images/test4/product/2-3.jpg",
          "assets/images/test4/product/2-4.jpg",
        ],
        material: "Canvas with leather trim",
        features: "Adjustable crossbody strap, multiple pockets",
        fit: "One size fits all",
        care: "Spot clean with mild soap",
        countryOfOrigin: "Made in USA",
        size: "One Size"
      },
      {
        id: 3,
        name: "Woven Shoulder Bag",
        brand: "Anthropologie",
        seller: "Anthropologie",
        price: 89.00,
        walkingTime: 5,
        inventory: 6,
        images: [
          "assets/images/test4/product/3-1.jpg",
          "assets/images/test4/product/3-2.jpg",
          "assets/images/test4/product/3-3.jpg",
          "assets/images/test4/product/3-4.jpg",
          "assets/images/test4/product/3-5.jpg",
          "assets/images/test4/product/3-6.jpg",
        ],
        material: "Woven fabric with leather handles",
        features: "Shoulder strap, magnetic closure, interior pocket",
        fit: "One size fits all",
        care: "Spot clean only",
        countryOfOrigin: "Made in Morocco",
        size: "One Size"
      },
      {
        id: 4,
        name: "Leather Satchel",
        brand: "Kate Spade",
        seller: "Nordstrom",
        price: 298.00,
        walkingTime: 7,
        inventory: 4,
        images: [
          "assets/images/test4/product/4-1.jpg",
          "assets/images/test4/product/4-2.jpg",
          "assets/images/test4/product/4-3.jpg",
          "assets/images/test4/product/4-4.jpg",
        ],
        material: "Genuine leather",
        features: "Structured satchel with gold hardware, adjustable strap",
        fit: "One size fits all",
        care: "Clean with leather cleaner, condition regularly",
        countryOfOrigin: "Made in Italy",
        size: "One Size"
      },
      {
        id: 5,
        name: "Rattan Clutch",
        brand: "Urban Outfitters",
        seller: "Urban Outfitters",
        price: 45.00,
        walkingTime: 2,
        inventory: 15,
        images: [
          "assets/images/test4/product/5-1.jpg",
          "assets/images/test4/product/5-2.jpg",
          "assets/images/test4/product/5-3.jpg",
          "assets/images/test4/product/5-4.jpg",
          "assets/images/test4/product/5-5.jpg",
          "assets/images/test4/product/5-6.jpg",
        ],
        material: "Rattan with leather trim",
        features: "Clutch with wrist strap, perfect for evening events",
        fit: "One size fits all",
        care: "Spot clean only, keep dry",
        countryOfOrigin: "Made in Indonesia",
        size: "One Size"
      },
    ],
    refineImages: [
      { id: 1, image: 'assets/images/test4/refine/1.jpg', alt: 'Straw Tote Bag' },
      { id: 2, image: 'assets/images/test4/refine/2.jpg', alt: 'Canvas Crossbody' },
      { id: 3, image: 'assets/images/test4/refine/3.jpg', alt: 'Woven Shoulder Bag' },
      { id: 4, image: 'assets/images/test4/refine/4.jpg', alt: 'Leather Satchel' },
      { id: 5, image: 'assets/images/test4/refine/5.jpg', alt: 'Rattan Clutch' },
    ]
  }
};

// Current active test configuration
let currentTestConfig = 'test1';

// Function to get current test data
function getCurrentTestData() {
  return TEST_CONFIGS[currentTestConfig];
}

// Function to switch test configuration
function switchTestConfig(testId) {
  currentTestConfig = testId;
  const testData = getCurrentTestData();
  
  // Update global variables
  window.PRODUCTS = testData.products;
  window.REFINE_IMAGES = testData.refineImages;
  
  // Update refine to products mapping
  window.REFINE_TO_PRODUCTS = {};
  const minCount = Math.min(testData.refineImages.length, testData.products.length);
  for (let i = 0; i < minCount; i++) {
    window.REFINE_TO_PRODUCTS[testData.refineImages[i].id] = [testData.products[i].id];
  }
  
  // Reset trip plan for new test
  window.tripPlan = [];
  updateTripBtn();
  
  // Update search input with test query
  const searchInput = document.querySelector('#searchbar-container .searchbar-input') || 
                     document.querySelector('#searchbar-container textarea') ||
                     document.querySelector('#searchbar-container input');
  if (searchInput) {
    searchInput.value = testData.searchQuery;
  }
  
  // Update example placeholders
  window.examplePlaceholders = getExamplePlaceholders();
  
  console.log(`Switched to ${testData.name}`);
}

// --- Product Data (easy to edit) ---
const PRODUCTS = TEST_CONFIGS[currentTestConfig].products;

// --- Refine Images (separate from products) ---
const REFINE_IMAGES = TEST_CONFIGS[currentTestConfig].refineImages;

// Map refine image id to product ids (auto-generated to match current test data)
const REFINE_TO_PRODUCTS = {};
const minCount = Math.min(REFINE_IMAGES.length, PRODUCTS.length);
for (let i = 0; i < minCount; i++) {
  REFINE_TO_PRODUCTS[REFINE_IMAGES[i].id] = [PRODUCTS[i].id];
}

// --- State ---
let tripPlan = [];

// --- Launch Screen Logic ---
function initializeLaunchScreen() {
  // For testing: uncomment the line below to reset launch screen
  // sessionStorage.removeItem('launchScreenShown');
  
  const launchScreen = document.getElementById('launch-screen');
  const startButton = document.getElementById('start-app-btn');
  
  // Check if launch screen has been shown in this session
  const hasSeenLaunchScreen = sessionStorage.getItem('launchScreenShown');
  
  if (hasSeenLaunchScreen) {
    // Hide launch screen immediately if already shown
    launchScreen.classList.add('hidden');
  } else {
    // Show launch screen and mark as shown
    sessionStorage.setItem('launchScreenShown', 'true');
  }
  
  // Handle start button click
  if (startButton) {
    startButton.addEventListener('click', () => {
      // Animate the logo
      const logo = document.querySelector('.launch-logo');
      if (logo) {
        logo.classList.add('animate-out');
      }
      
      // Fade out the entire launch screen
      launchScreen.classList.add('fade-out');
      
      // Show onboarding screen immediately
      showOnboardingScreen();
      
      // Hide the entire launch screen after 1 second
      setTimeout(() => {
        launchScreen.classList.add('hidden');
        // Initialize feather icons after launch screen is hidden with a small delay
        setTimeout(() => {
          if (typeof feather !== 'undefined') {
            feather.replace();
          }
        }, 100);
      }, 1000);
    });
  }
}

// --- Onboarding Screen Logic ---
function initializeOnboardingScreen() {
  // For testing: uncomment the line below to reset onboarding screen
  // sessionStorage.removeItem('onboardingScreenShown');
  
  const onboardingScreen = document.getElementById('onboarding-screen');
  
  // Check if onboarding screen has been shown in this session
  const hasSeenOnboarding = sessionStorage.getItem('onboardingScreenShown');
  
  if (hasSeenOnboarding) {
    // Hide onboarding screen immediately if already shown
    onboardingScreen.classList.add('hidden');
  } else {
    // Show onboarding screen and mark as shown
    sessionStorage.setItem('onboardingScreenShown', 'true');
  }
  
  // Initialize budget presets
  initializeBudgetPresets();
  
  // Initialize get started button
  const getStartedBtn = document.getElementById('get-started-btn');
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      // Collect all form data
      const formData = collectFormData();
      console.log('Onboarding data:', formData);
      
      // Fade out the onboarding screen
      onboardingScreen.classList.add('fade-out');
      
      // Hide the onboarding screen after animation
      setTimeout(() => {
        onboardingScreen.classList.add('hidden');
        // Show the main app (search screen)
        if (window.showScreen) {
          window.showScreen('search');
        }
        // Initialize feather icons
        setTimeout(() => {
          if (typeof feather !== 'undefined') {
            feather.replace();
          }
        }, 100);
      }, 600);
    });
  }
  
  function initializeBudgetPresets() {
    const budgetInput = document.getElementById('budget');
    const budgetPresets = document.querySelectorAll('.budget-preset');
    
    budgetPresets.forEach(preset => {
      preset.addEventListener('click', () => {
        const value = preset.getAttribute('data-value');
        budgetInput.value = value;
        
        // Update active state
        budgetPresets.forEach(p => p.classList.remove('active'));
        preset.classList.add('active');
      });
    });
  }
  
  function collectFormData() {
    const data = {
      departments: [],
      sizes: {},
      budget: 0,
      preferences: {}
    };
    
    // Collect departments
    document.querySelectorAll('input[name="department"]:checked').forEach(checkbox => {
      data.departments.push(checkbox.value);
    });
    
    // Collect sizes
    data.sizes = {
      top: document.getElementById('top-size').value,
      bottom: document.getElementById('bottom-size').value,
      shoe: document.getElementById('shoe-size').value
    };
    
    // Collect budget
    data.budget = parseInt(document.getElementById('budget').value) || 0;
    
    // Collect preferences
    data.preferences = {
      locationConsent: document.querySelector('input[name="locationConsent"]:checked') !== null,
      notifications: document.querySelector('input[name="notifications"]:checked') !== null
    };
    
    return data;
  }
}

function showOnboardingScreen() {
  if (window.showScreen) {
    window.showScreen('onboarding');
  }
}

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

// --- Add to Trip Plan ---
function addToTrip(productId) {
  const idx = tripPlan.indexOf(productId);
  if (idx === -1) {
    tripPlan.push(productId);
  } else {
    tripPlan.splice(idx, 1);
  }
  updateTripBtn();
  // Re-render products to update icons
  if (window.renderProducts && window.lastProductSelection) {
    const filteredProducts = window.lastProductSelection.map(id => (window.PRODUCTS || []).find(p => p.id === id));
    window.renderProducts(filteredProducts);
  } else if (window.renderProducts && window.PRODUCTS) {
    window.renderProducts(window.PRODUCTS);
  }
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

// --- Render Trip Plan Overlay ---
function renderTripOverlay() {
  // Set sheet title to just 'Trip List'
  const title = document.getElementById('trip-sheet-title');
  const meta = document.getElementById('trip-sheet-meta');
  const tripList = document.getElementById('trip-list');
  if (!tripList || !title || !meta) return;
  title.textContent = 'My Trip List';
  // Calculate estimated trip length (sum of product distances in min + 5 min per item)
  let totalMin = 0;
  tripPlan.forEach(id => {
    const product = (window.PRODUCTS || []).find(p => p.id === id);
    if (product && product.distance) {
      totalMin += Math.round(product.distance * 13); // same as product card
    }
  });
  totalMin += tripPlan.length * 5;
  meta.innerHTML = `Estimated trip time: <span class="trip-time-bold">${totalMin} <span class="trip-time-unit">min</span></span>`;
  // Dropdown header from last search
  const searchLabel = window.lastSearchQuery || 'Trip Items';
  // Render dropdown
  tripList.innerHTML = `
    <div class="trip-dropdown">
      <div class="trip-dropdown-header" id="trip-dropdown-header">
        <span><i id="trip-dropdown-arrow" class="fa-solid fa-chevron-down"></i></span>
        <span>${searchLabel}</span>
      </div>
      <div class="trip-dropdown-content" id="trip-dropdown-content"></div>
    </div>
  `;
  const dropdownContent = document.getElementById('trip-dropdown-content');
  if (tripPlan.length === 0) {
    dropdownContent.innerHTML = '<p>No items added yet.</p>';
    return;
  }
  import('./components/ProductCard.js').then(({ renderProductCard }) => {
    tripPlan.forEach(id => {
      const product = (window.PRODUCTS || []).find(p => p.id === id);
      // Render the card with add/remove button enabled and refresh sheet on click
      const card = renderProductCard(product, {
        onAdd: (id) => {
          addToTrip(id);
          renderTripOverlay();
        }
      });
      dropdownContent.appendChild(card);
    });
    if (window.feather) window.feather.replace();
  });
  // Dropdown toggle logic
  const header = document.getElementById('trip-dropdown-header');
  const arrow = document.getElementById('trip-dropdown-arrow');
  header.onclick = () => {
    const isOpen = dropdownContent.style.display !== 'none';
    dropdownContent.style.display = isOpen ? 'none' : 'block';
    arrow.className = isOpen ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-down';
  };
  
  // Replace Feather icons after rendering
  if (window.feather) window.feather.replace();
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
    const product = (window.PRODUCTS || []).find(p => p.id === id);
    if (product && product.location) {
      const marker = document.createElement('div');
      marker.className = 'map-product-marker';
      marker.style.left = (product.location.x - 16) + 'px';
      marker.style.top = (product.location.y - 16) + 'px';
      marker.style.position = 'absolute';
      marker.title = product.name;
      marker.innerText = idx + 1;
      map.appendChild(marker);
    }
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
  const overlay = document.getElementById('trip-overlay');
  const bg = document.getElementById('trip-sheet-overlay');
  overlay.classList.remove('hidden');
  bg.classList.remove('hidden');
  setTimeout(() => {
    overlay.classList.add('show');
    bg.classList.add('show');
  }, 10);
  // Always show nav bar when overlay is open
  const navBar = document.getElementById('navbar-container');
  if (navBar) navBar.style.display = '';
};
$('#close-overlay-btn').onclick = closeTripSheet;
document.getElementById('trip-sheet-overlay').onclick = closeTripSheet;
function closeTripSheet() {
  const overlay = document.getElementById('trip-overlay');
  const bg = document.getElementById('trip-sheet-overlay');
  overlay.classList.remove('show');
  bg.classList.remove('show');
  setTimeout(() => {
    overlay.classList.add('hidden');
    bg.classList.add('hidden');
    // Always show nav bar after closing overlay
    const navBar = document.getElementById('navbar-container');
    if (navBar) navBar.style.display = '';
  }, 180);
}
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
window.addToTrip = addToTrip;
window.switchTestConfig = switchTestConfig;
window.getCurrentTestData = getCurrentTestData;

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
function getExamplePlaceholders() {
  const testData = getCurrentTestData();
  return [
    "What are you searching for today?",
    testData.searchQuery,
    "Bags that go well with linen pants for summer in Tuscany"
  ];
}
window.examplePlaceholders = getExamplePlaceholders();
window.placeholderIndex = 0;
window.placeholderInterval = null;

function updateTripBtn() {
  const btn = document.getElementById('preview-trip-btn');
  const badge = document.getElementById('trip-btn-badge');
  if (!btn || !badge) return;
  if (tripPlan.length > 0) {
    btn.classList.remove('hidden');
    setTimeout(() => btn.classList.add('show'), 10);
    badge.textContent = tripPlan.length;
  } else {
    btn.classList.remove('show');
    setTimeout(() => btn.classList.add('hidden'), 100);
    badge.textContent = 0;
  }
}

function renderRefineImageGrid() {
  const grid = document.getElementById('refine-image-grid');
  if (!grid) return;
  grid.innerHTML = '';
  // Only show refine images that are mapped to a product
  const mappedIds = Object.keys(window.REFINE_TO_PRODUCTS || {}).map(Number);
  const imagesToShow = (window.REFINE_IMAGES || []).filter(img => mappedIds.includes(img.id));
  imagesToShow.forEach(img => {
    const tile = document.createElement('div');
    tile.className = 'refine-image-tile';
    tile.innerHTML = `<img src="${img.image}" alt="${img.alt || ''}" />`;
    tile.onclick = () => {
      if (tile.classList.contains('selected')) {
        tile.classList.remove('selected');
        selected.delete(img.id);
      } else {
        if (selected.size < 3) {
          tile.classList.add('selected');
          selected.add(img.id);
        }
      }
    };
    grid.appendChild(tile);
  });
  // Attach finish button logic if present
  const finishBtn = document.getElementById('finish-refine-btn');
  if (finishBtn) {
    finishBtn.onclick = () => {
      if (window.showScreen) window.showScreen('products');
      // Gather selected refine image IDs
      const selectedIds = Array.from(selected);
      // Map to product IDs
      let productIds = [];
      selectedIds.forEach(refineId => {
        if (window.REFINE_TO_PRODUCTS && window.REFINE_TO_PRODUCTS[refineId]) {
          productIds = productIds.concat(window.REFINE_TO_PRODUCTS[refineId]);
        }
      });
      // Remove duplicates
      productIds = [...new Set(productIds)];
      // If less than 3, add random products not already selected
      let filteredProducts;
      filteredProducts = (window.PRODUCTS || []).filter(p => productIds.includes(p.id));
      if (filteredProducts.length < 3) {
        // Get products not already selected
        const notSelected = (window.PRODUCTS || []).filter(p => !productIds.includes(p.id));
        // Add up to two unselected products (not random)
        filteredProducts = filteredProducts.concat(notSelected.slice(0, 3 - filteredProducts.length));
      }
      // Only show up to 3 products
      filteredProducts = filteredProducts.slice(0, 3);
      // Store for session
      window.lastProductSelection = filteredProducts.map(p => p.id);
      if (window.renderProducts) window.renderProducts(filteredProducts);
    };
  }
}

// --- SPA Navigation: Nav Bar Clicks ---
window.addEventListener('DOMContentLoaded', () => {
  // Initialize launch screen
  initializeLaunchScreen();
  // Initialize onboarding screen
  initializeOnboardingScreen();
  // Helper to show/hide main screens
  function showScreen(screen) {
    // Track last Find sub-screen
    if (['search', 'refine', 'products'].includes(screen)) {
      window.lastFindScreen = screen;
    }
    // Hide all main screens
    document.getElementById('onboarding-screen').classList.add('hidden');
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

    // Hide nav bar by default
    const navBar = document.getElementById('navbar-container');

    if (screen === 'onboarding') {
      document.getElementById('onboarding-screen').classList.remove('hidden');
      // Hide nav bar during onboarding
      if (navBar) navBar.style.display = 'none';
      // Initialize feather icons for onboarding screen
      setTimeout(() => {
        if (typeof feather !== 'undefined') {
          feather.replace();
        }
      }, 100);
    } else if (screen === 'search') {
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

          function startPlaceholderRotation() {
            if (window.placeholderInterval) clearInterval(window.placeholderInterval);
            window.placeholderInterval = setInterval(() => {
              // Only rotate if search screen is visible and input is empty
              if (
                document.getElementById('searchbar-container').classList.contains('hidden') ||
                searchInput.value.length > 0
              ) {
                return;
              }
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

          startPlaceholderRotation();

          // Pause rotation only when input is not empty
          searchInput.addEventListener('input', () => {
            if (searchInput.value.length > 0) {
              if (window.placeholderInterval) clearInterval(window.placeholderInterval);
              searchInput.style.opacity = '1';
            } else {
              startPlaceholderRotation();
            }
          });
          // No need to pause on focus/blur, only on actual input
        }
      }, 100);
      // Show nav bar on search page
      if (navBar) navBar.style.display = '';
    } else if (screen === 'refine') {
      // Only play loading animation if coming from search
      if (window.justSearched) {
      // --- Begin: Loading animation before refine description ---
      const refineDesc = document.getElementById('refine-desc');
      let refineLoading = document.getElementById('refine-loading');
      if (!refineLoading) {
        refineLoading = document.createElement('div');
        refineLoading.id = 'refine-loading';
        refineLoading.className = 'refine-loading';
        // Insert loading element before refineDesc
        refineDesc.parentNode.insertBefore(refineLoading, refineDesc);
      }
      refineLoading.classList.remove('hidden');
      refineDesc.classList.add('hidden');
      // Hide refine page and searchbar container until loading is done
      document.getElementById('refine-page').classList.add('hidden');
      document.getElementById('searchbar-container').classList.add('hidden');
      // Rotating loading texts
      const loadingMessages = [
        'Finding your style...',
        'Thinking about the weather...',
        'Looking for popular trends...',
        'Checking stores near you...'
      ];
      let loadingIdx = 0;
      refineLoading.textContent = loadingMessages[loadingIdx];
      let loadingInterval = setInterval(() => {
        loadingIdx = (loadingIdx + 1) % loadingMessages.length;
        refineLoading.textContent = loadingMessages[loadingIdx];
      }, 800);
      setTimeout(() => {
        clearInterval(loadingInterval);
        refineLoading.classList.add('hidden');
        // Now show refine page and searchbar container
        document.getElementById('refine-page').classList.remove('hidden');
        document.getElementById('searchbar-container').classList.remove('hidden');
        refineDesc.classList.remove('hidden');
        // Play animation as before
        setTimeout(() => {
          const refineDescEl = document.getElementById('refine-desc');
          const refinePageEl = document.getElementById('refine-page');
          if (refineDescEl) refineDescEl.classList.add('animation-played');
          if (refinePageEl) refinePageEl.classList.add('animation-played');
        }, 2400);
        window.justSearched = false;
      }, 3000);
      // --- End: Loading animation before refine description ---
      } else {
        // No loading animation, just show refine page and desc
        document.getElementById('refine-page').classList.remove('hidden');
        document.getElementById('searchbar-container').classList.remove('hidden');
        const refineDesc = document.getElementById('refine-desc');
        if (refineDesc) refineDesc.classList.remove('hidden');
        window.justSearched = false;
      }
      if (window.renderRefineImageGrid) window.renderRefineImageGrid();
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
      // (moved into setTimeout above)
      // Initialize filter functionality
      if (window.initializeFilterSheet) {
        window.initializeFilterSheet();
      }
      // Show nav bar on refine page
      if (navBar) navBar.style.display = '';
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
      // Show nav bar on products page
      if (navBar) navBar.style.display = '';
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
      // Show nav bar on profile page
      if (navBar) navBar.style.display = '';
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
      // Always show nav bar on map page
      if (navBar) {
        navBar.style.display = '';
        navBar.classList.remove('hidden');
      }
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
        showScreen(window.lastFindScreen || 'search');
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
  // Ensure default products are shown if navigating directly to products page
  const productsPage = document.getElementById('products-page');
  if (productsPage && !window.lastProductSelection) {
    window.renderProducts(window.PRODUCTS);
  }
});

window.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') {
    if (typeof showScreen === 'function') {
      showScreen('products');
    }
  }
});