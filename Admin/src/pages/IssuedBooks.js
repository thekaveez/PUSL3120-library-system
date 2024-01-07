import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const IssuedBooks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEdit = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
    console.log(`Edit book with ID ${book.id}`);
  };

  // const handleDelete = (bookId) => {
  //   console.log(`Delete book with ID ${bookId}`);
  // };

  const handleReturn = (book) => {
    console.log(`Return book with ID ${book.id}`);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/issuedbooks");
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
      <div className={"books_header"}></div>
      <div className={"books_table_section"}>
        <table>
          <thead>
            <tr>
              <th className={"col_1"}>Book Name</th>
              <th className={"col_2"}>Member ID</th>
              <th className={"col_3"}>Issued Date</th>
              <th className={"col_4"}>Due Date</th>
              <th className={"col_5"}></th>
              <th className={"col_6"}></th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => (
                <tr key={book.id}>
                  <td>{book.bookName}</td>
                  <td>{book.memberID}</td>
                  <td>{book.issuedDate}</td>
                  <td>{book.dueDate}</td>
                  <td>
                    <button
                      className={"btn_books"}
                      onClick={() => handleEdit(book)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </td>
                  <td>
                    {/* Return button */}
                    <button
                      className={"btn_books btn_return"}
                      onClick={() => handleReturn(book)}
                    >
                      Return
                    </button>
                  </td>
                  {/* <td>
                    <button className={"btn_books"} onClick={() => handleDelete(book.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalIsOpen}
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
    </div>
  );
};

export default IssuedBooks;
