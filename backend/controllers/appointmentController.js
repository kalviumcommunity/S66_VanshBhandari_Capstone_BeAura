// backend/controllers/appointmentController.js
const Appointment = require("../models/appointment");
const User = require("../models/users");
const mongoose = require("mongoose");

// Mapping doctorId from frontend to doctorName
const DOCTOR_MAP = {
  1: "Dr. Julian Vance",
  2: "Dr. Elena Rossi"
};

/**
 * Books a new appointment.
 * Validates the user, resolves doctor details, saves the appointment,
 * and pushes the reference into the user's appointment array.
 */
exports.book = async (req, res) => {
  try {
    const { doctorId, date, reason } = req.body;
    
    // User can be extracted from JWT (req.user) or from req.body (fallback)
    let userId = req.user ? req.user.id : req.body.user;

    // Validate inputs
    if (!userId || userId === "anonymous") {
      return res.status(400).json({ message: "A logged-in user is required to book an appointment" });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID structure" });
    }

    if (!date) {
      return res.status(400).json({ message: "Date is required" });
    }

    // Verify user exists in database
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    // Resolve doctorName from doctorId
    const doctorName = DOCTOR_MAP[doctorId] || req.body.doctorName || "BeAura Dermatologist";

    // Create and save appointment
    const newAppointment = new Appointment({
      user: userId,
      doctorName,
      date,
      reason: reason || ""
    });

    const savedAppointment = await newAppointment.save();

    // Link the appointment back to the User model (updates user's appointment list)
    await User.findByIdAndUpdate(userId, {
      $push: { appointment: savedAppointment._id }
    });

    res.status(201).json({
      message: "Appointment booked successfully!",
      appointment: savedAppointment
    });

  } catch (err) {
    res.status(500).json({ message: "Server error during booking: " + err.message });
  }
};

/**
 * Retrieves all appointments for a specific user.
 * Populates user details.
 */
exports.getUserAppointments = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const appointments = await Appointment.find({ user: userId }).populate("user", "name email skinType hairType faceType");
    res.status(200).json(appointments);

  } catch (err) {
    res.status(500).json({ message: "Server error retrieving appointments: " + err.message });
  }
};
