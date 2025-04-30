const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, secret, {
    expiresIn: "7d",
  });
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = { generateToken, verifyToken };
