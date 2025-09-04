const products = [
  {
    id: "mens-001",
    name: "Men's Black Freedom Sounds Graphic Printed Oversized Acid Wash T-shirt",
    category: "mens",
    mainImage: "images/photo_1_2025-09-02_19-33-03.jpg",
    images: [
      "images/photo_1_2025-09-02_19-33-03.jpg",
      "images/photo_2_2025-09-02_19-33-03.jpg",
      "images/photo_3_2025-09-02_19-33-03.jpg"
    ],
    description: "Comfortable cotton t-shirt with freedom sounds graphic print.",
    price: "₹699",
    priceOld: "₹2,199",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    reviews: [
      { user: "Sameer", comment: "Quality fabric, very comfortable!", rating: 5 },
      { user: "Anita", comment: "Fits perfectly, good value for money.", rating: 4 }
    ],
    url: "product-detail.html?id=mens-001"
  },
  {
    id: "mens-002",
    name: "Men's Black Batman Outline Logo Graphic Printed Oversized T-shirt",
    category: "mens",
    mainImage: "images/photo_4_2025-09-02_19-33-03.jpg",
    images: [
      "images/photo_4_2025-09-02_19-33-03.jpg",
      "images/photo_5_2025-09-02_19-33-03.jpg",
      "images/photo_6_2025-09-02_19-33-03.jpg"
    ],
    description: "Graphic printed Batman outline oversized t-shirt.",
    price: "₹699",
    priceOld: "₹2,199",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    reviews: [
      { user: "Rahul", comment: "Awesome fit and design.", rating: 5 },
      { user: "Neha", comment: "Good quality but a bit tight.", rating: 3 }
    ],
    url: "product-detail.html?id=mens-002"
  },
  {
    id: "mens-003",
    name: "Men's Black Ashura Graphic Printed Oversized T-shirt",
    category: "mens",
    mainImage: "images/photo_7_2025-09-02_19-33-03.jpg",
    images: [
      "images/photo_7_2025-09-02_19-33-03.jpg",
      "images/photo_8_2025-09-02_19-33-03.jpg",
      "images/photo_9_2025-09-02_19-33-03.jpg"
    ],
    description: "Stylish Ashura graphic printed oversized t-shirt.",
    price: "₹699",
    priceOld: "₹2,199",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    reviews: [
      { user: "Karan", comment: "Really comfortable and light fabric.", rating: 4 },
      { user: "Sneha", comment: "Nice design but the color fades after wash.", rating: 3 }
    ],
    url: "product-detail.html?id=mens-003"
  },
  {
    id: "mens-004",
    name: "Men's White Vengeance Typography Oversized T-shirt",
    category: "mens",
    mainImage: "images/photo_10_2025-09-02_19-33-03.jpg",
    images: [
      "images/photo_10_2025-09-02_19-33-03.jpg",
      "images/photo_11_2025-09-02_19-33-03.jpg",
      "images/photo_12_2025-09-02_19-33-03.jpg"
    ],
    description: "White vengeance typography oversized t-shirt.",
    price: "₹699",
    priceOld: "₹2,199",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    reviews: [
      { user: "Amit", comment: "Very comfortable fit and great style.", rating: 5 },
      { user: "Pooja", comment: "Fabric quality is average.", rating: 3 }
    ],
    url: "product-detail.html?id=mens-004"
  },
  {
    id: "womens-001",
    name: "Women's Brown Mickey Graphic Printed Oversized Acid Wash T-shirt",
    category: "womens",
    mainImage: "images/photo_13_2025-09-02_19-33-03.jpg",
    images: [
      "images/photo_13_2025-09-02_19-33-03.jpg",
      "images/photo_14_2025-09-02_19-33-03.jpg",
      "images/photo_15_2025-09-02_19-33-03.jpg"
    ],
    description: "Comfortable brown Mickey graphic printed oversized t-shirt.",
    price: "₹799",
    priceOld: "₹1,599",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    reviews: [
      { user: "Deepa", comment: "Fits perfectly and looks great.", rating: 5 },
      { user: "Sonia", comment: "Love the print and material.", rating: 4 }
    ],
    url: "product-detail.html?id=womens-001"
  },
  {
    id: "womens-002",
    name: "Women's Coral Pink Twilight Club Graphic Printed Oversized T-shirt",
    category: "womens",
    mainImage: "images/photo_16_2025-09-02_19-33-03.jpg",
    images: [
      "images/photo_16_2025-09-02_19-33-03.jpg",
      "images/photo_17_2025-09-02_19-33-03.jpg",
      "images/photo_18_2025-09-02_19-33-03.jpg"
    ],
    description: "Stylish coral pink twilight club graphic printed oversized t-shirt.",
    price: "₹599",
    priceOld: "₹1,599",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    reviews: [
      { user: "Rina", comment: "Beautiful color and comfortable fabric.", rating: 5 },
      { user: "Kavita", comment: "Good for summer wear.", rating: 4 }
    ],
    url: "product-detail.html?id=womens-002"
  },
  {
    id: "womens-003",
    name: "Women's Purple Oversized T-shirt",
    category: "womens",
    mainImage: "images/photo_19_2025-09-02_19-33-03.jpg",
    images: [
      "images/photo_19_2025-09-02_19-33-03.jpg",
      "images/photo_20_2025-09-02_19-33-03.jpg",
      "images/photo_21_2025-09-02_19-33-03.jpg"
    ],
    description: "Purple oversized comfy t-shirt for all seasons.",
    price: "₹599",
    priceOld: "₹1,599",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    reviews: [
      { user: "Neelam", comment: "Very soft fabric, highly recommend.", rating: 5 },
      { user: "Rekha", comment: "Nice fit but color fades a bit.", rating: 3 }
    ],
    url: "product-detail.html?id=womens-003"
  },
  {
    id: "womens-004",
    name: "Women's Orange Queen Bee Graphic Printed Oversized T-shirt",
    category: "womens",
    mainImage: "images/photo_22_2025-09-02_19-33-03.jpg",
    images: [
      "images/photo_22_2025-09-02_19-33-03.jpg",
      "images/photo_23_2025-09-02_19-33-03.jpg",
      "images/photo_24_2025-09-02_19-33-03.jpg"
    ],
    description: "Orange queen bee graphic printed oversized t-shirt.",
    price: "₹599",
    priceOld: "₹1,599",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    reviews: [
      { user: "Sumita", comment: "Loved the style and fabric.", rating: 5 },
      { user: "Anju", comment: "Good quality but zipper was faulty.", rating: 3 }
    ],
    url: "product-detail.html?id=womens-004"
  }
];
