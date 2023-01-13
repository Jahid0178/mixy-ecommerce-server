const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: {
    type: [],
  },
  amount: {
    type: Number,
  },
  orderBy: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
