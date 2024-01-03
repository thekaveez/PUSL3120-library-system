const express = require("express");
const {
  getMember,
  addMember,
  updateMember,
} = require("../controllers/memberController");

const router = express.Router();

// GET single member
router.get("/:id", getMember);

// POST members
router.post("/", addMember);

// UPDATE member
router.patch("/:id", updateMember);

module.exports = router;
