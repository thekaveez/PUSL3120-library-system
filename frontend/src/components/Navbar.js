import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>UniReads</h1>
        </Link>
        <ul className="navs">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/register">Register/Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
