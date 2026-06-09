// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// POST /api/auth/signup - Register a new user
router.post("/signup", authController.signup);

// POST /api/auth/login - Login a user and retrieve a JWT
router.post("/login", authController.login);

// POST /api/auth/forgot-password - Generate password reset link
router.post("/forgot-password", authController.forgotPassword);

// POST /api/auth/reset-password/:token - Reset user password using token
router.post("/reset-password/:token", authController.resetPassword);

module.exports = router;
