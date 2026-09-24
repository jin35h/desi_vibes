/**
 * Desi Vibe - Product Inventory Database
 * Collection of curated Indian ethnic wear catalog data
 */

const DESI_VIBE_PRODUCTS = [
  {
    id: "DV-301",
    name: "Wine Embroidered Lehenga Set",
    category: "lehengas",
    categoryName: "Bridal & Wedding Lehengas",
    price: "$890",
    styleCode: "DV-301",
    color: "Wine",
    fabric: "Organza Silk & Net with Zardosi Embroidery",
    setIncludes: "Lehenga, Stitched Blouse with Heavy Embroidery, & Net Dupatta with Scalloped Border",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    occasion: "Bridal / Wedding Reception",
    description: "A richly detailed festive ensemble with intricate zardosi & sequins embroidery and a graceful 4-meter flare silhouette, designed to make special moments feel even more memorable.",
    details: "Crafted in deep wine velvet and organza silk. Features intricate floral zardosi embroidery with hand-worked sequins, beaded tassels on dupatta edges, and structured lining for comfortable flare.",
    fitGuidance: "Semi-stitched lehenga flare with adjustable drawstrings. Blouse is padded with 2-inch inner margin for custom alterations up to size XXL.",
    careInstructions: "Dry clean only. Store in breathable garment bag away from direct sunlight.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: true,
    isBestseller: true
  },
  {
    id: "DV-302",
    name: "Midnight Navy Navratri Chaniya Choli",
    category: "chaniya-choli",
    categoryName: "Designer Choli",
    price: "$480",
    styleCode: "DV-302",
    color: "Navy Blue",
    fabric: "Pure Cotton & Gamthi Mirror Work",
    setIncludes: "Full-flare 10-meter Gamthi Lehenga, Designer Backless Choli, Bandhani Dupatta",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Navratri / Festive / Garba Night",
    description: "Authentic Gujarati traditional Chaniya Choli with handcrafted real mirror work, detailed Kutchi embroidery panels, and vibrant silk border detail.",
    details: "Lightweight premium cotton fabric engineered for high-energy dancing. Features high-grade micro-mirror embellishments that shimmer under ambient event lighting.",
    fitGuidance: "Lehenga features waist drawstring to fit waists 26 inches to 40 inches. Blouse has back tie strings.",
    careInstructions: "Gentle hand wash in cold water or dry clean. Do not iron directly on mirror work.",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: true,
    isBestseller: false
  },
  {
    id: "DV-303",
    name: "Royal Crimson Kanjivaram Silk Saree",
    category: "sarees",
    categoryName: "Designer & Wedding Sarees",
    price: "$650",
    styleCode: "DV-303",
    color: "Crimson Red",
    fabric: "100% Pure Mulberry Silk & Real Zari Thread",
    setIncludes: "Unstitched Blouse Piece with Zari Border + Saree",
    sizes: ["One Size", "Unstitched Blouse"],
    occasion: "Wedding Ceremony / Temple Rituals",
    description: "Handcrafted pure silk Kanjivaram weaving with heavy gold zari woven pallu, traditional peacock motifs, and temple border work.",
    details: "Woven in the ancient traditions of Kanchipuram silk artisans. Includes Silk Mark Certification for 100% pure silk authenticity.",
    fitGuidance: "Standard 5.5 meters length saree + 0.8 meter blouse fabric piece.",
    careInstructions: "Dry clean only. Wrap in muslin cloth when storing.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: true,
    isBestseller: true
  },
  {
    id: "DV-304",
    name: "Emerald Green Anarkali Suit Set",
    category: "salwar-kameez",
    categoryName: "Salwar Kameez & Suits",
    price: "$420",
    styleCode: "DV-304",
    color: "Emerald Green",
    fabric: "Georgette with Thread Embroidery",
    setIncludes: "Long Anarkali Kurta, Churidar Pants, & Organza Printed Dupatta",
    sizes: ["XS", "S", "M", "L", "XL"],
    occasion: "Sangeet / Mehendi / Family Celebrations",
    description: "Floor-length flowing Anarkali silhouette with intricate resham embroidery along the neck and cuff borders, paired with a sheer organza dupatta.",
    details: "Lightweight georgette body with micro-sequins subtle shimmer. Comfortable cotton lining for all-day ease.",
    fitGuidance: "True to size. Fitted bust with a flared flare from waist downwards.",
    careInstructions: "Dry clean recommended.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: false,
    isBestseller: true
  },
  {
    id: "DV-305",
    name: "Dusty Rose Indo-Western Jacket Set",
    category: "indo-western",
    categoryName: "Indo-Western",
    price: "$530",
    styleCode: "DV-305",
    color: "Dusty Rose",
    fabric: "Raw Silk & Soft Tulle",
    setIncludes: "Crop Top, High-Waist Dhoti Trousers, & Embroidered Long Cape Jacket",
    sizes: ["XS", "S", "M", "L"],
    occasion: "Cocktail Party / Reception / Contemporary Fusion",
    description: "Modern fusion ensemble combining structured dhoti pants with a hand-embroidered sheer cape jacket, crafted for high-fashion evening events.",
    details: "Pearl and bugle bead embroidery accents on jacket collar. Breathable raw silk crop top with padded support.",
    fitGuidance: "Elasticated back waistband on pants for comfortable flexibility.",
    careInstructions: "Dry clean only.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: true,
    isBestseller: false
  },
  {
    id: "DV-306",
    name: "Pastel Peach Floral Kidswear Lehenga",
    category: "kidswear",
    categoryName: "Kidswear Collection",
    price: "$240",
    styleCode: "DV-306",
    color: "Pastel Peach",
    fabric: "Soft Net & Breathable Cotton Lining",
    setIncludes: "Stitched Kids Lehenga, Soft Top, & Miniature Dupatta",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    occasion: "Festive / Wedding Guest",
    description: "Adorable, lightweight festive lehenga tailored with 100% soft cotton inner lining to keep young ones stylish and comfortable all day long.",
    details: "Scratch-free inner seam construction designed specially for kids' sensitive skin.",
    fitGuidance: "Elastic waist band with inner extension margin.",
    careInstructions: "Gentle machine wash inside out or dry clean.",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: false,
    isBestseller: false
  },
  {
    id: "DV-307",
    name: "Maroon Heritage Bridal Lehenga",
    category: "lehengas",
    categoryName: "Bridal & Wedding Lehengas",
    price: "$1,150",
    styleCode: "DV-307",
    color: "Maroon",
    fabric: "Velvet Silk & Dual Dupatta (Organza & Net)",
    setIncludes: "Heavy Flared Lehenga, Stitched Blouse, Main Net Dupatta, & Shoulder Velvet Wrap",
    sizes: ["S", "M", "L", "XL", "Custom"],
    occasion: "Bridal / Main Wedding Ceremony",
    description: "A grand bridal lehenga adorned with traditional doli motifs, gold dabka, cutdana, and gota patti craftsmanship. Comes with dual dupatta set.",
    details: "Hand-worked double-can-can lining for maximum volume and majestic royal drape.",
    fitGuidance: "Custom measurements accommodated with our US fitting team.",
    careInstructions: "Specialist dry clean only.",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: true,
    isBestseller: true
  },
  {
    id: "DV-308",
    name: "Champagne Gold Banarasi Silk Saree",
    category: "sarees",
    categoryName: "Designer & Wedding Sarees",
    price: "$590",
    styleCode: "DV-308",
    color: "Gold",
    fabric: "Banarasi Katan Silk",
    setIncludes: "Saree with Unstitched Blouse Fabric",
    sizes: ["One Size"],
    occasion: "Reception / Festive Puja",
    description: "Timeless woven Banarasi silk saree featuring antique gold kadwa weave throughout the body and classic floral kadwa border.",
    details: "Authentic Varanasi handloom weaving with soft lustrous texture.",
    fitGuidance: "Standard 5.5m saree + 80cm blouse piece.",
    careInstructions: "Dry clean only.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: false,
    isBestseller: true
  },
  {
    id: "DV-309",
    name: "Yellow Mirror-Work Haldi Lehenga",
    category: "lehengas",
    categoryName: "Bridal & Wedding Lehengas",
    price: "$490",
    styleCode: "DV-309",
    color: "Yellow",
    fabric: "Georgette with Foil Mirror Accents",
    setIncludes: "Flared Lehenga, Sweetheart Blouse, Organza Dupatta",
    sizes: ["XS", "S", "M", "L", "XL"],
    occasion: "Haldi Ceremony / Sangeet",
    description: "Vibrant sun-yellow lehenga designed for festive Haldi celebrations, embellished with reflective mirror embroidery that glows under outdoor sunlight.",
    details: "Breeze georgette fabric ensuring effortless movement and dancing ease.",
    fitGuidance: "Semi-stitched waist with side zip closure.",
    careInstructions: "Dry clean only.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: false,
    isBestseller: false
  },
  {
    id: "DV-310",
    name: "Teal Blue Embroidered Sharara Set",
    category: "salwar-kameez",
    categoryName: "Salwar Kameez & Suits",
    price: "$380",
    styleCode: "DV-310",
    color: "Teal Blue",
    fabric: "Chiffon Silk with Zari Detail",
    setIncludes: "Short Kurti, Tiered Flared Sharara Pants, & Matching Dupatta",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Eid / Mehendi / Family Dinner",
    description: "Elegant tiered sharara set with hand-embroidered neckline, paired with a soft ruffled chiffon dupatta.",
    details: "Lined with breathable cotton lawn for hot weather celebrations.",
    fitGuidance: "Elasticated sharara waist.",
    careInstructions: "Dry clean recommended.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: false,
    isBestseller: false
  },
  {
    id: "DV-311",
    name: "Ivory & Gold Pre-Stitched Saree Gown",
    category: "indo-western",
    categoryName: "Indo-Western",
    price: "$620",
    styleCode: "DV-311",
    color: "Ivory",
    fabric: "Satin Crepe & Metallic Embroidery",
    setIncludes: "Pre-Pleated Ready-to-Wear Saree Gown + Corset Blouse",
    sizes: ["XS", "S", "M", "L"],
    occasion: "Cocktail / Wedding Reception / Red Carpet",
    description: "Effortless pre-stitched saree gown with zero draping required. Zipper closure at the side with a dramatic trailing pallu.",
    details: "Built-in corset structure with padded bust for pristine fit.",
    fitGuidance: "Select exact bust and waist measurement.",
    careInstructions: "Dry clean only.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: true,
    isBestseller: false
  },
  {
    id: "DV-312",
    name: "Traditional Garba Chaniya Choli Red-Black",
    category: "chaniya-choli",
    categoryName: "Designer Choli",
    price: "$450",
    styleCode: "DV-312",
    color: "Red / Black",
    fabric: "Pure Cotton & Rabari Hand Embroidery",
    setIncludes: "Flared 8-Meter Chaniya, Embroidered Choli, Bandhani Dupatta",
    sizes: ["S", "M", "L", "XL"],
    occasion: "Navratri / Festive Garba",
    description: "Classic black and red contrast Kutchi style Chaniya Choli embellished with traditional shell tassels and mirror work.",
    details: "Authentic Gujarati folk styling handcrafted by traditional artisan communities.",
    fitGuidance: "Adjustable waist ties.",
    careInstructions: "Hand wash separately in cold water.",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop"
    ],
    isFeatured: false,
    isBestseller: true
  }
];

