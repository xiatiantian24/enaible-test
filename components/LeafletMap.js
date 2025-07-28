// LeafletMap.js
let map = null;
let markers = [];
let routePolyline = null;

export function initializeLeafletMap() {
  const mapContainer = document.getElementById("map-container");
  if (!mapContainer) return;

  // Initialize the map centered on Pittsburgh
  map = L.map("map-container", {
    zoomControl: false
  }).setView([40.4406, -79.9959], 13); // Pittsburgh

  // Add zoom control to bottom right
  L.control.zoom({
    position: 'bottomright'
  }).addTo(map);

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 18,
  }).addTo(map);

  // Add custom CSS for markers and popups
  const style = document.createElement("style");
  style.textContent = `
    .custom-marker {
      position: relative;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .marker-bubble {
      position: relative;
      width: 60px;
      height: 80px;
    }
    
    .marker-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #fff;
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 5px;
    }
    
    .marker-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .leaflet-container .leaflet-marker-pane img, .leaflet-container .leaflet-shadow-pane img, .leaflet-container .leaflet-tile-pane img, .leaflet-container img.leaflet-image-layer, .leaflet-container .leaflet-tile {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .marker-pointer {
      position: absolute;
      bottom: 15px;
      left: 20px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 15px solid rgba(255, 153, 107, 0.7);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }
    
    .marker-tip {
      position: absolute;
      bottom: 0;
      left: 25px;
      width: 12px;
      height: 12px;
      background:rgb(255, 153, 107);
      border-radius: 50%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      border: 2px solid #fff;
    }
    
    .custom-marker:hover .marker-image {
      transform: scale(1.05);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    }
    
    .custom-marker:hover .marker-pointer {
      filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.4));
    }
    
    .custom-marker:hover .marker-tip {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
    }
    
    /* Leaflet Popup Customization */
    .leaflet-popup-content-wrapper {
      background: #fff;
      box-shadow: none;
      padding: 12px;
    }
    
    .leaflet-popup-content {
         margin: 0;
        padding: 0;
    }
    
    .leaflet-popup-tip {
      background: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .leaflet-popup-close-button {
      display: none;
    }
    
    /* Ensure Feather icons render in popups */
    .popup-product-card [data-feather] {
      width: 16px;
      height: 16px;
    }
  `;
  document.head.appendChild(style);
}

export function updateMapWithTripPlan(tripPlan, products) {
  if (!map) {
    initializeLeafletMap();
  }

  // Clear existing markers and route
  clearMap();

  if (!tripPlan || tripPlan.length === 0) {
    updateTripStats(0, 0, 0);
    return;
  }

  const tripProducts = products.filter((p) => tripPlan.includes(p.id));
  const markers = [];
  const coordinates = [];

  // Generate mock coordinates for stores (in a real app, these would come from your product data)
  const mockLocations = generateMockStoreLocations(tripProducts.length);

  tripProducts.forEach((product, index) => {
    const location = mockLocations[index];
    const marker = createCustomMarker(product, location, index + 1);
    markers.push(marker);
    coordinates.push([location.lat, location.lng]);
  });

  // Add markers to map
  markers.forEach((marker) => marker.addTo(map));

  // Draw route between stores
  if (coordinates.length > 1) {
    routePolyline = L.polyline(coordinates, {
      color: "#519db8",
      weight: 4,
      opacity: 0.7,
      dashArray: "10, 5",
    }).addTo(map);
  }

  // Fit map to show all markers
  if (coordinates.length > 0) {
    const group = new L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));
  }

  // Update trip statistics
  const totalDistance = calculateTotalDistance(coordinates);
  const totalTime = calculateTotalTime(tripProducts, totalDistance);
  updateTripStats(tripProducts.length, totalDistance, totalTime);
}

function createCustomMarker(product, location, index) {
  const customIcon = L.divIcon({
    className: "custom-marker",
    html: `
      <div class="marker-bubble">
        <div class="marker-image">
          <img src="${product.images[0]}" alt="${product.name}" />
        </div>
        <div class="marker-pointer"></div>
        <div class="marker-tip"></div>
      </div>
    `,
    iconSize: [60, 80],
    iconAnchor: [30, 75],
  });

  const marker = L.marker([location.lat, location.lng], {
    icon: customIcon,
  }).bindPopup(createPopupContent(product, index));

  return marker;
}

