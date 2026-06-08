// backend/models/users.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  skinType: {
    type: String,
    default: ""
  },
  hairType: {
    type: String,
    default: ""
  },
  faceType: {
    type: String,
    default: ""
  },
  appointment: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment"
  }]
});

module.exports = mongoose.model("User", userSchema);
