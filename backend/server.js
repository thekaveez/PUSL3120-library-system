require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./routes/studentRoutes");
const bookRoutes = require("./routes/bookRoutes");
const memberRoutes = require("./routes/memberRoutes");
const issuedbookRoute = require("./routes/issuedbookRoutes");
const returnbookRoute = require("./routes/returnbookRoutes");
const deleteBookRoute = require("./routes/bookRoutes");
const deleteStudentRoute = require("./routes/studentRoutes");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
//delete book
app.use("/api/books", deleteBookRoute);
//delete student
app.use("/api/students", deleteStudentRoute);

app.use("/api/students", studentRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/issuedbooks", issuedbookRoute);
app.use("/api/returnbook", returnbookRoute);

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
