require("dotenv").config();
const express = require("express");

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

app.listen(process.env.PORT, () => {
  console.log("listenning on port", process.env.PORT);
});
