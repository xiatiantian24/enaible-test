// ProductCard.js
export function renderProductCard(product, { onAdd } = {}) {
  const card = document.createElement('div');
  card.className = 'product-card-modular';
  // Check if product is in tripPlan
  const inTrip = window.tripPlan && window.tripPlan.includes(product.id);
  card.innerHTML = `
    <div class="product-card-content">
      <div class="product-card-image-col">
        <img class="product-image" src="${product.image}" alt="${product.name}" />
      </div>
      <div class="product-card-details-col">
        <div class="product-card-header-row">
          <img class="brand-logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Bellroy_logo.png" alt="Bellroy" />
          <div class="sold-by">Sold by Nordstrom</div>
          <button class="bookmark-btn" title="Bookmark"><svg width="24" height="24" fill="none" stroke="#519DB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg></button>
        </div>
        <div class="product-title">${product.name}</div>
        <div class="product-price">$150.00</div>
        <div class="product-badges-row">
          <span class="badge trending"><svg width="16" height="16"><circle cx="8" cy="8" r="8" fill="#BA2A92"/></svg> Trending on Tiktok</span>
          <span class="badge selling"><svg width="16" height="16"><circle cx="8" cy="8" r="8" fill="#BF6A02"/></svg> Selling Fast</span>
        </div>
        <div class="product-meta-row">
        <div class="product-meta-row-left">
          <span class="availability"><span class="dot"></span>Available</span>
          <span class="distance">${
            product.distance
              ? `${Math.round(product.distance * 13)} min walk`
              : ""
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
