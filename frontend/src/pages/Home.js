import { useEffect, useState } from "react";

// components
import HomeBooks from "../components/HomeBooks";
const Home = () => {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();

      if (response.ok) {
        setBooks(json);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="home">
      <div className="allbooks">
        {books && books.map((book) => <HomeBooks key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default Home;
