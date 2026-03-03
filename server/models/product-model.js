const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  image: String,

  price: Number,
  oldPrice: Number,
  discount: Number,

  rating: {
    type: Number,
    default: 0
  },
  reviews: {
    type: Number,
    default: 0
  },

  stock: Number,
  sold: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", productSchema);