const DESI_VIBE_CATEGORIES = [
  {
    id: "lehengas",
    name: "Wedding & Bridal Lehengas",
    count: "42 Designs Available",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop",
    description: "Opulent hand-embroidered lehenga sets for brides, bridesmaids, and festive celebrations."
  },
  {
    id: "chaniya-choli",
    name: "Navratri & Designer Choli",
    count: "38 Designs Available",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
    description: "Authentic mirror-work and Kutchi embroidered Chaniya Cholis engineered for Garba nights."
  },
  {
    id: "sarees",
    name: "Designer & Wedding Sarees",
    count: "56 Designs Available",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
    description: "Pure Kanjivaram silk, Banarasi weaves, and lightweight organza drape sarees."
  },
  {
    id: "salwar-kameez",
    name: "Salwar Kameez & Anarkalis",
    count: "45 Designs Available",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
    description: "Flowing floor-length Anarkalis, sharara sets, and tailored straight kameez outfits."
  },
  {
    id: "indo-western",
    name: "Indo-Western Fusion",
    count: "29 Designs Available",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop",
    description: "Pre-stitched drape sarees, jacket sets, and modern fusion ensembles."
  },
  {
    id: "kidswear",
    name: "Kidswear Collection",
    count: "24 Designs Available",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop",
    description: "Soft cotton-lined festive lehengas and kurta sets tailored specifically for children."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DESI_VIBE_PRODUCTS, DESI_VIBE_CATEGORIES };
}
