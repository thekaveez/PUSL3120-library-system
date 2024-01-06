import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const Page1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  //   const bookData = [
  //     {
  //       id: 1,
  //       name: "Book 1",
  //       author: "Author 1",
  //       isbn: "123456789",
  //       addedDate: "2022-01-01",
  //     },
  //     {
  //       id: 2,
  //       name: "Book 2",
  //       author: "Author 2",
  //       isbn: "987654321",
  //       addedDate: "2022-02-01",
  //     },
  //   ];

  const handleEdit = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
    console.log(`Edit book with ID ${book}`);
  };

  const handleDelete = (bookId) => {
    console.log(`Delete book with ID ${bookId}`);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [books, setBooks] = useState(null);
  //   const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books");
        if (!response.ok) {
          throw Error("Failed to fetch books");
        }
        const json = await response.json();
        setBooks(json);
        // setFilterData(json);
      } catch (error) {
        console.error("Error fetching books", error.message);
      }
    };
    fetchBooks();
  }, []);
  //   const handleFilter = (value) => {
  //     const res = filterData.filter((f) =>
  //       f.bookName.toLowerCase().includes(value)
  //     );
  //     setBooks(res);
  //   };

  return (
    <div className={"main_books container_flex_col"}>
      <div className={"books_header"}></div>
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
                      onClick={() => handleDelete(book)}
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
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div>
          <h2>Edit Book</h2>
          {selectedBook && (
            <div>
              <p> Book Name: {selectedBook.name}</p>
              <p>Author: {selectedBook.author}</p>
              <p>ISBN Number: {selectedBook.isbn}</p>
              <p>Added Date: {selectedBook.addedDate}</p>
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

export default Page1;
