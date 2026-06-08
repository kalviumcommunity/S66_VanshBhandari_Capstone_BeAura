// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

// GET /api/user/:id - Fetch user profile for dashboard (Protected)
router.get("/:id", auth, userController.getProfile);

// PUT /api/user/:id - Update user profile fields (Protected)
router.put("/:id", auth, userController.updateProfile);

module.exports = router;
