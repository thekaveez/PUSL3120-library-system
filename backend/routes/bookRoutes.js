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
router.get("https://pusl-3120-library-system.vercel.app/", getBooks);

router.get("https://pusl-3120-library-system.vercel.app/bookCount", getBooksCount);

// POST book
router.post("https://pusl-3120-library-system.vercel.app/", addBook);

//GET single book
router.get("https://pusl-3120-library-system.vercel.app/:id", getBook);

//delete book
router.delete("https://pusl-3120-library-system.vercel.app/:id", deleteBook);

module.exports = router;
