/**
 * DESI VIBE - Categories & Catalog Page Controller
 * Handles dynamic product filtering, sorting, responsive grid rendering,
 * and filter synchronization between sidebar, horizontal chips, and mobile offcanvas.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("catalogProductGrid")) return;

  const catalogController = new CatalogManager();
  catalogController.init();
});

class CatalogManager {
  constructor() {
    this.activeCategory = "all";
    this.activeOccasions = [];
    this.activeColors = [];
    this.activeSizes = [];
    this.currentSort = "featured";

    this.gridContainer = document.getElementById("catalogProductGrid");
    this.countElement = document.getElementById("catalogResultCount");
    this.emptyStateElement = document.getElementById("catalogEmptyState");
    this.sortSelect = document.getElementById("sortProductsSelect");
  }

  init() {
    this.parseQueryParams();
    this.bindEvents();
    this.render();
  }

  parseQueryParams() {
    const params = new URLSearchParams(window.location.search);

    const categoryParam = params.get("category");
    if (categoryParam) {
      this.activeCategory = categoryParam.toLowerCase();
    }

    const occasionParam = params.get("occasion");
    if (occasionParam) {
      this.activeOccasions.push(occasionParam.toLowerCase());
    }

    const colorParam = params.get("color");
    if (colorParam) {
      this.activeColors.push(colorParam.toLowerCase());
    }

    const sizeParam = params.get("size");
    if (sizeParam) {
      this.activeSizes.push(sizeParam.toUpperCase());
    }

    const sortParam = params.get("sort");
    if (sortParam) {
      this.currentSort = sortParam;
    }
  }

  bindEvents() {
    // Horizontal Category Chips
    const chips = document.querySelectorAll(".category-chip");
    chips.forEach(chip => {
      chip.addEventListener("click", (e) => {
        const selectedSlug = chip.getAttribute("data-category") || "all";
        this.activeCategory = selectedSlug;
        this.updateUrlParams();
        this.render();
      });
    });

    // Checkboxes (Desktop & Mobile Sync)
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    checkboxes.forEach(cb => {
      cb.addEventListener("change", (e) => {
        const type = cb.getAttribute("data-filter-type");
        const value = cb.value;

        if (type === "occasion") {
          if (cb.checked) {
            if (!this.activeOccasions.includes(value)) this.activeOccasions.push(value);
          } else {
            this.activeOccasions = this.activeOccasions.filter(o => o !== value);
          }
        } else if (type === "color") {
          if (cb.checked) {
            if (!this.activeColors.includes(value)) this.activeColors.push(value);
          } else {
            this.activeColors = this.activeColors.filter(c => c !== value);
          }
        }

        this.syncDuplicateCheckboxes(cb);
        this.render();
      });
    });

    // Size Filter Buttons
    const sizeButtons = document.querySelectorAll(".size-chip-btn");
    sizeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const sizeVal = btn.getAttribute("data-size");
        if (this.activeSizes.includes(sizeVal)) {
          this.activeSizes = this.activeSizes.filter(s => s !== sizeVal);
        } else {
          this.activeSizes.push(sizeVal);
        }
        this.syncSizeButtons();
        this.render();
      });
    });

    // Sort Dropdown
    if (this.sortSelect) {
      this.sortSelect.value = this.currentSort;
      this.sortSelect.addEventListener("change", (e) => {
        this.currentSort = e.target.value;
        this.render();
      });
    }

    // Reset / Clear Filters Buttons
    const resetBtns = document.querySelectorAll(".clear-all-filters-btn");
    resetBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        this.clearAllFilters();
      });
    });
  }

  clearAllFilters() {
    this.activeCategory = "all";
    this.activeOccasions = [];
    this.activeColors = [];
    this.activeSizes = [];
    this.currentSort = "featured";

    // Uncheck checkboxes
    document.querySelectorAll(".filter-checkbox").forEach(cb => cb.checked = false);
    this.syncSizeButtons();
    if (this.sortSelect) this.sortSelect.value = "featured";

    this.updateUrlParams();
    this.render();
  }

  syncDuplicateCheckboxes(triggerCb) {
    const type = triggerCb.getAttribute("data-filter-type");
    const val = triggerCb.value;
    document.querySelectorAll(`.filter-checkbox[data-filter-type="${type}"][value="${val}"]`).forEach(cb => {
      cb.checked = triggerCb.checked;
    });
  }

  syncSizeButtons() {
    document.querySelectorAll(".size-chip-btn").forEach(btn => {
      const val = btn.getAttribute("data-size");
      if (this.activeSizes.includes(val)) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  updateUrlParams() {
    const url = new URL(window.location);
    if (this.activeCategory !== "all") {
      url.searchParams.set("category", this.activeCategory);
    } else {
      url.searchParams.delete("category");
    }

    if (this.activeOccasions.length > 0) {
      url.searchParams.set("occasion", this.activeOccasions[0]);
    } else {
      url.searchParams.delete("occasion");
    }

    window.history.replaceState({}, "", url);
  }

  filterProducts() {
    if (typeof productsData === "undefined") return [];

    return productsData.filter(product => {
      // Category Filter
      if (this.activeCategory !== "all" && product.categorySlug !== this.activeCategory) {
        return false;
      }

      // Occasion Filter
      if (this.activeOccasions.length > 0) {
        const matchesOccasion = this.activeOccasions.some(occ => 
          product.occasionSlug === occ || product.occasion.toLowerCase().includes(occ)
        );
        if (!matchesOccasion) return false;
      }

      // Color Filter
      if (this.activeColors.length > 0) {
        const matchesColor = this.activeColors.some(col => 
          product.colorSlug === col || product.color.toLowerCase().includes(col)
        );
        if (!matchesColor) return false;
      }

      // Size Filter
      if (this.activeSizes.length > 0) {
        const matchesSize = this.activeSizes.some(sz => product.sizes.includes(sz));
        if (!matchesSize) return false;
      }

      return true;
    });
  }

  sortProducts(products) {
    const copy = [...products];
    if (this.currentSort === "name-asc") {
      copy.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.currentSort === "name-desc") {
      copy.sort((a, b) => b.name.localeCompare(a.name));
    } else if (this.currentSort === "price-asc") {
      copy.sort((a, b) => a.price - b.price);
    } else if (this.currentSort === "price-desc") {
      copy.sort((a, b) => b.price - a.price);
    }
    return copy;
  }

  syncChipsUI() {
    const chips = document.querySelectorAll(".category-chip");
    chips.forEach(chip => {
      const slug = chip.getAttribute("data-category") || "all";
      if (slug === this.activeCategory) {
        chip.classList.add("active");
      } else {
        chip.classList.remove("active");
      }
    });
  }

  render() {
    this.syncChipsUI();

    const filtered = this.filterProducts();
    const sorted = this.sortProducts(filtered);

    // Update Counter
    if (this.countElement) {
      const totalAvailable = typeof productsData !== "undefined" ? productsData.length : 0;
      this.countElement.textContent = `Showing ${sorted.length} of ${totalAvailable} styles`;
    }

    // Toggle Empty State vs Grid
    if (sorted.length === 0) {
      this.gridContainer.innerHTML = "";
      if (this.emptyStateElement) this.emptyStateElement.classList.remove("d-none");
      return;
    }

    if (this.emptyStateElement) this.emptyStateElement.classList.add("d-none");

    // Render Grid Cards
    let html = "";
    sorted.forEach(product => {
      html += `
        <div class="col-6 col-md-6 col-lg-4 mb-4">
          <div class="product-card">
            <a href="product-detail.html?id=${product.id}" class="product-img-wrap">
              <span class="product-demo-badge">Demo Catalog</span>
              <img src="${product.images[0]}" alt="${this.escapeHtml(product.name)}" class="product-img" loading="lazy">
            </a>
            <div class="product-info">
              <div class="product-category-name">${this.escapeHtml(product.category)}</div>
              <h3 class="product-title">
                <a href="product-detail.html?id=${product.id}">${this.escapeHtml(product.name)}</a>
              </h3>
              <div class="product-price">${product.currency}${product.price}</div>
              <div class="product-card-action">
                <a href="product-detail.html?id=${product.id}" class="btn btn-outline-plum btn-sm-custom w-100">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    this.gridContainer.innerHTML = html;
  }

  escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
