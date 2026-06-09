// backend/controllers/authController.js
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

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

/**
 * Generates a password reset token and saves it to user record.
 */
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Please provide an email address" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "No user found with this email" });
    }

    // Generate Token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Save token & expiration (1 hour)
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Dev log & Response return for easy demo
    const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;
    console.log(`[PASSWORD RESET LINK]: ${resetUrl}`);

    res.status(200).json({
      message: "Reset link generated successfully",
      resetToken,
      resetUrl // returning it so frontend can link it directly in dev/demo mode
    });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};

/**
 * Resets user password using the token.
 */
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: "Please enter a new password" });
    }

    // Find user with valid token and not expired
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired password reset token" });
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.password = hashedPassword;
    user.resetPasswordToken = "";
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
};
