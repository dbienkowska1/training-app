import jwt from "jsonwebtoken";
import User from "../models/user.js";

const verifyToken = async (req, res) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  try {
    const decryptedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decryptedToken.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ username: user.username });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export { verifyToken };
