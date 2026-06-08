// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST /api/auth/signup - Register a new user
router.post("/signup", authController.signup);

// POST /api/auth/login - Login a user and retrieve a JWT
router.post("/login", authController.login);

module.exports = router;
