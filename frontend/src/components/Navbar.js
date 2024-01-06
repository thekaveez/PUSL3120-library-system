import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const NavbarComponent = () => {
  const { logout } = useLogout();
  const { member } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  console.log("Member:", member);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="nav-brand" as={Link} to={"/"}>
            UniReads
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="nav-links" as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link className="nav-links" as={Link} to={"/about"}>
              About Us
            </Nav.Link>
            <Nav.Link className="nav-links" as={Link} to={"/contact"}>
              Contact Us
            </Nav.Link>

            {member && (
              <>
                <Nav.Link
                  className="nav-links"
                  as={Link}
                  to={`/profile/${member._id}`}
                >
                  {member.email}
                </Nav.Link>
                <Nav.Link>
                  <button
                    className="btn btn-outline-success btnlogout"
                    onClick={handleClick}
                  >
                    Log Out
                  </button>
                </Nav.Link>
              </>
            )}
            {!member && (
              <Nav.Link className="nav-links" as={Link} to={"/login"}>
                Register/Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavbarComponent;
