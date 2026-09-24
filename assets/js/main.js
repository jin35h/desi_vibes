/**
 * DESI VIBE - Main Global JavaScript
 * Header sticky behavior, Navigation active link highlights,
 * Demo Search Modal, Demo Shopping Bag Offcanvas, and Newsletter handlers.
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  highlightActiveNav();
  initSearchModal();
  initDemoShoppingBag();
  initNewsletterForm();
});

/* --------------------------------------------------------------------------
   1. Sticky Header Effect
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* --------------------------------------------------------------------------
   2. Highlight Active Navigation Item
   -------------------------------------------------------------------------- */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get("category");

  const navLinks = document.querySelectorAll(".site-nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    // Check homepage
    if (currentPath === "index.html" || currentPath === "") {
      if (href === "index.html" || href === "./") {
        link.classList.add("active");
      }
    } 
    // Check categories page with parameter
    else if (currentPath === "categories.html") {
      if (categoryParam) {
        if (href.includes(`category=${categoryParam}`)) {
          link.classList.add("active");
        }
      } else if (href === "categories.html") {
        link.classList.add("active");
      }
    }
  });
}

/* --------------------------------------------------------------------------
   3. Search Modal & Filtering Redirect
   -------------------------------------------------------------------------- */
function initSearchModal() {
  const searchInput = document.getElementById("headerSearchInput");
  const searchResultsContainer = document.getElementById("searchResultsContainer");

  if (!searchInput || !searchResultsContainer) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (query.length < 2) {
      searchResultsContainer.innerHTML = `
        <div class="text-center text-muted py-4">
          <i class="bi bi-search fs-3 mb-2 d-block"></i>
          <p class="mb-0">Type at least 2 characters to search catalog styles...</p>
        </div>
      `;
      return;
    }

    if (typeof productsData === "undefined") return;

    const matches = productsData.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      p.color.toLowerCase().includes(query) ||
      p.occasion.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResultsContainer.innerHTML = `
        <div class="text-center text-muted py-4">
          <p class="mb-1">No matching styles found for "<strong>${escapeHtml(query)}</strong>"</p>
          <a href="categories.html" class="btn btn-sm btn-outline-plum mt-2">Explore All Collections</a>
        </div>
      `;
      return;
    }

    let html = '<div class="list-group list-group-flush">';
    matches.forEach(product => {
      html += `
        <a href="product-detail.html?id=${product.id}" class="list-group-item list-group-item-action d-flex align-items-center gap-3 py-2 px-1">
          <img src="${product.images[0]}" alt="${escapeHtml(product.name)}" style="width: 48px; height: 60px; object-fit: cover; border-radius: 4px;">
          <div class="flex-grow-1">
            <h6 class="mb-0 font-heading" style="font-size: 15px;">${escapeHtml(product.name)}</h6>
            <span class="badge bg-light text-dark me-2">${escapeHtml(product.category)}</span>
            <small class="text-muted">${product.currency}${product.price}</small>
          </div>
          <i class="bi bi-chevron-right text-muted"></i>
        </a>
      `;
    });
    html += '</div>';
    searchResultsContainer.innerHTML = html;
  });
}

/* --------------------------------------------------------------------------
   4. Demo Shopping Bag System
   -------------------------------------------------------------------------- */
function initDemoShoppingBag() {
  updateBagBadge();
}

function getDemoBagItems() {
  const stored = localStorage.getItem("desi_vibe_bag");
  return stored ? JSON.parse(stored) : [];
}

function saveDemoBagItems(items) {
  localStorage.setItem("desi_vibe_bag", JSON.stringify(items));
  updateBagBadge();
}

function updateBagBadge() {
  const badges = document.querySelectorAll(".bag-count-badge");
  const items = getDemoBagItems();
  const count = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  badges.forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? "inline-block" : "none";
  });
}

