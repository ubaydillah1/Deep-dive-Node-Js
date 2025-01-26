import express from "express";
import session from "express-session";

const app = express();

app.use(
  session({
    secret: "5c4fa285-028f-4309-b5cb-85ac32ae7667",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: "6000" },
  })
);

app.get("/", (req, res) => {
  req.session.isAuth = true;
  console.log(req.session);
  console.log(req.session.id);
  res.send("<h1>Home Page</h1>");
});

app.get("*", (req, res) => {
  res.json({
    message: "Connection success",
  });
});

app.listen(3000);
