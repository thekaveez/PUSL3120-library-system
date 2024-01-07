import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddNewBookModal = ({ isOpen, closeModal }) => {
  // Add your form logic for adding a new book here
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <div>
        <h2>Add New Book</h2>

        <button className={"btn_modal_close"} onClick={closeModal}>
          Close
        </button>
      </div>
    </Modal>
  );
};

const Books = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [addNewBookModalIsOpen, setAddNewBookModalIsOpen] = useState(false);

  const handleEdit = (book) => {
    setSelectedBook(book);
    setEditModalIsOpen(true);
  };

  const handleDelete = (bookId) => {
    console.log(`Delete book with ID ${bookId}`);
  };

  const closeModal = () => {
    setEditModalIsOpen(false);
    setAddNewBookModalIsOpen(false);
  };

  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books");
        if (!response.ok) {
          throw Error("Failed to fetch books");
        }
        const json = await response.json();
        setBooks(json);
      } catch (error) {
        console.error("Error fetching books", error.message);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className={"main_books container_flex_col"}>
      <div className={"books_header"}>
        <button
          className={"btn_books btn_add_new_book"}
          onClick={() => setAddNewBookModalIsOpen(true)}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add New Book
        </button>
      </div>
      <div className={"books_table_section"}>
        <table>
          <thead>
            <tr>
              <th className={"col_1"}>Book Name</th>
              <th className={"col_2"}>Author</th>
              <th className={"col_3"}>ISBN Number</th>
              <th className={"col_4"}>Added Date</th>
              <th className={"col_5"}></th>
              <th className={"col_6"}></th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => (
                <tr key={book.id}>
                  <td>{book.bookName}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>{book.publishedDate}</td>
                  <td>
                    <button
                      className={"btn_books"}
                      onClick={() => handleEdit(book)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </td>
                  <td>
                    <button
                      className={"btn_books"}
                      onClick={() => handleDelete(book.id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div>
          <h2>Edit Book</h2>
          {selectedBook && (
            <div>
              <p> Book Name: {selectedBook.bookName}</p>
              <p>Author: {selectedBook.author}</p>
              <p>ISBN Number: {selectedBook.isbn}</p>
              <p>Added Date: {selectedBook.publishedDate}</p>
              <button className={"btn_modal_close"} onClick={closeModal}>
                Close
              </button>
            </div>
          )}
        </div>
      </Modal>
      <AddNewBookModal
        isOpen={addNewBookModalIsOpen}
        closeModal={() => setAddNewBookModalIsOpen(false)}
      />
    </div>
  );
};

export default Books;