function createPopupContent(product, index) {
  // Get badges for this product
  const selectedBadges = window.getRandomBadgesForProduct
    ? window.getRandomBadgesForProduct(product.id)
    : [];

  // Check if product is in trip plan
  const inTrip = window.tripPlan && window.tripPlan.includes(product.id);

  // Find if "sale" badge is present
  const hasSale = selectedBadges.some((badge) => badge.class === "sale");
  const currentPrice = product.price || 150;
  let originalPrice = "";
  if (hasSale) {
    originalPrice = `<span style="text-decoration: line-through; color: #999; margin-left: 4px;">$${Math.round(
      currentPrice / 0.55
    )}</span>`;
  }

  // Availability logic
  let availabilityText = "Available";
  let dotColor = "#00901a"; // green
  if (typeof product.inventory === "number" && product.inventory < 5) {
    availabilityText = "Low stock";
    dotColor = "#F09A37"; // yellow
  }
  if (product.size) {
    availabilityText += ` in ${product.size}`;
  }

  return `
    <div class="popup-product-card" style="
      width: 100%;
      max-width: 420px;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      font-family: 'Instrument Sans', Arial, sans-serif;
    ">
      <div style="
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
      ">
        <!-- Product Image -->
        <div style="
          flex: 0 0 160px;
          display: flex;
          align-items: flex-start;
        ">
          <img src="${product.images[0]}" alt="${product.name}" style="
            width: 160px;
            height: 211px;
            object-fit: cover;
            border-radius: 12px;
            background: #f5f5f5;
          " />
        </div>
        
        <!-- Product Details -->
        <div style="
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
          height: 211px;
          justify-content: space-between;
        ">
          <!-- Header Row -->
          <div style="
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 4px;
          ">
            <div>
              <div style="
                font-size: 13px;
                font-weight: 600;
                color: #222;
                margin-bottom: 2px;
              ">${product.brand || "Brand"}</div>
              <div style="
                color: #757575;
                font-size: 11px;
                font-family: 'Instrument Sans', Arial, sans-serif;
                font-weight: 400;
                line-height: 13px;
                letter-spacing: 0.06px;
              ">Sold by ${product.seller || "Seller"}</div>
            </div>
            <!-- <button class="popup-bookmark-btn" style="
              background: none;
              border: none;
              margin-left: auto;
              cursor: pointer;
              padding: 4px;
              border-radius: 50%;
              transition: background 0.15s;
              color: #666;
            " title="Bookmark">
              <i class="fa-regular fa-bookmark"></i>
            </button> -->
          </div>
          
          <!-- Product Title -->
          <div style="
            color: #303030;
            font-size: 16px;
            font-family: 'Instrument Sans', Arial, sans-serif;
            font-weight: 500;
            line-height: 21px;
            margin-bottom: 2px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            min-height: 42px;
          ">${product.name}</div>
          
          <!-- Price -->
          <div style="
            color: #5a5a5a;
            font-size: 15px;
            font-family: 'Instrument Sans', Arial, sans-serif;
            font-weight: 400;
            line-height: 20px;
            margin-bottom: 4px;
          ">$${(product.price || 150).toFixed(2)}${originalPrice}</div>
          
          <!-- Badges -->
          ${
            selectedBadges.length > 0
              ? `
            <div style="
              display: flex;
              height: 45px;
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;
            ">
              ${selectedBadges
                .map(
                  (badge) => `
                <span style="
                  display: inline-flex;
                  align-items: center;
                  gap: 2px;
                  border-radius: 16px;
                  font-size: 11px;
                  font-family: 'Instrument Sans', Arial, sans-serif;
                  font-weight: 400;
                  line-height: 13px;
                  letter-spacing: 0.06px;
                  padding: 2px 4px;
                  background: #fff;
                  border: 1px solid #eee;
                  ${getBadgeStyles(badge.class)}
                ">${badge.html}</span>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }
          
          <!-- Meta Row -->
          <div style="
            display: flex;
            align-items: end;
            gap: 8px;
            margin-top: 2px;
          ">
            <div style="align-items: center; gap: 6px;">
              <span style="
                display: flex;
                align-items: center;
                gap: 6px;
                color: #5a5a5a;
                font-size: 12px;
                font-weight: 500;
                line-height: 12px;
              ">
                <span style="
                  width: 8px;
                  height: 8px;
                  background: ${dotColor};
                  border-radius: 50%;
                  display: inline-block;
                "></span>
                ${availabilityText}
              </span>
              <span style="
                color: #5a5a5a;
                font-size: 12px;
                font-weight: 500;
              ">Ross Park Mall</span>
            </div>
            
            <!-- Add/Remove Button
            <button onclick="window.addToTrip(${product.id})" style="
              background: ${inTrip ? "none" : "#cfe6f1"};
              border: ${inTrip ? "2px solid #519db8" : "none"};
              outline: none;
              cursor: pointer;
              margin-left: auto;
              border-radius: 24px;
              padding: 0;
              width: 54px;
              height: 44px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: background 0.15s;
              color: var(--accent-color);
            " title="${inTrip ? "Remove from Trip" : "Add to Trip"}">
              <i data-feather="${
                inTrip ? "x" : "plus"
              }" style="width: 16px; height: 16px;"></i>
            </button> -->
          </div>
        </div>
      </div>
    </div>
  `;
}

function getBadgeStyles(badgeClass) {
  switch (badgeClass) {
    case "trending":
      return "border: 1px solid #d732a8; color: #ba2a92;";
    case "selling":
      return "border: 1px solid #bf6a02; color: #bf6a02;";
    case "sale":
      return "background: #ffe5e5; color: #e53935; border: none;";
    case "rare":
      return "border: 1px solid #4fa3c7; color: #4fa3c7; background: #fff;";
    default:
      return "";
  }
}

function generateMockStoreLocations(count) {
  // Generate realistic store locations around Pittsburgh
  const centerLat = 40.4406;
  const centerLng = -79.9959;
  const locations = [];

  for (let i = 0; i < count; i++) {
    // Generate locations in a roughly circular pattern around the center
    const angle = (i / count) * 2 * Math.PI;
    const radius = 0.003 + Math.random() * 0.007; // 0.003 to 0.01 degrees (~0.2 to 0.7 miles)

    const lat =
      centerLat + Math.cos(angle) * radius + (Math.random() - 0.5) * 0.002;
    const lng =
      centerLng + Math.sin(angle) * radius + (Math.random() - 0.5) * 0.002;

    locations.push({ lat, lng });
  }

  return locations;
}

function calculateTotalDistance(coordinates) {
  if (coordinates.length < 2) return 0;

  let totalDistance = 0;
  for (let i = 0; i < coordinates.length - 1; i++) {
    const lat1 = coordinates[i][0];
    const lng1 = coordinates[i][1];
    const lat2 = coordinates[i + 1][0];
    const lng2 = coordinates[i + 1][1];

    // Simple distance calculation (Haversine formula would be more accurate)
    const distance = Math.sqrt(
      Math.pow((lat2 - lat1) * 69, 2) + Math.pow((lng2 - lng1) * 54.6, 2)
    );
    totalDistance += distance;
  }

  return Math.round(totalDistance * 10) / 10; // Round to 1 decimal place
}

function calculateTotalTime(products, distance) {
  // Base time: 5 minutes per store + travel time
  const storeTime = products.length * 5;
  const travelTime = Math.round(distance * 3); // Assume 3 minutes per mile
  return storeTime + travelTime;
}

function updateTripStats(stops, distance, time) {
  const stopsEl = document.getElementById("trip-stops");
  const distanceEl = document.getElementById("trip-distance");
  const timeEl = document.getElementById("trip-time");

  if (stopsEl) stopsEl.textContent = stops;
  if (distanceEl) distanceEl.textContent = distance;
  if (timeEl) timeEl.textContent = time;
}

function clearMap() {
  // Remove existing markers
  markers.forEach((marker) => {
    if (map && map.hasLayer(marker)) {
      map.removeLayer(marker);
    }
  });
  markers = [];

  // Remove existing route
  if (routePolyline && map && map.hasLayer(routePolyline)) {
    map.removeLayer(routePolyline);
    routePolyline = null;
  }
}

// Export for global access
window.initializeLeafletMap = initializeLeafletMap;
window.updateMapWithTripPlan = updateMapWithTripPlan;
