import express from "express";
import MainController from "../controllers/main.controller";

const router = express.Router();

router.get("/", MainController.getAll);

export default router;
