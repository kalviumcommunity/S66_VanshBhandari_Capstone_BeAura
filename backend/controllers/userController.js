// backend/controllers/userController.js
const User = require("../models/users");
const mongoose = require("mongoose");

/**
 * Retrieves user profile data by user ID.
 * Excludes the password field for security.
 */
exports.getProfile = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    const user = await User.findById(id).select("-password").populate("appointment");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);

  } catch (err) {
    res.status(500).json({ message: "Server error retrieving profile: " + err.message });
  }
};

/**
 * Updates user profile data (e.g. skinType, hairType, faceType, name) by user ID.
 */
exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    // Extract only the fields we want to allow updates for to avoid security risks
    const { name, skinType, hairType, faceType } = req.body;
    const updates = {};
    if (name !== undefined) updates.name = name;
    if (skinType !== undefined) updates.skinType = skinType;
    if (hairType !== undefined) updates.hairType = hairType;
    if (faceType !== undefined) updates.faceType = faceType;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      updates,
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);

  } catch (err) {
    res.status(500).json({ message: "Server error updating profile: " + err.message });
  }
};
