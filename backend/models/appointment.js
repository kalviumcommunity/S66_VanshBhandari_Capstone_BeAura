const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",   // 🔥 RELATION HERE
    required: true
  },
  doctorName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  appointment:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment"
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);