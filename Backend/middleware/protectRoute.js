import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(500).json({ error: "error in protect Route " });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      res.status(401).json({ error: "UNauthorized -Invalid Token " });
    }
    const user = await User.findById(decode.userId).select("-password");

    if (!user) {
      res.status(404).json({ error: "User not found" });
    }

    req.user = user; //passing the user info from here to next
    next();
  } catch (error) {
    console.log("erroe in middleware protect Route ", error);
    res.status(500).json({ error: "Internal server error " });
  }
};
export default protectRoute;
