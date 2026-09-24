/**
 * DESI VIBE - Static Product Dataset
 * USA-based Indian Ethnic Fashion Boutique Demo Catalog
 */

const productsData = [
  {
    id: "DV-LH-001",
    name: "Royal Plum Embroidered Lehenga",
    category: "Lehengas",
    categorySlug: "lehengas",
    price: 650,
    currency: "$",
    color: "Royal Plum",
    colorSlug: "plum",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Grand Weddings",
    occasionSlug: "weddings",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Crafted in rich royal plum silk with intricate gold zardozi threadwork and zari embroidery. Features a flared silhouette paired with an embellished sweetheart neckline blouse and a translucent net dupatta.",
    details: [
      "Fabric: Raw Silk Lehenga & Blouse with Net Dupatta",
      "Work: Zardozi, Sequins & Thread Embroidery",
      "Set Includes: Lehenga, Unstitched/Pre-tailored Blouse, Dupatta",
      "Care: Dry Clean Only",
      "Origin: Handcrafted by master artisans in India for Desi Vibe USA"
    ],
    fitInfo: "Model is 5'8\" wearing Size S. Standard regular fit with adjustable waist drawstring and side zip."
  },
  {
    id: "DV-CC-002",
    name: "Ivory Floral Chaniya Choli",
    category: "Chaniya Choli",
    categorySlug: "chaniya-choli",
    price: 520,
    currency: "$",
    color: "Warm Ivory",
    colorSlug: "ivory",
    sizes: ["XS", "S", "M", "L"],
    occasion: "Festive Celebrations",
    occasionSlug: "festive",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "A breezy warm ivory ensemble featuring traditional block print-inspired floral motifs, gold mirror trim accents, and a contrasting pastel peach tissue dupatta.",
    details: [
      "Fabric: Premium Cotton Blend & Tissue Organza Dupatta",
      "Work: Foil Print, Mirror Borders & Shell Tassels",
      "Set Includes: Chaniya, Choli Top, Dupatta",
      "Care: Dry Clean Only",
      "Origin: Designed for lightweight festive comfort"
    ],
    fitInfo: "Relaxed flared fit with soft elasticated waistband and drawstring tie."
  },
  {
    id: "DV-SR-003",
    name: "Midnight Blue Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 380,
    currency: "$",
    color: "Midnight Blue",
    colorSlug: "blue",
    sizes: ["One Size"],
    occasion: "Reception & Cocktail",
    occasionSlug: "reception",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Deep midnight blue organza silk saree highlighted with woven golden zari brocade borders and a delicate fluid drape. Perfect for evening galas and receptions.",
    details: [
      "Fabric: Pure Organza Silk",
      "Work: Woven Zari Brocade Border & Pallu",
      "Saree Length: 5.5 meters with 0.8 meter unstitched blouse piece",
      "Care: Dry Clean Only"
    ],
    fitInfo: "Free size saree drape. Includes matching unstitched blouse piece."
  },
  {
    id: "DV-KT-004",
    name: "Rose Pink Embroidered Kurti",
    category: "Kurtis",
    categorySlug: "kurtis",
    price: 195,
    currency: "$",
    color: "Rose Pink",
    colorSlug: "pink",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Casual Elegance",
    occasionSlug: "casual",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "A chic straight-cut straight kurti rendered in soft rose pink chanderi silk, decorated with subtle neck threadwork and pearl highlights.",
    details: [
      "Fabric: Chanderi Silk Blend",
      "Work: Resham Threadwork & Faux Pearl Accents",
      "Set Includes: Kurti Tunic Only",
      "Care: Gentle Hand Wash or Dry Clean"
    ],
    fitInfo: "Straight fit with side slits for easy movement."
  },
  {
    id: "DV-SS-005",
    name: "Sand Beige Anarkali Salwar Suit",
    category: "Salwar Suits",
    categorySlug: "salwar-suits",
    price: 410,
    currency: "$",
    color: "Sand Beige",
    colorSlug: "beige",
    sizes: ["XS", "S", "M", "L", "XL"],
    occasion: "Festive Celebrations",
    occasionSlug: "festive",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Floor-length sand beige Georgette Anarkali silhouette layered with intricate zari embroidery across the bodice and hemline.",
    details: [
      "Fabric: Faux Georgette with Micro Cotton Inner",
      "Work: Heavy Zari & Sequins Work",
      "Set Includes: Anarkali Kameez, Churidar Pants, Dupatta",
      "Care: Dry Clean Only"
    ],
    fitInfo: "Fitted at waist with flowing floor-length flared skirt."
  },
  {
    id: "DV-IW-006",
    name: "Muted Gold Draped Indo-Western Gown",
    category: "Indo-Western",
    categorySlug: "indo-western",
    price: 490,
    currency: "$",
    color: "Muted Gold",
    colorSlug: "gold",
    sizes: ["S", "M", "L"],
    occasion: "Reception & Cocktail",
    occasionSlug: "reception",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Modernized fusion silhouette featuring pre-draped saree pleats on a structured muted gold metallic satin base with metallic belt accessory.",
    details: [
      "Fabric: Metallic Satin & Chiffon Drapes",
      "Work: Structured Pleating & Metal Buckle Belt",
      "Set Includes: Pre-stitched Indo-Western Gown",
      "Care: Dry Clean Only"
    ],
    fitInfo: "Pre-stitched ready-to-wear gown with concealed back zipper."
  },
  {
    id: "DV-LH-007",
    name: "Emerald Green Velvet Lehenga",
    category: "Lehengas",
    categorySlug: "lehengas",
    price: 720,
    currency: "$",
    color: "Emerald Green",
    colorSlug: "green",
    sizes: ["S", "M", "L"],
    occasion: "Grand Weddings",
    occasionSlug: "weddings",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Opulent emerald green micro-velvet lehenga with deep antique gold tilla embroidery and crystal stone embellishments.",
    details: [
      "Fabric: Micro Velvet Lehenga & Blouse, Net Dupatta",
      "Work: Tilla Threadwork, Dabka & Stone Work",
      "Set Includes: Lehenga skirt, Blouse, Dupatta",
      "Care: Dry Clean Only"
    ],
    fitInfo: "Heavy regal volume skirt with supportive double can-can inner netting."
  },
  {
    id: "DV-SR-008",
    name: "Crimson Red Kanjivaram Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 540,
    currency: "$",
    color: "Crimson Red",
    colorSlug: "red",
    sizes: ["One Size"],
    occasion: "Grand Weddings",
    occasionSlug: "weddings",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Traditional crimson red silk saree intricately woven with temple motifs and rich pure gold zari pallu.",
    details: [
      "Fabric: Pure Art Silk Kanjivaram",
      "Work: Handwoven Gold Zari Temple Border",
      "Includes: 5.5m Saree + Unstitched Blouse Piece",
      "Care: Dry Clean Only"
    ],
    fitInfo: "Traditional heavy drape with structured pallu."
  },
  {
    id: "DV-CC-009",
    name: "Navratri Multi-Toned Chaniya Choli",
    category: "Chaniya Choli",
    categorySlug: "chaniya-choli",
    price: 460,
    currency: "$",
    color: "Multicolored",
    colorSlug: "multi",
    sizes: ["XS", "S", "M", "L"],
    occasion: "Festive Celebrations",
    occasionSlug: "festive",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Vibrant festive ghagra choli ensemble combining traditional Kutchi mirror work, vibrant pom-pom tassels, and multi-tier paneling.",
    details: [
      "Fabric: Fine Rayon Cotton & Bandhani Dupatta",
      "Work: Real Mirror Work & Resham Embroidery",
      "Set Includes: Flared Chaniya, Fitted Choli, Bandhani Dupatta",
      "Care: Dry Clean Recommended"
    ],
    fitInfo: "High-twirl 10-meter flare skirt with adjustable drawstring."
  },
  {
    id: "DV-KT-010",
    name: "Ivory Chiffon Printed Kurti Set",
    category: "Kurtis",
    categorySlug: "kurtis",
    price: 220,
    currency: "$",
    color: "Warm Ivory",
    colorSlug: "ivory",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Casual Elegance",
    occasionSlug: "casual",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Lightweight summer ivory kurti set paired with flared palazzo pants and a sheer floral printed chiffon dupatta.",
    details: [
      "Fabric: Cotton Silk Kurti & Chiffon Dupatta",
      "Work: Digital Floral Print with Gotta Patti Border",
      "Set Includes: Kurti, Palazzo Pants, Dupatta",
      "Care: Gentle Hand Wash"
    ],
    fitInfo: "Comfortable relaxed fit designed for warm weather festivities."
  },
  {
    id: "DV-SS-011",
    name: "Plum & Gold Sharara Suit",
    category: "Salwar Suits",
    categorySlug: "salwar-suits",
    price: 480,
    currency: "$",
    color: "Royal Plum",
    colorSlug: "plum",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Festive Celebrations",
    occasionSlug: "festive",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Three-piece plum short kurti paired with voluminous tiered sharara pants and an intricately embroidered organza dupatta.",
    details: [
      "Fabric: Chinon Georgette & Organza",
      "Work: Sequins, Dabka & Zari Borders",
      "Set Includes: Short Tunic, Tiered Sharara, Dupatta",
      "Care: Dry Clean Only"
    ],
    fitInfo: "Fitted short top with wide-flared sharara leg silhouette."
  },
  {
    id: "DV-IW-012",
    name: "Contemporary Cape Lehenga Ensemble",
    category: "Indo-Western",
    categorySlug: "indo-western",
    price: 580,
    currency: "$",
    color: "Sand Beige",
    colorSlug: "beige",
    sizes: ["S", "M", "L"],
    occasion: "Reception & Cocktail",
    occasionSlug: "reception",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000"
    ],
    description: "Modern 3-piece resort festive ensemble comprising a minimalist bustier top, fluid crepe skirt, and a floor-sweeping sheer cape.",
    details: [
      "Fabric: Viscose Crepe & Sheer Net Cape",
      "Work: Crystal Beadwork & Thread Accents",
      "Set Includes: Crop Top, Skirt, Sheer Cape",
      "Care: Dry Clean Only"
    ],
    fitInfo: "High-waisted fit with sweeping lightweight embroidered cape."
  }
];

// Helper functions for data access
function getProductById(id) {
  if (!id) return null;
  return productsData.find(p => p.id.toLowerCase() === id.toLowerCase()) || null;
}

function getFeaturedProducts(limit = 4) {
  return productsData.filter(p => p.featured).slice(0, limit);
}

function getRelatedProducts(currentId, categorySlug, limit = 4) {
  let filtered = productsData.filter(p => p.id !== currentId && p.categorySlug === categorySlug);
  if (filtered.length < limit) {
    const extra = productsData.filter(p => p.id !== currentId && p.categorySlug !== categorySlug);
    filtered = filtered.concat(extra);
  }
  return filtered.slice(0, limit);
}
