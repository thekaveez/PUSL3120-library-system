const express = require("express");
const cors = require("cors");

const {
  getMember,
  loginMember,
  addMember,
  updateMember,
  // getMemberCount,
} = require("../controllers/memberController");

const router = express.Router();

router.use(cors());

// GET single member
router.get("/:id", getMember);

// router.get("/countMember", getMemberCount);

//login
router.post("/login", loginMember);

// POST members // Signup
router.post("/", addMember);

// UPDATE member
router.patch("/:id", updateMember);

module.exports = router;
