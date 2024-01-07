const express = require("express");

const { 
    getIssuedbook,
     addIssuedbook, 
     getSingleissuedbook,
      updateIssuedbook
} = require("../controllers/issuedbookController");

const router = express.Router();

//get all issued book
router.get("/", getIssuedbook);

//post issued book
router.post("/", addIssuedbook);

//get a single issued book
router.get("/:id", getSingleissuedbook);

//update issued book
router.patch("/:id", updateIssuedbook);

module.exports = router;

