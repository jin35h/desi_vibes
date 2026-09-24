/**
 * DESI VIBE - Product Detail Page Controller
 * URL parameter routing, image thumbnail switcher, color/size selection,
 * accordion rendering, inquiry modal triggers, and product-not-found handling.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("productDetailView")) return;

  const productController = new ProductDetailManager();
  productController.init();
});

class ProductDetailManager {
  constructor() {
    this.product = null;
    this.selectedSize = null;
    this.selectedColor = null;

    this.detailView = document.getElementById("productDetailView");
    this.notFoundView = document.getElementById("productNotFoundView");
    this.relatedGrid = document.getElementById("relatedProductsGrid");
  }

  init() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId || typeof getProductById === "undefined") {
      this.showNotFound();
      return;
    }

    this.product = getProductById(productId);

    if (!this.product) {
      this.showNotFound();
      return;
    }

    // Set initial selections
    this.selectedSize = this.product.sizes[0] || "M";
    this.selectedColor = this.product.color;

    this.renderProductDetails();
    this.renderGallery();
    this.renderAccordions();
    this.renderRelatedProducts();
    this.bindInquiryModal();
  }

  showNotFound() {
    if (this.detailView) this.detailView.classList.add("d-none");
    if (this.notFoundView) this.notFoundView.classList.remove("d-none");
  }

  renderProductDetails() {
    if (this.notFoundView) this.notFoundView.classList.add("d-none");
    if (this.detailView) this.detailView.classList.remove("d-none");

    // Dynamic Title & Metadata
    document.title = `${this.product.name} | Desi Vibe USA Ethnic Fashion`;

    // Breadcrumbs & Texts
    const categoryLink = document.getElementById("pDetailCategoryBreadcrumb");
    if (categoryLink) {
      categoryLink.textContent = this.product.category;
      categoryLink.href = `categories.html?category=${this.product.categorySlug}`;
    }

    const titleEl = document.getElementById("pDetailTitle");
    if (titleEl) titleEl.textContent = this.product.name;

    const idEl = document.getElementById("pDetailId");
    if (idEl) idEl.textContent = `Style ID: ${this.product.id}`;

    const categoryBadge = document.getElementById("pDetailCategoryBadge");
    if (categoryBadge) categoryBadge.textContent = this.product.category;

    const priceEl = document.getElementById("pDetailPrice");
    if (priceEl) priceEl.textContent = `${this.product.currency}${this.product.price}`;

    const descEl = document.getElementById("pDetailDesc");
    if (descEl) descEl.textContent = this.product.description;

    // Sizes Selector Buttons
    const sizeContainer = document.getElementById("pDetailSizeSelector");
    if (sizeContainer) {
      let sizeHtml = "";
      this.product.sizes.forEach(size => {
        const activeClass = size === this.selectedSize ? "active" : "";
        sizeHtml += `
          <button type="button" class="size-chip-btn ${activeClass}" data-size="${size}">
            ${size}
          </button>
        `;
      });
      sizeContainer.innerHTML = sizeHtml;

      sizeContainer.querySelectorAll(".size-chip-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          sizeContainer.querySelectorAll(".size-chip-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          this.selectedSize = btn.getAttribute("data-size");
          this.updateSelectedSizeLabel();
        });
      });
    }

    this.updateSelectedSizeLabel();
  }

  updateSelectedSizeLabel() {
    const sizeLabel = document.getElementById("selectedSizeText");
    if (sizeLabel) sizeLabel.textContent = this.selectedSize || "Select Size";
  }

  renderGallery() {
    const mainImg = document.getElementById("pDetailMainImg");
    const thumbCol = document.getElementById("pDetailThumbnails");

    if (!mainImg || !thumbCol) return;

    mainImg.src = this.product.images[0];
    mainImg.alt = this.product.name;

    let thumbHtml = "";
    this.product.images.forEach((imgUrl, index) => {
      const activeClass = index === 0 ? "active" : "";
      thumbHtml += `
        <div class="thumb-img-wrap ${activeClass}" data-index="${index}">
          <img src="${imgUrl}" alt="${this.escapeHtml(this.product.name)} angle ${index + 1}" class="thumb-img">
        </div>
      `;
    });

    thumbCol.innerHTML = thumbHtml;

    thumbCol.querySelectorAll(".thumb-img-wrap").forEach(thumb => {
      thumb.addEventListener("click", () => {
        thumbCol.querySelectorAll(".thumb-img-wrap").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");

        const index = parseInt(thumb.getAttribute("data-index"), 10);
        mainImg.src = this.product.images[index];
      });
    });
  }

  renderAccordions() {
    // Details
    const detailsBody = document.getElementById("pDetailAccordionBody");
    if (detailsBody && this.product.details) {
      let listHtml = "<ul>";
      this.product.details.forEach(item => {
        listHtml += `<li>${this.escapeHtml(item)}</li>`;
      });
      listHtml += "</ul>";
      detailsBody.innerHTML = listHtml;
    }

    // Fit Info
    const fitBody = document.getElementById("pFitAccordionBody");
    if (fitBody && this.product.fitInfo) {
      fitBody.textContent = this.product.fitInfo;
    }
  }

  bindInquiryModal() {
    const triggerBtn = document.getElementById("inquireStyleBtn");
    const modalEl = document.getElementById("inquiryModal");
    const form = document.getElementById("styleInquiryForm");
    const successAlert = document.getElementById("inquirySuccessAlert");

    if (!triggerBtn || !modalEl || !form) return;

    triggerBtn.addEventListener("click", () => {
      // Pre-fill modal details
      const modalProductTitle = document.getElementById("modalProductTitle");
      const modalProductId = document.getElementById("modalProductId");
      const modalProductDetails = document.getElementById("modalProductDetails");

      if (modalProductTitle) modalProductTitle.textContent = this.product.name;
      if (modalProductId) modalProductId.textContent = `Item Code: ${this.product.id}`;
      if (modalProductDetails) {
        modalProductDetails.textContent = `Selected Color: ${this.product.color} | Size: ${this.selectedSize}`;
      }

      if (successAlert) successAlert.classList.add("d-none");
      form.classList.remove("d-none");

      const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Show success feedback
      form.classList.add("d-none");
      if (successAlert) {
        successAlert.classList.remove("d-none");
      }
    });

    // Also bind Add to Bag button if present
    const addBagBtn = document.getElementById("addToBagBtn");
    if (addBagBtn) {
      addBagBtn.addEventListener("click", () => {
        if (typeof addToDemoBag === "function") {
          addToDemoBag(this.product, this.selectedSize, this.selectedColor);
        }
      });
    }
  }

  renderRelatedProducts() {
    if (!this.relatedGrid || typeof getRelatedProducts === "undefined") return;

    const related = getRelatedProducts(this.product.id, this.product.categorySlug, 4);

    let html = "";
    related.forEach(product => {
      html += `
        <div class="col-6 col-md-3 mb-4">
          <div class="product-card">
            <a href="product-detail.html?id=${product.id}" class="product-img-wrap">
              <span class="product-demo-badge">Demo Catalog</span>
              <img src="${product.images[0]}" alt="${this.escapeHtml(product.name)}" class="product-img" loading="lazy">
            </a>
            <div class="product-info">
              <div class="product-category-name">${this.escapeHtml(product.category)}</div>
              <h4 class="product-title" style="font-size: 16px;">
                <a href="product-detail.html?id=${product.id}">${this.escapeHtml(product.name)}</a>
              </h4>
              <div class="product-price" style="font-size: 15px;">${product.currency}${product.price}</div>
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

    this.relatedGrid.innerHTML = html;
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
