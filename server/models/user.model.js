const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mno: {
    type: Number,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  address: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.insert || mongoose.model("User", userSchema);
module.exports = User;
