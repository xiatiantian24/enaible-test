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
  if (product.size) {
    availabilityText += ` in ${product.size}`;
  }
  card.innerHTML = `
    <div class="product-card-content">
      <div class="product-card-image-col">
        <img class="product-image" src="${product.images[0]}" alt="${product.name}" />
      </div>
      <div class="product-card-details-col">
        <div class="product-card-header-row">
          <span class="brand-logo-text">${product.brand || 'Brand'}</span>
          <button class="bookmark-btn" title="Bookmark"><i class="fa-regular fa-bookmark"></i></button>
        </div>
        <div class="sold-by">Sold by ${product.seller || 'Seller'}</div>
        <div class="product-title">${product.name}</div>
        <div class="product-price">$${product.price || 150}${originalPrice}</div>
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
  // Add click handler for detail overlay (ignore add/bookmark buttons)
  card.addEventListener('click', async (e) => {
    // Prevent if clicking on a button or inside a button
    if (e.target.closest('button')) return;
    const module = await import('./ProductDetail.js');
    const overlay = module.renderProductDetail(product, { onClose: null });
    document.body.appendChild(overlay);
  });
  // Prevent card click when clicking add-to-trip button
  card.querySelector('.add-btn-modular').onclick = (e) => {
    e.stopPropagation();
    onAdd && onAdd(product.id);
  };
  // Prevent card click when clicking bookmark button
  const bookmarkBtn = card.querySelector('.bookmark-btn');
  if (bookmarkBtn) {
    bookmarkBtn.onclick = (e) => {
      e.stopPropagation();
      // Optionally: implement bookmark logic here
    };
  }
  return card;
}
