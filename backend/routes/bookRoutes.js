const express = require("express");
const {
  addBook,
  getBook,
  getBooks,
  getBooksCount,
} = require("../controllers/bookController");
const { deleteBook } = require("../controllers/bookController");
// const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// router.use(requireAuth);

// GET all books
router.get("/", getBooks);

router.get("/bookCount", getBooksCount);

// POST book
router.post("/", addBook);

//GET single book
router.get("/:id", getBook);

//delete book
router.delete("/:id", deleteBook);

module.exports = router;
