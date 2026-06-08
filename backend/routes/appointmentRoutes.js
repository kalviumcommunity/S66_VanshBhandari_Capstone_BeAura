// backend/routes/appointmentRoutes.js
const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
const auth = require("../middleware/auth");

// POST /api/appointments/book - Book a new appointment (Protected)
router.post("/book", auth, appointmentController.book);

// GET /api/appointments/:userId - Retrieve appointments for a specific user (Protected)
router.get("/:userId", auth, appointmentController.getUserAppointments);

module.exports = router;
