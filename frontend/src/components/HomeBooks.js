import { Link } from "react-router-dom";

const HomeBooks = ({ book, handlePopup }) => {
  return (
    <div className="books">
      <Link onClick={handlePopup}>
        <img src={book.image} alt={book.bookName} />
        <h5>{book.bookName}</h5>
      </Link>
    </div>
  );
};
export default HomeBooks;
