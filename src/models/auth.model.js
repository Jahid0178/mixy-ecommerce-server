const mongoose = require("mongoose");

const avatar =
  "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg";

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required!"],
    },
    email: {
      type: String,
      required: [true, "email is required!"],
    },
    password: {
      type: String,
      required: [true, "password is required!"],
      min: [6, "please! chose password more then 6 charactar"],
      max: [12, "please! chose password lessthan 12 charactar"],
    },
    address: {
      type: String,
      default: "Chittagong,Bangladesh.",
    },

    img: {
      type: String,
      default: avatar,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", authSchema);
module.exports = User;
