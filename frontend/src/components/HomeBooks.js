import { Link } from "react-router-dom";

const HomeBooks = ({ book }) => {
  return (
    <div className="books">
      <Link to="/book">
        <img src={book.image} alt={book.bookName} />
        <h5>{book.bookName}</h5>
      </Link>
    </div>
  );
};
export default HomeBooks;
