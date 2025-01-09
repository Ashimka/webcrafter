import express from "express";

import mainRoute from "./mainRoute";
import adminRoute from "./adminRoute";
import AuthController from "../controllers/auth.controller";

const router = express.Router();

router.use("/", mainRoute);
router.use("/admink", adminRoute);
router.post("/login", AuthController.login);

export default router;
