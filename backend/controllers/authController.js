// backend/controllers/authController.js
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * Handles new user signup.
 * Hashes user password and saves their profile, returning a JWT.
 */
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter all fields (name, email, password)" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    const savedUser = await newUser.save();

    // Create JWT Token
    const token = jwt.sign(
      { id: savedUser._id },
      process.env.JWT_SECRET || "supersecretkey_beaura",
      { expiresIn: "7d" }
    );

    // Send token and user details back
    res.status(201).json({
      token,
      user: {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        skinType: savedUser.skinType,
        hairType: savedUser.hairType,
        faceType: savedUser.faceType
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Server error during signup: " + err.message });
  }
};

/**
 * Handles user login.
 * Compares passwords and returns a JWT if valid.
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide both email and password" });
    }

    // Check for user existence
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create JWT Token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "supersecretkey_beaura",
      { expiresIn: "7d" }
    );

    // Send token and user details back
    res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        skinType: user.skinType,
        hairType: user.hairType,
        faceType: user.faceType
      }
    });

  } catch (err) {
    res.status(500).json({ message: "Server error during login: " + err.message });
  }
};
