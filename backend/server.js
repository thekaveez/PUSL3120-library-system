require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const bookRoutes = require("./routes/bookRoutes");
const memberRoutes = require("./routes/memberRoutes");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/books", bookRoutes);
app.use("/api/members", memberRoutes);

//connect to mongodb & listen for requests
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db... & listenning on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
