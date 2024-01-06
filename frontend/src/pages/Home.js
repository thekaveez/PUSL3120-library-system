import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useAuthContext } from "../hooks/useAuthContext";
// components
import HomeBooks from "../components/HomeBooks";
import SearchBar from "../components/Search";

const Home = () => {
  const [books, setBooks] = useState(null);
  const [filterData, setFilterData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const { member } = useAuthContext();

  const handlePopup = (book) => {
    setSelectedBook(book);
    setModalIsOpen(true);
    console.log(`Edit book with ID ${book}`);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books", {
          headers: {
            Authorization: `Bearer ${member.token}`,
          },
        });
        if (!response.ok) {
          throw Error("Failed to fetch books");
        }
        const json = await response.json();
        setBooks(json);
        setFilterData(json);
      } catch (error) {
        console.error("Error fetching books", error.message);
      }
    };
    if (member) {
      fetchBooks();
    }
  }, [member]);
  const handleFilter = (value) => {
    const res = filterData.filter((f) =>
      f.bookName.toLowerCase().includes(value)
    );
    setBooks(res);
  };
  return (
    <div className="home">
      <SearchBar handleFilter={(e) => handleFilter(e.target.value)} />
      <div className="allbooks">
        {books &&
          books.map((book) => (
            <HomeBooks
              key={book.id}
              book={book}
              handlePopup={() => handlePopup(book)}
            />
          ))}
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

export default Home;
