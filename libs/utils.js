import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  try {
    const token = jwt.sign(
      { id: userId },                // payload
      process.env.JWT_SECRET,        // secret key
      { expiresIn: "7d" }            // expiry
    );

    return token;
  } catch (error) {
    console.log(error.message);
  }
};