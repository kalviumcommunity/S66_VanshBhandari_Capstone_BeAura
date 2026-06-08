// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Enable CORS for all origins (allows local localhost and deployed Netlify sites to connect)
app.use(cors());

// Express built-in middleware to parse JSON bodies
app.use(express.json());

// Import all route modules
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const recommendRoutes = require("./routes/recommendRoutes");
const userRoutes = require("./routes/userRoutes");

// Mount the API routes
// 1. Auth routes (signup, login)
app.use("/api/auth", authRoutes);

// 2. Appointment routes (booking, fetching user appointments)
app.use("/api/appointments", appointmentRoutes);

// 3. Product recommendation routes (returns matched products)
app.use("/api/recommend", recommendRoutes);

// 4. User profile routes (dashboard data retrieve/update)
app.use("/api/user", userRoutes);

// Basic health check route
app.get("/", (req, res) => {
  res.send("BeAura API is running smoothly!");
});

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("Database connection error: ", err));

// Start the server on port 5000
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;