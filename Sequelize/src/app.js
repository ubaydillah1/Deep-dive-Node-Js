import express from "express";
import sequelize from "./utils/db.js";
import userRoutes from "../routes/userRoutes.js";
import uploadRoutes from "../routes/uploadRoutes.js";

const app = express();
app.use(express.json());
app.use("/assets", express.static("public/images"));

const PORT = 3000;

app.get("/check-connection", (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.send("Connected ....");
    })
    .catch((err) => res.send("Error Connection : " + err.message));
});

app.use("/api", userRoutes);
app.use("/upload", uploadRoutes);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
