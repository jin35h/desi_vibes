/**
 * Desi Vibe - Main JavaScript Engine
 * Shared UI interactions: Scroll Animations, Sticky Header Shrink, Mobile Drawer, Search Modal, Enquiry Form & Toasts
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initStickyHeader();
  initMobileDrawer();
  initSearchModal();
  initEnquiryModal();
  initLightbox();
  initImageErrorHandlers();
  setActiveNavLinks();
});

/**
 * Renders a standard Desi Vibe Product Card HTML string
 */
function createProductCardHTML(product) {
  const isBestsellerBadge = product.isBestseller ? `<span class="product-card-badge">Bestseller</span>` : '';
  const firstImage = (product.images && product.images[0]) ? product.images[0] : 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop';
  
  return `
    <div class="product-card reveal-on-scroll" data-product-id="${product.id}" data-category="${product.category}">
      <div class="product-card-image-wrap">
        ${isBestsellerBadge}
        <span class="product-card-style-code">${product.styleCode}</span>
        <a href="product.html?id=${product.id}">
          <img src="${firstImage}" alt="${product.name}" class="product-card-image" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop'" />
        </a>
        <div class="product-card-quick-act">
          <button class="btn-primary trigger-enquiry-btn" style="height: 38px; font-size: 11px; padding: 0 16px;" data-id="${product.id}" data-name="${product.name}" data-code="${product.styleCode}" data-img="${firstImage}">
            Quick Enquiry
          </button>
        </div>
      </div>
      <div class="product-card-content">
        <span class="product-card-category">${product.categoryName}</span>
        <h3 class="product-card-name">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-card-footer">
          <span class="product-card-price">${product.price || 'Inquire Price'}</span>
          <a href="product.html?id=${product.id}" class="product-card-enquire-btn">
            View Details &rarr;
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Scroll Reveal Animation Observer Engine
 */
function initScrollReveal() {
  document.body.classList.add('js-reveal-active');
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '50px 0px 0px 0px'
    });

    revealElements.forEach(el => {
      // If already in viewport or dynamic, reveal quickly
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

/**
 * Sticky Header Shrink Controller
 */
function initStickyHeader() {
  const header = document.querySelector('.header-site');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  
  const closeDrawer = () => {
    if (drawer) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) closeDrawer();
    });
  }
}

/**
 * Search Modal Overlay & Live Search Results
 */
function initSearchModal() {
  const searchTriggers = document.querySelectorAll('.trigger-search-btn');
  const searchModal = document.getElementById('search-modal');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchInput = document.getElementById('global-search-input');
  const resultsDropdown = document.getElementById('search-results-dropdown');

  searchTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (searchModal) {
        searchModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (searchInput) {
          setTimeout(() => searchInput.focus(), 150);
        }
      }
    });
  });

  const closeSearch = () => {
    if (searchModal) {
      searchModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearch();
    });
  }

  if (searchInput && resultsDropdown && typeof DESI_VIBE_PRODUCTS !== 'undefined') {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query.length < 2) {
        resultsDropdown.style.display = 'none';
        resultsDropdown.innerHTML = '';
        return;
      }

      const matches = DESI_VIBE_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.styleCode.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query) ||
        p.color.toLowerCase().includes(query)
      );

      if (matches.length > 0) {
        resultsDropdown.style.display = 'block';
        resultsDropdown.innerHTML = matches.map(p => `
          <a href="product.html?id=${p.id}" style="display: flex; gap: 14px; padding: 14px 16px; border-bottom: 1px solid #F0E8DD; align-items: center; transition: background 0.2s;" onmouseover="this.style.background='#F8F2E9'" onmouseout="this.style.background='transparent'">
            <img src="${p.images[0]}" alt="${p.name}" style="width: 48px; height: 60px; object-fit: cover; border-radius: 4px;" />
            <div>
              <div style="font-size: 14px; font-weight: 500; color: #252321;">${p.name}</div>
              <div style="font-size: 11px; color: #6B263D; font-weight: 600; margin-top: 2px;">Style Code: ${p.styleCode} • ${p.categoryName}</div>
            </div>
          </a>
        `).join('');
      } else {
        resultsDropdown.style.display = 'block';
        resultsDropdown.innerHTML = `
          <div style="padding: 20px; font-size: 14px; color: #5c5855; text-align: center;">
            No ethnic outfits found matching "${query}". Try searching "Lehenga", "Saree", or "DV-301".
          </div>
        `;
      }
    });
  }
}

/**
 * Global Enquiry Modal Form Logic
 */
function initEnquiryModal() {
  const modal = document.getElementById('enquiry-modal');
  const closeBtn = document.getElementById('close-enquiry-modal');
  const form = document.getElementById('enquiry-form');
  const confirmationBox = document.getElementById('enquiry-confirmation-box');

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.trigger-enquiry-btn');
    if (trigger && modal) {
      const pId = trigger.getAttribute('data-id') || 'DV-301';
      const pName = trigger.getAttribute('data-name') || 'Wine Embroidered Lehenga Set';
      const pCode = trigger.getAttribute('data-code') || 'DV-301';
      const pImg = trigger.getAttribute('data-img') || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop';
      const selectedSize = trigger.getAttribute('data-size') || '';

      const inputCode = document.getElementById('enquiry-style-code');
      const inputName = document.getElementById('enquiry-product-name');
      const inputSize = document.getElementById('enquiry-selected-size');

      if (inputCode) inputCode.value = pCode;
      if (inputName) inputName.value = pName;
      if (inputSize && selectedSize) inputSize.value = selectedSize;

      const summaryImg = document.getElementById('modal-summary-img');
      const summaryTitle = document.getElementById('modal-summary-title');
      const summaryCode = document.getElementById('modal-summary-code');

      if (summaryImg) summaryImg.src = pImg;
      if (summaryTitle) summaryTitle.textContent = pName;
      if (summaryCode) summaryCode.textContent = `Style Code: ${pCode}` + (selectedSize ? ` | Size: ${selectedSize}` : '');

      if (confirmationBox) confirmationBox.style.display = 'none';
      if (form) form.style.display = 'block';

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (form) form.style.display = 'none';
      if (confirmationBox) {
        confirmationBox.style.display = 'block';
        confirmationBox.innerHTML = `
          <div style="font-size: 36px; margin-bottom: 8px;">✓</div>
          <h4 style="font-family: var(--font-serif); font-size: 22px; color: #1E562A; margin-bottom: 8px;">Enquiry Received</h4>
          <p style="font-size: 14px; line-height: 1.5; color: #2A6B38;">
            Thank you for your interest in this piece. Your enquiry is ready for our team. We'll follow up using the contact details you provided.
          </p>
          <button class="btn-primary" onclick="document.getElementById('enquiry-modal').classList.remove('open'); document.body.style.overflow='';" style="margin-top: 18px; height: 42px; font-size: 12px;">
            Close Window
          </button>
        `;
      }
    });
  }
}

/**
 * Image Lightbox Modal
 */
function initLightbox() {
  const lightbox = document.getElementById('lightbox-overlay');
  const lightboxImg = document.getElementById('lightbox-image');
  const closeBtn = document.getElementById('close-lightbox-btn');

  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('click', (e) => {
    const zoomable = e.target.closest('.trigger-lightbox');
    if (zoomable && lightbox && lightboxImg) {
      const src = zoomable.getAttribute('src') || zoomable.getAttribute('data-zoom-src');
      if (src) {
        lightboxImg.src = src;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
}

/**
 * Image Error Handling
 */
function initImageErrorHandlers() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop';
    });
  });
}

/**
 * Active Nav Link Highlight
 */
function setActiveNavLinks() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
