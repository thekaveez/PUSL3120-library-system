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
          {selectedBook && (
            <>
              <div className="App">
                <div className="details">
                  <div className="image">
                    <img src={selectedBook.image} alt={selectedBook.bookName} />
                  </div>
                  <div>
                    <h1 className="App-header">{selectedBook.bookName}</h1>
                    <div className="App-book-details">
                      <ul>
                        <li>Author: {selectedBook.author}</li>
                        <li>Publisher: {selectedBook.publisher}</li>
                        <li>Publication Year:{selectedBook.publishedDate}</li>
                        <li>ISBN: {selectedBook.isbn}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="desc">{selectedBook.description}</p>
              </div>
              <div>
                <button className={"btn_modal_close"} onClick={closeModal}>
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Home;
