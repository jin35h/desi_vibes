/**
 * Desi Vibe - Product Detail Page Engine
 * Dynamic Data Population, Hover Magnifier Pan, Size Selector & WhatsApp Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof DESI_VIBE_PRODUCTS === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'DV-301';

  const product = DESI_VIBE_PRODUCTS.find(p => p.id === productId) || DESI_VIBE_PRODUCTS[0];

  // Update Page Metadata Title
  document.title = `${product.name} (${product.styleCode}) | Desi Vibe USA`;

  // Populate Breadcrumb
  const catLink = document.getElementById('pdp-crumb-cat-link');
  const titleCrumb = document.getElementById('pdp-crumb-title');
  if (catLink) {
    catLink.textContent = product.categoryName.toUpperCase();
    catLink.href = `category.html?cat=${product.category}`;
  }
  if (titleCrumb) titleCrumb.textContent = product.name.toUpperCase();

  // Populate Information Panel
  setElementText('pdp-category-eyebrow', product.categoryName.toUpperCase());
  setElementText('pdp-title', product.name);
  setElementText('pdp-style-code', `Style Code: ${product.styleCode}`);
  setElementText('pdp-price', product.price || 'Inquire Price');
  setElementText('pdp-description', product.description);

  // Populate Specs Table
  setElementText('pdp-spec-color', product.color);
  setElementText('pdp-spec-fabric', product.fabric);
  setElementText('pdp-spec-includes', product.setIncludes);
  setElementText('pdp-spec-occasion', product.occasion);

  if (product.details) setElementText('pdp-details-text', product.details);
  if (product.fitGuidance) setElementText('pdp-fit-text', product.fitGuidance);

  // Update CTA Buttons Data Attributes
  const mainEnquiryBtn = document.getElementById('pdp-main-enquiry-btn');
  const headerEnquiryBtn = document.getElementById('header-pdp-enquiry-btn');
  const firstImage = (product.images && product.images[0]) ? product.images[0] : '';

  [mainEnquiryBtn, headerEnquiryBtn].forEach(btn => {
    if (btn) {
      btn.setAttribute('data-id', product.id);
      btn.setAttribute('data-name', product.name);
      btn.setAttribute('data-code', product.styleCode);
      btn.setAttribute('data-img', firstImage);
    }
  });

  // Dynamic WhatsApp Link
  const waBtn = document.getElementById('pdp-whatsapp-btn');
  if (waBtn) {
    const waMessage = encodeURIComponent(
      `Hello Desi Vibe Team! I would like to inquire about ${product.name} (Style Code: ${product.styleCode}). Please confirm stock and delivery to USA.`
    );
    waBtn.href = `https://wa.me/18005553374?text=${waMessage}`;
  }

  // Populate Image Gallery & Init Hover Magnifier Pan
  initPDPGallery(product.images, product.name);

  // Size Selector Pills
  initSizePills(product.sizes);

  // Size Guide Modal Handlers
  initSizeGuideModal();

  // Render Related Products
  renderRelatedProducts(product);
});

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/**
 * Gallery Image, Thumbnail Switcher & Mouse Hover Pan Magnifier
 */
function initPDPGallery(images, altName) {
  const thumbList = document.getElementById('pdp-thumbnails-list');
  const mainImg = document.getElementById('pdp-main-img');
  const mainImgBox = document.getElementById('pdp-main-image-box');

  if (!images || images.length === 0) return;

  if (mainImg) {
    mainImg.src = images[0];
    mainImg.alt = altName;
  }
  if (mainImgBox) {
    mainImgBox.setAttribute('data-zoom-src', images[0]);

    // Hover Pan Magnifier Effect for Desktop
    mainImgBox.addEventListener('mousemove', (e) => {
      const rect = mainImgBox.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      if (mainImg) {
        mainImg.style.transformOrigin = `${x}% ${y}%`;
        mainImg.style.transform = 'scale(1.5)';
      }
    });

    mainImgBox.addEventListener('mouseleave', () => {
      if (mainImg) {
        mainImg.style.transformOrigin = 'center center';
        mainImg.style.transform = 'scale(1)';
      }
    });
  }

  if (thumbList) {
    thumbList.innerHTML = images.map((imgUrl, index) => `
      <div class="pdp-thumb-item ${index === 0 ? 'active' : ''}" data-src="${imgUrl}">
        <img src="${imgUrl}" alt="${altName} View ${index + 1}" loading="lazy" />
      </div>
    `).join('');

    const thumbs = thumbList.querySelectorAll('.pdp-thumb-item');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const newSrc = thumb.getAttribute('data-src');
        if (mainImg) {
          mainImg.style.opacity = '0';
          setTimeout(() => {
            mainImg.src = newSrc;
            mainImg.style.opacity = '1';
          }, 150);
        }
        if (mainImgBox) mainImgBox.setAttribute('data-zoom-src', newSrc);
      });
    });
  }
}

/**
 * Size Selection Pills Logic
 */
function initSizePills(availableSizes) {
  const pillsGrid = document.getElementById('pdp-size-pills');
  const mainEnquiryBtn = document.getElementById('pdp-main-enquiry-btn');
  if (!pillsGrid) return;

  const sizesToRender = availableSizes && availableSizes.length > 0 
    ? availableSizes 
    : ["XS", "S", "M", "L", "XL", "Custom"];

  pillsGrid.innerHTML = sizesToRender.map((size, index) => `
    <button class="size-pill-btn ${index === 0 ? 'active' : ''}" data-size="${size}">${size}</button>
  `).join('');

  let currentSelectedSize = sizesToRender[0];
  if (mainEnquiryBtn) mainEnquiryBtn.setAttribute('data-size', currentSelectedSize);

  const pillBtns = pillsGrid.querySelectorAll('.size-pill-btn');
  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSelectedSize = btn.getAttribute('data-size');
      if (mainEnquiryBtn) mainEnquiryBtn.setAttribute('data-size', currentSelectedSize);
    });
  });
}

/**
 * Size Guide Modal Toggle
 */
function initSizeGuideModal() {
  const trigger = document.getElementById('open-size-guide-modal');
  const modal = document.getElementById('size-guide-modal');
  const closeBtn = document.getElementById('close-size-guide-modal');

  if (trigger && modal) {
    trigger.addEventListener('click', () => {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  const closeModal = () => {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

/**
 * Related Products Catalog ("You May Also Love")
 */
function renderRelatedProducts(currentProduct) {
  const container = document.getElementById('related-products-grid');
  if (!container || typeof DESI_VIBE_PRODUCTS === 'undefined') return;

  let related = DESI_VIBE_PRODUCTS.filter(p => p.id !== currentProduct.id && p.category === currentProduct.category);
  if (related.length < 4) {
    const fallback = DESI_VIBE_PRODUCTS.filter(p => p.id !== currentProduct.id && !related.includes(p));
    related = related.concat(fallback);
  }

  related = related.slice(0, 4);
  container.innerHTML = related.map(createProductCardHTML).join('');
}
