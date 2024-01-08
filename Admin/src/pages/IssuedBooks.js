import React, { useEffect, useState } from "react";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const IssuedBooks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [addNewBookModalIsOpen, setAddNewBookModalIsOpen] = useState(false);
  const [returnBookModalIsOpen, setReturnBookModalIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
    console.log(`Edit book with ID ${book.id}`);
  };

  const handleReturn = (book) => {
    setSelectedBook(book);
    setReturnBookModalIsOpen(true);
    console.log(`Return book with ID ${book.id}`);
  };

  const openAddNewBookModal = () => {
    setAddNewBookModalIsOpen(true);
  };

  const closeAddNewBookModal = () => {
    setAddNewBookModalIsOpen(false);
  };

  // const openReturnBookModal = () => {
  //   setReturnBookModalIsOpen(true);
  // };

  const closeReturnBookModal = () => {
    setReturnBookModalIsOpen(false);
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
      <Button variant="warning">ABC</Button>
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
                    <button
                      className={"btn_books btn_return btn_custom"}
                      onClick={() => handleReturn(book)}
                    >
                      Return
                    </button>
                  </td>
                  <button
                    className={"btn_books btn_add_new_book"}
                    onClick={openAddNewBookModal}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    Issue New Book
                  </button>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Edit Book Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <div>
          {selectedBook && (
            <div>
              <Form className="signup" onSubmit={handleSubmit}>
                <Form.Text className="register">EDIT ISSUED BOOK</Form.Text>
                <Form.Group
                  className="mb-3 firstname"
                  controlId="formBasicFirstName"
                >
                  <Form.Label>Book Name :-</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your First Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Member ID :-</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Your Book ID"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Issued Date :-</Form.Label>
                  <Form.Control type="date" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUniversityID">
                  <Form.Label>Due Date :-</Form.Label>
                  <Form.Control type="date" placeholder="" />
                </Form.Group>
                {/* <Button variant="primary" type="submit" >
          Submit
        </Button> */}

                {/* ... */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <button className={"btn_modal_close"} onClick={closeModal}>
                Close
              </button>
            </div>
          )}
        </div>
      </Modal>

      {/* Add New Book Modal */}
      <Modal
        isOpen={addNewBookModalIsOpen}
        onRequestClose={closeAddNewBookModal}
        ariaHideApp={false}
      >
        <div>
          <Form className="signup" onSubmit={handleSubmit}>
            <Form.Text className="register">EDIT ISSUED BOOK</Form.Text>
            <Form.Group
              className="mb-3 firstname"
              controlId="formBasicFirstName"
            >
              <Form.Label>Book Name :-</Form.Label>
              <Form.Control type="text" placeholder="Enter Your First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Member ID :-</Form.Label>
              <Form.Control type="number" placeholder="Enter Your Book ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Issued Date :-</Form.Label>
              <Form.Control type="date" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUniversityID">
              <Form.Label>Due Date :-</Form.Label>
              <Form.Control type="date" placeholder="" />
            </Form.Group>
            {/* <Button variant="primary" type="submit" >
          Submit
        </Button> */}

            {/* ... */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <button className={"btn_modal_close"} onClick={closeAddNewBookModal}>
            Close
          </button>
        </div>
      </Modal>

      {/* Return Book Modal */}
      <Modal
        isOpen={returnBookModalIsOpen}
        onRequestClose={closeReturnBookModal}
        ariaHideApp={false}
      >
        <div>
          <Form className="signup" onSubmit={handleSubmit}>
            <Form.Text className="register">EDIT ISSUED BOOK</Form.Text>
            <Form.Group
              className="mb-3 firstname"
              controlId="formBasicFirstName"
            >
              <Form.Label>Book Name :-</Form.Label>
              <Form.Control type="text" placeholder="Enter Your First Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Member ID :-</Form.Label>
              <Form.Control type="number" placeholder="Enter Your Book ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Issued Date :-</Form.Label>
              <Form.Control type="date" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUniversityID">
              <Form.Label>Due Date :-</Form.Label>
              <Form.Control type="date" placeholder="" />
            </Form.Group>
            {/* <Button variant="primary" type="submit" >
        Submit
      </Button> */}

            {/* ... */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <button className={"btn_modal_close"} onClick={closeReturnBookModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default IssuedBooks;
