import { useEffect, useState } from "react";

// components
import HomeBooks from "../components/HomeBooks";
import SearchBar from "../components/Search";

const Home = () => {
  const [books, setBooks] = useState(null);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books");
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
    fetchBooks();
  }, []);
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
        {books && books.map((book) => <HomeBooks key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default Home;
