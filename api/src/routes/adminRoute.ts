import express from "express";

import MainController from "../controllers/main.controller";
import AuthController from "../controllers/auth.controller";
import HeroController from "../controllers/hero.controller";
import FeatureController from "../controllers/feature.controller";

import checkAdminRole from "../middleware/authMiddleware";

import uploadFile from "../middleware/uploadMiddleware";
import fileController from "../controllers/file.controller";

const router = express.Router();

router.get("/", MainController.getAll);

router.post("/register", AuthController.create);
router.post("/logout", AuthController.logout);

router
  .post("/hero", checkAdminRole, HeroController.create)
  .patch("/hero/:id", checkAdminRole, HeroController.update);

router.post("/feature", checkAdminRole, FeatureController.create);
router.patch("/feature/:id", checkAdminRole, FeatureController.update);

router
  .post(
    "/upload",
    checkAdminRole,
    uploadFile.single("image"),
    fileController.uploadImage
  )
  .delete("/upload/:name", checkAdminRole, fileController.deleteFile);

export default router;
