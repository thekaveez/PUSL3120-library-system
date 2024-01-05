const express = require("express");
const { addBook, getBook, getBooks } = require("../controllers/bookController");

const router = express.Router();

// GET all books
router.get("/", getBooks);

// POST book
router.post("/", addBook);

//GET single book
router.get("/:id", getBook);

module.exports = router;
