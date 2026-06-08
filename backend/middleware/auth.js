// backend/middleware/auth.js
const jwt = require("jsonwebtoken");

/**
 * Middleware to verify JWT token.
 * Extracts the token from the Authorization header, verifies it,
 * and attaches the decoded user payload to the request object.
 */
const authMiddleware = (req, res, next) => {
  // Get token from header
  const authHeader = req.header("Authorization");
  
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided, authorization denied" });
  }

  // Expecting header format: Bearer <token>
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ message: "Token format is invalid. Use 'Bearer <token>'" });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecretkey_beaura");
    req.user = decoded; // Contains { id: user._id }
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
