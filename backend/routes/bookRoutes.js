const express = require("express");

const router = express.Router();

// GET all books
router.get("/", (req, res) => {
  res.json({ msg: "GET all books" });
});

//GET single books
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single book" });
});

module.exports = router;
