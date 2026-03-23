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
  skinType: {
    type: String
  },
  
  appointment: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "Appointment"
}]
});

module.exports = mongoose.model("User", userSchema);