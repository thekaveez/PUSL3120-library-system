const express = require("express");
const { addBook, getBook, getBooks } = require("../controllers/bookController");
// const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// router.use(requireAuth);

// GET all books
router.get("/", getBooks);

// POST book
router.post("/", addBook);

//GET single book
router.get("/:id", getBook);

module.exports = router;
