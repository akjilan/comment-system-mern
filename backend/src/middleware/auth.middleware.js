import jwt from "jsonwebtoken";
import { findUserById } from "../repositories/user.repository.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({ error: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await findUserById(decoded.id);

    if (!user) return res.status(401).json({ error: "User not found" });
    user.password = undefined;
    req.user = user;

    next();
  } catch (error) {
    // console.log(error, "this is error");
    return res.status(401).json({ error: "Invalid token given" });
  }
};
