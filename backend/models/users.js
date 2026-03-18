const mongoose = require("mongoose");  // ✅ ADD THIS LINE

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  skinType: String,
  hairType: String,
});

module.exports = mongoose.model("User", userSchema);