import express from "express";
import upload from "../middlewares/multer.js";
import { deleteById, uploadImages } from "../controllers/uploadController.js";
const router = express.Router();

router.post("/", upload.array("images", 3), uploadImages);
router.delete("/:id", deleteById);

export default router;
