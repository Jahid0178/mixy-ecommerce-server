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
      min: [6, "please! chose password morethan 6 charactar"],
      max: [12, "please! chose password lessthan 12 charactar"],
    },
    img: {
      type: String,
      default: avatar,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", authSchema);
module.exports = User;
