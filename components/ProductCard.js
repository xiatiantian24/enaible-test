// ProductCard.js
export function renderProductCard(product, { onAdd } = {}) {
  const card = document.createElement('div');
  card.className = 'product-card-modular';
  // Check if product is in tripPlan
  const inTrip = window.tripPlan && window.tripPlan.includes(product.id);
  // Use persistent badge selection for this product
  const selectedBadges = window.getRandomBadgesForProduct(product.id);
  // Find if "sale" badge is present
  const hasSale = selectedBadges.some(badge => badge.class === 'sale');
  const currentPrice = product.price || 150;
  let originalPrice = '';
  if (hasSale) {
    originalPrice = `<span class="product-original-price">$${Math.round(currentPrice / 0.55)}</span>`;
  }

  // Availability logic
  let availabilityText = 'Available';
  let dotColor = '#00901a'; // green
  if (typeof product.inventory === 'number' && product.inventory < 5) {
    availabilityText = 'Low stock';
    dotColor = '#F09A37'; // yellow
  }
  card.innerHTML = `
    <div class="product-card-content">
      <div class="product-card-image-col">
        <img class="product-image" src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-card-details-col">
        <div class="product-card-header-row">
          <span class="brand-logo-text">${product.brand || 'Brand'}</span>
          <button class="bookmark-btn" title="Bookmark"><i class="fa-regular fa-bookmark"></i></button>
        </div>
        <div class="sold-by">Sold by ${product.seller || 'Seller'}</div>
        <div class="product-title">${product.name}</div>
        <div class="product-price">$${product.price || 150}.00${originalPrice}</div>
        <div class="product-badges-row">
          ${selectedBadges.map(badge =>
            `<span class="badge ${badge.class}">${badge.html}</span>`
          ).join('')}
        </div>
        <div class="product-meta-row">
        <div class="product-meta-row-left">
          <span class="availability"><span class="dot" style="background:${dotColor}"></span>${availabilityText}</span>
          <span class="distance">${
            typeof product.walkingTime === 'number' ? `${product.walkingTime} min walk` : ''
          }</span>
          </div>
            <button class="add-btn-modular${inTrip ? ' in-trip' : ''}" title="${inTrip ? 'Remove from Trip' : 'Add to Trip'}"><i data-feather="${inTrip ? 'x' : 'plus'}"></i></button>        
        </div>
      </div>
      </div>
    </div>
  `;
  card.querySelector('.add-btn-modular').onclick = () => onAdd && onAdd(product.id);
  return card;
}
