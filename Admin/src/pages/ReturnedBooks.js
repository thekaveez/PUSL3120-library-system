import React, { useEffect, useState } from "react";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ReturnedBooks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState(null);

  const handleEdit = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
    console.log(`Edit book with ID ${book.id}`);
  };

  const handleDelete = (bookId) => {
    console.log(`Delete book with ID ${bookId}`);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
        <h2>Returned Books</h2>
      </div>
      <div className={"books_table_section"}>
        <table>
          <thead>
            <tr>
              <th className={"col_1"}>Book Name</th>
              <th classN ame={"col_2"}>Member ID</th>
              <th className={"col_3"}>Issued Date</th>
              <th className={"col_4"}>Returned Date</th>
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
                  <td>{book.publishedDate}</td>
                  <td>
                    <br></br>
                    <button
                      className={"btn_books"}
                      onClick={() => handleDelete(book.id)}
                    >
                      {/* <FontAwesomeIcon icon={faTrashAlt} /> */}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReturnedBooks;
