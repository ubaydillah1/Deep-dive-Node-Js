import imageModel from "../src/models/imageModel.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Mendapatkan __dirname di ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const uploadImages = async (req, res) => {
  try {
    const files = req.files.map((file) => file.filename);

    const imageData = {
      image_one: files[0] || null,
      image_two: files[1] || null,
      image_three: files[2] || null,
    };

    await imageModel.create(imageData);

    res.json({
      message: "Successfully uploaded",
      files: imageData,
    });
  } catch (error) {
    console.error("Error saving to database:", error);
    res.status(500).json({
      message: "Error uploading files",
      error: error.message,
    });
  }
};

export const deleteById = async (req, res) => {
  try {
    const image = await imageModel.findOne({
      where: { id: req.params.id },
    });

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    // Ambil nama gambar yang disimpan di database
    const images = [image.image_one, image.image_two, image.image_three];

    // Hapus gambar dari filesystem jika ada
    images.forEach((imageFile) => {
      if (imageFile) {
        const imagePath = path.join(__dirname, "../public/images", imageFile);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
    });

    // Hapus entri gambar dari database
    await imageModel.destroy({
      where: { id: req.params.id },
    });

    res.json({
      message: "Successfully deleted image",
      data: image,
    });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({
      message: "Error deleting image",
      error: error.message,
    });
  }
};
