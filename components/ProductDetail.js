// ProductDetail.js
// Modular overlay for product details

export function renderProductDetail(product, { onClose } = {}) {
  const overlay = document.createElement("div");
  overlay.className = "product-detail-overlay";

  // Placeholder images for carousel
  const carouselImages = product.images;

  let currentIndex = 0;

  overlay.innerHTML = `
    <div class="product-detail-sheet">
      <div class="product-detail-close-row">
        <button class="close-detail-btn" title="Close"><i data-feather="x"></i></button>
      </div>
      <div class="product-detail-content">
        <div class="product-detail-image-col">
          <div class="carousel-container">
            <img class="product-detail-image" src="${carouselImages[0]}" alt="${
    product.name
  }" />
            <div class="carousel-dots">
              ${carouselImages
                .map(
                  (_, i) =>
                    `<span class="carousel-dot${
                      i === 0 ? " active" : ""
                    }"></span>`
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="product-detail-info-col">
          <div class="product-detail-title-row">
            <span class="product-detail-title">${product.name}</span>
            <span class="product-detail-price">$${product.price.toFixed(
              2
            )}</span>
          </div>
          <div class="product-detail-rating-row">
            <span class="star-icon">★</span>
            <span class="product-detail-rating">${
              typeof product.rating === "number"
                ? product.rating.toFixed(1)
                : "4.5"
            }</span>
            ${
              typeof product.reviewCount === "number"
                ? `<a href="#" class="product-detail-reviews">(${product.reviewCount} reviews)</a>`
                : ""
            }
          </div>
           <div class="product-detail-color-row">
            <div class="product-detail-color-label">Color</div>
            <span class="product-detail-color-swatches">
              <span class="color-swatch color-white selected"></span>
              <span class="color-swatch color-gray"></span>
            </span>
          </div>
          ${
            product.overview
              ? `
         
            <div class="product-detail-description-text">
              ${product.overview}
        
          </div>
          `
              : ""
          }
          <div class="product-detail-section">
            <div class="product-detail-section-title">Material</div>
            <div class="product-detail-description-text">
              ${
                Array.isArray(product.materials)
                  ? `<ul class="product-detail-list">
                  ${product.materials
                    .map((item) => `<li>${item}</li>`)
                    .join("")}
                </ul>`
                  : product.materials
                  ? product.materials
                  : product.material
                  ? product.material
                  : "Not specified"
              }
            </div>
          </div>
          <div class="product-detail-section">
            <div class="product-detail-section-title">Features</div>
            <div class="product-detail-description-text">
              ${
                Array.isArray(product.featuresList)
                  ? `<ul class="product-detail-list">
                  ${product.featuresList
                    .map((item) => `<li>${item}</li>`)
                    .join("")}
                </ul>`
                  : product.featuresList
                  ? product.featuresList
                  : product.features
                  ? product.features
                  : "Not specified"
              }
            </div>
          </div>
          ${
            product.fit
              ? `
          <div class="product-detail-section">
            <div class="product-detail-section-title">Fit</div>
            <div class="product-detail-description-text">
              ${product.fit}
            </div>
          </div>
          `
              : ""
          }
          ${
            product.care || product.careInstructions
              ? `
          <div class="product-detail-section">
            <div class="product-detail-section-title">Care Instructions</div>
            <div class="product-detail-description-text">
              ${product.care || product.careInstructions}
            </div>
          </div>
          `
              : ""
          }
          ${
            product.countryOfOrigin || product.origin
              ? `
          <div class="product-detail-section">
            <div class="product-detail-section-title">Origin</div>
            <div class="product-detail-description-text">
              ${product.countryOfOrigin || product.origin}
            </div>
          </div>
          `
              : ""
          }
        <!--  <div class="product-detail-section">
            <div class="product-detail-section-title">Reviews</div>
            <div class="product-review">
              <div class="product-review-header">
                <div class="product-review-stars">★★★★★</div>
                <div class="product-review-meta">
                  <span class="product-review-name">Sarah M.</span>
                  <span class="product-review-date">2 weeks ago</span>
                </div>
              </div>
              <div class="product-review-text">
                Perfect fit and the quality is amazing. The suede patch adds such a nice touch. Definitely worth the price!
              </div>
            </div>
            <div class="product-review">
              <div class="product-review-header">
                <div class="product-review-stars">★★★★★</div>
                <div class="product-review-meta">
                  <span class="product-review-name">Alex K.</span>
                  <span class="product-review-date">1 month ago</span>
                </div>
              </div>
              <div class="product-review-text">
                Love this shirt! The pima cotton is so soft and the cropped length is perfect. Highly recommend.
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  `;
  // Prevent background scroll
  const originalOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  // Replace Feather icons after DOM insertion
  document.body.appendChild(overlay);
  if (window.feather) window.feather.replace();

  // Carousel logic
  const imageEl = overlay.querySelector(".product-detail-image");
  const dots = overlay.querySelectorAll(".carousel-dot");

  function animateSlide(direction, nextIdx) {
    // direction: 'left' or 'right'
    // CORRECTED: 'left' means swipe left (show next image, image slides out left, new slides in from right)
    //            'right' means swipe right (show previous image, image slides out right, new slides in from left)
    imageEl.classList.add(
      direction === "left" ? "slide-left-out" : "slide-right-out"
    );
    setTimeout(() => {
      imageEl.src = carouselImages[nextIdx];
      imageEl.classList.remove("slide-left-out", "slide-right-out");
      imageEl.classList.add(
        direction === "left" ? "slide-left-in" : "slide-right-in"
      );
      setTimeout(() => {
        imageEl.classList.remove("slide-left-in", "slide-right-in");
      }, 250);
    }, 250);
  }

  function updateCarousel(idx, animateDir = null) {
    dots.forEach((dot, i) => dot.classList.toggle("active", i === idx));
    if (animateDir) {
      animateSlide(animateDir, idx);
    } else {
      imageEl.src = carouselImages[idx];
    }
  }

  dots.forEach((dot, i) => {
    dot.onclick = () => {
      if (i === currentIndex) return;
      const dir = i > currentIndex ? "left" : "right";
      currentIndex = i;
      updateCarousel(currentIndex, dir);
    };
  });

  // Swipe support (touch events)
  let startX = null;
  let isSwiping = false;
  imageEl.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
      isSwiping = true;
    }
  });
  imageEl.addEventListener(
    "touchmove",
    (e) => {
      if (!isSwiping || startX === null) return;
      // Prevent vertical scroll if horizontal swipe is detected
      const dx = e.touches[0].clientX - startX;
      if (Math.abs(dx) > 10) {
        e.preventDefault();
      }
    },
    { passive: false }
  );
  imageEl.addEventListener("touchend", (e) => {
    if (!isSwiping || startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const dx = endX - startX;
    if (dx > 40 && currentIndex > 0) {
      currentIndex--;
      updateCarousel(currentIndex, "right");
    } else if (dx < -40 && currentIndex < carouselImages.length - 1) {
      currentIndex++;
      updateCarousel(currentIndex, "left");
    }
    startX = null;
    isSwiping = false;
  });

  // Close logic
  overlay.querySelector(".close-detail-btn").onclick = () => {
    if (typeof onClose === "function") onClose();
    overlay.remove();
    document.body.style.overflow = originalOverflow;
  };
  // Dismiss overlay on background click
  overlay.onclick = (e) => {
    if (e.target === overlay) {
      if (typeof onClose === "function") onClose();
      overlay.remove();
      document.body.style.overflow = originalOverflow;
    }
  };
  return overlay;
}