function renderBagDrawerContent() {
  const container = document.getElementById("bagOffcanvasBody");
  if (!container) return;

  const items = getDemoBagItems();

  if (items.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <i class="bi bi-bag-heart text-muted display-4 mb-3 d-block"></i>
        <h5 class="font-heading mb-2">Your Bag is Empty</h5>
        <p class="text-muted fs-6 mb-4">Discover timeless Indian silhouettes for your upcoming celebrations.</p>
        <a href="categories.html" class="btn btn-plum" data-bs-dismiss="offcanvas">Browse Collections</a>
      </div>
    `;
    return;
  }

  let total = 0;
  let html = `<div class="d-flex flex-column gap-3 mb-4">`;

  items.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    html += `
      <div class="d-flex align-items-center gap-3 pb-3 border-bottom">
        <img src="${item.image}" alt="${escapeHtml(item.name)}" style="width: 60px; height: 75px; object-fit: cover; border-radius: 4px;">
        <div class="flex-grow-1">
          <h6 class="font-heading mb-1" style="font-size: 15px;">${escapeHtml(item.name)}</h6>
          <div class="text-muted small mb-1">Size: ${escapeHtml(item.size)} | Color: ${escapeHtml(item.color)}</div>
          <div class="fw-semibold" style="font-size: 14px;">${item.currency}${item.price} × ${item.quantity}</div>
        </div>
        <button type="button" class="btn btn-sm text-danger" onclick="removeFromDemoBag(${index})" title="Remove item">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    `;
  });

  html += `</div>`;
  html += `
    <div class="border-top pt-3">
      <div class="d-flex justify-content-between mb-3 fw-bold fs-5">
        <span>Estimated Total:</span>
        <span class="text-plum">$${total}</span>
      </div>
      <div class="alert alert-secondary small text-center mb-3">
        <i class="bi bi-info-circle me-1"></i> Demo Portfolio Mode: Real checkout is not configured.
      </div>
      <button class="btn btn-plum w-100 mb-2" onclick="triggerBagInquiryDemo()">Inquire About Selected Styles</button>
      <button class="btn btn-outline-plum w-100" onclick="clearDemoBag()">Clear Bag</button>
    </div>
  `;

  container.innerHTML = html;
}

function addToDemoBag(product, selectedSize, selectedColor) {
  const items = getDemoBagItems();
  const existing = items.find(i => i.id === product.id && i.size === selectedSize);

  if (existing) {
    existing.quantity += 1;
  } else {
    items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      image: product.images[0],
      size: selectedSize || "M",
      color: selectedColor || product.color,
      quantity: 1
    });
  }

  saveDemoBagItems(items);
  showToastNotification(`Added "${product.name}" to your bag.`);
  
  // Show offcanvas drawer if present
  const offcanvasEl = document.getElementById('bagOffcanvas');
  if (offcanvasEl) {
    renderBagDrawerContent();
    const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    bsOffcanvas.show();
  }
}

function removeFromDemoBag(index) {
  const items = getDemoBagItems();
  items.splice(index, 1);
  saveDemoBagItems(items);
  renderBagDrawerContent();
}

function clearDemoBag() {
  saveDemoBagItems([]);
  renderBagDrawerContent();
}

function triggerBagInquiryDemo() {
  alert("Desi Vibe Demo: Thank you for your interest! In a live application, this sends your chosen styles directly to our USA styling team for custom sizing and fitting consultations.");
}

/* --------------------------------------------------------------------------
   5. Newsletter Form Handler
   -------------------------------------------------------------------------- */
function initNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = form.querySelector("input[type='email']");
    if (!emailInput || !emailInput.value) return;

    showToastNotification("Thank you for subscribing to Desi Vibe updates!");
    emailInput.value = "";
  });
}

/* --------------------------------------------------------------------------
   6. Helper Utility Functions
   -------------------------------------------------------------------------- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToastNotification(message) {
  const toastContainer = document.getElementById("toastContainer") || createToastContainer();
  const toastEl = document.createElement("div");
  toastEl.className = "toast align-items-center text-white bg-dark border-0 show shadow-sm";
  toastEl.setAttribute("role", "alert");
  toastEl.setAttribute("aria-live", "assertive");
  toastEl.setAttribute("aria-atomic", "true");
  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body py-2 px-3">
        <i class="bi bi-check-circle-fill text-gold me-2"></i> ${escapeHtml(message)}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;
  toastContainer.appendChild(toastEl);
  setTimeout(() => {
    toastEl.remove();
  }, 4000);
}

function createToastContainer() {
  const container = document.createElement("div");
  container.id = "toastContainer";
  container.className = "toast-container position-fixed bottom-0 end-0 p-3";
  container.style.zIndex = "1090";
  document.body.appendChild(container);
  return container;
}
