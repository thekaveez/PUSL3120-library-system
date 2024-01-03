const express = require("express");

const router = express.Router();

// GET single member
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single member" });
});

// POST members
router.post("/", (req, res) => {
  res.json({ msg: "POST members" });
});

// UPDATE member
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE member" });
});

module.exports = router;
