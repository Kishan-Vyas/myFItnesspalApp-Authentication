const SECRET_KEY = "secret";
const jwt = require("jsonwebtoken")

//! Middleware to protect other routes
function authenticateToken(req, res, next) {
    let token = req.headers["authorization"];
    token = token.replace("Bearer ", "");
    if (!token) return res.status(401).json({ message: "Access Denied" });
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid Token" });
      req.user = user;
      next();
    });
  }

  module.exports = {authenticateToken}