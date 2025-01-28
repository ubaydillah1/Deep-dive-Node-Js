import express from "express";

const app = express();

app.use(express.json());

app.get("/vinaudit", (req, res) => {
  res.json({
    message: "Succesfull",
  });
});

app.get("/", (req, res) => {
  res.json({
    message: "Connection Success",
  });
});

app.listen(3000);
