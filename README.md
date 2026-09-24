# DESI VIBE — Premium Indian Ethnic Fashion Website

**Desi Vibe** is a complete, visually polished, customer-oriented static website designed for a USA-based Indian ethnic fashion business.

---

## 🌟 Project Overview

- **Brand Name**: DESI VIBE
- **Tagline**: *Tradition, Styled Your Way.*
- **Target Audience**: USA-based customers looking for premium Indian ethnic fashion (Lehengas, Sarees, Chaniya Cholis, Salwar Suits, Kurtis, Indo-Western).
- **Architecture**: Lightweight static web application using HTML5, Bootstrap 5.3, custom CSS3, and Vanilla JavaScript.

---

## 📁 File Structure

```
html_site_static/
├── index.html                  # Home page
├── categories.html             # Catalog & Category filter page
├── product-detail.html         # Detailed view with gallery & style inquiry
├── README.md                   # Documentation & overview
└── assets/
    ├── css/
    │   └── style.css           # Design tokens, typography, grid & component styling
    └── js/
        ├── products-data.js    # Shared static demo catalog dataset & helpers
        ├── main.js             # Global navigation, sticky header, search modal, shopping bag
        ├── categories.js       # Dynamic filter, sort, category chips & responsive grid manager
        └── product.js          # Product detail manager, image switcher, inquiry modal
```

---

## 🎨 Design System

- **Primary Colors**:
  - **Royal Plum**: `#54263F`
  - **Warm Ivory**: `#FAF7F2`
  - **Muted Gold**: `#B08A56`
  - **Soft Charcoal**: `#252321`
  - **Sand Beige**: `#E9E0D7`
- **Typography**:
  - Headings: `Playfair Display`
  - Body Text: `Inter`
- **Layout & Sizing**:
  - Max content width: `1320px`
  - Corner radii: Subtle `4px` to `8px`
  - Aspect Ratios: `16:9` Hero, `4:5` Category & Product cards, `3:4` Product detail main display

---

## 🛠️ Features Implemented

1. **Shared Header & Mobile Navigation**:
   - Announcement strip with brand slogan
   - Sticky navbar on scroll with backdrop blur
   - Live Search Modal with instant catalog search
   - Demo Shopping Bag offcanvas drawer
   - Responsive offcanvas navigation drawer for mobile screens

2. **Home Page (`index.html`)**:
   - Hero banner with editorial styling & call-to-actions
   - Shop by Category (6 visual category cards with 4:5 image ratio)
   - Editorial brand story section highlighting USA boutique services & craftsmanship
   - Featured demo products section
   - Shop by Occasion section (Weddings, Festive Celebrations, Cocktail & Receptions)
   - Closing Call to Action

3. **Categories / Catalog Page (`categories.html`)**:
   - Dynamic URL parameter routing (e.g. `categories.html?category=lehengas`)
   - Horizontal category filter chips
   - Desktop filter sidebar & Mobile filter offcanvas drawer
   - Filters: Category, Occasion, Color Palette, and Size
   - Sorting options: Featured, Name A–Z, Name Z–A, Price Low to High, Price High to Low
   - Responsive product grid with real-time result counters & empty state handling

4. **Product Detail Page (`product-detail.html`)**:
   - URL query parameter routing (e.g. `product-detail.html?id=DV-LH-001`)
   - Two-column layout (58% image gallery, 42% info column) on desktop
   - Interactive image gallery with thumbnail switcher
   - Product ID, Category badge, Color, and Size selectors
   - Customer Inquiry Modal with form pre-filling for custom fit consultations
   - Accordions for specs, fit advice, and USA shipping process
   - Related products recommendation grid
   - Product-Not-Found state for invalid style IDs

---

## 🚀 How to Run

1. Simply open `index.html` in any modern desktop or mobile web browser.
2. No node server, npm packages, or build step required!
