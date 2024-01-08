const Book = require("../models/bookModel");
const mongoose = require("mongoose");

// get all books
const getBooks = async (req, res) => {
  try {
    // const memberID = req.member._id; ///
    const books = await Book.find({}).sort({ createdAt: -1 }); ///
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//books count
const getBooksCount = async (req, res) => {
  try {
    const booksCount = await Book.countDocuments({});
    res.status(200).json({ count: booksCount });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// post book
const addBook = async (req, res) => {
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
    // const memberID = req.member._id; ////
    const book = await Book.create({
      bookName,
      author,
      publisher,
      isbn,
      publishedDate,
      language,
      image,
      description,
      // memberID, /// remove
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single book
const getBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such book" });
  }
  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ msg: "Book not found" });
  }
  res.status(200).json(book);
};

//delete a book
const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ msg: " No such a Book" });
  }
  // return res.status(200).json({ msg: "Book deleted successefully" });

  const book = await Book.findByIdAndDelete(id);

  if (!book) {
    return res.status(404).json({ msg: "Book not found" });
  }
  res.status(200).json(book);
};

module.exports = {
  deleteBook,
  getBooksCount,
  getBooks,
  addBook,
  getBook,
};