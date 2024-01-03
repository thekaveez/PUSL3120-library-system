const express = require("express");
const Book = require("../models/bookModel");

const router = express.Router();

// GET all books
router.get("/", (req, res) => {
  res.json({ msg: "GET all books" });
});

// POST book
router.post("/", async (req, res) => {
  const {
    bookName,
    author,
    publisher,
    isbn,
    publishedDate,
    language,
    image,
    description,
  } = req.body;

  try {
    const book = await Book.create({
      bookName,
      author,
      publisher,
      isbn,
      publishedDate,
      language,
      image,
      description,
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//GET single books
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single book" });
});

module.exports = router;
