import express from "express";
import sequelize from "./utils/db.js";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.send("Connected ....");
    })
    .catch((err) => res.send("Error Connection : " + err.message));
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }

// testConnection();
