import User from "../Models/User.js";
import jwt from "jsonwebtoken";
//  middleware to protect route
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.header.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).selected("-password");

    if (!user) return res.json({ success: false, message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// Controller to check if user is authenticated

export const checkAuth =(req, res)=>{
   res.json({success: true, user: req.user});
}
