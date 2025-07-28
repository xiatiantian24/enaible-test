// --- Test Data Configuration ---
const TEST_CONFIGS = {
  test1: {
    name: "Test 1 - Running Shoes",
    searchQuery: "Running shoes for a 5k on a Pittsburgh summer",
    products: [
  {
    id: 1,
        name: "Women's P-6000 Shoes",
        brand: "Nike",
        seller: "Dick's",
        price: 91.99,
    walkingTime: 4,
    inventory: 8,
    images: [
          "assets/images/test1/product/1-1.jpg",
          "assets/images/test1/product/1-2.jpg",
          "assets/images/test1/product/1-3.jpg",
          "assets/images/test1/product/1-4.jpg",
        ],
        overview: "A heritage-inspired sneaker combining breathable textiles with retro styling cues drawn from the Nike Pegasus 25 and Pegasus 2006, designed for everyday wear with durable traction and lasting comfort.",
        materials: [
          "Textile upper with mesh overlays",
          "Foam midsole",
          "Solid rubber outsole"
        ],
        featuresList: [
          "Breathable layered upper for texture and airflow",
          "Foam midsole provides lightweight, lasting cushioning",
          "Solid-rubber outsole enhances traction and durability",
          "Sporty lines and throwback silhouette"
        ],
        fit: "True to size, medium width",
        care: "Wipe clean with damp cloth, air dry away from direct heat",
        size: "8.5",
        rating: 4.7,
        reviewCount: 89
  },
  {
    id: 2,
        name: "GEL-1130 Premium Shoes",
        brand: "Asics ",
        seller: "Free People",
        price: 100.00,
        walkingTime: 7,
        inventory: 5,
        images: [
          "assets/images/test1/product/2-1.png",
          "assets/images/test1/product/2-2.png",
          "assets/images/test1/product/2-3.png",
          "assets/images/test1/product/2-4.png",
          "assets/images/test1/product/2-5.png",
        ],
        overview: "A lightweight, breathable sneaker inspired by late 2000s athletic styles, featuring GEL® technology for plush comfort and a classic lace-up silhouette.",
        materials: [
          "Mesh upper",
          "Synthetic overlays",
          "Rubber outsole",
          "Cushioned footbed"
        ],
        featuresList: [
          "Lace-up closure for a secure fit",
          "Breathable mesh construction with retro aesthetic",
          "GEL® technology for all-day cushioning",
          "Durable rubber outsole"
        ],
        fit: "True to size, consider half size up for wide feet",
        care: "Machine wash cold, air dry, avoid bleach and fabric softener",
        size: "8.5",
        rating: 4.3,
        reviewCount: 156
      },
      {
        id: 3,
        name: " 530 Sneakers",
        brand: "New Balance",
        seller: "Free People",
        price: 100.00,
        walkingTime: 8,
        inventory: 2,
        images: [
          "assets/images/test1/product/3-1.png",
          "assets/images/test1/product/3-2.png",
          "assets/images/test1/product/3-3.png",
        ],
        overview: "A streamlined, neutral-toned sneaker from New Balance that blends retro running aesthetics with contemporary comfort, ideal for casual styling or athletic-inspired looks.",
        materials: [
          "Mesh uppers",
          "Leather overlays",
          "Rubber outsole",
          "ABZORB midsole"
        ],
        featuresList: [
          "Low-boot construction",
          "Streamlined design for sleek silhouette",
          "ABZORB cushioning for impact absorption",
          "Lace-up closure with pull tab for easy on/off",
          "Signature logo detailing"
        ],
        fit: "True to size, medium to wide width available",
        care: "Spot clean with mild soap and water, air dry naturally",
        size: "8.5",
        rating: 4.8,
        reviewCount: 203
      },
      {
        id: 4,
        name: "Gender Inclusive XT-6 Sneaker",
        brand: "Salomon's",
    seller: "Nordstrom",
        price: 150.00,
        walkingTime: 5,
        inventory: 10,
        images: [
          "assets/images/test1/product/4-1.png",
          "assets/images/test1/product/4-2.png",
          "assets/images/test1/product/4-3.png",
          "assets/images/test1/product/4-4.png",
          "assets/images/test1/product/4-5.png",
        ],
        overview: "A performance-driven running shoe offering stability, support, and reliable traction across various terrains, designed for long-distance comfort with innovative fit technologies.",
        materials: [
          "Textile and synthetic upper and lining",
          "Rubber sole",
          "Removable OrthoLite® insole"
        ],
        featuresList: [
          "SensiFit™ and EndoFit™ construction for a secure, sock-like fit",
          "Agile Chassis System (ACS) for heel-to-toe stability",
          "Contagrip® MA tread for multi-surface traction",
          "Quicklace™ system for easy one-pull tightening",
          "Removable insole to accommodate orthotics",
          "Designed in exclusive partnership with Alex Dymond (Provence/High Risk Red colors)"
        ],
        fit: "True to size, performance fit with secure heel lock",
        care: "Hand wash with mild detergent, air dry away from direct sunlight",
        size: "8.5",
        rating: 4.5,
        reviewCount: 67
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
    name: "Test 2 - Tennis Shoes",
    searchQuery: "Casual tennis shoes that go well with linen pants",
    products: [
      {
        id: 1,
        name: "Badminton Court Sneakers",
        brand: "Gola",
        seller: "Free People",
        price: 45.00,
        walkingTime: 4,
        inventory: 8,
        images: [
          "assets/images/test2/product/1-1.jpg",
          "assets/images/test2/product/1-2.jpg",
          "assets/images/test2/product/1-3.jpg",
          "assets/images/test2/product/1-4.jpg", 
          "assets/images/test2/product/1-5.jpg",
        ],
        overview: "A timeless court-style sneaker with suede paneling and rounded-toe construction, designed for all-day wear with a sporty, minimal look. Now available in FP Exclusive colorways.",
        materials: [
          "Suede paneling",
          "Rubber outsole",
          "Cushioned insole"
        ],
        featuresList: [
          "Lace-up closure",
          "Rounded-toe silhouette",
          "Available in FP Exclusive colors: Tulip Pink, Black, and Black & White"
        ],
        fit: "True to size, medium width",
        care: "Spot clean with suede brush, air dry away from direct heat",
        size: "7.5",
        rating: 4.6,
        reviewCount: 124
      },
      {
        id: 2,
        name: "H&M Sneakers",
        brand: "H&M",
        price: 37.99,
    walkingTime: 7,
    inventory: 5,
    images: [
          "assets/images/test2/product/2-1.jpg",
          "assets/images/test2/product/2-2.jpg",
        ],
        overview: "A minimalist sneaker featuring lightweight construction and patterned soles, ideal for everyday casual wear in neutral tones.",
        materials: [
          "Mesh insoles",
          "Rubber-patterned soles"
        ],
        featuresList: [
          "Tongue and lace-up styling",
          "Sole height: 0.94 in",
          "No heel",
          "Color: Light beige/khaki green",
          "Imported"
        ],
        fit: "True to size, consider half size up for wide feet",
        care: "Wipe clean with damp cloth, air dry naturally",
        size: "7",
        rating: 4.2,
        reviewCount: 78
  },
  {
    id: 3,
        name: "BRMD Shoes",
        brand: "Adidas",
        seller: "Finish Line",
        price: 44.00,
        walkingTime: 8,
    inventory: 2,
    images: [
          "assets/images/test2/product/3-1.jpg",
          "assets/images/test2/product/3-2.jpg",
          "assets/images/test2/product/3-3.jpg",
          "assets/images/test2/product/3-4.jpg",
          "assets/images/test2/product/3-5.jpg",
        ],
        overview: "Inspired by vintage adidas silhouettes, these low-profile sneakers blend smooth leather and clean design for a versatile, everyday sport-luxe look.",
        materials: [
          "Leather upper",
          "Synthetic lining",
          "Rubber outsole"
        ],
        featuresList: [
          "Regular fit",
          "Lace-up closure",
          "Minimal overlays and clean stitch detailing",
          "Multidirectional tread for enhanced traction",
          "Color: Mystery Green / Tactile Green / Gum",
          "Imported"
        ],
        fit: "True to size, regular fit",
        care: "Clean with leather cleaner, air dry away from direct sunlight",
        size: "7",
        rating: 4.4,
        reviewCount: 95
  },
  {
    id: 4,
        name: "Club C 85 Vintage Sneakers",
        brand: "Reebok",
        seller: "Anthropologie",
        price: 47.50,
        walkingTime: 5,
        inventory: 10,
        images: [
          "assets/images/test2/product/4-1.jpg",
          "assets/images/test2/product/4-2.jpg",
          "assets/images/test2/product/4-3.jpg",
        ],
        overview: "A clean, understated everyday sneaker from Reebok with timeless leather construction and fitness-inspired roots, designed for versatile styling.",
        materials: [
          "Leather upper",
          "Textile insole",
          "Rubber sole"
        ],
        featuresList: [
          "Tie styling (lace-up)",
          "Subtle, minimal silhouette",
          "Imported"
        ],
        fit: "True to size, classic fit",
        care: "Wipe clean with damp cloth, air dry naturally",
        size: "7.5",
        rating: 4.7,
        reviewCount: 187
      },
      {
        id: 5,
        name: "Handball Spezial Shoes",
        brand: "Adidas",
        seller: "Dick's",
        price: 50.00,
        walkingTime: 5,
        inventory: 10,
        images: [
          "assets/images/test2/product/5-1.jpg",
          "assets/images/test2/product/5-2.jpg",
          "assets/images/test2/product/5-3.jpg", 
          "assets/images/test2/product/5-4.jpg",
          "assets/images/test2/product/5-5.jpg",
        ],
        overview: "Originally introduced in 1979 for handball athletes, the adidas Spezial brings retro style with modern flair through vibrant color updates and classic suede construction.",
        materials: [
          "Suede and textile upper",
          "Textile innersole",
          "Synthetic lining",
          "Gum rubber outsole"
        ],
        featuresList: [
          "Lace-up closure",
          "T-shaped toe box",
          "Durable gum rubber outsole for traction",
          "Vintage styling with modern color accents",
          "Imported"
        ],
        fit: "True to size, medium width",
        care: "Brush suede with suede brush, spot clean with mild soap",
        size: "7.5",
        rating: 4.8,
        reviewCount: 234
      }
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
    name: "Test 3 - Summer Jorts",
    searchQuery: "Denim jorts with pockets",
    products: [
      {
        id: 1,
        name: "Baggy Dad Jorts",
        brand: "Levi's",
        seller: "Free People",
        price: 45.00,
        walkingTime: 4,
        inventory: 8,
        images: [
          "assets/images/test3/product/1-2.jpg",
          "assets/images/test3/product/1-1.jpg",
          "assets/images/test3/product/1-3.jpg",
          "assets/images/test3/product/1-4.jpg", 
        ],
        overview: "Classic baggy dad jorts with authentic rigid denim texture and comfortable loose fit.",
        materials: [
          "100% cotton",
          "Rigid, non-stretch denim"
        ],
        featuresList: [
          "Zip fly with button closure",
          "Five-pocket design",
          "Authentic rigid texture",
          "Knee-length inseam"
        ],
        fit: "Low-slung, loose fit throughout",
        care: "Machine wash cold, tumble dry low",
        countryOfOrigin: "Not specified (Levi's product)",
        size: "M",
        rating: 4.5,
        reviewCount: 142
      },
      {
        id: 2,
        name: "8\" Mid Rise '90s Loose Denim Bermuda Shorts",
        brand: "Gap",
        price: 50.00,
        walkingTime: 7,
        inventory: 5,
        images: [
          "assets/images/test3/product/2-1.jpg",
          "assets/images/test3/product/2-2.jpg",
          "assets/images/test3/product/2-3.jpg",
          "assets/images/test3/product/2-4.jpg",
        ],
        overview: "Vintage-inspired loose denim shorts with a laid-back, comfortable fit perfect for summer.",
        materials: [
          "95% cotton, 5% recycled materials",
          "Low-stretch denim with a soft, lived-in feel"
        ],
        featuresList: [
          "Medium indigo wash with five-pocket styling",
          "Zip fly with button closure",
          "Part of the Washwell™ program, reducing water use"
        ],
        fit: "Mid-rise. Cut loose through the hip and thigh with a longer leg for a laid-back look",
        care: "Not specified",
        countryOfOrigin: "Not specified",
        size: "M",
        rating: 4.3,
        reviewCount: 89
      },
      {
        id: 3,
        name: "11\" Mid Rise Longline Denim Shorts",
        brand: "Gap",
        price: 50.00,
        walkingTime: 8,
        inventory: 2,
        images: [
          "assets/images/test3/product/3-1.jpg",
          "assets/images/test3/product/3-2.jpg",
          "assets/images/test3/product/3-3.jpg",
          "assets/images/test3/product/3-4.jpg",
        ],
        overview: "Longline denim shorts with classic five-pocket styling and sustainable manufacturing.",
        materials: [
          "95% cotton, 5% recycled cotton",
          "No stretch; authentic rigid denim that breaks in over time"
        ],
        featuresList: [
          "Classic five-pocket short in a dark indigo wash",
          "Zip fly with button closure",
          "Part of the Washwell™ program, using at least 20% less water than conventional methods"
        ],
        fit: "Mid-rise, low-slung on the waist, relaxed at the hip with a wide-leg finish",
        care: "Not specified",
        countryOfOrigin: "Responsibly made",
        size: "M",
        rating: 4.6,
        reviewCount: 167
      },
      {
        id: 4,
        name: "95 Gigi Super Baggy Denim Jort",
        brand: "Abrand",
        seller: "Urban Outfitters",
        price: 29.40,
        walkingTime: 5,
        inventory: 10,
        images: [
          "assets/images/test3/product/4-1.jpg",
          "assets/images/test3/product/4-2.jpg",
          "assets/images/test3/product/4-3.jpg",
          "assets/images/test3/product/4-4.jpg",
        ],
        overview: "Super baggy jorts with a longline silhouette and slouchy mid-rise waistline for ultimate comfort.",
        materials: [
          "91% cotton, 5% viscose, 4% polyester",
          "Rigid, non-stretch midweight denim"
        ],
        featuresList: [
          "Abrand Gigi 95 super baggy jorts in a longline silhouette",
          "Slouchy mid-rise waistline, wide-leg fit",
          "Classic five-pocket styling",
          "Zip-fly with button closure"
        ],
        fit: "Mid-rise with a slouchy, baggy fit and wide-leg cut. Longline length with a 17.5\" inseam. Model is 5'7.5\" and wears size 26",
        care: "Machine wash",
        countryOfOrigin: "Imported",
        size: "M",
        rating: 4.1,
        reviewCount: 45
      },
      {
        id: 5,
        name: "Denim Bermuda Shorts",
        brand: "H&M",
        price: 29.99,
        walkingTime: 5,
        inventory: 10,
        images: [
          "assets/images/test3/product/5-1.jpg",
          "assets/images/test3/product/5-2.jpg",
          "assets/images/test3/product/5-3.jpg", 
          "assets/images/test3/product/5-4.jpg",
          "assets/images/test3/product/5-5.jpg",
        ],
        overview: "Classic denim Bermuda shorts with high-waist design and sustainable materials.",
        materials: [
          "Shell: 100% cotton",
          "Pocket lining: 80% polyester, 20% cotton",
          "Made with at least 48% recycled polyester and 7% recycled cotton by weight (excluding minor components)"
        ],
        featuresList: [
          "Classic denim construction in a solid blue color",
          "Bermuda short style with a regular fit and five-pocket styling",
          "High-waist, knee-length design"
        ],
        fit: "High-rise waist with a regular fit and Bermuda-length silhouette",
        care: "Machine wash cool. Wash with like colors. Only non-chlorine bleach when needed. Tumble dry medium. Medium iron. May be dry cleaned. Color may transfer onto light materials",
        countryOfOrigin: "Imported",
        size: "M",
        rating: 4.4,
        reviewCount: 98
      }
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
    name: "Test 4 - Jeans",
    searchQuery: "Jeans that look good with a white or black t-shirt",
    products: [
      {
        id: 1,
        name: "Matilda straight-fit rinse-wash jeans",
        brand: "Mango",
    seller: "Nordstrom",
        price: 35.99,
        walkingTime: 4,
        inventory: 8,
        images: [
          "assets/images/test4/product/1-2.jpg",
          "assets/images/test4/product/1-6.jpg",
          "assets/images/test4/product/1-1.jpg",
          "assets/images/test4/product/1-3.jpg",
          "assets/images/test4/product/1-4.jpg", 
          "assets/images/test4/product/1-5.jpg",
        ],
        overview: "Classic straight-fit jeans with a modern rinse-wash finish and sustainable cotton-blend denim.",
        materials: [
          "100% recycled cotton-blend denim"
        ],
        featuresList: [
          "Rinse-wash cotton denim with a straight, mid-rise design",
          "Five-pocket styling, front zip fly with button closure",
          "Belt loops, two side pockets, and two back patch pockets",
          "Full-length silhouette with a 30.71 in. inseam",
          "Plus sizes available"
        ],
        fit: "Standard fit with a long, straight-leg design. Model is 1.78 m and wears size 36",
        care: "Machine wash max 30°C (85°F), short spin dry. Do not bleach. Iron max 110°C (230°F). Do not dry clean. Do not tumble dry",
        countryOfOrigin: "Designed in Barcelona. Manufactured, dyed, and woven in Türkiye",
        size: "L",
        rating: 4.7,
        reviewCount: 54
      },
      {
        id: 2,
        name: "Mid-Rise 90s Loose Jean",
        brand: "Banana Republic",
        price: 47.99,
        walkingTime: 7,
        inventory: 5,
        images: [
          "assets/images/test4/product/2-1.jpg",
          "assets/images/test4/product/2-2.jpg",
          "assets/images/test4/product/2-3.jpg",
          "assets/images/test4/product/2-4.jpg",
        ],
        overview: "Vintage-inspired loose jeans with sustainable TENCEL™ lyocell and a touch of stretch for comfort.",
        materials: [
          "69% cotton, 25% TENCEL™ lyocell",
          "5% recycled cotton, 1% elastane spandex"
        ],
        featuresList: [
          "Indigo-wash vintage-inspired jeans with a touch of stretch",
          "Five-pocket styling, zip fly with button closure",
          "Belt loops"
        ],
        fit: "Mid-rise (10.75\"), slouchy at the hip with a relaxed thigh and straight, loose full-length leg",
        care: "Machine wash cold, tumble dry low, warm iron, or dry clean",
        countryOfOrigin: "Imported. Made with sustainably sourced TENCEL™ lyocell from responsibly harvested trees",
        size: "L",
        rating: 4.3,
        reviewCount: 112
      },
      {
        id: 3,
        name: "Curve Love High Rise 90s Relaxed Jean",
        brand: "Abercrombie & Fitch",
        price: 40.00,
        walkingTime: 8,
        inventory: 2,
        images: [
          "assets/images/test4/product/3-1.jpg",
          "assets/images/test4/product/3-2.jpg",
          "assets/images/test4/product/3-3.jpg",
          "assets/images/test4/product/3-4.jpg",
          "assets/images/test4/product/3-5.jpg",
          "assets/images/test4/product/3-6.jpg",
        ],
        overview: "Dark wash jeans with a viral Curve Love fit designed to eliminate waist gaps and provide extra room in the hips and thighs.",
        materials: [
          "99% cotton, 1% elastane"
        ],
        featuresList: [
          "Dark wash jeans with a distressed hem and a viral Curve Love fit",
          "Designed to eliminate waist gaps, featuring extra room in the hips and thighs",
          "Five-pocket styling and zip fly with button closure"
        ],
        fit: "10.5\" high-rise, fitted at waist and hips with a relaxed thigh and full-length leg. Curve-hugging comfort with slight stretch for ease",
        care: "Machine wash cold with like colors. Turn inside out and wash before wear to avoid color transfer. Tumble dry low. Warm iron if needed. Do not bleach. Do not dry clean",
        countryOfOrigin: "Imported",
        size: "L",
        rating: 4.1,
        reviewCount: 23
      },
      {
        id: 4,
        name: "Medium Indigo Shade Order '94 Baggy Jeans",
        brand: "Levi's",
        seller: "PacSun",
        price: 45.65,
    walkingTime: 5,
    inventory: 10,
    images: [
          "assets/images/test4/product/4-1.jpg",
          "assets/images/test4/product/4-2.jpg",
          "assets/images/test4/product/4-3.jpg",
          "assets/images/test4/product/4-4.jpg",
        ],
        overview: "Classic Levi's baggy jeans with medium indigo wash and authentic vintage-inspired fit from the 1990s.",
        materials: [
          "100% rigid cotton denim"
        ],
        featuresList: [
          "Medium indigo wash with a classic five-pocket body",
          "Zip fly closure, and Levi's back label",
          "Crafted for a true vintage look and feel"
        ],
        fit: "Mid-rise with a slouchy, straight-leg fit inspired by 1990s baggy jeans",
        care: "Machine washable",
        countryOfOrigin: "Not specified",
        size: "L",
        rating: 4.8,
        reviewCount: 187
      },
      {
        id: 5,
        name: "High Rise '90s Original Straight Jeans",
        brand: "Gap",
        price: 34.99,
        walkingTime: 5,
        inventory: 10,
        images: [
          "assets/images/test4/product/5-1.jpg",
          "assets/images/test4/product/5-2.jpg",
          "assets/images/test4/product/5-3.jpg", 
          "assets/images/test4/product/5-4.jpg",
          "assets/images/test4/product/5-5.jpg",
          "assets/images/test4/product/5-6.jpg",
        ],
        overview: "Sustainable straight jeans with medium indigo wash and fading, part of Gap's Washwell™ water conservation program.",
        materials: [
          "93% cotton, 5% recycled cotton, 2% elastane",
          "Made with stretch denim and 5% recycled cotton to reduce resource use and waste"
        ],
        featuresList: [
          "Medium indigo wash with fading and whiskering",
          "Part of the Washwell™ program, which uses at least 20% less water than conventional wash methods",
          "Button closure and zip fly"
        ],
        fit: "Not specified (assumed standard/stretch fit based on fabric content)",
        care: "Machine wash",
        countryOfOrigin: "Imported",
        size: "L",
        rating: 4.8,
        reviewCount: 187
      }
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
let currentTestConfig = null;

// Function to get current test data
function getCurrentTestData() {
  return currentTestConfig ? TEST_CONFIGS[currentTestConfig] : null;
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
  tripPlan = [];
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
const PRODUCTS = currentTestConfig ? TEST_CONFIGS[currentTestConfig].products : [];

// --- Refine Images (separate from products) ---
const REFINE_IMAGES = currentTestConfig ? TEST_CONFIGS[currentTestConfig].refineImages : [];

// Map refine image id to product ids (auto-generated to match current test data)
const REFINE_TO_PRODUCTS = {};
if (currentTestConfig && REFINE_IMAGES.length > 0 && PRODUCTS.length > 0) {
const minCount = Math.min(REFINE_IMAGES.length, PRODUCTS.length);
for (let i = 0; i < minCount; i++) {
  REFINE_TO_PRODUCTS[REFINE_IMAGES[i].id] = [PRODUCTS[i].id];
  }
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
  // Update window.tripPlan to keep it in sync
  window.tripPlan = tripPlan;
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

// Initialize placeholder rotation on app load
function initializePlaceholderRotation() {
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
          // Only rotate if search screen is visible
          if (
            document.getElementById('searchbar-container').classList.contains('hidden')
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
    }
  }, 500);
}

// Call initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePlaceholderRotation);
} else {
  initializePlaceholderRotation();
}

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
    testData ? testData.searchQuery : "White cotton tees that I can wear for walking to class in a Philly summer",
    "Bags that go well with linen pants for summer in Tuscany",
    "Formal cream dress for a 35 y.o. woman for a barn wedding in TX this weekend",
    "Smart casual shirt for a business trip to NYC"
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
      // Show test selection buttons on search screen
      const testSelectionContainer = document.querySelector('.test-selection-container');
      if (testSelectionContainer) testSelectionContainer.classList.remove('hidden');
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
              // Only rotate if search screen is visible
              if (
                document.getElementById('searchbar-container').classList.contains('hidden')
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

          // No input event listener needed since typing is disabled
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
        // Hide test selection buttons on refine screen
        const testSelectionContainer = document.querySelector('.test-selection-container');
        if (testSelectionContainer) testSelectionContainer.classList.add('hidden');
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
        // Hide test selection buttons on refine screen
        const testSelectionContainer = document.querySelector('.test-selection-container');
        if (testSelectionContainer) testSelectionContainer.classList.add('hidden');
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
      if (searchbarOuter) searchbarOuter.style.height = 'auto';
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