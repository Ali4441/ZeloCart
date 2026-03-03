const Product = require("./product-model");
const sample = [
  {
    title: "Nike Air Zoom Running Shoes",
    description: "Lightweight running shoes with breathable mesh upper.",
    category: "Footwear",
    image: "/image/shoes1.png",
    price: 2999,
    oldPrice: 3999,
    discount: 25,
    rating: 4.5,
    reviews: 120,
    stock: 15,
    sold: 5
  },
  {
    title: "ASUS FHD Gaming Laptop",
    description: "15.6 inch gaming laptop with RTX graphics and 16GB RAM.",
    category: "Electronics",
    image: "/image/laptop.png",
    price: 65999,
    oldPrice: 72999,
    discount: 10,
    rating: 4.7,
    reviews: 89,
    stock: 8,
    sold: 3
  },
  {
    title: "Apple AirPods Pro",
    description: "Active noise cancellation wireless earbuds.",
    category: "Electronics",
    image: "/image/airpods.png",
    price: 18999,
    oldPrice: 20999,
    discount: 9,
    rating: 4.8,
    reviews: 210,
    stock: 20,
    sold: 12
  },
  {
    title: "Men's Quilted Winter Jacket",
    description: "Warm and stylish winter jacket for men.",
    category: "Clothing",
    image: "/image/jacket.png",
    price: 2499,
    oldPrice: 3499,
    discount: 28,
    rating: 4.3,
    reviews: 45,
    stock: 30,
    sold: 10
  },
  {
    title: "RGB Mechanical Gaming Keyboard",
    description: "Backlit mechanical keyboard with blue switches.",
    category: "Accessories",
    image: "/image/keyboard.png",
    price: 2999,
    oldPrice: 3599,
    discount: 16,
    rating: 4.6,
    reviews: 150,
    stock: 25,
    sold: 18
  },
  {
    title: "HP 24-inch IPS Monitor",
    description: "Full HD IPS display with ultra-slim design.",
    category: "Electronics",
    image: "/image/monitor.png",
    price: 11999,
    oldPrice: 13999,
    discount: 14,
    rating: 4.4,
    reviews: 72,
    stock: 12,
    sold: 6
  }
];



await Product.insertMany(sampleProducts);