require("dotenv").config();
const express = require("express");

//express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to library System" });
});

app.listen(process.env.PORT, () => {
  console.log("listenning on port", process.env.PORT);
});
