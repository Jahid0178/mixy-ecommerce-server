const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  price: {
    type: Number,
    required: [true, "price is required"],
  },
  rating: {
    type: Number,
    required: [true, "rating is required"],
  },
  stock: {
    type: Number,
    required: [true, "stock is required"],
  },
  brand: {
    type: String,
    required: [true, "brand is required"],
  },
  category: {
    type: String,
    required: [true, "category is required"],
  },
  thumbnail: {
    type: String,
    required: [true, "thumbnail is required"],
  },
  images: {
    type: [String],
    required: [true, "images is required"],
  },
});

const Products = mongoose.model("Products", productsSchema);
module.exports = Products;
