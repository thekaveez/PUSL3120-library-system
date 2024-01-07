const express = require("express");
const { getReturnBook, addReturnBook } = require ("../controllers/returnbookController");

const router = express.Router();

//get all return books
router.get("/", getReturnBook);

//post all return books
router.post("/", addReturnBook);

module.exports = router;