const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  skinType: String,
  hairType: String,
});

module.exports = mongoose.model("User", userSchema);