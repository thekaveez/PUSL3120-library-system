const express = require("express");

const {
  addIssuedbook,
  getSingleissuedbook,
  updateIssuedbook,
  getIssuedCount,
  getIssuedbook,
} = require("../controllers/issuedbookController");

const router = express.Router();

//get all issued book
router.get("/issuedCount", getIssuedCount);

router.get("/", getIssuedbook);

//post issued book
router.post("/", addIssuedbook);

//get a single issued book
router.get("/:id", getSingleissuedbook);

//update issued book
router.patch("/:id", updateIssuedbook);

module.exports = router;
