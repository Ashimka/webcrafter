import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const checkAdminRole = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.AUTH;

  if (!token) {
    res.status(401).json({ message: "Не авторизован" });
    return;
  }

  try {
    const secret = process.env.TOKEN_SECRET || "asdfreq_secret*456321";

    const decoded = jwt.verify(token, secret) as JwtPayload;

    if (decoded.role !== "ADMIN") {
      res.status(403).json({ message: "Нет доступа" });
      return;
    }
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token." });
    return;
  }
};

export default checkAdminRole;
