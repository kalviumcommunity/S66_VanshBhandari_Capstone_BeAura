// backend/routes/recommendRoutes.js
const express = require("express");
const router = express.Router();
const recommendController = require("../controllers/recommendController");

// POST /api/recommend - Accepts skinType, hairType, faceType and returns recommendations
router.post("/", recommendController.getRecommendations);

module.exports = router;
