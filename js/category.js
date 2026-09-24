/**
 * Desi Vibe - Dynamic Category Page Engine
 * Real-time Filter & Sort Engine with Smooth Animations, Active Tag Bar & URL History PushState Sync
 */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof DESI_VIBE_PRODUCTS === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('cat') || 'all';

  const gridContainer = document.getElementById('category-products-grid');
  const countText = document.getElementById('product-count-text');
  const sortSelect = document.getElementById('sort-select');
  const pageTitle = document.getElementById('category-page-title');
  const pageBreadcrumb = document.getElementById('breadcrumb-current-cat');
  const activeTagsBar = document.getElementById('active-filter-tags-bar');

  let activeFilters = {
    categories: initialCategory !== 'all' ? [initialCategory] : [],
    color: 'all',
    sizes: [],
    occasions: []
  };

  // Sync checkboxes with initial URL parameter
  const catCheckboxes = document.querySelectorAll('.cat-filter-checkbox');
  catCheckboxes.forEach(cb => {
    if (initialCategory === 'all') {
      if (cb.value === 'all') cb.checked = true;
      else cb.checked = false;
    } else {
      if (cb.value === 'all') cb.checked = false;
      if (cb.value === initialCategory) cb.checked = true;
    }
  });

  updateCategoryHeader(initialCategory);
  renderFilteredProducts(true);

  // Category Checkbox Handlers
  catCheckboxes.forEach(cb => {
    cb.addEventListener('change', (e) => {
      const val = e.target.value;
      if (val === 'all') {
        catCheckboxes.forEach(c => c.checked = (c.value === 'all'));
        activeFilters.categories = [];
      } else {
        const allCb = document.querySelector('.cat-filter-checkbox[value="all"]');
        if (allCb) allCb.checked = false;

        const checkedCats = Array.from(catCheckboxes)
          .filter(c => c.checked && c.value !== 'all')
          .map(c => c.value);

        activeFilters.categories = checkedCats;

        if (checkedCats.length === 0 && allCb) {
          allCb.checked = true;
        }
      }
      updateCategoryHeader(activeFilters.categories.length === 1 ? activeFilters.categories[0] : 'all');
      syncURLParams();
      renderFilteredProducts();
    });
  });

  // Color Pill Handlers
  const colorPills = document.querySelectorAll('.color-pill-btn');
  colorPills.forEach(pill => {
    pill.addEventListener('click', () => {
      colorPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilters.color = pill.getAttribute('data-color');
      syncURLParams();
      renderFilteredProducts();
    });
  });

  // Size Checkbox Handlers
  const sizeCheckboxes = document.querySelectorAll('.size-filter-checkbox');
  sizeCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      activeFilters.sizes = Array.from(sizeCheckboxes).filter(c => c.checked).map(c => c.value);
      syncURLParams();
      renderFilteredProducts();
    });
  });

  // Sort Select Handler
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      renderFilteredProducts();
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById('reset-filters-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeFilters = { categories: [], color: 'all', sizes: [], occasions: [] };
      catCheckboxes.forEach(cb => cb.checked = (cb.value === 'all'));
      colorPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-color') === 'all'));
      sizeCheckboxes.forEach(cb => cb.checked = false);
      updateCategoryHeader('all');
      syncURLParams();
      renderFilteredProducts();
    });
  }

  // Mobile Filter Drawer Controls
  const openMobileFilterBtn = document.getElementById('open-mobile-filters-btn');
  const mobileFilterModal = document.getElementById('mobile-filter-modal');
  const closeMobileFilterBtn = document.getElementById('close-mobile-filter-btn');

  if (openMobileFilterBtn && mobileFilterModal) {
    openMobileFilterBtn.addEventListener('click', () => {
      mobileFilterModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  const closeMobileFilter = () => {
    if (mobileFilterModal) {
      mobileFilterModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };
  if (closeMobileFilterBtn) closeMobileFilterBtn.addEventListener('click', closeMobileFilter);

  /**
   * Main Filter & Render Engine with Motion
   */
  function renderFilteredProducts(isInitial = false) {
    let result = [...DESI_VIBE_PRODUCTS];

    // Filter Categories
    if (activeFilters.categories.length > 0) {
      result = result.filter(p => activeFilters.categories.includes(p.category));
    }

    // Filter Color
    if (activeFilters.color !== 'all') {
      const col = activeFilters.color.toLowerCase();
      result = result.filter(p => p.color.toLowerCase().includes(col));
    }

    // Filter Size
    if (activeFilters.sizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => activeFilters.sizes.includes(s)));
    }

    // Sort Results
    const sortVal = sortSelect ? sortSelect.value : 'featured';
    if (sortVal === 'price-asc') {
      result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortVal === 'price-desc') {
      result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortVal === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortVal === 'featured') {
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    // Render Active Tags Bar
    renderActiveTagsBar();

    // Render Grid with smooth fade transition
    if (gridContainer) {
      if (!isInitial) {
        gridContainer.style.opacity = '0';
        gridContainer.style.transform = 'translateY(10px)';
        gridContainer.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      }

      setTimeout(() => {
        if (result.length > 0) {
          gridContainer.innerHTML = result.map(createProductCardHTML).join('');
        } else {
          gridContainer.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; background-color: var(--color-white); border-radius: var(--radius-panel); border: 1px solid var(--color-border-light);" class="reveal-on-scroll">
              <h3 style="font-family: var(--font-serif); font-size: 24px; color: var(--color-berry); margin-bottom: 12px;">No Ethnic Outfits Match Selection</h3>
              <p style="font-size: 15px; color: var(--color-charcoal-muted); margin-bottom: 24px;">Try selecting different color filters, clearing size preferences, or exploring all categories.</p>
              <button class="btn-primary" onclick="document.getElementById('reset-filters-btn').click();">Reset All Filters</button>
            </div>
          `;
        }

        gridContainer.style.opacity = '1';
        gridContainer.style.transform = 'translateY(0)';

        // Trigger IntersectionObserver for newly inserted product cards
        if (typeof initScrollReveal === 'function') {
          initScrollReveal();
        }
      }, isInitial ? 0 : 200);
    }

    if (countText) {
      countText.textContent = `Showing ${result.length} of ${DESI_VIBE_PRODUCTS.length} Designs`;
    }
  }

  function renderActiveTagsBar() {
    if (!activeTagsBar) return;
    let tagsHTML = '';

    if (activeFilters.categories.length > 0) {
      activeFilters.categories.forEach(cat => {
        const found = DESI_VIBE_CATEGORIES ? DESI_VIBE_CATEGORIES.find(c => c.id === cat) : null;
        const name = found ? found.name : cat;
        tagsHTML += `
          <span class="active-tag-pill">
            Category: ${name}
            <button onclick="removeCategoryFilter('${cat}')">&times;</button>
          </span>
        `;
      });
    }

    if (activeFilters.color !== 'all') {
      tagsHTML += `
        <span class="active-tag-pill">
          Color: ${activeFilters.color}
          <button onclick="removeColorFilter()">&times;</button>
        </span>
      `;
    }

    if (activeFilters.sizes.length > 0) {
      activeFilters.sizes.forEach(size => {
        tagsHTML += `
          <span class="active-tag-pill">
            Size: ${size}
            <button onclick="removeSizeFilter('${size}')">&times;</button>
          </span>
        `;
      });
    }

    activeTagsBar.innerHTML = tagsHTML;
  }

  // Global Helpers for removing active tags
  window.removeCategoryFilter = (cat) => {
    activeFilters.categories = activeFilters.categories.filter(c => c !== cat);
    catCheckboxes.forEach(cb => {
      if (cb.value === cat) cb.checked = false;
      if (activeFilters.categories.length === 0 && cb.value === 'all') cb.checked = true;
    });
    syncURLParams();
    renderFilteredProducts();
  };

  window.removeColorFilter = () => {
    activeFilters.color = 'all';
    colorPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-color') === 'all'));
    syncURLParams();
    renderFilteredProducts();
  };

  window.removeSizeFilter = (size) => {
    activeFilters.sizes = activeFilters.sizes.filter(s => s !== size);
    sizeCheckboxes.forEach(cb => {
      if (cb.value === size) cb.checked = false;
    });
    syncURLParams();
    renderFilteredProducts();
  };

  function syncURLParams() {
    const params = new URLSearchParams();
    if (activeFilters.categories.length === 1) {
      params.set('cat', activeFilters.categories[0]);
    } else if (activeFilters.categories.length > 1) {
      params.set('cat', activeFilters.categories.join(','));
    }
    if (activeFilters.color !== 'all') {
      params.set('color', activeFilters.color);
    }
    const newURL = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    history.pushState(null, '', newURL);
  }

  function parsePrice(priceStr) {
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  }

  function updateCategoryHeader(catKey) {
    if (typeof DESI_VIBE_CATEGORIES !== 'undefined') {
      const found = DESI_VIBE_CATEGORIES.find(c => c.id === catKey);
      if (found && pageTitle && pageBreadcrumb) {
        pageTitle.textContent = found.name;
        pageBreadcrumb.textContent = found.name.toUpperCase();
        const desc = document.getElementById('category-page-desc');
        if (desc) desc.textContent = found.description;
      } else if (catKey === 'all' && pageTitle && pageBreadcrumb) {
        pageTitle.textContent = "Shop Ethnic Wear Collections";
        pageBreadcrumb.textContent = "ALL ETHNIC WEAR";
        const desc = document.getElementById('category-page-desc');
        if (desc) desc.textContent = "Explore our curated catalog of Indian festive ensembles. Image-first browsing with style codes, US size guides, and direct boutique enquiry.";
      }
    }
  }
});
