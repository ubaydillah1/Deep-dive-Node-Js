import express from "express";
import sequelize from "./utils/db.js";
import User from "./models/userModel.js";

const app = express();

const PORT = 3000;

app.get("/check-connection", (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.send("Connected ....");
    })
    .catch((err) => res.send("Error Connection : " + err.message));
});

app.get("/", async (req, res) => {
  try {
    const data = await User.findAll();
    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/insert", async (req, res) => {
  try {
    const data = await User.create({
      name: "user2",
      email: "user2@gmail.com",
      age: 10,
    });

    res.send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
